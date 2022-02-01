/**
 * Sudo Decentralized Identity Cloud Agent SDK
 * Provides REST API wrappers for Typescript Agent Controllers using the Sudo Decentralized Identity Cloud Agent Service
 *
 * The version of the OpenAPI document: v0.6.3
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import {
  V20CredExRecord,
  V20CredExRecordFromJSON,
  V20CredExRecordFromJSONTyped,
  V20CredExRecordToJSON,
  V20CredExRecordIndy,
  V20CredExRecordIndyFromJSON,
  V20CredExRecordIndyFromJSONTyped,
  V20CredExRecordIndyToJSON,
  V20CredExRecordLDProof,
  V20CredExRecordLDProofFromJSON,
  V20CredExRecordLDProofFromJSONTyped,
  V20CredExRecordLDProofToJSON,
} from './';

/**
 *
 * @export
 * @interface V20CredExRecordDetail
 */
export interface V20CredExRecordDetail {
  /**
   * Credential exchange record
   * @type {V20CredExRecord}
   * @memberof V20CredExRecordDetail
   */
  cred_ex_record?: V20CredExRecord;
  /**
   *
   * @type {V20CredExRecordIndy}
   * @memberof V20CredExRecordDetail
   */
  indy?: V20CredExRecordIndy;
  /**
   *
   * @type {V20CredExRecordLDProof}
   * @memberof V20CredExRecordDetail
   */
  ld_proof?: V20CredExRecordLDProof;
}

export function V20CredExRecordDetailFromJSON(
  json: any,
): V20CredExRecordDetail {
  return V20CredExRecordDetailFromJSONTyped(json, false);
}

export function V20CredExRecordDetailFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): V20CredExRecordDetail {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    cred_ex_record: !exists(json, 'cred_ex_record')
      ? undefined
      : V20CredExRecordFromJSON(json['cred_ex_record']),
    indy: !exists(json, 'indy')
      ? undefined
      : V20CredExRecordIndyFromJSON(json['indy']),
    ld_proof: !exists(json, 'ld_proof')
      ? undefined
      : V20CredExRecordLDProofFromJSON(json['ld_proof']),
  };
}

export function V20CredExRecordDetailToJSON(
  value?: V20CredExRecordDetail | null,
): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    cred_ex_record: V20CredExRecordToJSON(value.cred_ex_record),
    indy: V20CredExRecordIndyToJSON(value.indy),
    ld_proof: V20CredExRecordLDProofToJSON(value.ld_proof),
  };
}
