/**
 * Sudo Decentralized Identity Cloud Agent SDK
 * Provides REST API wrappers for Typescript Agent Controllers using the Sudo Decentralized Identity Cloud Agency Service
 *
 * The version of the OpenAPI document: v0.4.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import {
  IssuerCredRevRecord,
  IssuerCredRevRecordFromJSON,
  IssuerCredRevRecordFromJSONTyped,
  IssuerCredRevRecordToJSON,
} from './';

/**
 *
 * @export
 * @interface CredRevRecordResult
 */
export interface CredRevRecordResult {
  /**
   *
   * @type {IssuerCredRevRecord}
   * @memberof CredRevRecordResult
   */
  result?: IssuerCredRevRecord;
}

export function CredRevRecordResultFromJSON(json: any): CredRevRecordResult {
  return CredRevRecordResultFromJSONTyped(json, false);
}

export function CredRevRecordResultFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): CredRevRecordResult {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    result: !exists(json, 'result')
      ? undefined
      : IssuerCredRevRecordFromJSON(json['result']),
  };
}

export function CredRevRecordResultToJSON(
  value?: CredRevRecordResult | null,
): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    result: IssuerCredRevRecordToJSON(value.result),
  };
}
