/**
 * Sudo Decentralized Identity Cloud Agent SDK
 * Provides REST API wrappers for Typescript Agent Controllers using the Sudo Decentralized Identity Cloud Agent Service
 *
 * The version of the OpenAPI document: v0.11.0
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
 * @interface UpdateKeyResponse
 */
export interface UpdateKeyResponse {
  /**
   * The associated kid
   * @type {string}
   * @memberof UpdateKeyResponse
   */
  kid?: string;
  /**
   * The Public Key Multibase format (multikey)
   * @type {string}
   * @memberof UpdateKeyResponse
   */
  multikey?: string;
}

export function UpdateKeyResponseFromJSON(json: any): UpdateKeyResponse {
  return UpdateKeyResponseFromJSONTyped(json, false);
}

export function UpdateKeyResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): UpdateKeyResponse {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    kid: !exists(json, 'kid') ? undefined : json['kid'],
    multikey: !exists(json, 'multikey') ? undefined : json['multikey'],
  };
}

export function UpdateKeyResponseToJSON(value?: UpdateKeyResponse | null): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    kid: value.kid,
    multikey: value.multikey,
  };
}
