/**
 * Sudo Decentralized Identity Cloud Agent SDK
 * Provides REST API wrappers for Typescript Agent Controllers using the Sudo Decentralized Identity Cloud Agency Service
 *
 * The version of the OpenAPI document: v0.5.3
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
 * @interface V20CredStoreRequest
 */
export interface V20CredStoreRequest {
  /**
   *
   * @type {string}
   * @memberof V20CredStoreRequest
   */
  credential_id?: string;
}

export function V20CredStoreRequestFromJSON(json: any): V20CredStoreRequest {
  return V20CredStoreRequestFromJSONTyped(json, false);
}

export function V20CredStoreRequestFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): V20CredStoreRequest {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    credential_id: !exists(json, 'credential_id')
      ? undefined
      : json['credential_id'],
  };
}

export function V20CredStoreRequestToJSON(
  value?: V20CredStoreRequest | null,
): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    credential_id: value.credential_id,
  };
}
