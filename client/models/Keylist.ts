/**
 * Sudo Decentralized Identity Cloud Agent SDK
 * Provides REST API wrappers for Typescript Agent Controllers using the Sudo Decentralized Identity Cloud Agent Service
 *
 * The version of the OpenAPI document: v0.7.1
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import {
  RouteRecord,
  RouteRecordFromJSON,
  RouteRecordFromJSONTyped,
  RouteRecordToJSON,
} from './';

/**
 *
 * @export
 * @interface Keylist
 */
export interface Keylist {
  /**
   * List of keylist records
   * @type {Array<RouteRecord>}
   * @memberof Keylist
   */
  results?: Array<RouteRecord>;
}

export function KeylistFromJSON(json: any): Keylist {
  return KeylistFromJSONTyped(json, false);
}

export function KeylistFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): Keylist {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    results: !exists(json, 'results')
      ? undefined
      : (json['results'] as Array<any>).map(RouteRecordFromJSON),
  };
}

export function KeylistToJSON(value?: Keylist | null): any {
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
        : (value.results as Array<any>).map(RouteRecordToJSON),
  };
}
