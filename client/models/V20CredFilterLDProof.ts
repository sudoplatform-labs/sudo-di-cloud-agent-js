/**
 * Sudo Decentralized Identity Cloud Agent SDK
 * Provides REST API wrappers for Typescript Agent Controllers using the Sudo Decentralized Identity Cloud Agency Service
 *
 * The version of the OpenAPI document: v0.5.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import {
  LDProofVCDetail,
  LDProofVCDetailFromJSON,
  LDProofVCDetailFromJSONTyped,
  LDProofVCDetailToJSON,
} from './';

/**
 *
 * @export
 * @interface V20CredFilterLDProof
 */
export interface V20CredFilterLDProof {
  /**
   * Credential filter for linked data proof
   * @type {LDProofVCDetail}
   * @memberof V20CredFilterLDProof
   */
  ld_proof: LDProofVCDetail;
}

export function V20CredFilterLDProofFromJSON(json: any): V20CredFilterLDProof {
  return V20CredFilterLDProofFromJSONTyped(json, false);
}

export function V20CredFilterLDProofFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): V20CredFilterLDProof {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    ld_proof: LDProofVCDetailFromJSON(json['ld_proof']),
  };
}

export function V20CredFilterLDProofToJSON(
  value?: V20CredFilterLDProof | null,
): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    ld_proof: LDProofVCDetailToJSON(value.ld_proof),
  };
}