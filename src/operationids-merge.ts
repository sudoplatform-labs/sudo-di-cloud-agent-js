#!/usr/bin/env node
// This utility will read an input file containing mappings from OpenApi
// paths and method to an operationId. The input must be in the following
// JSON format:
//
// [
//    { 'path' : string,
//      'method': string,
//      'operationId': string
//    }
// ]
//
// It will then parse the indicated OpenApi specification file and
// add/replace the operationIds.
import path from 'path';
import yargs from 'yargs';
import { modifyAPIOperationIds } from './modifyAPIOperationIds';

const argv = yargs(process.argv.slice(2))
  .usage(`Usage: ${path.basename(process.argv[1])} [options]`)
  .options({
    mergeFile: {
      alias: 'i',
      demandOption: true,
      describe:
        'File containing path descriptor and operationId information in JSON format',
      type: 'string',
    },
    openApiSpec: {
      alias: 's',
      demandOption: true,
      describe:
        'OpenAPI specification file to apply mergeFile and replace with output',
      type: 'string',
    },
    output: {
      alias: 'o',
      describe:
        'Output file to write resulting OpenAPI specification, overwrite existing specification if not provided',
      type: 'string',
      default: undefined,
    },
  })
  .help('h')
  .alias('h', 'help')
  .env('PUB').argv;

modifyAPIOperationIds(argv.openApiSpec, argv.mergeFile, argv.output);
