/**
 * Sudo Decentralized Identity Cloud Agent SDK
 * Provides REST API wrappers for Typescript Agent Controllers using the Sudo Decentralized Identity Cloud Agency Service
 *
 * The version of the OpenAPI document: v0.6.1
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
 * @interface IndyCredRequest
 */
export interface IndyCredRequest {
  /**
   * Blinded master secret
   * @type {object}
   * @memberof IndyCredRequest
   */
  blinded_ms: object;
  /**
   * Blinded master secret correctness proof
   * @type {object}
   * @memberof IndyCredRequest
   */
  blinded_ms_correctness_proof: object;
  /**
   * Credential definition identifier
   * @type {string}
   * @memberof IndyCredRequest
   */
  cred_def_id: string;
  /**
   * Nonce in credential request
   * @type {string}
   * @memberof IndyCredRequest
   */
  nonce: string;
  /**
   * Prover DID
   * @type {string}
   * @memberof IndyCredRequest
   */
  prover_did?: string;
}

export function IndyCredRequestFromJSON(json: any): IndyCredRequest {
  return IndyCredRequestFromJSONTyped(json, false);
}

export function IndyCredRequestFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): IndyCredRequest {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    blinded_ms: json['blinded_ms'],
    blinded_ms_correctness_proof: json['blinded_ms_correctness_proof'],
    cred_def_id: json['cred_def_id'],
    nonce: json['nonce'],
    prover_did: !exists(json, 'prover_did') ? undefined : json['prover_did'],
  };
}

export function IndyCredRequestToJSON(value?: IndyCredRequest | null): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    blinded_ms: value.blinded_ms,
    blinded_ms_correctness_proof: value.blinded_ms_correctness_proof,
    cred_def_id: value.cred_def_id,
    nonce: value.nonce,
    prover_did: value.prover_did,
  };
}
