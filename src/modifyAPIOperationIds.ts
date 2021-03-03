import * as fs from 'fs';
import _ from 'lodash';
import { exit } from 'process';

export type OperationMapping = {
  path: string;
  method:
    | 'get'
    | 'head'
    | 'post'
    | 'put'
    | 'delete'
    | 'connect'
    | 'options'
    | 'trace'
    | 'patch';
  operationId: string;
};

/**
 * Reads an input file containing mappings from OpenApi paths and method
 * to an operationId. The merge input file must be in the following
 * JSON format:
 *
 * [
 *    { 'path' : string,
 *      'method': string,
 *      'operationId': string
 *    }
 * ]
 *
 * It will then parse the indicated OpenApi specification file and
 * add/replace the operationIds.
 *
 * @param openApiSpecFile The OpenAPI format specification file to modify
 * @param mergeInputFile The input file supplying path, method and operationId change requests.
 * @param outputSpecFile? The location to write the resulting OpenAPI data to.
 *                        If undefined the openApiSpecFile will be overwritten
 * @returns 0 on success and -1 on invalid parameters
 */
export const modifyAPIOperationIds = (
  openApiSpecFile: string,
  mergeInputFile: string,
  outputSpecFile?: string,
): number => {
  // Check inputs exist and set up optionals
  if (!fs.existsSync(openApiSpecFile)) {
    console.log(`Missing OpenAPI specification file "${openApiSpecFile}"`);
    return -1;
  }
  if (!fs.existsSync(mergeInputFile)) {
    console.log(`Missing OperationId Merge file "${mergeInputFile}"`);
    return -1;
  }
  if (outputSpecFile === undefined) {
    outputSpecFile = openApiSpecFile;
  }
  // Invariant at this point is that the input files exist and output
  // location has been set.

  const specification = JSON.parse(fs.readFileSync(openApiSpecFile).toString());
  const mergeInput = JSON.parse(fs.readFileSync(mergeInputFile).toString());
  mergeInput.map((change: OperationMapping) => {
    // Locate the specification method and replace/insert the indicated operationId
    if (_.get(specification, `paths.${change.path}.${change.method}`)) {
      specification.paths[change.path][change.method].operationId =
        change.operationId;
    } else {
      console.log(
        `*** Specification file missing target for change request ${JSON.stringify(
          change,
        )}`,
      );
    }
  });

  fs.writeFileSync(outputSpecFile, JSON.stringify(specification, undefined, 2));
  return 0;
};
