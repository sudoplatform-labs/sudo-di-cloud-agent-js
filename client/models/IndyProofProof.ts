/**
 * Sudo Decentralized Identity Cloud Agent SDK
 * Provides REST API wrappers for Typescript Agent Controllers using the Sudo Decentralized Identity Cloud Agent Service
 *
 * The version of the OpenAPI document: v0.10.1
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import {
  IndyProofProofAggregatedProof,
  IndyProofProofAggregatedProofFromJSON,
  IndyProofProofAggregatedProofFromJSONTyped,
  IndyProofProofAggregatedProofToJSON,
  IndyProofProofProofsProof,
  IndyProofProofProofsProofFromJSON,
  IndyProofProofProofsProofFromJSONTyped,
  IndyProofProofProofsProofToJSON,
} from './';

/**
 *
 * @export
 * @interface IndyProofProof
 */
export interface IndyProofProof {
  /**
   * Indy proof aggregated proof
   * @type {IndyProofProofAggregatedProof}
   * @memberof IndyProofProof
   */
  aggregated_proof?: IndyProofProofAggregatedProof;
  /**
   * Indy proof proofs
   * @type {Array<IndyProofProofProofsProof>}
   * @memberof IndyProofProof
   */
  proofs?: Array<IndyProofProofProofsProof>;
}

export function IndyProofProofFromJSON(json: any): IndyProofProof {
  return IndyProofProofFromJSONTyped(json, false);
}

export function IndyProofProofFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): IndyProofProof {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    aggregated_proof: !exists(json, 'aggregated_proof')
      ? undefined
      : IndyProofProofAggregatedProofFromJSON(json['aggregated_proof']),
    proofs: !exists(json, 'proofs')
      ? undefined
      : (json['proofs'] as Array<any>).map(IndyProofProofProofsProofFromJSON),
  };
}

export function IndyProofProofToJSON(value?: IndyProofProof | null): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    aggregated_proof: IndyProofProofAggregatedProofToJSON(
      value.aggregated_proof,
    ),
    proofs:
      value.proofs === undefined
        ? undefined
        : (value.proofs as Array<any>).map(IndyProofProofProofsProofToJSON),
  };
}
