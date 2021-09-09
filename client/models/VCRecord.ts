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
/**
 *
 * @export
 * @interface VCRecord
 */
export interface VCRecord {
  /**
   *
   * @type {Array<string>}
   * @memberof VCRecord
   */
  contexts?: Array<string>;
  /**
   *
   * @type {{ [key: string]: string; }}
   * @memberof VCRecord
   */
  cred_tags?: { [key: string]: string };
  /**
   * (JSON-serializable) credential value
   * @type {object}
   * @memberof VCRecord
   */
  cred_value?: object;
  /**
   *
   * @type {Array<string>}
   * @memberof VCRecord
   */
  expanded_types?: Array<string>;
  /**
   * Credential identifier
   * @type {string}
   * @memberof VCRecord
   */
  given_id?: string;
  /**
   * Issuer identifier
   * @type {string}
   * @memberof VCRecord
   */
  issuer_id?: string;
  /**
   *
   * @type {Array<string>}
   * @memberof VCRecord
   */
  proof_types?: Array<string>;
  /**
   * Record identifier
   * @type {string}
   * @memberof VCRecord
   */
  record_id?: string;
  /**
   *
   * @type {Array<string>}
   * @memberof VCRecord
   */
  schema_ids?: Array<string>;
  /**
   *
   * @type {Array<string>}
   * @memberof VCRecord
   */
  subject_ids?: Array<string>;
}

export function VCRecordFromJSON(json: any): VCRecord {
  return VCRecordFromJSONTyped(json, false);
}

export function VCRecordFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): VCRecord {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    contexts: !exists(json, 'contexts') ? undefined : json['contexts'],
    cred_tags: !exists(json, 'cred_tags') ? undefined : json['cred_tags'],
    cred_value: !exists(json, 'cred_value') ? undefined : json['cred_value'],
    expanded_types: !exists(json, 'expanded_types')
      ? undefined
      : json['expanded_types'],
    given_id: !exists(json, 'given_id') ? undefined : json['given_id'],
    issuer_id: !exists(json, 'issuer_id') ? undefined : json['issuer_id'],
    proof_types: !exists(json, 'proof_types') ? undefined : json['proof_types'],
    record_id: !exists(json, 'record_id') ? undefined : json['record_id'],
    schema_ids: !exists(json, 'schema_ids') ? undefined : json['schema_ids'],
    subject_ids: !exists(json, 'subject_ids') ? undefined : json['subject_ids'],
  };
}

export function VCRecordToJSON(value?: VCRecord | null): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    contexts: value.contexts,
    cred_tags: value.cred_tags,
    cred_value: value.cred_value,
    expanded_types: value.expanded_types,
    given_id: value.given_id,
    issuer_id: value.issuer_id,
    proof_types: value.proof_types,
    record_id: value.record_id,
    schema_ids: value.schema_ids,
    subject_ids: value.subject_ids,
  };
}
