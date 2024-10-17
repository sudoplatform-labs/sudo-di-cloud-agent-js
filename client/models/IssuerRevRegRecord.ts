/**
 * Sudo Decentralized Identity Cloud Agent SDK
 * Provides REST API wrappers for Typescript Agent Controllers using the Sudo Decentralized Identity Cloud Agent Service
 *
 * The version of the OpenAPI document: v0.10.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import {
  IndyRevRegDef,
  IndyRevRegDefFromJSON,
  IndyRevRegDefFromJSONTyped,
  IndyRevRegDefToJSON,
  IndyRevRegEntry,
  IndyRevRegEntryFromJSON,
  IndyRevRegEntryFromJSONTyped,
  IndyRevRegEntryToJSON,
} from './';

/**
 *
 * @export
 * @interface IssuerRevRegRecord
 */
export interface IssuerRevRegRecord {
  /**
   * Time of record creation
   * @type {string}
   * @memberof IssuerRevRegRecord
   */
  created_at?: string;
  /**
   * Credential definition identifier
   * @type {string}
   * @memberof IssuerRevRegRecord
   */
  cred_def_id?: string;
  /**
   * Error message
   * @type {string}
   * @memberof IssuerRevRegRecord
   */
  error_msg?: string;
  /**
   * Issuer DID
   * @type {string}
   * @memberof IssuerRevRegRecord
   */
  issuer_did?: string;
  /**
   * Maximum number of credentials for revocation registry
   * @type {number}
   * @memberof IssuerRevRegRecord
   */
  max_cred_num?: number;
  /**
   * Credential revocation identifier for credential revoked and pending publication to ledger
   * @type {Array<string>}
   * @memberof IssuerRevRegRecord
   */
  pending_pub?: Array<string>;
  /**
   * Issuer revocation registry record identifier
   * @type {string}
   * @memberof IssuerRevRegRecord
   */
  record_id?: string;
  /**
   * Revocation registry type (specify CL_ACCUM)
   * @type {string}
   * @memberof IssuerRevRegRecord
   */
  revoc_def_type?: IssuerRevRegRecordRevocDefTypeEnum;
  /**
   * Revocation registry definition
   * @type {IndyRevRegDef}
   * @memberof IssuerRevRegRecord
   */
  revoc_reg_def?: IndyRevRegDef;
  /**
   * Revocation registry entry
   * @type {IndyRevRegEntry}
   * @memberof IssuerRevRegRecord
   */
  revoc_reg_entry?: IndyRevRegEntry;
  /**
   * Revocation registry identifier
   * @type {string}
   * @memberof IssuerRevRegRecord
   */
  revoc_reg_id?: string;
  /**
   * Issue revocation registry record state
   * @type {string}
   * @memberof IssuerRevRegRecord
   */
  state?: string;
  /**
   * Tag within issuer revocation registry identifier
   * @type {string}
   * @memberof IssuerRevRegRecord
   */
  tag?: string;
  /**
   * Tails hash
   * @type {string}
   * @memberof IssuerRevRegRecord
   */
  tails_hash?: string;
  /**
   * Local path to tails file
   * @type {string}
   * @memberof IssuerRevRegRecord
   */
  tails_local_path?: string;
  /**
   * Public URI for tails file
   * @type {string}
   * @memberof IssuerRevRegRecord
   */
  tails_public_uri?: string;
  /**
   * Time of last record update
   * @type {string}
   * @memberof IssuerRevRegRecord
   */
  updated_at?: string;
}

/**
 * @export
 * @enum {string}
 */
export enum IssuerRevRegRecordRevocDefTypeEnum {
  ClAccum = 'CL_ACCUM',
}

export function IssuerRevRegRecordFromJSON(json: any): IssuerRevRegRecord {
  return IssuerRevRegRecordFromJSONTyped(json, false);
}

export function IssuerRevRegRecordFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): IssuerRevRegRecord {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    created_at: !exists(json, 'created_at') ? undefined : json['created_at'],
    cred_def_id: !exists(json, 'cred_def_id') ? undefined : json['cred_def_id'],
    error_msg: !exists(json, 'error_msg') ? undefined : json['error_msg'],
    issuer_did: !exists(json, 'issuer_did') ? undefined : json['issuer_did'],
    max_cred_num: !exists(json, 'max_cred_num')
      ? undefined
      : json['max_cred_num'],
    pending_pub: !exists(json, 'pending_pub') ? undefined : json['pending_pub'],
    record_id: !exists(json, 'record_id') ? undefined : json['record_id'],
    revoc_def_type: !exists(json, 'revoc_def_type')
      ? undefined
      : json['revoc_def_type'],
    revoc_reg_def: !exists(json, 'revoc_reg_def')
      ? undefined
      : IndyRevRegDefFromJSON(json['revoc_reg_def']),
    revoc_reg_entry: !exists(json, 'revoc_reg_entry')
      ? undefined
      : IndyRevRegEntryFromJSON(json['revoc_reg_entry']),
    revoc_reg_id: !exists(json, 'revoc_reg_id')
      ? undefined
      : json['revoc_reg_id'],
    state: !exists(json, 'state') ? undefined : json['state'],
    tag: !exists(json, 'tag') ? undefined : json['tag'],
    tails_hash: !exists(json, 'tails_hash') ? undefined : json['tails_hash'],
    tails_local_path: !exists(json, 'tails_local_path')
      ? undefined
      : json['tails_local_path'],
    tails_public_uri: !exists(json, 'tails_public_uri')
      ? undefined
      : json['tails_public_uri'],
    updated_at: !exists(json, 'updated_at') ? undefined : json['updated_at'],
  };
}

export function IssuerRevRegRecordToJSON(
  value?: IssuerRevRegRecord | null,
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
    error_msg: value.error_msg,
    issuer_did: value.issuer_did,
    max_cred_num: value.max_cred_num,
    pending_pub: value.pending_pub,
    record_id: value.record_id,
    revoc_def_type: value.revoc_def_type,
    revoc_reg_def: IndyRevRegDefToJSON(value.revoc_reg_def),
    revoc_reg_entry: IndyRevRegEntryToJSON(value.revoc_reg_entry),
    revoc_reg_id: value.revoc_reg_id,
    state: value.state,
    tag: value.tag,
    tails_hash: value.tails_hash,
    tails_local_path: value.tails_local_path,
    tails_public_uri: value.tails_public_uri,
    updated_at: value.updated_at,
  };
}
