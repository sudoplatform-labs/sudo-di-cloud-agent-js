#!/bin/bash
# 
# This script will generate a set of typescript wrapper routines to
# interface to the REST API defined by the openapi.json file.
#
# Usage:
function usage() {
  echo -e "usage: ./$0 \n"
}

# Make sure everything is done starting in our commands home directory
cd $(dirname $0)

ROOT_DIR="${PWD}/.."
BUILD_DIR="${ROOT_DIR}/build"
CLIENT_API_DIR="${ROOT_DIR}/client"

# pull in common build functions
source ${ROOT_DIR}/src/build-functions.sh

##########################################################################################
# Global Defaults and Constants
##########################################################################################
OPEN_API_OUTPUT_LANGUAGE="typescript-fetch"
OPEN_API_LANGUAGE_CONFIG="openAPITypescript.config"
OPEN_API_SHARED_DIR="${BUILD_DIR}/open-api"

##########################################################################################
# Generate the Typescript wrappers from the openapi.json spec file 
##########################################################################################
runEval "rm -rf   ${OPEN_API_SHARED_DIR}"
runEval "mkdir -p ${OPEN_API_SHARED_DIR}"
runEval "cp -f ${ROOT_DIR}/open-api/openapi.json ${OPEN_API_SHARED_DIR}/"
runOpenAPIGenerate "${OPEN_API_MOUNT}/openapi.json" "${OPEN_API_OUTPUT_LANGUAGE}"  "${ROOT_DIR}/open-api/${OPEN_API_LANGUAGE_CONFIG}" "${OPEN_API_SHARED_DIR}"

##########################################################################################
# Move the output code and doc to the checked in location
##########################################################################################
printMilestone "Moving Generated Client API Code to checkin location"
runEval "rm -rf ${CLIENT_API_DIR}"
runEval "mkdir -p ${CLIENT_API_DIR}"
runEval "cp -R ${BUILD_DIR}/open-api/*.ts ${CLIENT_API_DIR}/"
