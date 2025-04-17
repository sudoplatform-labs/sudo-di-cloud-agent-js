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
  IndyProofIdentifier,
  IndyProofIdentifierFromJSON,
  IndyProofIdentifierFromJSONTyped,
  IndyProofIdentifierToJSON,
  IndyProofProof,
  IndyProofProofFromJSON,
  IndyProofProofFromJSONTyped,
  IndyProofProofToJSON,
  IndyProofRequestedProof,
  IndyProofRequestedProofFromJSON,
  IndyProofRequestedProofFromJSONTyped,
  IndyProofRequestedProofToJSON,
} from './';

/**
 *
 * @export
 * @interface IndyProof
 */
export interface IndyProof {
  /**
   * Indy proof.identifiers content
   * @type {Array<IndyProofIdentifier>}
   * @memberof IndyProof
   */
  identifiers?: Array<IndyProofIdentifier>;
  /**
   * Indy proof.proof content
   * @type {IndyProofProof}
   * @memberof IndyProof
   */
  proof?: IndyProofProof;
  /**
   * Indy proof.requested_proof content
   * @type {IndyProofRequestedProof}
   * @memberof IndyProof
   */
  requested_proof?: IndyProofRequestedProof;
}

export function IndyProofFromJSON(json: any): IndyProof {
  return IndyProofFromJSONTyped(json, false);
}

export function IndyProofFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): IndyProof {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    identifiers: !exists(json, 'identifiers')
      ? undefined
      : (json['identifiers'] as Array<any>).map(IndyProofIdentifierFromJSON),
    proof: !exists(json, 'proof')
      ? undefined
      : IndyProofProofFromJSON(json['proof']),
    requested_proof: !exists(json, 'requested_proof')
      ? undefined
      : IndyProofRequestedProofFromJSON(json['requested_proof']),
  };
}

export function IndyProofToJSON(value?: IndyProof | null): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    identifiers:
      value.identifiers === undefined
        ? undefined
        : (value.identifiers as Array<any>).map(IndyProofIdentifierToJSON),
    proof: IndyProofProofToJSON(value.proof),
    requested_proof: IndyProofRequestedProofToJSON(value.requested_proof),
  };
}
