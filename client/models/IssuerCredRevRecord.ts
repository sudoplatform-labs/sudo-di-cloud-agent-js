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
 * @interface IssuerCredRevRecord
 */
export interface IssuerCredRevRecord {
  /**
   * Time of record creation
   * @type {string}
   * @memberof IssuerCredRevRecord
   */
  created_at?: string;
  /**
   * Credential definition identifier
   * @type {string}
   * @memberof IssuerCredRevRecord
   */
  cred_def_id?: string;
  /**
   * Credential exchange record identifier at credential issue
   * @type {string}
   * @memberof IssuerCredRevRecord
   */
  cred_ex_id?: string;
  /**
   * Credential revocation identifier
   * @type {string}
   * @memberof IssuerCredRevRecord
   */
  cred_rev_id?: string;
  /**
   * Issuer credential revocation record identifier
   * @type {string}
   * @memberof IssuerCredRevRecord
   */
  record_id?: string;
  /**
   * Revocation registry identifier
   * @type {string}
   * @memberof IssuerCredRevRecord
   */
  rev_reg_id?: string;
  /**
   * Issue credential revocation record state
   * @type {string}
   * @memberof IssuerCredRevRecord
   */
  state?: string;
  /**
   * Time of last record update
   * @type {string}
   * @memberof IssuerCredRevRecord
   */
  updated_at?: string;
}

export function IssuerCredRevRecordFromJSON(json: any): IssuerCredRevRecord {
  return IssuerCredRevRecordFromJSONTyped(json, false);
}

export function IssuerCredRevRecordFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): IssuerCredRevRecord {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    created_at: !exists(json, 'created_at') ? undefined : json['created_at'],
    cred_def_id: !exists(json, 'cred_def_id') ? undefined : json['cred_def_id'],
    cred_ex_id: !exists(json, 'cred_ex_id') ? undefined : json['cred_ex_id'],
    cred_rev_id: !exists(json, 'cred_rev_id') ? undefined : json['cred_rev_id'],
    record_id: !exists(json, 'record_id') ? undefined : json['record_id'],
    rev_reg_id: !exists(json, 'rev_reg_id') ? undefined : json['rev_reg_id'],
    state: !exists(json, 'state') ? undefined : json['state'],
    updated_at: !exists(json, 'updated_at') ? undefined : json['updated_at'],
  };
}

export function IssuerCredRevRecordToJSON(
  value?: IssuerCredRevRecord | null,
): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    created_at: value.created_at,
    cred_def_id: value.cred_def_id,
    cred_ex_id: value.cred_ex_id,
    cred_rev_id: value.cred_rev_id,
    record_id: value.record_id,
    rev_reg_id: value.rev_reg_id,
    state: value.state,
    updated_at: value.updated_at,
  };
}
