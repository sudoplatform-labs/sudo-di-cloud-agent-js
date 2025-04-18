/**
 * Sudo Decentralized Identity Cloud Agent SDK
 * Provides REST API wrappers for Typescript Agent Controllers using the Sudo Decentralized Identity Cloud Agent Service
 *
 * The version of the OpenAPI document: v0.11.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import {
  RawEncoded,
  RawEncodedFromJSON,
  RawEncodedFromJSONTyped,
  RawEncodedToJSON,
} from './';

/**
 *
 * @export
 * @interface IndyProofRequestedProofRevealedAttrGroup
 */
export interface IndyProofRequestedProofRevealedAttrGroup {
  /**
   * Sub-proof index
   * @type {number}
   * @memberof IndyProofRequestedProofRevealedAttrGroup
   */
  sub_proof_index?: number;
  /**
   * Indy proof requested proof revealed attr groups group value
   * @type {{ [key: string]: RawEncoded; }}
   * @memberof IndyProofRequestedProofRevealedAttrGroup
   */
  values?: { [key: string]: RawEncoded };
}

export function IndyProofRequestedProofRevealedAttrGroupFromJSON(
  json: any,
): IndyProofRequestedProofRevealedAttrGroup {
  return IndyProofRequestedProofRevealedAttrGroupFromJSONTyped(json, false);
}

export function IndyProofRequestedProofRevealedAttrGroupFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): IndyProofRequestedProofRevealedAttrGroup {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    sub_proof_index: !exists(json, 'sub_proof_index')
      ? undefined
      : json['sub_proof_index'],
    values: !exists(json, 'values')
      ? undefined
      : mapValues(json['values'], RawEncodedFromJSON),
  };
}

export function IndyProofRequestedProofRevealedAttrGroupToJSON(
  value?: IndyProofRequestedProofRevealedAttrGroup | null,
): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    sub_proof_index: value.sub_proof_index,
    values:
      value.values === undefined
        ? undefined
        : mapValues(value.values, RawEncodedToJSON),
  };
}
