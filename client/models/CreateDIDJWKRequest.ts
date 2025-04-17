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
 * @interface CreateDIDJWKRequest
 */
export interface CreateDIDJWKRequest {
  /**
   * Type of key
   * @type {string}
   * @memberof CreateDIDJWKRequest
   */
  key_type: CreateDIDJWKRequestKeyTypeEnum;
}

/**
 * @export
 * @enum {string}
 */
export enum CreateDIDJWKRequestKeyTypeEnum {
  Ed25519 = 'ed25519',
  P256 = 'p256',
}

export function CreateDIDJWKRequestFromJSON(json: any): CreateDIDJWKRequest {
  return CreateDIDJWKRequestFromJSONTyped(json, false);
}

export function CreateDIDJWKRequestFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): CreateDIDJWKRequest {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    key_type: json['key_type'],
  };
}

export function CreateDIDJWKRequestToJSON(
  value?: CreateDIDJWKRequest | null,
): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    key_type: value.key_type,
  };
}
