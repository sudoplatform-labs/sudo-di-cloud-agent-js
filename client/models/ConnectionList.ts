/**
 * Sudo Decentralized Identity Cloud Agent SDK
 * Provides REST API wrappers for Typescript Agent Controllers using the Sudo Decentralized Identity Cloud Agent Service
 *
 * The version of the OpenAPI document: v0.9.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import {
  ConnRecord,
  ConnRecordFromJSON,
  ConnRecordFromJSONTyped,
  ConnRecordToJSON,
} from './';

/**
 *
 * @export
 * @interface ConnectionList
 */
export interface ConnectionList {
  /**
   * List of connection records
   * @type {Array<ConnRecord>}
   * @memberof ConnectionList
   */
  results: Array<ConnRecord>;
}

export function ConnectionListFromJSON(json: any): ConnectionList {
  return ConnectionListFromJSONTyped(json, false);
}

export function ConnectionListFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): ConnectionList {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    results: (json['results'] as Array<any>).map(ConnRecordFromJSON),
  };
}

export function ConnectionListToJSON(value?: ConnectionList | null): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    results: (value.results as Array<any>).map(ConnRecordToJSON),
  };
}
