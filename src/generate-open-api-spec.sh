#!/bin/bash
#
# This script will run a pre-built ACA-py docker image, 
# execute the openapi/swagger codegen tool and create an openapi.json spec file
# for the ACA-py REST API.  
#
# Usage:
function usage() {
  echo -e "usage: ./$0 [-i <ACA-py docker image name>]\n"
}
#
##########################################################################################

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
ACA_PY_DOCKER_IMAGE_DEFAULT="sudo-di-acapy"

ACA_PY_ADMIN_PORT="8101"
ACA_PY_INBOUND_PORT="8100"
ACA_PY_DOCKER_PORTS="${ACA_PY_INBOUND_PORT}:${ACA_PY_INBOUND_PORT} ${ACA_PY_ADMIN_PORT}:${ACA_PY_ADMIN_PORT}"
ACA_PY_CMD_OPTIONS=" \
  -e http \
  --inbound-transport http 0.0.0.0 ${ACA_PY_INBOUND_PORT} \
  --outbound-transport http \
  --admin 0.0.0.0 ${ACA_PY_ADMIN_PORT} \
  --admin-insecure-mode \
  --log-level info \
  --auto-provision \
  --wallet-type askar \
  --wallet-name gen-openapi \
  --wallet-key gen-openapi-key \
  --no-ledger \
  --plugin oid4vc \
  --plugin connections \
  --plugin sd_jwt_vc \
  --plugin cheqd"

OPEN_API_JSON_CONFIG="openAPIJSON.config"
OPEN_API_SHARED_DIR="${BUILD_DIR}/open-api"

##########################################################################################
# Parse command-line options
##########################################################################################
while getopts ':i:' option; do
  case ${option} in
    i) ACA_PY_DOCKER_IMAGE_OPT=$OPTARG ;;
    ?) usage; exit 1;;
  esac
done

if [ -z $ACA_PY_DOCKER_IMAGE_OPT ]; then
  ACA_PY_DOCKER_IMAGE_OPT=${ACA_PY_DOCKER_IMAGE_DEFAULT}
fi

##########################################################################################
# Run docker ACA-py image and pull REST API spec file to generate json format
##########################################################################################  
runACAPy "${ACA_PY_DOCKER_IMAGE_OPT}" "${ACA_PY_DOCKER_PORTS}" "${ACA_PY_CMD_OPTIONS}" ACA_PY_CONTAINER_ID 
# We run ACA-Py as a standalone container so we have to access it using the docker 
# bridge to get to the admin port
CLOUD_AGENT_DOCKER_HOST=${CLOUD_AGENT_DOCKER_HOST:-'localhost'}
# Make sure ACA-py container gets terminated when we do
trap 'docker kill ${ACA_PY_CONTAINER_ID}' EXIT
waitActiveWebInterface "http://${CLOUD_AGENT_DOCKER_HOST}:${ACA_PY_ADMIN_PORT}" ${CLOUD_AGENT_TIME_GRACE:-60}
printMilestone "ACA-Py Admin interface active\n\t Container IP '${CLOUD_AGENT_DOCKER_HOST}' Docker Id '${ACA_PY_CONTAINER_ID}'"

# Pull the swagger raw format spec file from ACA-py
if [ ! -d ${OPEN_API_SHARED_DIR} ]; then 
  mkdir -p ${OPEN_API_SHARED_DIR}; 
fi
curl --output ${OPEN_API_SHARED_DIR}/acapy-raw.json http://${CLOUD_AGENT_DOCKER_HOST}:${ACA_PY_ADMIN_PORT}/api/docs/swagger.json

# Generate the native OpenAPI JSON spec file so we can tailor
# it if we need to then we use that output for all the subsequent language generation runs.
runOpenAPIGenerate "${OPEN_API_MOUNT}/acapy-raw.json" openapi "${ROOT_DIR}/open-api/${OPEN_API_JSON_CONFIG}" "${OPEN_API_SHARED_DIR}"

# Force over-write the version controlled openapi.json
runEval "cp -f ${OPEN_API_SHARED_DIR}/openapi.json ${ROOT_DIR}/open-api/"

