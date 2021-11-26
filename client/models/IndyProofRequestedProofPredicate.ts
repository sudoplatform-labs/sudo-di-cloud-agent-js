/**
 * Sudo Decentralized Identity Cloud Agent SDK
 * Provides REST API wrappers for Typescript Agent Controllers using the Sudo Decentralized Identity Cloud Agency Service
 *
 * The version of the OpenAPI document: v0.6.2
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
 * @interface IndyProofRequestedProofPredicate
 */
export interface IndyProofRequestedProofPredicate {
  /**
   * Sub-proof index
   * @type {number}
   * @memberof IndyProofRequestedProofPredicate
   */
  sub_proof_index?: number;
}

export function IndyProofRequestedProofPredicateFromJSON(
  json: any,
): IndyProofRequestedProofPredicate {
  return IndyProofRequestedProofPredicateFromJSONTyped(json, false);
}

export function IndyProofRequestedProofPredicateFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): IndyProofRequestedProofPredicate {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    sub_proof_index: !exists(json, 'sub_proof_index')
      ? undefined
      : json['sub_proof_index'],
  };
}

export function IndyProofRequestedProofPredicateToJSON(
  value?: IndyProofRequestedProofPredicate | null,
): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    sub_proof_index: value.sub_proof_index,
  };
}
