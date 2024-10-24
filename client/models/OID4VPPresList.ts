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
  OID4VCIExchangeRecord,
  OID4VCIExchangeRecordFromJSON,
  OID4VCIExchangeRecordFromJSONTyped,
  OID4VCIExchangeRecordToJSON,
} from './';

/**
 *
 * @export
 * @interface OID4VPPresList
 */
export interface OID4VPPresList {
  /**
   * Presentations
   * @type {OID4VCIExchangeRecord}
   * @memberof OID4VPPresList
   */
  results?: OID4VCIExchangeRecord;
}

export function OID4VPPresListFromJSON(json: any): OID4VPPresList {
  return OID4VPPresListFromJSONTyped(json, false);
}

export function OID4VPPresListFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): OID4VPPresList {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    results: !exists(json, 'results')
      ? undefined
      : OID4VCIExchangeRecordFromJSON(json['results']),
  };
}

export function OID4VPPresListToJSON(value?: OID4VPPresList | null): any {
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
