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
import {
  ProofResult,
  ProofResultFromJSON,
  ProofResultFromJSONTyped,
  ProofResultToJSON,
} from './';

/**
 *
 * @export
 * @interface DocumentVerificationResult
 */
export interface DocumentVerificationResult {
  /**
   *
   * @type {object}
   * @memberof DocumentVerificationResult
   */
  document?: object;
  /**
   *
   * @type {Array<string>}
   * @memberof DocumentVerificationResult
   */
  errors?: Array<string>;
  /**
   *
   * @type {Array<ProofResult>}
   * @memberof DocumentVerificationResult
   */
  results?: Array<ProofResult>;
  /**
   *
   * @type {boolean}
   * @memberof DocumentVerificationResult
   */
  verified: boolean;
}

export function DocumentVerificationResultFromJSON(
  json: any,
): DocumentVerificationResult {
  return DocumentVerificationResultFromJSONTyped(json, false);
}

export function DocumentVerificationResultFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): DocumentVerificationResult {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    document: !exists(json, 'document') ? undefined : json['document'],
    errors: !exists(json, 'errors') ? undefined : json['errors'],
    results: !exists(json, 'results')
      ? undefined
      : (json['results'] as Array<any>).map(ProofResultFromJSON),
    verified: json['verified'],
  };
}

export function DocumentVerificationResultToJSON(
  value?: DocumentVerificationResult | null,
): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    document: value.document,
    errors: value.errors,
    results:
      value.results === undefined
        ? undefined
        : (value.results as Array<any>).map(ProofResultToJSON),
    verified: value.verified,
  };
}