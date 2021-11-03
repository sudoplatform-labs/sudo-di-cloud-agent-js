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
import {
  IndyNonRevocProof,
  IndyNonRevocProofFromJSON,
  IndyNonRevocProofFromJSONTyped,
  IndyNonRevocProofToJSON,
  IndyPrimaryProof,
  IndyPrimaryProofFromJSON,
  IndyPrimaryProofFromJSONTyped,
  IndyPrimaryProofToJSON,
} from './';

/**
 *
 * @export
 * @interface IndyProofProofProofsProof
 */
export interface IndyProofProofProofsProof {
  /**
   * Indy non-revocation proof
   * @type {IndyNonRevocProof}
   * @memberof IndyProofProofProofsProof
   */
  non_revoc_proof?: IndyNonRevocProof | null;
  /**
   * Indy primary proof
   * @type {IndyPrimaryProof}
   * @memberof IndyProofProofProofsProof
   */
  primary_proof?: IndyPrimaryProof;
}

export function IndyProofProofProofsProofFromJSON(
  json: any,
): IndyProofProofProofsProof {
  return IndyProofProofProofsProofFromJSONTyped(json, false);
}

export function IndyProofProofProofsProofFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): IndyProofProofProofsProof {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    non_revoc_proof: !exists(json, 'non_revoc_proof')
      ? undefined
      : IndyNonRevocProofFromJSON(json['non_revoc_proof']),
    primary_proof: !exists(json, 'primary_proof')
      ? undefined
      : IndyPrimaryProofFromJSON(json['primary_proof']),
  };
}

export function IndyProofProofProofsProofToJSON(
  value?: IndyProofProofProofsProof | null,
): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    non_revoc_proof: IndyNonRevocProofToJSON(value.non_revoc_proof),
    primary_proof: IndyPrimaryProofToJSON(value.primary_proof),
  };
}
