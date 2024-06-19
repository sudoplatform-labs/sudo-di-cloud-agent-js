/**
 * Sudo Decentralized Identity Cloud Agent SDK
 * Provides REST API wrappers for Typescript Agent Controllers using the Sudo Decentralized Identity Cloud Agent Service
 *
 * The version of the OpenAPI document: v0.9.0
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
 * @interface V20CredExRecordLDProof
 */
export interface V20CredExRecordLDProof {
  /**
   * Time of record creation
   * @type {string}
   * @memberof V20CredExRecordLDProof
   */
  created_at?: string;
  /**
   * Corresponding v2.0 credential exchange record identifier
   * @type {string}
   * @memberof V20CredExRecordLDProof
   */
  cred_ex_id?: string;
  /**
   * Record identifier
   * @type {string}
   * @memberof V20CredExRecordLDProof
   */
  cred_ex_ld_proof_id?: string;
  /**
   * Credential identifier stored in wallet
   * @type {string}
   * @memberof V20CredExRecordLDProof
   */
  cred_id_stored?: string;
  /**
   * Current record state
   * @type {string}
   * @memberof V20CredExRecordLDProof
   */
  state?: string;
  /**
   * Time of last record update
   * @type {string}
   * @memberof V20CredExRecordLDProof
   */
  updated_at?: string;
}

export function V20CredExRecordLDProofFromJSON(
  json: any,
): V20CredExRecordLDProof {
  return V20CredExRecordLDProofFromJSONTyped(json, false);
}

export function V20CredExRecordLDProofFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): V20CredExRecordLDProof {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    created_at: !exists(json, 'created_at') ? undefined : json['created_at'],
    cred_ex_id: !exists(json, 'cred_ex_id') ? undefined : json['cred_ex_id'],
    cred_ex_ld_proof_id: !exists(json, 'cred_ex_ld_proof_id')
      ? undefined
      : json['cred_ex_ld_proof_id'],
    cred_id_stored: !exists(json, 'cred_id_stored')
      ? undefined
      : json['cred_id_stored'],
    state: !exists(json, 'state') ? undefined : json['state'],
    updated_at: !exists(json, 'updated_at') ? undefined : json['updated_at'],
  };
}

export function V20CredExRecordLDProofToJSON(
  value?: V20CredExRecordLDProof | null,
): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    created_at: value.created_at,
    cred_ex_id: value.cred_ex_id,
    cred_ex_ld_proof_id: value.cred_ex_ld_proof_id,
    cred_id_stored: value.cred_id_stored,
    state: value.state,
    updated_at: value.updated_at,
  };
}
