#!/bin/bash
#
# This script will pull a specified, tagged version of the 
# "github anonyome/aries-cloudagent-python" repository
# and build the ACA-py docker image.
#
# Usage:
function usage() {
  echo -e "usage: ./$0 [-b <ACA-py Git-branch>] [-t <ACA-py Git Tag>] [-r <ACA-py Git Repo>]\n"
  echo -e "      [-i <ACA-py docker image name>]\n"
}

# Make sure everything is done starting in our commands home directory
cd $(dirname $0)

# Establish basic context of where things exist
ACA_PY_GIT_TAG_DEFAULT=0.500.600
GIT_BRANCH=$(git branch | sed -n -e 's/^\* \(.*\)/\1/p')
ROOT_DIR="${PWD}/.."
BUILD_DIR="${ROOT_DIR}/build"

# pull in common build functions
source ${ROOT_DIR}/src/build-functions.sh

##########################################################################################
# Global Defaults and Constants
##########################################################################################
ACA_PY_GIT_REPO_DEFAULT="https://github.com/anonyome/aries-cloudagent-python.git"
ACA_PY_SRC_DIR="${BUILD_DIR}/aries-cloudagent-python"
ACA_PY_DOCKER_IMAGE_DEFAULT="sudo-di-cloud-agent"


##########################################################################################
# Parse command-line options
##########################################################################################
while getopts ':b:t:r:i:' option; do
  case ${option} in
    b) GIT_ACA_PY_BRANCH_OPT=$OPTARG ;;
    t) GIT_ACA_PY_TAG_OPT=$OPTARG ;;
    r) GIT_ACA_PY_REPO_OPT=$OPTARG ;;
    i) ACA_PY_DOCKER_IMAGE_OPT=$OPTARG ;;
    ?) usage; exit 1;;
  esac
done

if [ -z $GIT_ACA_PY_TAG_OPT ]; then
  GIT_ACA_PY_TAG_OPT=${ACA_PY_GIT_TAG_DEFAULT}
fi

if [ -z $GIT_ACA_PY_REPO_OPT ]; then
  GIT_ACA_PY_REPO_OPT=${ACA_PY_GIT_REPO_DEFAULT}
fi

if [ -z $ACA_PY_DOCKER_IMAGE_OPT ]; then
  ACA_PY_DOCKER_IMAGE_OPT=${ACA_PY_DOCKER_IMAGE_DEFAULT}
fi

##########################################################################################
# Pull correct version of ACA-py and build docker image
##########################################################################################
# Setup build working directory with ACA-py code from our repository
runEval "rm -rf ${BUILD_DIR}"
runEval "mkdir -p ${BUILD_DIR}"
cd ${BUILD_DIR}
updateGitClone "${ACA_PY_SRC_DIR}" "${GIT_ACA_PY_REPO_OPT}" "${GIT_ACA_PY_TAG_OPT}" "${GIT_ACA_PY_BRANCH_OPT}" 

# Build the aca-py docker image from the pulled git sources 
buildACAPyDockerImage "${ACA_PY_SRC_DIR}" "${ACA_PY_DOCKER_IMAGE_OPT}" 

