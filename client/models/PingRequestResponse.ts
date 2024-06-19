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
/**
 *
 * @export
 * @interface PingRequestResponse
 */
export interface PingRequestResponse {
  /**
   * Thread ID of the ping message
   * @type {string}
   * @memberof PingRequestResponse
   */
  thread_id?: string;
}

export function PingRequestResponseFromJSON(json: any): PingRequestResponse {
  return PingRequestResponseFromJSONTyped(json, false);
}

export function PingRequestResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): PingRequestResponse {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    thread_id: !exists(json, 'thread_id') ? undefined : json['thread_id'],
  };
}

export function PingRequestResponseToJSON(
  value?: PingRequestResponse | null,
): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    thread_id: value.thread_id,
  };
}
