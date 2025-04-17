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
import {
  DCQLQuery,
  DCQLQueryFromJSON,
  DCQLQueryFromJSONTyped,
  DCQLQueryToJSON,
} from './';

/**
 *
 * @export
 * @interface DCQLQueryList
 */
export interface DCQLQueryList {
  /**
   * Presentations
   * @type {DCQLQuery}
   * @memberof DCQLQueryList
   */
  results?: DCQLQuery;
}

export function DCQLQueryListFromJSON(json: any): DCQLQueryList {
  return DCQLQueryListFromJSONTyped(json, false);
}

export function DCQLQueryListFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): DCQLQueryList {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    results: !exists(json, 'results')
      ? undefined
      : DCQLQueryFromJSON(json['results']),
  };
}

export function DCQLQueryListToJSON(value?: DCQLQueryList | null): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    results: DCQLQueryToJSON(value.results),
  };
}
