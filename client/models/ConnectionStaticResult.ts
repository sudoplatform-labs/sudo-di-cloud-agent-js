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
  ConnRecord,
  ConnRecordFromJSON,
  ConnRecordFromJSONTyped,
  ConnRecordToJSON,
} from './';

/**
 *
 * @export
 * @interface ConnectionStaticResult
 */
export interface ConnectionStaticResult {
  /**
   * Local DID
   * @type {string}
   * @memberof ConnectionStaticResult
   */
  my_did: string;
  /**
   * My URL endpoint
   * @type {string}
   * @memberof ConnectionStaticResult
   */
  my_endpoint: string;
  /**
   * My verification key
   * @type {string}
   * @memberof ConnectionStaticResult
   */
  my_verkey: string;
  /**
   *
   * @type {ConnRecord}
   * @memberof ConnectionStaticResult
   */
  record: ConnRecord;
  /**
   * Remote DID
   * @type {string}
   * @memberof ConnectionStaticResult
   */
  their_did: string;
  /**
   * Remote verification key
   * @type {string}
   * @memberof ConnectionStaticResult
   */
  their_verkey: string;
}

export function ConnectionStaticResultFromJSON(
  json: any,
): ConnectionStaticResult {
  return ConnectionStaticResultFromJSONTyped(json, false);
}

export function ConnectionStaticResultFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): ConnectionStaticResult {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    my_did: json['my_did'],
    my_endpoint: json['my_endpoint'],
    my_verkey: json['my_verkey'],
    record: ConnRecordFromJSON(json['record']),
    their_did: json['their_did'],
    their_verkey: json['their_verkey'],
  };
}

export function ConnectionStaticResultToJSON(
  value?: ConnectionStaticResult | null,
): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    my_did: value.my_did,
    my_endpoint: value.my_endpoint,
    my_verkey: value.my_verkey,
    record: ConnRecordToJSON(value.record),
    their_did: value.their_did,
    their_verkey: value.their_verkey,
  };
}
