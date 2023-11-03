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
  Disclosures,
  DisclosuresFromJSON,
  DisclosuresFromJSONTyped,
  DisclosuresToJSON,
  Queries,
  QueriesFromJSON,
  QueriesFromJSONTyped,
  QueriesToJSON,
} from './';

/**
 *
 * @export
 * @interface V20DiscoveryRecord
 */
export interface V20DiscoveryRecord {
  /**
   * Connection identifier
   * @type {string}
   * @memberof V20DiscoveryRecord
   */
  connection_id?: string;
  /**
   * Time of record creation
   * @type {string}
   * @memberof V20DiscoveryRecord
   */
  created_at?: string;
  /**
   * Disclosures message
   * @type {Disclosures}
   * @memberof V20DiscoveryRecord
   */
  disclosures?: Disclosures;
  /**
   * Credential exchange identifier
   * @type {string}
   * @memberof V20DiscoveryRecord
   */
  discovery_exchange_id?: string;
  /**
   * Queries message
   * @type {Queries}
   * @memberof V20DiscoveryRecord
   */
  queries_msg?: Queries;
  /**
   * Current record state
   * @type {string}
   * @memberof V20DiscoveryRecord
   */
  state?: string;
  /**
   * Thread identifier
   * @type {string}
   * @memberof V20DiscoveryRecord
   */
  thread_id?: string;
  /**
   * Record trace information, based on agent configuration
   * @type {boolean}
   * @memberof V20DiscoveryRecord
   */
  trace?: boolean;
  /**
   * Time of last record update
   * @type {string}
   * @memberof V20DiscoveryRecord
   */
  updated_at?: string;
}

export function V20DiscoveryRecordFromJSON(json: any): V20DiscoveryRecord {
  return V20DiscoveryRecordFromJSONTyped(json, false);
}

export function V20DiscoveryRecordFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): V20DiscoveryRecord {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    connection_id: !exists(json, 'connection_id')
      ? undefined
      : json['connection_id'],
    created_at: !exists(json, 'created_at') ? undefined : json['created_at'],
    disclosures: !exists(json, 'disclosures')
      ? undefined
      : DisclosuresFromJSON(json['disclosures']),
    discovery_exchange_id: !exists(json, 'discovery_exchange_id')
      ? undefined
      : json['discovery_exchange_id'],
    queries_msg: !exists(json, 'queries_msg')
      ? undefined
      : QueriesFromJSON(json['queries_msg']),
    state: !exists(json, 'state') ? undefined : json['state'],
    thread_id: !exists(json, 'thread_id') ? undefined : json['thread_id'],
    trace: !exists(json, 'trace') ? undefined : json['trace'],
    updated_at: !exists(json, 'updated_at') ? undefined : json['updated_at'],
  };
}

export function V20DiscoveryRecordToJSON(
  value?: V20DiscoveryRecord | null,
): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    connection_id: value.connection_id,
    created_at: value.created_at,
    disclosures: DisclosuresToJSON(value.disclosures),
    discovery_exchange_id: value.discovery_exchange_id,
    queries_msg: QueriesToJSON(value.queries_msg),
    state: value.state,
    thread_id: value.thread_id,
    trace: value.trace,
    updated_at: value.updated_at,
  };
}
