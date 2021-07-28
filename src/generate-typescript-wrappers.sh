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
CLIENT_API_OVERRIDES_DIR="${ROOT_DIR}/open-api/client-overrides"

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
# Copy the OpenAPI spec file into the generation area
runEval "cp -f ${ROOT_DIR}/open-api/openapi.json ${OPEN_API_SHARED_DIR}/"
# Copy client override sources into the generation area. This allows
# modified files identified in .openapi-generator-ignore to be included in the
# generation and not overwritten.
# Helps to be able to hand code some interfaces where the Spec is broken.
runEval "cp -Rf ${CLIENT_API_OVERRIDES_DIR}/* ${OPEN_API_SHARED_DIR}/"
runEval "cp -f ${CLIENT_API_OVERRIDES_DIR}/.openapi-generator-ignore ${OPEN_API_SHARED_DIR}/"
runOpenAPIGenerate "${OPEN_API_MOUNT}/openapi.json" "${OPEN_API_OUTPUT_LANGUAGE}"  "${ROOT_DIR}/open-api/${OPEN_API_LANGUAGE_CONFIG}" "${OPEN_API_SHARED_DIR}"

##########################################################################################
# Move the output code to the checked in location
##########################################################################################
moveAPI ${OPEN_API_SHARED_DIR} ${CLIENT_API_DIR}
