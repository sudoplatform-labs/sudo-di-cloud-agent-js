#!/bin/bash
#
# This file contains bash functions that are common across
# build scripts

# Get the version defaults for components
source ${ROOT_DIR}/src/clientTools/versions.sh

# pull in functions common between build and SDK client sctipts
source ${ROOT_DIR}/src/clientTools/common-functions.sh

# OPEN_API_CONTAINER="swaggerapi/swagger-codegen-cli:2.4.21"
# OPEN_API_CONTAINER="swaggerapi/swagger-codegen-cli-v3:3.0.23"
# OPEN_API_CONTAINER="openapitools/openapi-generator-cli:v4.3.1"

# Move to 5.2.0 to work around an issue with allOf #ref not resolving
# correctly.
OPEN_API_CONTAINER="openapitools/openapi-generator-cli:v5.2.0"
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

  openAPICmd="docker run --rm  --platform linux/amd64 --user $(id -u):$(id -g) -v ${hostSharedDir}:${OPEN_API_MOUNT} ${OPEN_API_CONTAINER} generate \
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


# Move the generated typescript wrappers to the packaging area
# $1 : source location
# $2 : packaging area
function moveAPI() {
  printMilestone "Moving Generated Client API Code from ${1} to checkin location ${2}"
  runEval "rm -rf ${2}"
  runEval "mkdir -p ${2}"
  if [[ ${OPEN_API_CONTAINER} = *swagger-codegen* ]]; then
    runEval "cp ${1}/*.ts ${2}/"
  else
    # If its the openapi code generator there are extra directories
    runEval "cp ${1}/*.ts ${2}/"
    runEval "cp ${1}/.openapi-generator-ignore ${2}/"  
    runEval "cp -R ${1}/apis ${2}/apis"
    runEval "cp -R ${1}/models ${2}/models"
  fi
}
