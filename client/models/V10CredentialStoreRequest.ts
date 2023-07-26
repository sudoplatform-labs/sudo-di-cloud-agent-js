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
 * @interface V10CredentialStoreRequest
 */
export interface V10CredentialStoreRequest {
  /**
   *
   * @type {string}
   * @memberof V10CredentialStoreRequest
   */
  credential_id?: string;
}

export function V10CredentialStoreRequestFromJSON(
  json: any,
): V10CredentialStoreRequest {
  return V10CredentialStoreRequestFromJSONTyped(json, false);
}

export function V10CredentialStoreRequestFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): V10CredentialStoreRequest {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    credential_id: !exists(json, 'credential_id')
      ? undefined
      : json['credential_id'],
  };
}

export function V10CredentialStoreRequestToJSON(
  value?: V10CredentialStoreRequest | null,
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
