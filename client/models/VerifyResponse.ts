/**
 * Sudo Decentralized Identity Cloud Agent SDK
 * Provides REST API wrappers for Typescript Agent Controllers using the Sudo Decentralized Identity Cloud Agent Service
 *
 * The version of the OpenAPI document: v0.6.8
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
 * @interface VerifyResponse
 */
export interface VerifyResponse {
  /**
   * Error text
   * @type {string}
   * @memberof VerifyResponse
   */
  error?: string;
  /**
   *
   * @type {boolean}
   * @memberof VerifyResponse
   */
  valid: boolean;
}

export function VerifyResponseFromJSON(json: any): VerifyResponse {
  return VerifyResponseFromJSONTyped(json, false);
}

export function VerifyResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): VerifyResponse {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    error: !exists(json, 'error') ? undefined : json['error'],
    valid: json['valid'],
  };
}

export function VerifyResponseToJSON(value?: VerifyResponse | null): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    error: value.error,
    valid: value.valid,
  };
}
