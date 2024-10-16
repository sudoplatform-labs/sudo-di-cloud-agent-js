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
  V20DiscoveryRecord,
  V20DiscoveryRecordFromJSON,
  V20DiscoveryRecordFromJSONTyped,
  V20DiscoveryRecordToJSON,
} from './';

/**
 *
 * @export
 * @interface V20DiscoveryExchangeListResult
 */
export interface V20DiscoveryExchangeListResult {
  /**
   *
   * @type {Array<V20DiscoveryRecord>}
   * @memberof V20DiscoveryExchangeListResult
   */
  results?: Array<V20DiscoveryRecord>;
}

export function V20DiscoveryExchangeListResultFromJSON(
  json: any,
): V20DiscoveryExchangeListResult {
  return V20DiscoveryExchangeListResultFromJSONTyped(json, false);
}

export function V20DiscoveryExchangeListResultFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): V20DiscoveryExchangeListResult {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    results: !exists(json, 'results')
      ? undefined
      : (json['results'] as Array<any>).map(V20DiscoveryRecordFromJSON),
  };
}

export function V20DiscoveryExchangeListResultToJSON(
  value?: V20DiscoveryExchangeListResult | null,
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
        : (value.results as Array<any>).map(V20DiscoveryRecordToJSON),
  };
}
