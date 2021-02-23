#!/bin/bash
#
# This file contains bash functions that are common across
# build scripts

# pull in functions common between build and SDK client sctipts
source ${ROOT_DIR}/src/clientTools/common-functions.sh

OPEN_API_CONTAINER="swaggerapi/swagger-codegen-cli-v3:3.0.23"
# OPEN_API_CONTAINER="swaggerapi/swagger-codegen-cli:2.4.15"
# OPEN_API_CONTAINER="openapitools/openapi-generator-cli:v4.3.1"
OPEN_API_OPTIONS=" "
OPEN_API_MOUNT="/local"

# Pull the open API docker image and run it against the specified web server
# or local spec file.
# $1 : Web OpenAPI URL or local file to generate API routines from.
# $2 : Language to generate 
# $3 : Language config file location
# $4 : The host shared dir for input/output
function runOpenAPIGenerate() {
  local specFile="${1}"
  local outputLang="${2}"
  local configLocation="${3}"
  local hostSharedDir="${4}"

  runEval "mkdir -p ${hostSharedDir}"
  
  if [ ! -z ${configLocation} ]; then
    runEval "cp ${configLocation} ${hostSharedDir}/"
    configFile="$(basename -- ${configLocation})"
  fi

  openAPICmd="docker run --rm  --user $(id -u):$(id -g) -v ${hostSharedDir}:${OPEN_API_MOUNT} ${OPEN_API_CONTAINER} generate \
  --input-spec ${specFile} \
  --output ${OPEN_API_MOUNT}"
 
  # If using the swagger version of code generator the options are different
  # to specify language generator.
  if [[ ${OPEN_API_CONTAINER} = *swagger-codegen* ]]; then
    if [[ ${outputLang} = "openapi" ]] && [[ ${OPEN_API_CONTAINER} = *swagger-codegen-cli:2* ]]; then
      # Generating the json output is a different language name in swagger versions 2.x
      outputLang="swagger"
    fi
    openAPICmd+=" --lang ${outputLang} ${OPEN_API_OPTIONS} "
  else
    openAPICmd+=" --generator-name ${outputLang} ${OPEN_API_OPTIONS} "
  fi

  if [ ! -z ${configFile} ]; then
    openAPICmd+=" --config ${OPEN_API_MOUNT}/${configFile}"
  fi

  printMilestone "Starting Open API code generation with command: \n \
        \t ${openAPICmd}"

  ${openAPICmd}

  # Copy the swagger output into the normalised output file name
  if [[ ${OPEN_API_CONTAINER} = *swagger-codegen* ]] && [[ ${outputLang} = "swagger" ]]; then
    runEval "cp ${hostSharedDir}/swagger.json ${hostSharedDir}/openapi.json"
  fi
}

