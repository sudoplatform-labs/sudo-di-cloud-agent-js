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
  PresentationVerificationResult,
  PresentationVerificationResultFromJSON,
  PresentationVerificationResultFromJSONTyped,
  PresentationVerificationResultToJSON,
} from './';

/**
 *
 * @export
 * @interface VerifyCredentialResponse
 */
export interface VerifyCredentialResponse {
  /**
   *
   * @type {PresentationVerificationResult}
   * @memberof VerifyCredentialResponse
   */
  results?: PresentationVerificationResult;
}

export function VerifyCredentialResponseFromJSON(
  json: any,
): VerifyCredentialResponse {
  return VerifyCredentialResponseFromJSONTyped(json, false);
}

export function VerifyCredentialResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): VerifyCredentialResponse {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    results: !exists(json, 'results')
      ? undefined
      : PresentationVerificationResultFromJSON(json['results']),
  };
}

export function VerifyCredentialResponseToJSON(
  value?: VerifyCredentialResponse | null,
): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    results: PresentationVerificationResultToJSON(value.results),
  };
}
