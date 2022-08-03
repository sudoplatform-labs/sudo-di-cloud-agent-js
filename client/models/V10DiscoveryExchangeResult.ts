/**
 * Sudo Decentralized Identity Cloud Agent SDK
 * Provides REST API wrappers for Typescript Agent Controllers using the Sudo Decentralized Identity Cloud Agent Service
 *
 * The version of the OpenAPI document: v0.6.4
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
 * @interface V10DiscoveryExchangeResult
 */
export interface V10DiscoveryExchangeResult {
  /**
   * Discover Features v1.0 exchange record
   * @type {V10DiscoveryRecord}
   * @memberof V10DiscoveryExchangeResult
   */
  results?: V10DiscoveryRecord;
}

export function V10DiscoveryExchangeResultFromJSON(
  json: any,
): V10DiscoveryExchangeResult {
  return V10DiscoveryExchangeResultFromJSONTyped(json, false);
}

export function V10DiscoveryExchangeResultFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): V10DiscoveryExchangeResult {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    results: !exists(json, 'results')
      ? undefined
      : V10DiscoveryRecordFromJSON(json['results']),
  };
}

export function V10DiscoveryExchangeResultToJSON(
  value?: V10DiscoveryExchangeResult | null,
): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    results: V10DiscoveryRecordToJSON(value.results),
  };
}
