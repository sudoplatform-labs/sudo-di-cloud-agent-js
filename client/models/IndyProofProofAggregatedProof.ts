/**
 * Sudo Decentralized Identity Cloud Agent SDK
 * Provides REST API wrappers for Typescript Agent Controllers using the Sudo Decentralized Identity Cloud Agent Service
 *
 * The version of the OpenAPI document: v0.6.3
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 *
 * @export
 * @interface IndyProofProofAggregatedProof
 */
export interface IndyProofProofAggregatedProof {
  /**
   * c_hash value
   * @type {string}
   * @memberof IndyProofProofAggregatedProof
   */
  c_hash?: string;
  /**
   * c_list value
   * @type {Array<Array<number>>}
   * @memberof IndyProofProofAggregatedProof
   */
  c_list?: Array<Array<number>>;
}

export function IndyProofProofAggregatedProofFromJSON(
  json: any,
): IndyProofProofAggregatedProof {
  return IndyProofProofAggregatedProofFromJSONTyped(json, false);
}

export function IndyProofProofAggregatedProofFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): IndyProofProofAggregatedProof {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    c_hash: !exists(json, 'c_hash') ? undefined : json['c_hash'],
    c_list: !exists(json, 'c_list') ? undefined : json['c_list'],
  };
}

export function IndyProofProofAggregatedProofToJSON(
  value?: IndyProofProofAggregatedProof | null,
): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    c_hash: value.c_hash,
    c_list: value.c_list,
  };
}
