/**
 * Sudo Decentralized Identity Cloud Agent SDK
 * Provides REST API wrappers for Typescript Agent Controllers using the Sudo Decentralized Identity Cloud Agent Service
 *
 * The version of the OpenAPI document: v100.0.100
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import {
  OID4VCIExchangeRecord,
  OID4VCIExchangeRecordFromJSON,
  OID4VCIExchangeRecordFromJSONTyped,
  OID4VCIExchangeRecordToJSON,
} from './';

/**
 *
 * @export
 * @interface ExchangeRecordList
 */
export interface ExchangeRecordList {
  /**
   * Exchange records
   * @type {OID4VCIExchangeRecord}
   * @memberof ExchangeRecordList
   */
  results?: OID4VCIExchangeRecord;
}

export function ExchangeRecordListFromJSON(json: any): ExchangeRecordList {
  return ExchangeRecordListFromJSONTyped(json, false);
}

export function ExchangeRecordListFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): ExchangeRecordList {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    results: !exists(json, 'results')
      ? undefined
      : OID4VCIExchangeRecordFromJSON(json['results']),
  };
}

export function ExchangeRecordListToJSON(
  value?: ExchangeRecordList | null,
): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    results: OID4VCIExchangeRecordToJSON(value.results),
  };
}
