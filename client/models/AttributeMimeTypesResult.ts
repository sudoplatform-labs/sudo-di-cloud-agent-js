/**
 * Sudo Decentralized Identity Cloud Agent SDK
 * Provides REST API wrappers for Typescript Agent Controllers using the Sudo Decentralized Identity Cloud Agent Service
 *
 * The version of the OpenAPI document: v0.6.6
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
 * @interface AttributeMimeTypesResult
 */
export interface AttributeMimeTypesResult {
  /**
   *
   * @type {{ [key: string]: string; }}
   * @memberof AttributeMimeTypesResult
   */
  results?: { [key: string]: string } | null;
}

export function AttributeMimeTypesResultFromJSON(
  json: any,
): AttributeMimeTypesResult {
  return AttributeMimeTypesResultFromJSONTyped(json, false);
}

export function AttributeMimeTypesResultFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): AttributeMimeTypesResult {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    results: !exists(json, 'results') ? undefined : json['results'],
  };
}

export function AttributeMimeTypesResultToJSON(
  value?: AttributeMimeTypesResult | null,
): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    results: value.results,
  };
}
