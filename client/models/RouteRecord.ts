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
/**
 *
 * @export
 * @interface RouteRecord
 */
export interface RouteRecord {
  /**
   *
   * @type {string}
   * @memberof RouteRecord
   */
  connection_id?: string;
  /**
   * Time of record creation
   * @type {string}
   * @memberof RouteRecord
   */
  created_at?: string;
  /**
   *
   * @type {string}
   * @memberof RouteRecord
   */
  recipient_key: string;
  /**
   *
   * @type {string}
   * @memberof RouteRecord
   */
  record_id?: string;
  /**
   *
   * @type {string}
   * @memberof RouteRecord
   */
  role?: string;
  /**
   * Current record state
   * @type {string}
   * @memberof RouteRecord
   */
  state?: string;
  /**
   * Time of last record update
   * @type {string}
   * @memberof RouteRecord
   */
  updated_at?: string;
  /**
   *
   * @type {string}
   * @memberof RouteRecord
   */
  wallet_id?: string;
}

export function RouteRecordFromJSON(json: any): RouteRecord {
  return RouteRecordFromJSONTyped(json, false);
}

export function RouteRecordFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): RouteRecord {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    connection_id: !exists(json, 'connection_id')
      ? undefined
      : json['connection_id'],
    created_at: !exists(json, 'created_at') ? undefined : json['created_at'],
    recipient_key: json['recipient_key'],
    record_id: !exists(json, 'record_id') ? undefined : json['record_id'],
    role: !exists(json, 'role') ? undefined : json['role'],
    state: !exists(json, 'state') ? undefined : json['state'],
    updated_at: !exists(json, 'updated_at') ? undefined : json['updated_at'],
    wallet_id: !exists(json, 'wallet_id') ? undefined : json['wallet_id'],
  };
}

export function RouteRecordToJSON(value?: RouteRecord | null): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    connection_id: value.connection_id,
    created_at: value.created_at,
    recipient_key: value.recipient_key,
    record_id: value.record_id,
    role: value.role,
    state: value.state,
    updated_at: value.updated_at,
    wallet_id: value.wallet_id,
  };
}
