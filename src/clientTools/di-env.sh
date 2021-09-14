#!/bin/bash
#
# This script creates a running local Cloud Agent development environment 
#
# Usage:

function usage() {
  cat <<-EOF

  usage: $0 [command] [options]

  Commands:

  up - Create a local Decentralized Identity development environment by 
       starting the VON Distributed Ledger, a tails file server to support revocable 
       credential functionality and the ACA-py Cloud Agent inside docker containers

       start options :
         -s <32 byte seed> : Use the specified 32 bytes as the seed for the wallets public DID.
            There is NO default, for security reasons it must be supplied either as an
            arguement or via an 'endorserSeed' field added to the config file.
         -g <genesis file url> : Pull the ledger genesis file from the specified url. Overrides
            a url specified in the 'ledgerGenesisURL' field of the config file. If neither
            present, defaults to the URL to pull a genesis file from a locally running VON Indy
            Ledger.
         -e <agent endpoint> : Specifies the endpoint to put into DIDDocs to inform
            other agents where they should send messages destined for this agent.
            Specify a full endpoint URL (e.g. http://host:port). Overrides
            a url specified in the 'acapyClientEndpoint' field of the config file. If neither
            present, defaults to the localhost url of the running docker image. Particularly 
            useful when connections from agents need to pass through a NAT (i.e or ngrok) to reach
            this agent. 
         -c <config file path> : Use a custom configuration file rather than the default acapy.json. 
            This allows changing various parameters so that multiple agents can be run
            on a single machine (NOTE: must provide an absolute path).
         -l : DO NOT Start the VON Indy Decentralized Ledger before the aca-py Agent.
            This is useful if you will be using a public ledger URL via -g
         -f : Force remove the existing runtime environment before starting which will
            cause new VON repository versions to be pulled. 
         -v : Set the logging level for ACA-py and the tails file server (use: debug, info, warning, error).  
            Log output can be seen using the 'yarn di-env logs' command
  
  down - Stop running instance of ACA-py Agent, tails file server, and VON Distributed Ledger
         destroying the contents of local Ledger and the Cloud Agent Wallet.
 
         down options :
         -l : DO NOT stop or destroy the VON Indy Decentralized Ledger contents 

  start- Restart a pre-existing environment that was paused via the `stop` command.
         This allows existing ledger and wallet data to be maintained between 
         development sessions whilst allowing the host resources to be freed up
         (i.e the docker containers remain in tact after a `stop` command).

         start options :
         -l : DO NOT Start the VON Indy Decentralized Ledger before the aca-py Agent.
            This is useful if you are using a public ledger URL via -g

  stop - Stop running instance of ACA-py Agent and VON Distributed Ledger
         leaving the contents of the local Ledger and Wallet intact so that it
         can be resumed later using the `start` command

         stop options :
         -l : DO NOT stop the VON Indy Decentralized Ledger 

  logs - Watch and output log information from the ACA-py agent and the tails
         file server. An appropriate log level needs to have been set when
         the `up` command was issued using the `-v` switch. Use Ctrl-c to exit
         log monitoring.
EOF
exit 1
}
#
##########################################################################################

##########################################################################################
# Check Programs needed are installed
##########################################################################################

type docker-compose >/dev/null 2>&1 || {
  echo >&2 "docker-compose is required but is not installed. Aborting."
  exit 1
}

type curl >/dev/null 2>&1 || {
  echo >&2 "curl is required to set endorser DID but is not installed. Aborting."
  exit 1
}

##########################################################################################
# Global Defaults and Constants
##########################################################################################
# Contorted way to ensure we get the working directory that this file lives in
# even when it is run via a symlink.  Currently only tested on MAC OS
if [[ -L ${0} ]]; then
  REAL_PWD=$( cd "$(dirname ${0})"; cd "$(dirname $(readlink ${0}))" >/dev/null 2>&1 ; pwd -P )
else
  REAL_PWD=$( cd "$(dirname ${0})" >/dev/null 2>&1 ; pwd -P )
fi
# Make sure everything is done starting in our commands home directory
cd ${REAL_PWD}
ROOT_DIR="${REAL_PWD}/.."
DEVEL_DIR="${ROOT_DIR}/devel"

CLOUD_AGENT_CONFIG_FILE="${ROOT_DIR}/bin/acapy.json"

DOCKER_HOST_IP=`docker run --rm --net=host eclipse/che-ip`

VON_SRC_DIR="${DEVEL_DIR}/von-network"
VON_WEBSERVER_EXTERNAL_PORT="9000"
# NOTE: Depending on whether we are running in a localhost environment or
# something like the gitlab docker in docker changes how the
# host address has to be determined. 
VON_WEBSERVER_DOCKER_HOST=${VON_WEBSERVER_DOCKER_HOST:-localhost}
CLOUD_AGENT_DOCKER_HOST=${CLOUD_AGENT_DOCKER_HOST:-localhost}

DOCKER_PROJECT_NAME='cloud-agency'


# Saves a set of commands to execute on abort failures
export CLEANUP_CMDS=()

##########################################################################################
# Functions
##########################################################################################

# Get the version defaults for VON network
source ./versions.sh

# pull in common functions
source ./common-functions.sh

# Read configuration file options and export them to the global space
# $1 : The config file location to read
function exportConfigOptions() {
  local configFile=${1}

  if [ ! -f ${configFile} ]; then
    echo "Missing configuration file ${configFile}"
    exit -1
  fi
  tailsServerImageLocation=$(getJSONFieldValue "tailsServerImageLocation" ${configFile})
  export TAILS_SERVER_DOCKER_IMAGE=$(cut -d':' -f1 <<<${tailsServerImageLocation}) 
  export TAILS_SERVER_DOCKER_TAG=$(cut -d':' -f2 <<<${tailsServerImageLocation}) 
  export TAILS_SERVER_PORT=6543
  export TAILS_SERVER_INTERNAL_URL="http://tails-server:${TAILS_SERVER_PORT}"

  cloudAgentImageLocation=$(getJSONFieldValue "acapyImageLocation" ${configFile})
  export CLOUD_AGENT_DOCKER_IMAGE=$(cut -d':' -f1 <<<${cloudAgentImageLocation}) 
  export CLOUD_AGENT_DOCKER_TAG=$(cut -d':' -f2 <<<${cloudAgentImageLocation}) 

  # Get the parameters for talking to the Agent from the UI
  agentURI=$(getJSONFieldValue "acapyAdminUri" ${configFile})
  export CLOUD_AGENT_ADMIN_PORT=$(cut -d':' -f3 <<<${agentURI}) 

  # Get the parameters for other agents to talk to us
  export CLOUD_AGENT_INBOUND_PORT=$(getJSONFieldValue "acapyInboundPort" ${configFile})

  # Specify a full endpoint (e.g. http://host:port).  This is used to override 
  # the local host information when creating invitations. Particularly needed
  # when connections from Clients need to pass through a NAT to reach 
  # this agent.
  if [ ${clientEndpointOption} ]; then
    # Command switch overrides all
    CLOUD_AGENT_ENDPOINT=${clientEndpointOption}
  else
    CLOUD_AGENT_ENDPOINT=$(getJSONFieldValue "acapyClientEndpoint" ${configFile})
    if [ ! ${clientEndpoint} ]; then
      # Fall back to the default endpoint for only localhost processes to access
      CLOUD_AGENT_ENDPOINT="http://${DOCKER_HOST_IP}:${CLOUD_AGENT_INBOUND_PORT}"
    fi
  fi
  # make the agent endpoint visible to compose 
  export CLOUD_AGENT_ENDPOINT

  # Determine the URL to pull the ledger genesis transaction file from.
  # Command option overides configfile with overrides default of localhost VON ledger
  if [ ${ledgerGenesisURLOption} ]; then
    # Command switch overrides all
    LEDGER_GENESIS_URL=${ledgerGenesisURLOption}
  else
    LEDGER_GENESIS_URL=$(getJSONFieldValue "ledgerGenesisURL" ${configFile})
    if [ ! ${ledgerGenesisURL} ]; then
      # Fall back to the default endpoint for running a local docker ledger
      VON_WEBSERVER_INTERNAL_URL="http://von_webserver_1:8000"
      LEDGER_GENESIS_URL="${VON_WEBSERVER_INTERNAL_URL}/genesis"
    fi
  fi
  # make the leder visible to compose
  export VON_WEBSERVER_INTERNAL_URL
  export LEDGER_GENESIS_URL

  # Determine the seed to use for creating the wallets public DID.
  # For VON localhost ledgers we will create the DID as part of startup but
  # for public ledgers creating the DID will need to be done out of band 
  # with whatever mechanism the ledger itself provides. 
  if [ ${endorserDIDSeedOption} ]; then
    # Command switch overrides all
    CLOUD_AGENT_ENDORSER_SEED=${endorserDIDSeedOption}
  else
    CLOUD_AGENT_ENDORSER_SEED=$(getJSONFieldValue "endorserSeed" ${configFile})
  fi
  export CLOUD_AGENT_ENDORSER_SEED
}

# Bring up the cloud-agent and the tails-server containers.
# We do this in two stages so that we can support both a Local VON Ledger
# and an external public ledger. 
# 1) Configure the containers but don't start them as the cloud-agent
#    would immediately try and connect to the ledger and fail
# 2) Attach the containers to the von_von network if that has been requested
#    otherwise they must be using an external public ledger so no attach 
#    required.
# 3) Start the containers to complete the bringup of the agent
#
# $1 : Indication on whether to use the local VON Ledger
function executeACAPyStartup() {
  local usingVonLedger=${1}

  docker-compose -f ${REAL_PWD}/docker-compose-devel.yml -p ${DOCKER_PROJECT_NAME} up --no-start
  # ACAPy now has to be added to cleanup steps if we exit with error
  CLEANUP_CMDS=("docker-compose -f ${REAL_PWD}/docker-compose-devel.yml down" "${CLEANUP_CMDS[@]}")

  if [[ ${usingVonLedger} = true ]]; then
    docker network connect von_von cloud-agent
    docker network connect von_von tails-server
  fi

  docker-compose -f ${REAL_PWD}/docker-compose-devel.yml -p ${DOCKER_PROJECT_NAME} start

  waitActiveWebInterface "http://${CLOUD_AGENT_DOCKER_HOST}:${CLOUD_AGENT_ADMIN_PORT}" 20
  if [ $? != 0 ] ; then
    printMilestone "ABORTING : Cloud Agent failed to come active please check start parameters and try again"
    exit -1
  fi

  printMilestone "Cloud Agent Admin interface active"
}


##########################################################################################
# MAIN LINE 
##########################################################################################

# Make sure we execute saved tidyup commands on exception exits
trap cleanupHandler EXIT

# Support start, non-destructive stop and destructuve down commands
subCommand=$1
shift || usage; 

case "${subCommand}" in
  up)
    startVonLedger=true;

    # Up comes with several options on how to construct the environment
    while getopts ':flc:e:g:s:v:' option; do
      case ${option} in
        f) flushOption=true ;;
        l) startVonLedger=false ;;
        c) configFileOption=${OPTARG} ;;
        e) clientEndpointOption=${OPTARG} ;;
        g) ledgerGenesisURLOption=${OPTARG} ;;
        s) endorserDIDSeedOption=${OPTARG} ;;
        v) export LOG_LEVEL=${OPTARG} ;;
        \?) usage; 
      esac
    done
    # Remove processed options
    shift $((OPTIND -1))

    # Read any config file specified and export to global
    # space 
    if [ ${configFileOption} ]; then
      exportConfigOptions ${configFileOption}
    else
      exportConfigOptions ${CLOUD_AGENT_CONFIG_FILE}
    fi

    if [[ ${#CLOUD_AGENT_ENDORSER_SEED} != 32 ]]; then
        echo "Must specify a 32 byte seed to generate the wallet DID either via -s option or via ${configFile} 'endorserSeed' element"
        exit -1
    fi

    # Setup the devel directory structure if it doesn't
    # exist or they want a completely clean start
    if [ ${flushOption} ] || [ ! -d "${DEVEL_DIR}"  ]; then
      runEval "rm -rf ${DEVEL_DIR}"
      runEval "mkdir -p ${DEVEL_DIR}"
    fi

    # Bring it all up to a running state
    cd ${DEVEL_DIR}
    if [[ ${startVonLedger} = true ]]; then
      buildVON ${VON_SRC_DIR} ${VON_GIT_REPO_DEFAULT} ${VON_GIT_VERSION_DEFAULT} ${VON_GIT_BRANCH_DEFAULT}
      CLEANUP_CMDS=("destroyVONNetwork  ${VON_SRC_DIR}" "${CLEANUP_CMDS[@]}")
      # Start the ledger with a Transaction Authors Agreement
      # requirement since all public Indy ledgers seem to have this enabled.
      runVONNetwork ${VON_SRC_DIR} ${VON_WEBSERVER_DOCKER_HOST} ${VON_WEBSERVER_EXTERNAL_PORT} "--taa-sample"
      createVONEndorserDID ${VON_WEBSERVER_DOCKER_HOST} ${VON_WEBSERVER_EXTERNAL_PORT} ${CLOUD_AGENT_ENDORSER_SEED}
    fi
    executeACAPyStartup ${startVonLedger}
    ;;
  down)
    leaveVonLedger=false;

    while getopts ':l' option; do
      case ${option} in
        l) leaveVonLedger=true ;;
        \?) usage; 
      esac
    done
    # Remove processed options
    shift $((OPTIND -1))
    docker-compose -f ${REAL_PWD}/docker-compose-devel.yml -p ${DOCKER_PROJECT_NAME} down
    if [[ ${leaveVonLedger} = false ]]; then
      destroyVONNetwork ${VON_SRC_DIR}
    fi
    ;;
  start)
    # Restart existing containers that have been previously stopped 
    # without losing state.
    startVonLedger=true;
    while getopts ':l' option; do
      case ${option} in
        l) startVonLedger=false ;;
        \?) usage; 
      esac
    done
    # Remove processed options
    shift $((OPTIND -1))

    cd ${DEVEL_DIR}
    if [[ ${startVonLedger} = true ]]; then
      CLEANUP_CMDS=("destroyVONNetwork  ${VON_SRC_DIR}" "${CLEANUP_CMDS[@]}")
      # Start the ledger with a Transaction Authors Agreement
      # requirement since all public Indy ledgers seem to have this enabled.
      runVONNetwork ${VON_SRC_DIR} ${VON_WEBSERVER_DOCKER_HOST} ${VON_WEBSERVER_EXTERNAL_PORT} "--taa-sample"
    fi
    docker-compose  -f ${REAL_PWD}/docker-compose-devel.yml -p ${DOCKER_PROJECT_NAME} start 
    ;;
  stop)
    leaveVonLedger=false;
     
    while getopts ':l' option; do
      case ${option} in
        l) leaveVonLedger=true ;;
        \?) usage; 
      esac
    done
    # Remove processed options
    shift $((OPTIND -1))
    docker-compose -f ${REAL_PWD}/docker-compose-devel.yml -p ${DOCKER_PROJECT_NAME} stop
    if [[ ${leaveVonLedger} = false ]]; then
      stopVONNetwork ${VON_SRC_DIR}
    fi
    ;;
  logs)
    docker-compose -f ${REAL_PWD}/docker-compose-devel.yml -p ${DOCKER_PROJECT_NAME} logs -f
    ;;
  *) usage; 
esac

# Turn of our exit trap on normal exit
trap - EXIT

