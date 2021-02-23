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
  type docker
  echo >&2 "docker is required but is not installed. Aborting."
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

# Create an ACA-py docker image from the current code checked
# out.
# $1 : The root ACA-py directory to use to create image
# $2 : The tag to use for the created image
function buildACAPyDockerImage() {
  local srcDir="${1}"
  local tag="${2}"

  cd ${srcDir}/scripts
  docker build -t ${tag} -f ../docker/Dockerfile.run .. || exit 1
}

# Inspect an indicated docker container and echo the network IP address
# $1: The container Id
# $2: The name of a variable to return the IP address to
function getDockerIP() {
  local result=${2}

  ipAddress=$(docker inspect --format '{{.NetworkSettings.IPAddress}}'  ${1})
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

# Stop a running ACA-py docker image
# $1: The docker container identifier
function stopACAPy() {
  local acaPyDockerId="${1}" 
  acaPyCmd="docker stop ${acaPyDockerId}" 

  printMilestone "Stopping ACA-py docker container id : \n \
        \t ${acaPyDockerId}"
  ${acaPyCmd}
}
