/**
 * Sudo Decentralized Identity Cloud Agent SDK
 * Provides REST API wrappers for Typescript Agent Controllers using the Sudo Decentralized Identity Cloud Agency Service
 *
 * The version of the OpenAPI document: v0.5.3
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import { Menu, MenuFromJSON, MenuFromJSONTyped, MenuToJSON } from './';

/**
 *
 * @export
 * @interface ActionMenuFetchResult
 */
export interface ActionMenuFetchResult {
  /**
   * Action menu
   * @type {Menu}
   * @memberof ActionMenuFetchResult
   */
  result?: Menu;
}

export function ActionMenuFetchResultFromJSON(
  json: any,
): ActionMenuFetchResult {
  return ActionMenuFetchResultFromJSONTyped(json, false);
}

export function ActionMenuFetchResultFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): ActionMenuFetchResult {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    result: !exists(json, 'result') ? undefined : MenuFromJSON(json['result']),
  };
}

export function ActionMenuFetchResultToJSON(
  value?: ActionMenuFetchResult | null,
): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    result: MenuToJSON(value.result),
  };
}
