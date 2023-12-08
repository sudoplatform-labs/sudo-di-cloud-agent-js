/**
 * Sudo Decentralized Identity Cloud Agent SDK
 * Provides REST API wrappers for Typescript Agent Controllers using the Sudo Decentralized Identity Cloud Agent Service
 *
 * The version of the OpenAPI document: v0.7.1
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
 * @interface CredRevIndyRecordsResult
 */
export interface CredRevIndyRecordsResult {
  /**
   * Indy revocation registry delta
   * @type {object}
   * @memberof CredRevIndyRecordsResult
   */
  rev_reg_delta?: object;
}

export function CredRevIndyRecordsResultFromJSON(
  json: any,
): CredRevIndyRecordsResult {
  return CredRevIndyRecordsResultFromJSONTyped(json, false);
}

export function CredRevIndyRecordsResultFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): CredRevIndyRecordsResult {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    rev_reg_delta: !exists(json, 'rev_reg_delta')
      ? undefined
      : json['rev_reg_delta'],
  };
}

export function CredRevIndyRecordsResultToJSON(
  value?: CredRevIndyRecordsResult | null,
): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    rev_reg_delta: value.rev_reg_delta,
  };
}
