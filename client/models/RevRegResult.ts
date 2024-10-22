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
  IssuerRevRegRecord,
  IssuerRevRegRecordFromJSON,
  IssuerRevRegRecordFromJSONTyped,
  IssuerRevRegRecordToJSON,
} from './';

/**
 *
 * @export
 * @interface RevRegResult
 */
export interface RevRegResult {
  /**
   *
   * @type {IssuerRevRegRecord}
   * @memberof RevRegResult
   */
  result?: IssuerRevRegRecord;
}

export function RevRegResultFromJSON(json: any): RevRegResult {
  return RevRegResultFromJSONTyped(json, false);
}

export function RevRegResultFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): RevRegResult {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    result: !exists(json, 'result')
      ? undefined
      : IssuerRevRegRecordFromJSON(json['result']),
  };
}

export function RevRegResultToJSON(value?: RevRegResult | null): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    result: IssuerRevRegRecordToJSON(value.result),
  };
}
