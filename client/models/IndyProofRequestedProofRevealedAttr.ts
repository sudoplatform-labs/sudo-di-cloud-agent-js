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
 * @interface IndyProofRequestedProofRevealedAttr
 */
export interface IndyProofRequestedProofRevealedAttr {
  /**
   * Encoded value
   * @type {string}
   * @memberof IndyProofRequestedProofRevealedAttr
   */
  encoded?: string;
  /**
   * Raw value
   * @type {string}
   * @memberof IndyProofRequestedProofRevealedAttr
   */
  raw?: string;
  /**
   * Sub-proof index
   * @type {number}
   * @memberof IndyProofRequestedProofRevealedAttr
   */
  sub_proof_index?: number;
}

export function IndyProofRequestedProofRevealedAttrFromJSON(
  json: any,
): IndyProofRequestedProofRevealedAttr {
  return IndyProofRequestedProofRevealedAttrFromJSONTyped(json, false);
}

export function IndyProofRequestedProofRevealedAttrFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): IndyProofRequestedProofRevealedAttr {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    encoded: !exists(json, 'encoded') ? undefined : json['encoded'],
    raw: !exists(json, 'raw') ? undefined : json['raw'],
    sub_proof_index: !exists(json, 'sub_proof_index')
      ? undefined
      : json['sub_proof_index'],
  };
}

export function IndyProofRequestedProofRevealedAttrToJSON(
  value?: IndyProofRequestedProofRevealedAttr | null,
): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    encoded: value.encoded,
    raw: value.raw,
    sub_proof_index: value.sub_proof_index,
  };
}
