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
 * @interface SDJWSVerify
 */
export interface SDJWSVerify {
  /**
   *
   * @type {string}
   * @memberof SDJWSVerify
   */
  sd_jwt?: string;
}

export function SDJWSVerifyFromJSON(json: any): SDJWSVerify {
  return SDJWSVerifyFromJSONTyped(json, false);
}

export function SDJWSVerifyFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): SDJWSVerify {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    sd_jwt: !exists(json, 'sd_jwt') ? undefined : json['sd_jwt'],
  };
}

export function SDJWSVerifyToJSON(value?: SDJWSVerify | null): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    sd_jwt: value.sd_jwt,
  };
}
