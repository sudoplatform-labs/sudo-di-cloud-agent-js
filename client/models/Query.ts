/**
 * Sudo Decentralized Identity Cloud Agent SDK
 * Provides REST API wrappers for Typescript Agent Controllers using the Sudo Decentralized Identity Cloud Agent Service
 *
 * The version of the OpenAPI document: v0.9.1
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
 * @interface Query
 */
export interface Query {
  /**
   * Message identifier
   * @type {string}
   * @memberof Query
   */
  id?: string;
  /**
   * Message type
   * @type {string}
   * @memberof Query
   */
  type?: string;
  /**
   *
   * @type {string}
   * @memberof Query
   */
  comment?: string | null;
  /**
   *
   * @type {string}
   * @memberof Query
   */
  query: string;
}

export function QueryFromJSON(json: any): Query {
  return QueryFromJSONTyped(json, false);
}

export function QueryFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): Query {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    id: !exists(json, '@id') ? undefined : json['@id'],
    type: !exists(json, '@type') ? undefined : json['@type'],
    comment: !exists(json, 'comment') ? undefined : json['comment'],
    query: json['query'],
  };
}

export function QueryToJSON(value?: Query | null): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    '@id': value.id,
    '@type': value.type,
    comment: value.comment,
    query: value.query,
  };
}
