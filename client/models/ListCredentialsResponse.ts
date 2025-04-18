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
import {
  VerifiableCredential,
  VerifiableCredentialFromJSON,
  VerifiableCredentialFromJSONTyped,
  VerifiableCredentialToJSON,
} from './';

/**
 *
 * @export
 * @interface ListCredentialsResponse
 */
export interface ListCredentialsResponse {
  /**
   *
   * @type {Array<VerifiableCredential>}
   * @memberof ListCredentialsResponse
   */
  results?: Array<VerifiableCredential>;
}

export function ListCredentialsResponseFromJSON(
  json: any,
): ListCredentialsResponse {
  return ListCredentialsResponseFromJSONTyped(json, false);
}

export function ListCredentialsResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): ListCredentialsResponse {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    results: !exists(json, 'results')
      ? undefined
      : (json['results'] as Array<any>).map(VerifiableCredentialFromJSON),
  };
}

export function ListCredentialsResponseToJSON(
  value?: ListCredentialsResponse | null,
): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    results:
      value.results === undefined
        ? undefined
        : (value.results as Array<any>).map(VerifiableCredentialToJSON),
  };
}
