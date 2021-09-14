#!/bin/bash
#
# This file contains bash functions that are common across
# multiple scripts

##########################################################################################
# Check Programs needed are installed
##########################################################################################

type git >/dev/null 2>&1 || {
  echo >&2 "git is required but is not installed. Aborting."
  exit 1
}

type docker >/dev/null 2>&1 || {
  echo >&2 "docker is required but is not installed. Aborting."
  exit 1
}

# Docker-compose is needed to run VON-network
type docker-compose >/dev/null 2>&1 || {
  echo >&2 "docker-compose is required by VON but is not installed. Aborting."
  exit 1
}

##########################################################################################
# Functions
##########################################################################################

# Evals a function and exits the script if any error occured
# $1 : String function to evaluate
function runEval() {
  cmdOutput=$(eval ${1})
  returnValue=$?
  if [ $returnValue != 0 ]; then
    echo "Command ${1} failed"
    exit -1
  fi
  return $returnValue
}

# Print an indication of script reaching a processing 
# milestone in a noticable way
# $1 : Mesage string to print
function printMilestone() {
  echo -e "\n\n##########################################################################################"
  echo -e "#"
  echo -e "# " ${1}
  echo -e "#"
  echo -e "##########################################################################################\n"
}

# Pull the value for a specific field out of a simple JSON 
# format object and echo it.
# $1 : The field name
# $2 : The JSON file name
function getJSONFieldValue() {
  returnValue=`awk -F'"' '/'${1}'/ { print $4 }' ${2}`
  echo $returnValue
}

# Wait for a web server to provide a funcitoning interface we can use
# $1 : Url to poll that indicates webserver initialsation complete
# $2 : maximum number of seconds to wait
function waitActiveWebInterface() {
  for (( i=1; i < ${2}; i++))
  do
    curl -s -f -o /dev/null ${1}
    if [ $? == 0 ]; then
      break
    fi
    sleep 1
  done
  if [ "${i}" -ge "${2}" ]; then
    echo "Web interface ${1} failed to be come active in ${2} seconds"
    return -1
  fi
}

# Get a git clone area setup with the correct version of code
# from the git repository
# $1 : The directory to create the git clone in
# $2 : The git repo location to clone from
# $3 : The git Tag to use when checking out code, use '' if branch specified
# $4 : The git Branch to sue when checking out code, use '' if tag specidied
function updateGitClone() {
  local srcDir="${1}"
  local repo="${2}"
  local tag="${3}"
  local branch="${4}"

  # Get our aca-py components from the git source
  if [ ! -d "${srcDir}/.git" ]; then
    printMilestone "Cloning ${repo}"
    runEval "git clone ${repo} ${srcDir}"
  fi
  # Make sure we have all the latest tags
  cd ${srcDir}
  runEval "git fetch --all --tags"

  # Checkout the specified branch or tag version of ACA-py
  if [ ! -z ${tag} ]; then
    printMilestone "Pulling up to '${tag}' tag"
    runEval "git checkout -q tags/${tag}" 
  else
    printMilestone "Pulling up '${branch}' branch at HEAD"
    runEval "git checkout -q ${branch}"
    runEval "git pull"
  fi
}

# Inspect an indicated docker container and echo the container to container 
# network IP address
# $1: The container Id
# $2: The name of a variable to return the IP address to
function getDockerInternalContainerIP() {
  local result=${2}

  ipAddress=$(docker inspect --format '{{range .NetworkSettings.Networks}}{{.IPAddress}}{{end}}'  ${1})
  if [[ "${result}" ]]; then
    eval ${result}="'${ipAddress}'"
  fi

}

# Start an ACA-py docker image
# A simplified version of aries-cloudagent-python/scripts/run_docker
# needed to run without tty or interactive.
# $1: The ACA-py docker image to use (i.e either from a repo or local)
# $2: The port mapping from docker to local host in format "docker1:local1 docker2:local2"
# $3: The ACA-py command line arguements
# $4: The name of a variable to return the container ID to
function runACAPy() { 
  local acaPyImage="${1}" 
  local ports="${2}"
  local acaPyArgs="${3}"
  local result="${4}"

  args=""
  for port in ${ports}; do
    args="${args} -p ${port}"
  done

  # Mount the agent logs onto the hosting machine 
  args="${args} -v /$(pwd)/../logs:/home/indy/logs"

  randName=$(cat /dev/urandom | env LC_CTYPE=ALL tr -dc 'a-zA-Z0-9' | fold -w 16 | head -n 1)
  acaPyCmd="docker run -d --rm  --name sudo-di-cloud-agent_${randName} ${args} \
              ${acaPyImage} start ${acaPyArgs}" 
  printMilestone "Starting ACA-py docker image with command: \n \
        \t ${acaPyCmd}"

  # Return the docker container id for anyone who cares
  containerId=$(${acaPyCmd})
  local returnStatus=$?
  if [[ ${returnStatus} != 0 ]]; then
      echo "**** FAIL - ACA-Py failed to start, exiting. ****"
      exit 1
  fi
  if [[ "${result}" ]]; then
    eval ${result}="'${containerId}'"
  fi
}

