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
  V20PresExRecord,
  V20PresExRecordFromJSON,
  V20PresExRecordFromJSONTyped,
  V20PresExRecordToJSON,
} from './';

/**
 *
 * @export
 * @interface V20PresExRecordList
 */
export interface V20PresExRecordList {
  /**
   * Presentation exchange records
   * @type {Array<V20PresExRecord>}
   * @memberof V20PresExRecordList
   */
  results?: Array<V20PresExRecord>;
}

export function V20PresExRecordListFromJSON(json: any): V20PresExRecordList {
  return V20PresExRecordListFromJSONTyped(json, false);
}

export function V20PresExRecordListFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): V20PresExRecordList {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    results: !exists(json, 'results')
      ? undefined
      : (json['results'] as Array<any>).map(V20PresExRecordFromJSON),
  };
}

export function V20PresExRecordListToJSON(
  value?: V20PresExRecordList | null,
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
        : (value.results as Array<any>).map(V20PresExRecordToJSON),
  };
}
