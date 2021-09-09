/**
 * Sudo Decentralized Identity Cloud Agent SDK
 * Provides REST API wrappers for Typescript Agent Controllers using the Sudo Decentralized Identity Cloud Agency Service
 *
 * The version of the OpenAPI document: v0.5.1
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
 * @interface KeylistQueryFilterRequest
 */
export interface KeylistQueryFilterRequest {
  /**
   * Filter for keylist query
   * @type {object}
   * @memberof KeylistQueryFilterRequest
   */
  filter?: object;
}

export function KeylistQueryFilterRequestFromJSON(
  json: any,
): KeylistQueryFilterRequest {
  return KeylistQueryFilterRequestFromJSONTyped(json, false);
}

export function KeylistQueryFilterRequestFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): KeylistQueryFilterRequest {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    filter: !exists(json, 'filter') ? undefined : json['filter'],
  };
}

export function KeylistQueryFilterRequestToJSON(
  value?: KeylistQueryFilterRequest | null,
): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    filter: value.filter,
  };
}