# Stop a running ACA-py docker container
# $1: The docker container identifier
function destroyACAPy() {
  local acaPyDockerId="${1}" 
  acaPyCmd="docker stop ${acaPyDockerId}" 

  printMilestone "Stopping ACA-py docker container id : \n \
        \t ${acaPyDockerId}"
  ${acaPyCmd}
}

# Stop a running local VON-Network
# $1: The VON source directory
function stopVONNetwork() {
  cd ${1}
  ./manage stop
}

# Destroy a running local VON-Network
# $1: The VON source directory
function destroyVONNetwork() {
  cd ${1}
  ./manage down
}

# Run a local development VON-Network ledger
# $1: The VON source directory
# $2: The IP/HostName running the VON webserver
# $3: The VON Webserver port to use.
# $4: Any extra arguements to pass to VON start
function runVONNetwork() {
  cd ${1}

  local vonWebServerHost=${2}
  local vonWebServerPort=${3}
  # Tell the VON manage script how it will need to 
  # connect to the VON Webserver to check it is up.
  export LEDGER_URL_CONFIG="http://${vonWebServerHost}:${vonWebServerPort}"
  # Can now ask to wait until VON is up before returning. 
  ./manage start --wait ${4}
  # Make sure we have access to the web interface
  waitActiveWebInterface "http://${vonWebServerHost}:${vonWebServerPort}" 20
  if [ $? != 0 ] ; then
    printMilestone "ABORTING : VON Network failed to come active, please check start parameters and try again"
    exit -1
  fi
  # Give the von nodes a few seconds after its web 
  # interface is up to allow the ledger to stabilise before
  # anything hits it since this can cause failures of the agent starting
  sleep 15
}

# Obtain the VON network code from git and
# start a 4 Node Indy Ledger locally.
# $1: The local VON source directory
# $2: Location of the VON repository
# $3: Git tag to use
# $4: Git branch
function buildVON() {
    local vonSrcDir=${1}
    local vonGitRepo=${2}
    local vonGitTag=${3}
    local vonGitBranch=${4}

    updateGitClone "${vonSrcDir}" "${vonGitRepo}" "${vonGitTag}" "${vonGitBranch}"
    # Build the VON docker container images and bring up the nodes
    cd ${vonSrcDir}
    ./manage build
}

# Simple utility to allow a set of cleanup commands to 
# be progressively registered and excuted on exit.
# Requires the application to have exposed a "ABORT_CLENUP_CMDS"
# array which contains a set of commands to run on Exit.
# The application must also register this handler with 
# "trap cleanupHandler EXIT"
function cleanupHandler() {
  for cmd in "${CLEANUP_CMDS[@]}"; do
    printMilestone "Executing cleanup command : ${cmd}"
    result=$(eval ${cmd})
  done
}

# Register an "ENDORSER" DID to the VON Ledger so that 
# it can be used to perform other ledger write operations. 
# NOTE: Normally this would need to be done through a ToIP 
#       organisation process for a Production System
# $1 : The Host running the VON Webserver
# $2 : The VON WebServer port to use in talking to the local Indy network
# $3 : The seed to use in creating the endorser did 
function createVONEndorserDID() {
  local vonHost=${1}
  local adminPort=${2}
  local endorserSeed=${3}

  tmpfile=$(mktemp /tmp/did.XXXXXX)
  echo "{\"role\":\"TRUST_ANCHOR\",\"alias\":\"DeveloperEndorserDID\",\"did\":null,\"seed\":\"${endorserSeed}\"}" >${tmpfile}.json
  endorserDID=`curl -s -d "@${tmpfile}.json" -X POST ${vonHost}:${adminPort}/register | awk -F'"' '/did/ { print $4 }'`
  printMilestone "Endorser DID was registered as: ${endorserDID}"
  rm ${tmpfile}.json
}
