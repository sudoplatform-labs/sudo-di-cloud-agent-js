/**
 * Sudo Decentralized Identity Cloud Agent SDK
 * Provides REST API wrappers for Typescript Agent Controllers using the Sudo Decentralized Identity Cloud Agent Service
 *
 * The version of the OpenAPI document: v0.6.3
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
 * @interface RevRegIssuedResult
 */
export interface RevRegIssuedResult {
  /**
   * Number of credentials issued against revocation registry
   * @type {number}
   * @memberof RevRegIssuedResult
   */
  result?: number;
}

export function RevRegIssuedResultFromJSON(json: any): RevRegIssuedResult {
  return RevRegIssuedResultFromJSONTyped(json, false);
}

export function RevRegIssuedResultFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): RevRegIssuedResult {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    result: !exists(json, 'result') ? undefined : json['result'],
  };
}

export function RevRegIssuedResultToJSON(
  value?: RevRegIssuedResult | null,
): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    result: value.result,
  };
}
