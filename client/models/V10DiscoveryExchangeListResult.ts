/**
 * Sudo Decentralized Identity Cloud Agent SDK
 * Provides REST API wrappers for Typescript Agent Controllers using the Sudo Decentralized Identity Cloud Agent Service
 *
 * The version of the OpenAPI document: v0.7.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import {
  V10DiscoveryRecord,
  V10DiscoveryRecordFromJSON,
  V10DiscoveryRecordFromJSONTyped,
  V10DiscoveryRecordToJSON,
} from './';

/**
 *
 * @export
 * @interface V10DiscoveryExchangeListResult
 */
export interface V10DiscoveryExchangeListResult {
  /**
   *
   * @type {Array<V10DiscoveryRecord>}
   * @memberof V10DiscoveryExchangeListResult
   */
  results?: Array<V10DiscoveryRecord>;
}

export function V10DiscoveryExchangeListResultFromJSON(
  json: any,
): V10DiscoveryExchangeListResult {
  return V10DiscoveryExchangeListResultFromJSONTyped(json, false);
}

export function V10DiscoveryExchangeListResultFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): V10DiscoveryExchangeListResult {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    results: !exists(json, 'results')
      ? undefined
      : (json['results'] as Array<any>).map(V10DiscoveryRecordFromJSON),
  };
}

export function V10DiscoveryExchangeListResultToJSON(
  value?: V10DiscoveryExchangeListResult | null,
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
        : (value.results as Array<any>).map(V10DiscoveryRecordToJSON),
  };
}
