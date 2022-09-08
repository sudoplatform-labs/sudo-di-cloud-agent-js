#!/bin/bash
#
# This script will run regression tests against a 
# local ACA-py clone.  It is mimicking the steps done in
# aries-cloudagent-python/scripts/run_test
# however to work with gitlab CI it has to work without a tty
# which those scripts don't
#
# Usage:
function usage() {
  echo -e "usage: ./$0 \n"
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
ACA_PY_SRC_DIR="${BUILD_DIR}/aries-cloudagent-python"

if [ ! -d ${ACA_PY_SRC_DIR}/test-reports ]; then 
  mkdir ${ACA_PY_SRC_DIR}/test-reports; 
fi

cd ${ACA_PY_SRC_DIR}/scripts

# Run tests but not indy specific ones since it breaks
# in gitlab trying to do network traffic between indy and aca-py
docker build --platform linux/amd64 -t aries-cloudagent-test -f ${ACA_PY_SRC_DIR}/docker/Dockerfile.test .. || exit 1

hostOS="$(uname -s)"
if [ ${hostOS} = "Darwin" ]; then
  docker run --rm --platform linux/amd64 --name aries-cloudagent-runner \
	  -v "${ACA_PY_SRC_DIR}/test-reports:/usr/src/app/test-reports" \
	  aries-cloudagent-test "$@"
else
  docker run --rm --platform linux/amd64 --user $(id -u):$(id -g) --name aries-cloudagent-runner \
	  -v "${ACA_PY_SRC_DIR}/test-reports:/usr/src/app/test-reports" \
	  aries-cloudagent-test "$@"
fi

