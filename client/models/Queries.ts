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
  QueryItem,
  QueryItemFromJSON,
  QueryItemFromJSONTyped,
  QueryItemToJSON,
} from './';

/**
 *
 * @export
 * @interface Queries
 */
export interface Queries {
  /**
   * Message identifier
   * @type {string}
   * @memberof Queries
   */
  id?: string;
  /**
   * Message type
   * @type {string}
   * @memberof Queries
   */
  readonly type?: string;
  /**
   *
   * @type {Array<QueryItem>}
   * @memberof Queries
   */
  queries?: Array<QueryItem>;
}

export function QueriesFromJSON(json: any): Queries {
  return QueriesFromJSONTyped(json, false);
}

export function QueriesFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): Queries {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    id: !exists(json, '@id') ? undefined : json['@id'],
    type: !exists(json, '@type') ? undefined : json['@type'],
    queries: !exists(json, 'queries')
      ? undefined
      : (json['queries'] as Array<any>).map(QueryItemFromJSON),
  };
}

export function QueriesToJSON(value?: Queries | null): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    '@id': value.id,
    queries:
      value.queries === undefined
        ? undefined
        : (value.queries as Array<any>).map(QueryItemToJSON),
  };
}
