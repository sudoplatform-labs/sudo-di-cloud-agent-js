#!/bin/bash
#
# This script creates a local Cloud Agent development environment by
# performing the following steps on the "start" command :
# 1. If -f option is specified, delete the ../devel directory to create
#    an empty development environment.
# 2. Check if the ../devel directory exists and if not create it
# 3. If -l option is specified, check if the ../devel/von-network 
#    directory is missing, pull the latest 
#    VON Network version from the github.com/bcgov/von-network.git repository.
# 4. Configure and run the docker VON Indy Ledger Network locally.
# 5. If the -c option is specified, use the specified configuration file
#    to provide ACA-py docker image parameters and location. Otherwise use
#    the config file located in our local directory.
# 6. Run an instance of the docker ACA-py Cloud Agent configured to use 
#    the Local VON Indy Ledger.
#
# Usage:

function usage() {
  cat <<-EOF

  usage: $0 [command] [options]

  Commands:

  start - Create a local Decentralized Identity development environment by 
          starting the VON Distributed Ledger
          and ACA-py Cloud Agent inside docker containers

          start options :
          -l : DO NOT Start the VON Indy Decentralized Ledger before the aca-py Agent.
               This is useful if you are going to run multiple agents and the Ledger
               has already been started.
          -c : Use a custom configuration file rather than the default acapy.json. 
               This allows changing various parameters so that multiple agents can be run
               on a single machine (NOTE: must provide an absolute path).
          -f : Force remove the existing runtime environment before starting which will
               cause new VON repository versions to be pulled. 
  
  stop - Stop running instance of ACA-py Agent and VON Distributed Ledger
         leaving the contents of the local Ledger intact.

         stop options :
         -l : DO NOT stop the VON Indy Decentralized Ledger 
  
  down - Stop running instance of ACA-py Agent and VON Distributed Ledger
         destroying the contents of local Ledger.
 
         down options :
         -l : DO NOT stop or destroy the VON Indy Decentralized Ledger contents 
EOF
exit 1
}
#
##########################################################################################

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

ACA_PY_CONFIG_FILE="${ROOT_DIR}/bin/acapy.json"
ACA_PY_DOCKER_NAME_FILE="${DEVEL_DIR}/acapy_runner.json"

DOCKER_HOST_IP=`docker run --rm --net=host eclipse/che-ip`

VON_GIT_REPO_DEFAULT="https://github.com/bcgov/von-network.git"
VON_GIT_BRANCH_DEFAULT="master"
VON_SRC_DIR="${DEVEL_DIR}/von-network"
VON_ADMIN_PORT="9000"
VON_LEDGER="${DOCKER_HOST_IP}:${VON_ADMIN_PORT}"

##########################################################################################
# Functions
##########################################################################################

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
  export ACA_PY_IMAGE=$(getJSONFieldValue "acapyImageLocation" ${configFile})

  # Get the parameters for talking to the ACA-py Agent from the UI
  export ACA_PY_AGENT_KEY=$(getJSONFieldValue "acapyAdminKey" ${configFile})
  agentURI=$(getJSONFieldValue "acapyAdminUri" ${configFile})
  export ACA_PY_ADMIN_PORT=$(cut -d':' -f3 <<<${agentURI}) 

  # Get the parameters for starting the ACA-py Agent to allow for
  # multiple agents when testing
  export VON_ENDORSER_SEED=$(getJSONFieldValue "endorserSeed" ${configFile})
  inboundPort=$(getJSONFieldValue "acapyInboundPort" ${configFile})

  export ACA_PY_DOCKER_PORTS="${inboundPort}:${inboundPort} ${ACA_PY_ADMIN_PORT}:${ACA_PY_ADMIN_PORT}"

  # Specify a full endpoint (e.g. http://host:port).  This is used to override 
  # the local host information when creating invitations. Particularly needed
  # when connections from Clients need to pass through a NAT to reach 
  # this agent.
  if [ ${clientEndpointOption} ]; then
    # Command switch overrides all
    clientEndpoint=${clientEndpointOption}
  else
    clientEndpoint=$(getJSONFieldValue "acapyClientEndpoint" ${configFile})
    if [ ! ${clientEndpoint} ]; then
      # Fall back to the default endpoint for only localhost processes to access
      clientEndpoint="http://${DOCKER_HOST_IP}:${inboundPort}"
    fi
  fi

  # Define the complete set of command options for starting the ACA-py
  # agent 
  export ACA_PY_CMD_OPTIONS=" \
    -e http \
    --inbound-transport http 0.0.0.0 ${inboundPort} \
    --outbound-transport http \
    --admin 0.0.0.0 ${ACA_PY_ADMIN_PORT} \
    --admin-insecure-mode \
    --log-level info \
    --endpoint ${clientEndpoint} \
    --genesis-url http://${VON_LEDGER}/genesis \
    --seed "${VON_ENDORSER_SEED}" \
    --public-invites \
    --auto-ping-connection \
    --auto-accept-requests \
    --preserve-exchange-records \
    --wallet-type indy \
    --wallet-name dev-wallet \
    --wallet-key dev-wallet-key" 

  # Using an api key currently fails with a CORS error when the
  # browser attempts to do an OPTIONS request to urls like wallet/did
  # Needs sorting out in the ACA-py code. For now we are using the
  # insecure mechanism.
  #  --admin-api-key "${ACA_PY_AGENT_KEY}" \
}

