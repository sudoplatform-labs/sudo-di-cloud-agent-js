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
 * @interface FetchKeyResponse
 */
export interface FetchKeyResponse {
  /**
   * The associated kid
   * @type {string}
   * @memberof FetchKeyResponse
   */
  kid?: string;
  /**
   * The Public Key Multibase format (multikey)
   * @type {string}
   * @memberof FetchKeyResponse
   */
  multikey?: string;
}

export function FetchKeyResponseFromJSON(json: any): FetchKeyResponse {
  return FetchKeyResponseFromJSONTyped(json, false);
}

export function FetchKeyResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): FetchKeyResponse {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    kid: !exists(json, 'kid') ? undefined : json['kid'],
    multikey: !exists(json, 'multikey') ? undefined : json['multikey'],
  };
}

export function FetchKeyResponseToJSON(value?: FetchKeyResponse | null): any {
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
