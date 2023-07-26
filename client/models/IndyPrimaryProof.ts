/**
 * Sudo Decentralized Identity Cloud Agent SDK
 * Provides REST API wrappers for Typescript Agent Controllers using the Sudo Decentralized Identity Cloud Agent Service
 *
 * The version of the OpenAPI document: v0.6.8
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import {
  IndyEQProof,
  IndyEQProofFromJSON,
  IndyEQProofFromJSONTyped,
  IndyEQProofToJSON,
  IndyGEProof,
  IndyGEProofFromJSON,
  IndyGEProofFromJSONTyped,
  IndyGEProofToJSON,
} from './';

/**
 *
 * @export
 * @interface IndyPrimaryProof
 */
export interface IndyPrimaryProof {
  /**
   * Indy equality proof
   * @type {IndyEQProof}
   * @memberof IndyPrimaryProof
   */
  eq_proof?: IndyEQProof | null;
  /**
   * Indy GE proofs
   * @type {Array<IndyGEProof>}
   * @memberof IndyPrimaryProof
   */
  ge_proofs?: Array<IndyGEProof> | null;
}

export function IndyPrimaryProofFromJSON(json: any): IndyPrimaryProof {
  return IndyPrimaryProofFromJSONTyped(json, false);
}

export function IndyPrimaryProofFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): IndyPrimaryProof {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    eq_proof: !exists(json, 'eq_proof')
      ? undefined
      : IndyEQProofFromJSON(json['eq_proof']),
    ge_proofs: !exists(json, 'ge_proofs')
      ? undefined
      : json['ge_proofs'] === null
      ? null
      : (json['ge_proofs'] as Array<any>).map(IndyGEProofFromJSON),
  };
}

export function IndyPrimaryProofToJSON(value?: IndyPrimaryProof | null): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    eq_proof: IndyEQProofToJSON(value.eq_proof),
    ge_proofs:
      value.ge_proofs === undefined
        ? undefined
        : value.ge_proofs === null
        ? null
        : (value.ge_proofs as Array<any>).map(IndyGEProofToJSON),
  };
}
