/**
 * Sudo Decentralized Identity Cloud Agent SDK
 * Provides REST API wrappers for Typescript Agent Controllers using the Sudo Decentralized Identity Cloud Agent Service
 *
 * The version of the OpenAPI document: v0.6.4
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import {
  AMLRecord,
  AMLRecordFromJSON,
  AMLRecordFromJSONTyped,
  AMLRecordToJSON,
  TAAAcceptance,
  TAAAcceptanceFromJSON,
  TAAAcceptanceFromJSONTyped,
  TAAAcceptanceToJSON,
  TAARecord,
  TAARecordFromJSON,
  TAARecordFromJSONTyped,
  TAARecordToJSON,
} from './';

/**
 *
 * @export
 * @interface TAAInfo
 */
export interface TAAInfo {
  /**
   *
   * @type {AMLRecord}
   * @memberof TAAInfo
   */
  aml_record?: AMLRecord;
  /**
   *
   * @type {TAAAcceptance}
   * @memberof TAAInfo
   */
  taa_accepted?: TAAAcceptance;
  /**
   *
   * @type {TAARecord}
   * @memberof TAAInfo
   */
  taa_record?: TAARecord;
  /**
   *
   * @type {boolean}
   * @memberof TAAInfo
   */
  taa_required?: boolean;
}

export function TAAInfoFromJSON(json: any): TAAInfo {
  return TAAInfoFromJSONTyped(json, false);
}

export function TAAInfoFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): TAAInfo {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    aml_record: !exists(json, 'aml_record')
      ? undefined
      : AMLRecordFromJSON(json['aml_record']),
    taa_accepted: !exists(json, 'taa_accepted')
      ? undefined
      : TAAAcceptanceFromJSON(json['taa_accepted']),
    taa_record: !exists(json, 'taa_record')
      ? undefined
      : TAARecordFromJSON(json['taa_record']),
    taa_required: !exists(json, 'taa_required')
      ? undefined
      : json['taa_required'],
  };
}

export function TAAInfoToJSON(value?: TAAInfo | null): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    aml_record: AMLRecordToJSON(value.aml_record),
    taa_accepted: TAAAcceptanceToJSON(value.taa_accepted),
    taa_record: TAARecordToJSON(value.taa_record),
    taa_required: value.taa_required,
  };
}
