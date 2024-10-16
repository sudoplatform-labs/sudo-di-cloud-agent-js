/**
 * Sudo Decentralized Identity Cloud Agent SDK
 * Provides REST API wrappers for Typescript Agent Controllers using the Sudo Decentralized Identity Cloud Agent Service
 *
 * The version of the OpenAPI document: v100.0.100
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import {
  PurposeResult,
  PurposeResultFromJSON,
  PurposeResultFromJSONTyped,
  PurposeResultToJSON,
} from './';

/**
 *
 * @export
 * @interface ProofResult
 */
export interface ProofResult {
  /**
   *
   * @type {string}
   * @memberof ProofResult
   */
  error?: string;
  /**
   *
   * @type {object}
   * @memberof ProofResult
   */
  proof?: object;
  /**
   *
   * @type {PurposeResult}
   * @memberof ProofResult
   */
  purpose_result?: PurposeResult;
  /**
   *
   * @type {boolean}
   * @memberof ProofResult
   */
  verified?: boolean;
}

export function ProofResultFromJSON(json: any): ProofResult {
  return ProofResultFromJSONTyped(json, false);
}

export function ProofResultFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): ProofResult {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    error: !exists(json, 'error') ? undefined : json['error'],
    proof: !exists(json, 'proof') ? undefined : json['proof'],
    purpose_result: !exists(json, 'purpose_result')
      ? undefined
      : PurposeResultFromJSON(json['purpose_result']),
    verified: !exists(json, 'verified') ? undefined : json['verified'],
  };
}

export function ProofResultToJSON(value?: ProofResult | null): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    error: value.error,
    proof: value.proof,
    purpose_result: PurposeResultToJSON(value.purpose_result),
    verified: value.verified,
  };
}
