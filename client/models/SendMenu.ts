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
import {
  MenuJson,
  MenuJsonFromJSON,
  MenuJsonFromJSONTyped,
  MenuJsonToJSON,
} from './';

/**
 *
 * @export
 * @interface SendMenu
 */
export interface SendMenu {
  /**
   * Menu to send to connection
   * @type {MenuJson}
   * @memberof SendMenu
   */
  menu: MenuJson;
}

export function SendMenuFromJSON(json: any): SendMenu {
  return SendMenuFromJSONTyped(json, false);
}

export function SendMenuFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): SendMenu {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    menu: MenuJsonFromJSON(json['menu']),
  };
}

export function SendMenuToJSON(value?: SendMenu | null): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    menu: MenuJsonToJSON(value.menu),
  };
}
