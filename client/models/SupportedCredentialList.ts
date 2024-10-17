/**
 * Sudo Decentralized Identity Cloud Agent SDK
 * Provides REST API wrappers for Typescript Agent Controllers using the Sudo Decentralized Identity Cloud Agent Service
 *
 * The version of the OpenAPI document: v0.10.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import {
  SupportedCredential,
  SupportedCredentialFromJSON,
  SupportedCredentialFromJSONTyped,
  SupportedCredentialToJSON,
} from './';

/**
 *
 * @export
 * @interface SupportedCredentialList
 */
export interface SupportedCredentialList {
  /**
   * Credential supported records
   * @type {SupportedCredential}
   * @memberof SupportedCredentialList
   */
  results?: SupportedCredential;
}

export function SupportedCredentialListFromJSON(
  json: any,
): SupportedCredentialList {
  return SupportedCredentialListFromJSONTyped(json, false);
}

export function SupportedCredentialListFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): SupportedCredentialList {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    results: !exists(json, 'results')
      ? undefined
      : SupportedCredentialFromJSON(json['results']),
  };
}

export function SupportedCredentialListToJSON(
  value?: SupportedCredentialList | null,
): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    results: SupportedCredentialToJSON(value.results),
  };
}