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
  Disclose,
  DiscloseFromJSON,
  DiscloseFromJSONTyped,
  DiscloseToJSON,
  Query,
  QueryFromJSON,
  QueryFromJSONTyped,
  QueryToJSON,
} from './';

/**
 *
 * @export
 * @interface V10DiscoveryRecord
 */
export interface V10DiscoveryRecord {
  /**
   * Connection identifier
   * @type {string}
   * @memberof V10DiscoveryRecord
   */
  connection_id?: string;
  /**
   * Time of record creation
   * @type {string}
   * @memberof V10DiscoveryRecord
   */
  created_at?: string;
  /**
   * Disclose message
   * @type {Disclose}
   * @memberof V10DiscoveryRecord
   */
  disclose?: Disclose;
  /**
   * Credential exchange identifier
   * @type {string}
   * @memberof V10DiscoveryRecord
   */
  discovery_exchange_id?: string;
  /**
   * Query message
   * @type {Query}
   * @memberof V10DiscoveryRecord
   */
  query_msg?: Query;
  /**
   * Current record state
   * @type {string}
   * @memberof V10DiscoveryRecord
   */
  state?: string;
  /**
   * Thread identifier
   * @type {string}
   * @memberof V10DiscoveryRecord
   */
  thread_id?: string;
  /**
   * Record trace information, based on agent configuration
   * @type {boolean}
   * @memberof V10DiscoveryRecord
   */
  trace?: boolean;
  /**
   * Time of last record update
   * @type {string}
   * @memberof V10DiscoveryRecord
   */
  updated_at?: string;
}

export function V10DiscoveryRecordFromJSON(json: any): V10DiscoveryRecord {
  return V10DiscoveryRecordFromJSONTyped(json, false);
}

export function V10DiscoveryRecordFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): V10DiscoveryRecord {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    connection_id: !exists(json, 'connection_id')
      ? undefined
      : json['connection_id'],
    created_at: !exists(json, 'created_at') ? undefined : json['created_at'],
    disclose: !exists(json, 'disclose')
      ? undefined
      : DiscloseFromJSON(json['disclose']),
    discovery_exchange_id: !exists(json, 'discovery_exchange_id')
      ? undefined
      : json['discovery_exchange_id'],
    query_msg: !exists(json, 'query_msg')
      ? undefined
      : QueryFromJSON(json['query_msg']),
    state: !exists(json, 'state') ? undefined : json['state'],
    thread_id: !exists(json, 'thread_id') ? undefined : json['thread_id'],
    trace: !exists(json, 'trace') ? undefined : json['trace'],
    updated_at: !exists(json, 'updated_at') ? undefined : json['updated_at'],
  };
}

export function V10DiscoveryRecordToJSON(
  value?: V10DiscoveryRecord | null,
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
    disclose: DiscloseToJSON(value.disclose),
    discovery_exchange_id: value.discovery_exchange_id,
    query_msg: QueryToJSON(value.query_msg),
    state: value.state,
    thread_id: value.thread_id,
    trace: value.trace,
    updated_at: value.updated_at,
  };
}
