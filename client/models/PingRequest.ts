/**
 * Sudo Decentralized Identity Cloud Agent SDK
 * Provides REST API wrappers for Typescript Agent Controllers using the Sudo Decentralized Identity Cloud Agency Service
 *
 * The version of the OpenAPI document: v0.6.2
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
 * @interface PingRequest
 */
export interface PingRequest {
  /**
   * Comment for the ping message
   * @type {string}
   * @memberof PingRequest
   */
  comment?: string | null;
}

export function PingRequestFromJSON(json: any): PingRequest {
  return PingRequestFromJSONTyped(json, false);
}

export function PingRequestFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): PingRequest {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    comment: !exists(json, 'comment') ? undefined : json['comment'],
  };
}

export function PingRequestToJSON(value?: PingRequest | null): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    comment: value.comment,
  };
}
