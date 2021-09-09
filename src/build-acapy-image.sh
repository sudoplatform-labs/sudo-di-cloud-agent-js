#!/bin/bash
#
# This script will pull a specified, tagged version of the 
# "github anonyome/aries-cloudagent-python" repository
# and build the ACA-py docker image.
#
# Usage:
function usage() {
  echo -e "usage: ./$0 [-b <Git branch>] [-t <Git Tag>] [-r <Git Repo>]\n"
  echo -e "      [-i <docker image name>]\n"
}

# Make sure everything is done starting in our commands home directory
cd $(dirname $0)

# Establish basic context of where things exist
ROOT_DIR="${PWD}/.."
BUILD_DIR="${ROOT_DIR}/build"

# pull in common build functions
source ${ROOT_DIR}/src/build-functions.sh

##########################################################################################
# Global Defaults and Constants
##########################################################################################
SRC_DIR="${BUILD_DIR}/aries-cloudagent-python"

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

##########################################################################################
# Parse command-line options
##########################################################################################
while getopts ':b:t:r:i:' option; do
  case ${option} in
    b) GIT_BRANCH_OPT=$OPTARG ;;
    t) GIT_TAG_OPT=$OPTARG ;;
    r) GIT_REPO_OPT=$OPTARG ;;
    i) DOCKER_IMAGE_OPT=$OPTARG ;;
    ?) usage; exit 1;;
  esac
done

if [ -z ${GIT_TAG_OPT} ]; then
  GIT_TAG_OPT=${ACA_PY_GIT_TAG_DEFAULT}
fi

if [ -z ${GIT_REPO_OPT} ]; then
  GIT_REPO_OPT=${ACA_PY_GIT_REPO_DEFAULT}
fi

if [ -z ${GIT_BRANCH_OPT} ]; then
  GIT_BRANCH_OPT=${ACA_PY_GIT_BRANCH_DEFAULT}
fi

if [ -z ${DOCKER_IMAGE_OPT} ]; then
  DOCKER_IMAGE_OPT=${ACA_PY_DOCKER_IMAGE_DEFAULT}
fi

##########################################################################################
# Pull correct version of ACA-py and build docker image
##########################################################################################
# Setup build working directory with ACA-py code from our repository
# runEval "rm -rf ${SRC_DIR}"
runEval "mkdir -p ${BUILD_DIR}"
cd ${BUILD_DIR}
updateGitClone "${SRC_DIR}" "${GIT_REPO_OPT}" "${GIT_TAG_OPT}" "${GIT_BRANCH_OPT}" 

# Build the aca-py docker image from the pulled git sources 
buildACAPyDockerImage "${SRC_DIR}" "${DOCKER_IMAGE_OPT}" 

