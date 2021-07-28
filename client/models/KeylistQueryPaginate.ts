/**
 * Sudo Decentralized Identity Cloud Agent SDK
 * Provides REST API wrappers for Typescript Agent Controllers using the Sudo Decentralized Identity Cloud Agency Service
 *
 * The version of the OpenAPI document: v0.4.0
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
 * @interface KeylistQueryPaginate
 */
export interface KeylistQueryPaginate {
  /**
   * Limit for keylist query
   * @type {number}
   * @memberof KeylistQueryPaginate
   */
  limit?: number;
  /**
   * Offset value for query
   * @type {number}
   * @memberof KeylistQueryPaginate
   */
  offset?: number;
}

export function KeylistQueryPaginateFromJSON(json: any): KeylistQueryPaginate {
  return KeylistQueryPaginateFromJSONTyped(json, false);
}

export function KeylistQueryPaginateFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): KeylistQueryPaginate {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    limit: !exists(json, 'limit') ? undefined : json['limit'],
    offset: !exists(json, 'offset') ? undefined : json['offset'],
  };
}

export function KeylistQueryPaginateToJSON(
  value?: KeylistQueryPaginate | null,
): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    limit: value.limit,
    offset: value.offset,
  };
}
