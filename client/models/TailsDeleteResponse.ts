/**
 * Sudo Decentralized Identity Cloud Agent SDK
 * Provides REST API wrappers for Typescript Agent Controllers using the Sudo Decentralized Identity Cloud Agent Service
 *
 * The version of the OpenAPI document: v0.8.0
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
 * @interface TailsDeleteResponse
 */
export interface TailsDeleteResponse {
  /**
   *
   * @type {string}
   * @memberof TailsDeleteResponse
   */
  message?: string;
}

export function TailsDeleteResponseFromJSON(json: any): TailsDeleteResponse {
  return TailsDeleteResponseFromJSONTyped(json, false);
}

export function TailsDeleteResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): TailsDeleteResponse {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    message: !exists(json, 'message') ? undefined : json['message'],
  };
}

export function TailsDeleteResponseToJSON(
  value?: TailsDeleteResponse | null,
): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    message: value.message,
  };
}
