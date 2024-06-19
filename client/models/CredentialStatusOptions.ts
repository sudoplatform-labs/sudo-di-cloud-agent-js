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
 * @interface CredentialStatusOptions
 */
export interface CredentialStatusOptions {
  /**
   * Credential status method type to use for the credential. Should match status method registered in the Verifiable Credential Extension Registry
   * @type {string}
   * @memberof CredentialStatusOptions
   */
  type: string;
}

export function CredentialStatusOptionsFromJSON(
  json: any,
): CredentialStatusOptions {
  return CredentialStatusOptionsFromJSONTyped(json, false);
}

export function CredentialStatusOptionsFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): CredentialStatusOptions {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    type: json['type'],
  };
}

export function CredentialStatusOptionsToJSON(
  value?: CredentialStatusOptions | null,
): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    type: value.type,
  };
}
