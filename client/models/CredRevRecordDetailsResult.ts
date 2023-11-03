/**
 * Sudo Decentralized Identity Cloud Agent SDK
 * Provides REST API wrappers for Typescript Agent Controllers using the Sudo Decentralized Identity Cloud Agent Service
 *
 * The version of the OpenAPI document: v0.7.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import {
  IssuerCredRevRecord,
  IssuerCredRevRecordFromJSON,
  IssuerCredRevRecordFromJSONTyped,
  IssuerCredRevRecordToJSON,
} from './';

/**
 *
 * @export
 * @interface CredRevRecordDetailsResult
 */
export interface CredRevRecordDetailsResult {
  /**
   *
   * @type {Array<IssuerCredRevRecord>}
   * @memberof CredRevRecordDetailsResult
   */
  results?: Array<IssuerCredRevRecord>;
}

export function CredRevRecordDetailsResultFromJSON(
  json: any,
): CredRevRecordDetailsResult {
  return CredRevRecordDetailsResultFromJSONTyped(json, false);
}

export function CredRevRecordDetailsResultFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): CredRevRecordDetailsResult {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    results: !exists(json, 'results')
      ? undefined
      : (json['results'] as Array<any>).map(IssuerCredRevRecordFromJSON),
  };
}

export function CredRevRecordDetailsResultToJSON(
  value?: CredRevRecordDetailsResult | null,
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
        : (value.results as Array<any>).map(IssuerCredRevRecordToJSON),
  };
}
