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
import { DID, DIDFromJSON, DIDFromJSONTyped, DIDToJSON } from './';

/**
 *
 * @export
 * @interface DIDResult
 */
export interface DIDResult {
  /**
   *
   * @type {DID}
   * @memberof DIDResult
   */
  result?: DID;
}

export function DIDResultFromJSON(json: any): DIDResult {
  return DIDResultFromJSONTyped(json, false);
}

export function DIDResultFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): DIDResult {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    result: !exists(json, 'result') ? undefined : DIDFromJSON(json['result']),
  };
}

export function DIDResultToJSON(value?: DIDResult | null): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    result: DIDToJSON(value.result),
  };
}
