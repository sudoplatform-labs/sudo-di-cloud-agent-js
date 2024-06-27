/**
 * Sudo Decentralized Identity Cloud Agent SDK
 * Provides REST API wrappers for Typescript Agent Controllers using the Sudo Decentralized Identity Cloud Agent Service
 *
 * The version of the OpenAPI document: v0.9.1
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
 * @interface V10CredentialExchangeAutoRemoveRequest
 */
export interface V10CredentialExchangeAutoRemoveRequest {
  /**
   * Whether to remove the credential exchange record on completion (overrides --preserve-exchange-records configuration setting)
   * @type {boolean}
   * @memberof V10CredentialExchangeAutoRemoveRequest
   */
  auto_remove?: boolean;
}

export function V10CredentialExchangeAutoRemoveRequestFromJSON(
  json: any,
): V10CredentialExchangeAutoRemoveRequest {
  return V10CredentialExchangeAutoRemoveRequestFromJSONTyped(json, false);
}

export function V10CredentialExchangeAutoRemoveRequestFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): V10CredentialExchangeAutoRemoveRequest {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    auto_remove: !exists(json, 'auto_remove') ? undefined : json['auto_remove'],
  };
}

export function V10CredentialExchangeAutoRemoveRequestToJSON(
  value?: V10CredentialExchangeAutoRemoveRequest | null,
): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    auto_remove: value.auto_remove,
  };
}