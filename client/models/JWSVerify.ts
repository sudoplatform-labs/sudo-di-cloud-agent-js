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
 * @interface JWSVerify
 */
export interface JWSVerify {
  /**
   *
   * @type {string}
   * @memberof JWSVerify
   */
  jwt?: string;
}

export function JWSVerifyFromJSON(json: any): JWSVerify {
  return JWSVerifyFromJSONTyped(json, false);
}

export function JWSVerifyFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): JWSVerify {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    jwt: !exists(json, 'jwt') ? undefined : json['jwt'],
  };
}

export function JWSVerifyToJSON(value?: JWSVerify | null): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    jwt: value.jwt,
  };
}
