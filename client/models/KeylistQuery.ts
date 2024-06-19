/**
 * Sudo Decentralized Identity Cloud Agent SDK
 * Provides REST API wrappers for Typescript Agent Controllers using the Sudo Decentralized Identity Cloud Agent Service
 *
 * The version of the OpenAPI document: v0.9.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import {
  KeylistQueryPaginate,
  KeylistQueryPaginateFromJSON,
  KeylistQueryPaginateFromJSONTyped,
  KeylistQueryPaginateToJSON,
} from './';

/**
 *
 * @export
 * @interface KeylistQuery
 */
export interface KeylistQuery {
  /**
   * Message identifier
   * @type {string}
   * @memberof KeylistQuery
   */
  id?: string;
  /**
   * Message type
   * @type {string}
   * @memberof KeylistQuery
   */
  type?: string;
  /**
   * Query dictionary object
   * @type {object}
   * @memberof KeylistQuery
   */
  filter?: object;
  /**
   * Pagination info
   * @type {KeylistQueryPaginate}
   * @memberof KeylistQuery
   */
  paginate?: KeylistQueryPaginate;
}

export function KeylistQueryFromJSON(json: any): KeylistQuery {
  return KeylistQueryFromJSONTyped(json, false);
}

export function KeylistQueryFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): KeylistQuery {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    id: !exists(json, '@id') ? undefined : json['@id'],
    type: !exists(json, '@type') ? undefined : json['@type'],
    filter: !exists(json, 'filter') ? undefined : json['filter'],
    paginate: !exists(json, 'paginate')
      ? undefined
      : KeylistQueryPaginateFromJSON(json['paginate']),
  };
}

export function KeylistQueryToJSON(value?: KeylistQuery | null): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    '@id': value.id,
    '@type': value.type,
    filter: value.filter,
    paginate: KeylistQueryPaginateToJSON(value.paginate),
  };
}
