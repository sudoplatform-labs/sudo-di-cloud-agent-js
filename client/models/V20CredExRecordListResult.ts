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
  V20CredExRecordDetail,
  V20CredExRecordDetailFromJSON,
  V20CredExRecordDetailFromJSONTyped,
  V20CredExRecordDetailToJSON,
} from './';

/**
 *
 * @export
 * @interface V20CredExRecordListResult
 */
export interface V20CredExRecordListResult {
  /**
   * Credential exchange records and corresponding detail records
   * @type {Array<V20CredExRecordDetail>}
   * @memberof V20CredExRecordListResult
   */
  results?: Array<V20CredExRecordDetail>;
}

export function V20CredExRecordListResultFromJSON(
  json: any,
): V20CredExRecordListResult {
  return V20CredExRecordListResultFromJSONTyped(json, false);
}

export function V20CredExRecordListResultFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): V20CredExRecordListResult {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    results: !exists(json, 'results')
      ? undefined
      : (json['results'] as Array<any>).map(V20CredExRecordDetailFromJSON),
  };
}

export function V20CredExRecordListResultToJSON(
  value?: V20CredExRecordListResult | null,
): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    results:
      value.results === undefined
        ? undefined
        : (value.results as Array<any>).map(V20CredExRecordDetailToJSON),
  };
}
