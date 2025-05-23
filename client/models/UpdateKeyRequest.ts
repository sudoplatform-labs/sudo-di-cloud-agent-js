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
 * @interface UpdateKeyRequest
 */
export interface UpdateKeyRequest {
  /**
   * New kid to bind to the key pair, such as a verificationMethod.
   * @type {string}
   * @memberof UpdateKeyRequest
   */
  kid: string;
  /**
   * Multikey of the key pair to update
   * @type {string}
   * @memberof UpdateKeyRequest
   */
  multikey: string;
}

export function UpdateKeyRequestFromJSON(json: any): UpdateKeyRequest {
  return UpdateKeyRequestFromJSONTyped(json, false);
}

export function UpdateKeyRequestFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): UpdateKeyRequest {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    kid: json['kid'],
    multikey: json['multikey'],
  };
}

export function UpdateKeyRequestToJSON(value?: UpdateKeyRequest | null): any {
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
