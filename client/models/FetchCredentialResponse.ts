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
import {
  VerifiableCredential,
  VerifiableCredentialFromJSON,
  VerifiableCredentialFromJSONTyped,
  VerifiableCredentialToJSON,
} from './';

/**
 *
 * @export
 * @interface FetchCredentialResponse
 */
export interface FetchCredentialResponse {
  /**
   *
   * @type {VerifiableCredential}
   * @memberof FetchCredentialResponse
   */
  results?: VerifiableCredential;
}

export function FetchCredentialResponseFromJSON(
  json: any,
): FetchCredentialResponse {
  return FetchCredentialResponseFromJSONTyped(json, false);
}

export function FetchCredentialResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): FetchCredentialResponse {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    results: !exists(json, 'results')
      ? undefined
      : VerifiableCredentialFromJSON(json['results']),
  };
}

export function FetchCredentialResponseToJSON(
  value?: FetchCredentialResponse | null,
): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    results: VerifiableCredentialToJSON(value.results),
  };
}
