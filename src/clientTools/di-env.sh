#!/bin/bash
#
# This script creates a running local Cloud Agent development environment 
#
# Usage:

function usage() {
  cat <<-EOF

  usage: $0 [command] [options]

  Commands:

  up - Create a local docker, Decentralized Identity development environment based on the
       playgroundMode indicated.

       up options : 
         -c <config file> | --configFile=<config file> 
            Use a custom configuration file rather than the default acapy.json. 
            This allows changing various parameters so that multiple agents can be run
            on a single machine (NOTE: must provide an absolute path).

         --playgroundMode=(standalone | author_auto_endorser_auto)           
            Specifies a development environment profile to deploy. 
            Overrides a mode specified in the 'playgroundMode' field of the config file. 
            If not specified, defaults to 'standalone' profile. 

         -f 
            Force remove the existing runtime environment before starting which will
            cause new VON repository versions to be pulled. 

         -g <genesis file url> | --ledgerGenesisURL=<genesis file url> 
            Pull a ledger genesis file from the specified url. 
            Overrides a url specified in the 'ledgerGenesisURL' field of the config file. 
            If neither present, defaults to the URL to pull a genesis file from a locally
            running VON Indy Ledger.

         -l 
            DO NOT Start the VON Indy Decentralized Ledger before the aca-py Agent.
            This is useful if you will be using a public ledger URL via -g

         -t <grace in seconds> | --agentTimeGrace=<grace in seconds> 
            Time to allow acapy to become active on its web iterface before declaring failure.  
            This can by useful due to the variance in both docker image layer donwload speeds and 
            architecture variations (e.g. when running on risc chipsets and docker is doing 
            architecture translation at runtime). 
            Overrides the time specified in the 'agentTimeGrace' field of the config file. 
            If neither present, defaults to 60 seconds. 

         -v (debug | info  | warning | error) 
            Set the logging level for ACA-py and the tails file server.  
            Log output can be seen using the 'yarn di-env logs' command

         -w (indy | askar) | --walletType=(indy | askar)
            Specifies the wallet plugin type to use. 
            Should only currently use "askar" as "indy" is being deprecated in ACA-py.  
            Overrides the type specified in the 'walletType' field of the config file. 
            If neither present, defaults to "askar" since this is preferred from 
            ACA-py V0.7.4 onwards. 

         -e <endorser agent endpoint> | --endorserClientEndpoint=<endorser agent endpoint>
            Specifies the endpoint to put into DIDDocs to inform other agents where they should 
            send messages destined for this endorser agent. Specify a full endpoint URL (e.g. http://host:port). 
            Overrides a url specified in the 'endorserClientEndpoint' field of the config file. 
            If neither present, defaults to the localhost url of the running endorser docker image. 
            Particularly useful when connections from agents need to pass through a NAT (i.e or ngrok) to reach
            this agent. 

         -m <endorser agent mockserver config> | --endorserMockserverConfig=<endorser agent mockserver config> 
            Use a custom mockserver expectation configuration file for the endorser mockserver rather 
            than the default endorser-mockserver.json (NOTE: must provide an absolute path).  
            This allows developers to slowly develop their endorser controller handlers for webhook callbacks 
            (see: https://mock-server.com/#what-is-mockserver for how to use mockserver).
            Overrides a location specified in the 'endorserMockServerConfig' field of the config file. 

         -s <endorser agent 32 byte seed> | --endorserSeed=<endorser agent 32 byte seed>
            Use the specified 32 bytes as the seed for the endorser wallets public DID. 
            There is NO default, for security reasons it must be supplied either as an
            arguement or via an 'endorserSeed' field added to the config file.

         --authorClientEndpoint=<author agent endpoint>
            Specifies the endpoint to put into DIDDocs to inform other agents where they should 
            send messages destined for this author agent. Specify a full endpoint URL (e.g. http://host:port). 
            Overrides a url specified in the 'authorClientEndpoint' field of the config file. 
            If neither present, defaults to the localhost url of the running author docker image. 
            Particularly useful when connections from agents need to pass through a NAT (i.e or ngrok) to reach
            this agent.    

         --authorMockserverConfig=<author agent mockserver config>  
            Use a custom mockserver expectation configuration file for the author mockserver rather 
            than the default author-mockserver.json (NOTE: must provide an absolute path).  
            This allows developers to slowly develop their author controller handlers for webhook callbacks 
            (see: https://mock-server.com/#what-is-mockserver for how to use mockserver).
            Overrides a location specified in the 'authorMockServerConfig' field of the config file. 

         --authorSeed=<author agent 32 byte seed>
            Use the specified 32 bytes as the seed for the author wallets public DID. 
            There is NO default, for security reasons it must be supplied either as an
            arguement or via an 'authorSeed' field added to the config file.

  down - Stop running instance of ACA-py Agent, tails file server, and VON Distributed Ledger
         destroying the contents of local Ledger and the Cloud Agent Wallet.
 
         down options :
         -l : DO NOT stop or destroy the VON Indy Decentralized Ledger contents 

  start- Restart a pre-existing environment that was paused via the 'stop' command.
         This allows existing ledger and wallet data to be maintained between 
         development sessions whilst allowing the host resources to be freed up
         (i.e the docker containers remain in tact after a 'stop' command).

         start options :
         -l : DO NOT Start the VON Indy Decentralized Ledger before the aca-py Agent.
            This is useful if you are using a public ledger URL via -g

  stop - Stop running instance of ACA-py Agent and VON Distributed Ledger
         leaving the contents of the local Ledger and Wallet intact so that it
         can be resumed later using the 'start' command

         stop options :
         -l : DO NOT stop the VON Indy Decentralized Ledger 

  logs - Watch and output log information from the ACA-py agent and the tails
         file server. An appropriate log level needs to have been set when
         the 'up' command was issued using the '-v' switch. Use Ctrl-c to exit
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

VON_SRC_DIR="${DEVEL_DIR}/von-network"
VON_WEBSERVER_EXTERNAL_PORT="9000"
# NOTE: Depending on whether we are running in a localhost environment or
# something like the gitlab docker in docker changes how the
# host address has to be determined. 
VON_WEBSERVER_DOCKER_HOST=${VON_WEBSERVER_DOCKER_HOST:-'localhost'}
CLOUD_AGENT_DOCKER_HOST=${CLOUD_AGENT_DOCKER_HOST:-'localhost'}
WEBHOOK_MOCKSERVER_DOCKER_HOST=${WEBHOOK_MOCKSERVER_DOCKER_HOST:-'localhost'}

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
    echo >&2 "Missing configuration file ${configFile}"
    exit 1
  fi
  tailsServerImageLocation=$(getJSONFieldValue "tailsServerImageLocation" ${configFile})
  export TAILS_SERVER_DOCKER_IMAGE=$(cut -d':' -f1 <<<${tailsServerImageLocation}) 
  export TAILS_SERVER_DOCKER_TAG=$(cut -d':' -f2 <<<${tailsServerImageLocation}) 
  export TAILS_SERVER_PORT=6543
  export TAILS_SERVER_INTERNAL_URL="http://tails-server:${TAILS_SERVER_PORT}"

  cloudAgentImageLocation=$(getJSONFieldValue "acapyImageLocation" ${configFile})
  export CLOUD_AGENT_DOCKER_IMAGE=$(cut -d':' -f1 <<<${cloudAgentImageLocation}) 
  export CLOUD_AGENT_DOCKER_TAG=$(cut -d':' -f2 <<<${cloudAgentImageLocation}) 
  # Get the parameters for talking to the Endorser Agent from the UI
  endorserAgentURI=$(getJSONFieldValue "endorserAdminUri" ${configFile})
  export ENDORSER_CLOUD_AGENT_ADMIN_PORT=$(cut -d':' -f3 <<<${endorserAgentURI}) 
  # Get the parameters for other agents to talk to us
  export ENDORSER_CLOUD_AGENT_INBOUND_PORT=$(getJSONFieldValue "endorserInboundPort" ${configFile})

  # Get the parameters for talking to the Author Agent from the UI
  authorAgentURI=$(getJSONFieldValue "authorAdminUri" ${configFile})
  export AUTHOR_CLOUD_AGENT_ADMIN_PORT=$(cut -d':' -f3 <<<${authorAgentURI}) 
  # Get the parameters for other agents to talk to us
  export AUTHOR_CLOUD_AGENT_INBOUND_PORT=$(getJSONFieldValue "authorInboundPort" ${configFile})

  # Specify a full endpoint (e.g. http://host:port).  This is used to override 
  # the local host information when creating invitations. Particularly needed
  # when connections from Clients need to pass through a NAT to reach 
  # this agent.
  if [ ${endorserClientEndpointOption} ]; then
    # Command switch overrides all
    ENDORSER_CLOUD_AGENT_ENDPOINT=${endorserClientEndpointOption}
  else
    ENDORSER_CLOUD_AGENT_ENDPOINT=$(getJSONFieldValue "endorserClientEndpoint" ${configFile})
    if [ ! ${ENDORSER_CLOUD_AGENT_ENDPOINT} ]; then
      # Fall back to the default endpoint for only localhost processes to access
      ENDORSER_CLOUD_AGENT_ENDPOINT="http://${CLOUD_AGENT_DOCKER_HOST}:${ENDORSER_CLOUD_AGENT_INBOUND_PORT}"
    fi
  fi
  # make the agent endpoint visible to compose 
  export ENDORSER_CLOUD_AGENT_ENDPOINT

  if [ ${authorClientEndpointOption} ]; then
    # Command switch overrides all
    AUTHOR_CLOUD_AGENT_ENDPOINT=${authorClientEndpointOption}
  else
    AUTHOR_CLOUD_AGENT_ENDPOINT=$(getJSONFieldValue "authorClientEndpoint" ${configFile})
    if [ ! ${AUTHOR_CLOUD_AGENT_ENDPOINT} ]; then
      # Fall back to the default endpoint for only localhost processes to access
      AUTHOR_CLOUD_AGENT_ENDPOINT="http://${CLOUD_AGENT_DOCKER_HOST}:${AUTHOR_CLOUD_AGENT_INBOUND_PORT}"
    fi
  fi
  # make the agent endpoint visible to compose 
  export AUTHOR_CLOUD_AGENT_ENDPOINT

  # Determine the URL to pull the ledger genesis transaction file from.
  # Command option overides configfile with overrides default of localhost VON ledger
  FRONTEND_NETWORK="frontend"
  FRONTEND_EXTERNAL="false"
  if [ ${ledgerGenesisURLOption} ]; then
    # Command switch overrides all
    LEDGER_GENESIS_URL=${ledgerGenesisURLOption}
  else
    LEDGER_GENESIS_URL=$(getJSONFieldValue "ledgerGenesisURL" ${configFile})
    if [ ! ${LEDGER_GENESIS_URL} ]; then
      # Fall back to the default endpoint for running a local docker ledger
      VON_WEBSERVER_INTERNAL_URL="http://von-webserver-1:8000"
      LEDGER_GENESIS_URL="${VON_WEBSERVER_INTERNAL_URL}/genesis"
      # If we are using the VON Network ledger we have to use the
      # network it creates as the frontend. Since Docker Desktop 4.1.0 the
      # addresses in the genesis file for VON which use the eclipse/che-ip
      # utility to determine are NOT accessible from a seperately created
      # frontend network.
      FRONTEND_NETWORK="von_von"
      FRONTEND_EXTERNAL="true"
    fi
  fi
  # make the leder visible to compose
  export VON_WEBSERVER_INTERNAL_URL
  export LEDGER_GENESIS_URL
  export FRONTEND_NETWORK
  export FRONTEND_EXTERNAL

  # Determine the seed to use for creating the wallets public DID.
  # For VON localhost ledgers we will create the DID as part of startup but
  # for public ledgers creating the DID will need to be done out of band 
  # with whatever mechanism the ledger itself provides. 
  if [ ${endorserSeedOption} ]; then
    # Command switch overrides all
    ENDORSER_CLOUD_AGENT_SEED=${endorserSeedOption}
  else
    ENDORSER_CLOUD_AGENT_SEED=$(getJSONFieldValue "endorserSeed" ${configFile})
  fi
  export ENDORSER_CLOUD_AGENT_SEED

  if [ ${authorSeedOption} ]; then
    # Command switch overrides all
    AUTHOR_CLOUD_AGENT_SEED=${authorSeedOption}
  else
    AUTHOR_CLOUD_AGENT_SEED=$(getJSONFieldValue "authorSeed" ${configFile})
  fi
  export AUTHOR_CLOUD_AGENT_SEED

  if [ ${walletTypeOption} ]; then
    # Command switch overrides all
    CLOUD_AGENT_WALLET_TYPE=${walletTypeOption}
  else
    CLOUD_AGENT_WALLET_TYPE=$(getJSONFieldValue "walletType" ${configFile})
  fi
  export CLOUD_AGENT_WALLET_TYPE

  if [ ${agentTimeGraceOption} ]; then
    # Command switch overrides all
    CLOUD_AGENT_TIME_GRACE=${agentTimeGraceOption}
  else
    CLOUD_AGENT_TIME_GRACE=$(getJSONFieldValue "agentTimeGrace" ${configFile})
  fi
  export CLOUD_AGENT_TIME_GRACE

  # Endorser Agent Webhook mockserver configuration 
  export ENDORSER_WEBHOOK_MOCKSERVER_PORT=1080
  export ENDORSER_WEBHOOK_MOCKSERVER_INTERNAL_URL="http://endorser-webhook-mockserver:${ENDORSER_WEBHOOK_MOCKSERVER_PORT}"
  if [ ${endorserMockserverConfigOption} ]; then
    # Command switch overrides all
    ENDORSER_WEBHOOK_MOCKSERVER_FILE=${endorserMockserverConfigOption}
  else
    ENDORSER_WEBHOOK_MOCKSERVER_FILE=$(getJSONFieldValue "endorserMockServerConfig" ${configFile})
    if [ ! ${ENDORSER_WEBHOOK_MOCKSERVER_FILE} ]; then
      # Fall back to the default file location
      ENDORSER_WEBHOOK_MOCKSERVER_FILE="${REAL_PWD}/endorser-mockserver.json"
    fi
  fi
  export ENDORSER_WEBHOOK_MOCKSERVER_FILE

  # Author Agent Webhook mockserver configuration 
  export AUTHOR_WEBHOOK_MOCKSERVER_PORT=1081
  export AUTHOR_WEBHOOK_MOCKSERVER_INTERNAL_URL="http://author-webhook-mockserver:${AUTHOR_WEBHOOK_MOCKSERVER_PORT}"
  if [ ${authorWebHookMockServerFileOption} ]; then
    # Command switch overrides all
    AUTHOR_WEBHOOK_MOCKSERVER_FILE=${authorWebHookMockServerFileOption}
  else
    AUTHOR_WEBHOOK_MOCKSERVER_FILE=$(getJSONFieldValue "authorMockServerConfig" ${configFile})
    if [ ! ${AUTHOR_WEBHOOK_MOCKSERVER_FILE} ]; then
      # Fall back to the default file location
      AUTHOR_WEBHOOK_MOCKSERVER_FILE="${REAL_PWD}/author-mockserver.json"
    fi
  fi
  export AUTHOR_WEBHOOK_MOCKSERVER_FILE

  if [ ${playgroundModeOption} ]; then
    # Command switch overrides all
    PLAYGROUND_MODE=${playgroundModeOption}
  else
    PLAYGROUND_MODE=$(getJSONFieldValue "playgroundMode" ${configFile})
    if [ ! ${PLAYGROUND_MODE} ]; then
      # Fall back to the standalone playground mode
      PLAYGROUND_MODE="standalone"
    fi
  fi
  export PLAYGROUND_MODE

  # ATM we only support two versions of playground which is to start 
  # either a single standalone endorser or to start an 
  # Author and associated Endorser in automatic endorsement modes
  if [ ${PLAYGROUND_MODE} ]; then
    case "${PLAYGROUND_MODE}" in
      standalone )         # standalone mode, must have Endorser Seed value
        if [[ ${#ENDORSER_CLOUD_AGENT_SEED} != 32 ]]; then
          echo >&2 "Must specify a 32 byte Endorser seed to generate the wallet DID via ${configFile} 'endorserSeed' element"
          exit 1
        fi
      ;;

      author_auto_endorser_auto ) 
        # Check that the extra Author parameters are present
        if [[ ${#ENDORSER_CLOUD_AGENT_SEED} != 32 ]]; then
          echo >&2 "Must specify a 32 byte Endorser seed to generate the wallet DID via ${configFile} 'endorserSeed' element"
          exit 1
        fi
        if [[ ${#AUTHOR_CLOUD_AGENT_SEED} != 32 ]]; then
          echo >&2 "Must specify a 32 byte Author seed to generate the wallet DID via ${configFile} 'authorSeed' element"
          exit 1
        fi
      ;;   
      * )    
        echo >&2 "Unknown playgroundMode value specified: ${PLAYGROUND_MODE}"; 
        exit 1
      ;;
    esac
  fi
}

# Bring up the cloud-agent and the tails-server containers.
# $1 : The playground mode we are starting up
function executeACAPyStartup() {
  local playgroundMode=${1}

  dockerService="endorser-cloud-agent"
  docker-compose -f ${REAL_PWD}/docker-compose-devel.yml -p ${DOCKER_PROJECT_NAME} up ${dockerService} --no-start
  # ACAPy now has to be added to cleanup steps if we exit with error
  CLEANUP_CMDS=("docker-compose -f ${REAL_PWD}/docker-compose-devel.yml down" "${CLEANUP_CMDS[@]}")
  docker-compose -f ${REAL_PWD}/docker-compose-devel.yml -p ${DOCKER_PROJECT_NAME} start ${dockerService}
  waitActiveWebInterface "http://${CLOUD_AGENT_DOCKER_HOST}:${ENDORSER_CLOUD_AGENT_ADMIN_PORT}" ${CLOUD_AGENT_TIME_GRACE:-60}
  if [ $? != 0 ] ; then
    printMilestone "ABORTING : Endorser Cloud Agent failed to come active please check start parameters and try again"
    exit 1
  fi
  # Send the mockserver webhook configuration 
  updateMockServerExpectations "${WEBHOOK_MOCKSERVER_DOCKER_HOST}" "${ENDORSER_WEBHOOK_MOCKSERVER_PORT}" "${ENDORSER_WEBHOOK_MOCKSERVER_FILE}"
  printMilestone "Endorser Cloud Agent Admin interface active"

  case "${playgroundMode}" in
    standalone )         # Default mode, stand alone Endorser only
    ;;

    author_auto_endorser_auto )  # Automatic Author with associated Automatic Endorser agent required
      # Get the public invitation from the endorser needed to start the Author  
      getPrivateInvitation "http://${CLOUD_AGENT_DOCKER_HOST}:${ENDORSER_CLOUD_AGENT_ADMIN_PORT}" "AuthorConnection" "ACME Endorser" ENDORSER_INVITATION
      export ENDORSER_INVITATION
      getAgentPublicDID "http://${CLOUD_AGENT_DOCKER_HOST}:${ENDORSER_CLOUD_AGENT_ADMIN_PORT}" ENDORSER_CLOUD_AGENT_DID
      export ENDORSER_CLOUD_AGENT_DID

      dockerService="author-cloud-agent"
      docker-compose -f ${REAL_PWD}/docker-compose-devel.yml -p ${DOCKER_PROJECT_NAME} up ${dockerService} --no-start
      docker-compose -f ${REAL_PWD}/docker-compose-devel.yml -p ${DOCKER_PROJECT_NAME} start ${dockerService}
      waitActiveWebInterface "http://${CLOUD_AGENT_DOCKER_HOST}:${AUTHOR_CLOUD_AGENT_ADMIN_PORT}" ${CLOUD_AGENT_TIME_GRACE:-60}
      if [ $? != 0 ] ; then
        printMilestone "ABORTING : Author Cloud Agent failed to come active please check start parameters and try again"
        exit 1
      fi
      # Send the mockserver webhook configuration 
      updateMockServerExpectations "${WEBHOOK_MOCKSERVER_DOCKER_HOST}" "${AUTHOR_WEBHOOK_MOCKSERVER_PORT}" "${AUTHOR_WEBHOOK_MOCKSERVER_FILE}"
      printMilestone "Author Cloud Agent Admin interface active"
    ;;   
    # Should never get to this state as should have been picked up in argument processing
    * )    echo >&2 "Internal Logic Error: ${playgroundMode}"; exit 1 ;;
  esac
}

# Check that an option has the required arguement
# $1 Option name
# $2 Option Arguement if it exists
function argRequired() {
  if [ -z ${2} ]; then
    echo >&2 "Missing required argument for --${1} option";
    usage;
  fi
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
    while getopts ':flc:e:g:s:v:w:t:m:-:' option; do
      # Allow use of long options via the '-' short option approach to 
      # maintain cross platform support. Long options with values must be in the
      # format optionName=optionValue
      if [ ${option} = '-' ]; then
        option="${OPTARG%%=*}"        # Remove the potential long arguement value from name
        OPTARG="${OPTARG#${option}}"  # Remove the option name from long aguement value
        OPTARG="${OPTARG#=}"
      fi 

      case ${option} in
        c | configFile )                argRequired ${option} ${OPTARG}; configFileOption=${OPTARG} ;;
        f )                             flushOption=true ;;
        g | ledgerGenesisURL )          argRequired ${option} ${OPTARG}; ledgerGenesisURLOption=${OPTARG} ;;
        l )                             startVonLedger=false ;;
        t | agentTimeGrace )            argRequired ${option} ${OPTARG}; agentTimeGraceOption=${OPTARG} ;;
        v )                             export LOG_LEVEL=${OPTARG} ;;
        w | walletType )                argRequired ${option} ${OPTARG}; walletTypeOption=${OPTARG} ;;
        e | endorserClientEndpoint )    argRequired ${option} ${OPTARG}; endorserClientEndpointOption=${OPTARG} ;;
        m | endorserMockserverConfig )  argRequired ${option} ${OPTARG}; endorserMockserverConfigOption=${OPTARG} ;;
        s | endorserSeed )              argRequired ${option} ${OPTARG}; endorserSeedOption=${OPTARG} ;;
        authorClientEndpoint )          argRequired ${option} ${OPTARG}; authorClientEndpointOption=${OPTARG} ;;
        authorMockserverConfig )        argRequired ${option} ${OPTARG}; authorMockserverConfigOption=${OPTARG} ;;
        authorSeed )                    argRequired ${option} ${OPTARG}; authorSeedOption=${OPTARG} ;;
        playgroundMode )                argRequired ${option} ${OPTARG}; playgroundModeOption=${OPTARG} ;;
        ??* )                           echo >&2 "Unknown long option specified --${option}"; usage ;;
        ? )                             echo >&2 "Unknown short option specified -${option}"; usage ;; 
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
    fi

    case "${PLAYGROUND_MODE}" in
      standalone )         # Default mode, stand alone
        if [[ ${startVonLedger} = true ]]; then
          createVONDID ${VON_WEBSERVER_DOCKER_HOST} ${VON_WEBSERVER_EXTERNAL_PORT} ${ENDORSER_CLOUD_AGENT_SEED} "DeveloperEndorserDID" "TRUST_ANCHOR" 
        fi
        executeACAPyStartup ${PLAYGROUND_MODE}
      ;;

      author_auto_endorser_auto )  # Automatic Author with associated Automatic Endorser agent required
        if [[ ${startVonLedger} = true ]]; then
          createVONDID ${VON_WEBSERVER_DOCKER_HOST} ${VON_WEBSERVER_EXTERNAL_PORT} ${ENDORSER_CLOUD_AGENT_SEED} "DeveloperEndorserDID" "TRUST_ANCHOR"
          createVONDID ${VON_WEBSERVER_DOCKER_HOST} ${VON_WEBSERVER_EXTERNAL_PORT} ${AUTHOR_CLOUD_AGENT_SEED} "DeveloperUserDID" "null"
        fi

        executeACAPyStartup ${PLAYGROUND_MODE}
      ;;   

      * )    echo >&2 "Invalid 'playgroundMode' value specified: ${PLAYGROUND_MODE}"; usage ;;
    esac
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

