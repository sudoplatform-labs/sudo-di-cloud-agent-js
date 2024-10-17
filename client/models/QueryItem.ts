/**
 * Sudo Decentralized Identity Cloud Agent SDK
 * Provides REST API wrappers for Typescript Agent Controllers using the Sudo Decentralized Identity Cloud Agent Service
 *
 * The version of the OpenAPI document: v0.10.0
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
 * @interface QueryItem
 */
export interface QueryItem {
  /**
   * feature type
   * @type {string}
   * @memberof QueryItem
   */
  feature_type: QueryItemFeatureTypeEnum;
  /**
   * match
   * @type {string}
   * @memberof QueryItem
   */
  match: string;
}

/**
 * @export
 * @enum {string}
 */
export enum QueryItemFeatureTypeEnum {
  Protocol = 'protocol',
  GoalCode = 'goal-code',
}

export function QueryItemFromJSON(json: any): QueryItem {
  return QueryItemFromJSONTyped(json, false);
}

export function QueryItemFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): QueryItem {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    feature_type: json['feature-type'],
    match: json['match'],
  };
}

export function QueryItemToJSON(value?: QueryItem | null): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    'feature-type': value.feature_type,
    match: value.match,
  };
}
