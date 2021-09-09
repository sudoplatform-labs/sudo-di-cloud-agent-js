#!/bin/bash
#
# This script will run regression tests against a 
# local tails-server clone.  It is mimicking the steps done in
# indy-tails-server/docker/manage.
#
# Usage:
function usage() {
  echo -e "usage: ./$0 [-i <docker image name>]\n"
}

# Make sure everything is done starting in our commands home directory
cd $(dirname $0)

# Establish basic context of where things exist
ROOT_DIR="${PWD}/.."
BUILD_DIR="${ROOT_DIR}/build"
DEVEL_DIR="${ROOT_DIR}/devel"

# pull in common build functions
source ${ROOT_DIR}/src/build-functions.sh

##########################################################################################
# Parse command-line options
##########################################################################################
while getopts ':i:' option; do
  case ${option} in
    i) DOCKER_IMAGE_OPT=$OPTARG ;;
    ?) usage; exit 1;;
  esac
done

if [ -z ${DOCKER_IMAGE_OPT} ]; then
  DOCKER_IMAGE_OPT=${TAILS_SERVER_DOCKER_IMAGE_DEFAULT}
fi

##########################################################################################
# Global Defaults and Constants
##########################################################################################
VON_SRC_DIR="${DEVEL_DIR}/von-network"
VON_WEBSERVER_EXTERNAL_PORT="9000"

# NOTE: Depending on whether we are running in a localhost environment or
# something like the gitlab docker in docker changes how the
# VON host address has to be determined. 
VON_WEBSERVER_CONTAINER_ADDRESS=${VON_WEBSERVER_CONTAINER_ADDRESS:-localhost}

# Make sure we execute saved tidyup commands on exception exits
trap cleanupHandler EXIT

# Start the local ledger needed by the tails-server integration tests
buildVON ${VON_SRC_DIR} ${VON_GIT_REPO_DEFAULT} ${VON_GIT_VERSION_DEFAULT} ${VON_GIT_BRANCH_DEFAULT}
CLEANUP_CMDS=("destroyVONNetwork ${VON_SRC_DIR}" "${CLEANUP_CMDS[@]}")
runVONNetwork ${VON_SRC_DIR} ${VON_WEBSERVER_CONTAINER_ADDRESS} ${VON_WEBSERVER_EXTERNAL_PORT}

# Identify where the tails server source is located for the docker compose config
export TAILS_SERVER_SRC_DIR="${BUILD_DIR}/indy-tails-server"
# We use the von_von network created which provides
# a von_webserver_1 host on that network so pass that to the tester 
# docker environment.
export VON_WEBSERVER_INTERNAL_URL="http://von_webserver_1:8000"

export TAILS_SERVER_DOCKER_IMAGE=${DOCKER_IMAGE_OPT}
export TAILS_SERVER_PORT=6543
TAILS_SERVER_INTERNAL_URL="http://tails-server:${TAILS_SERVER_PORT}"

# Run the tests
docker-compose  \
  -f ${ROOT_DIR}/docker/docker-compose-tails-test.yml run tails-tester \
  --genesis-url "${VON_WEBSERVER_INTERNAL_URL}/genesis" \
  --tails-server-url ${TAILS_SERVER_INTERNAL_URL}

docker-compose  \
  -f ${ROOT_DIR}/docker/docker-compose-tails-test.yml down