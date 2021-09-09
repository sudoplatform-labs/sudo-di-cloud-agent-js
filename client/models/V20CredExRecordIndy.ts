/**
 * Sudo Decentralized Identity Cloud Agent SDK
 * Provides REST API wrappers for Typescript Agent Controllers using the Sudo Decentralized Identity Cloud Agency Service
 *
 * The version of the OpenAPI document: v0.5.2
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
 * @interface V20CredExRecordIndy
 */
export interface V20CredExRecordIndy {
  /**
   * Time of record creation
   * @type {string}
   * @memberof V20CredExRecordIndy
   */
  created_at?: string;
  /**
   * Corresponding v2.0 credential exchange record identifier
   * @type {string}
   * @memberof V20CredExRecordIndy
   */
  cred_ex_id?: string;
  /**
   * Record identifier
   * @type {string}
   * @memberof V20CredExRecordIndy
   */
  cred_ex_indy_id?: string;
  /**
   * Credential identifier stored in wallet
   * @type {string}
   * @memberof V20CredExRecordIndy
   */
  cred_id_stored?: string;
  /**
   * Credential request metadata for indy holder
   * @type {object}
   * @memberof V20CredExRecordIndy
   */
  cred_request_metadata?: object;
  /**
   * Credential revocation identifier within revocation registry
   * @type {string}
   * @memberof V20CredExRecordIndy
   */
  cred_rev_id?: string;
  /**
   * Revocation registry identifier
   * @type {string}
   * @memberof V20CredExRecordIndy
   */
  rev_reg_id?: string;
  /**
   * Current record state
   * @type {string}
   * @memberof V20CredExRecordIndy
   */
  state?: string;
  /**
   * Time of last record update
   * @type {string}
   * @memberof V20CredExRecordIndy
   */
  updated_at?: string;
}

export function V20CredExRecordIndyFromJSON(json: any): V20CredExRecordIndy {
  return V20CredExRecordIndyFromJSONTyped(json, false);
}

export function V20CredExRecordIndyFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): V20CredExRecordIndy {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    created_at: !exists(json, 'created_at') ? undefined : json['created_at'],
    cred_ex_id: !exists(json, 'cred_ex_id') ? undefined : json['cred_ex_id'],
    cred_ex_indy_id: !exists(json, 'cred_ex_indy_id')
      ? undefined
      : json['cred_ex_indy_id'],
    cred_id_stored: !exists(json, 'cred_id_stored')
      ? undefined
      : json['cred_id_stored'],
    cred_request_metadata: !exists(json, 'cred_request_metadata')
      ? undefined
      : json['cred_request_metadata'],
    cred_rev_id: !exists(json, 'cred_rev_id') ? undefined : json['cred_rev_id'],
    rev_reg_id: !exists(json, 'rev_reg_id') ? undefined : json['rev_reg_id'],
    state: !exists(json, 'state') ? undefined : json['state'],
    updated_at: !exists(json, 'updated_at') ? undefined : json['updated_at'],
  };
}

export function V20CredExRecordIndyToJSON(
  value?: V20CredExRecordIndy | null,
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
    cred_ex_indy_id: value.cred_ex_indy_id,
    cred_id_stored: value.cred_id_stored,
    cred_request_metadata: value.cred_request_metadata,
    cred_rev_id: value.cred_rev_id,
    rev_reg_id: value.rev_reg_id,
    state: value.state,
    updated_at: value.updated_at,
  };
}