function runVONNetwork() {
  cd ${VON_SRC_DIR}
  # Can now ask to wait until VON is up before returning
  ./manage start --wait
}

function stopVONNetwork() {
  cd ${VON_SRC_DIR}
  ./manage stop
}

function destroyVONNetwork() {
  cd ${VON_SRC_DIR}
  ./manage down
}

# Obtain the VON network code from git and
# start a 4 Node Indy Ledger locally.
# $1 : The VON admin port to wait on 
function executeVONStartup() {
    local vonAdminPort=${1}

    updateGitClone "${VON_SRC_DIR}" "${VON_GIT_REPO_DEFAULT}" "" "${VON_GIT_BRANCH_DEFAULT}"
    # Build the VON docker container images and bring up the nodes
    cd ${VON_SRC_DIR}
    ./manage build
    runVONNetwork
}

# Register an "ENDORSER" DID to the VON Ledger so that 
# it can be used to perform other ledger write operations. 
# NOTE: Normally this would need to be done through a ToIP 
#       organisation process for a Production System
# $1 : The VON admin port to use in talking to the local Indy network
# $2 : The seed to use in creating the endorser did 
function createEndorserDID() {
  local adminPort=${1}
  local endorserSeed=${2}

  tmpfile=$(mktemp /tmp/did.XXXXXX)
  echo "{\"role\":\"TRUST_ANCHOR\",\"alias\":\"DeveloperEndorserDID\",\"did\":null,\"seed\":\"${endorserSeed}\"}" >${tmpfile}.json
  endorserDID=`curl -s -d "@${tmpfile}.json" -X POST localhost:${adminPort}/register | awk -F'"' '/did/ { print $4 }'`
  printMilestone "Endorser DID was registered as: ${endorserDID}"
  rm ${tmpfile}.json
}

function executeACAPyStartup() {
  # Start ACA-py and wait for active admin interface
  runACAPy "${ACA_PY_IMAGE}" "${ACA_PY_DOCKER_PORTS}" "${ACA_PY_CMD_OPTIONS}" acaPyContainerID 
  # Save the acapy docker container name so that it can be killed on stop 
  # commands and not potentially destroy another instance we didn't
  # start.
  cat <<EOF > ${ACA_PY_DOCKER_NAME_FILE}
  {
    "acapyDockerContainer": "${acaPyContainerID}"
  }
EOF
  getDockerIP "${acaPyContainerID}" acaPyIp 
  waitActiveWebInterface "http://localhost:${ACA_PY_ADMIN_PORT}" 20
  printMilestone "ACA-Py Admin interface active\n\t Container IP '${acaPyIp}' Docker Id '${acaPyContainerID}'"
}

##########################################################################################
# MAIN LINE 
##########################################################################################

# Support start, non-destructive stop and destructuve down commands
subCommand=$1
shift || usage; 

case "${subCommand}" in
  start)
    startVonLedger=true;

    # start comes with several options on how to construct the environment
    while getopts ':flc:e:' option; do
      case ${option} in
        f) flushOption=true ;;
        l) startVonLedger=false ;;
        c) configFileOption=${OPTARG} ;;
        e) clientEndpointOption=${OPTARG} ;;
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
      exportConfigOptions ${ACA_PY_CONFIG_FILE}
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
      executeVONStartup ${VON_ADMIN_PORT}
    fi
    createEndorserDID ${VON_ADMIN_PORT} ${VON_ENDORSER_SEED}
    executeACAPyStartup
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
    acaPyContainerId=$(getJSONFieldValue "acapyDockerContainer" ${ACA_PY_DOCKER_NAME_FILE})
    stopACAPy ${acaPyContainerId}
    if [[ ${leaveVonLedger} = false ]]; then
      stopVONNetwork
    fi
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
    acaPyContainerId=$(getJSONFieldValue "acapyDockerContainer" ${ACA_PY_DOCKER_NAME_FILE})
    stopACAPy ${acaPyContainerId}
    if [[ ${leaveVonLedger} = false ]]; then
      destroyVONNetwork
    fi
    ;;
  *) usage; 
esac


