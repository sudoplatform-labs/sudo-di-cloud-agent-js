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
 * @interface JWSVerifyResponse
 */
export interface JWSVerifyResponse {
  /**
   * Error text
   * @type {string}
   * @memberof JWSVerifyResponse
   */
  error?: string;
  /**
   * Headers from verified JWT.
   * @type {object}
   * @memberof JWSVerifyResponse
   */
  headers: object;
  /**
   * kid of signer
   * @type {string}
   * @memberof JWSVerifyResponse
   */
  kid: string;
  /**
   * Payload from verified JWT
   * @type {object}
   * @memberof JWSVerifyResponse
   */
  payload: object;
  /**
   *
   * @type {boolean}
   * @memberof JWSVerifyResponse
   */
  valid: boolean;
}

export function JWSVerifyResponseFromJSON(json: any): JWSVerifyResponse {
  return JWSVerifyResponseFromJSONTyped(json, false);
}

export function JWSVerifyResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): JWSVerifyResponse {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    error: !exists(json, 'error') ? undefined : json['error'],
    headers: json['headers'],
    kid: json['kid'],
    payload: json['payload'],
    valid: json['valid'],
  };
}

export function JWSVerifyResponseToJSON(value?: JWSVerifyResponse | null): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    error: value.error,
    headers: value.headers,
    kid: value.kid,
    payload: value.payload,
    valid: value.valid,
  };
}
