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
  MenuOption,
  MenuOptionFromJSON,
  MenuOptionFromJSONTyped,
  MenuOptionToJSON,
} from './';

/**
 *
 * @export
 * @interface MenuJson
 */
export interface MenuJson {
  /**
   * Introductory text for the menu
   * @type {string}
   * @memberof MenuJson
   */
  description?: string;
  /**
   * Optional error message to display in menu header
   * @type {string}
   * @memberof MenuJson
   */
  errormsg?: string;
  /**
   * List of menu options
   * @type {Array<MenuOption>}
   * @memberof MenuJson
   */
  options: Array<MenuOption>;
  /**
   * Menu title
   * @type {string}
   * @memberof MenuJson
   */
  title?: string;
}

export function MenuJsonFromJSON(json: any): MenuJson {
  return MenuJsonFromJSONTyped(json, false);
}

export function MenuJsonFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): MenuJson {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    description: !exists(json, 'description') ? undefined : json['description'],
    errormsg: !exists(json, 'errormsg') ? undefined : json['errormsg'],
    options: (json['options'] as Array<any>).map(MenuOptionFromJSON),
    title: !exists(json, 'title') ? undefined : json['title'],
  };
}

export function MenuJsonToJSON(value?: MenuJson | null): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    description: value.description,
    errormsg: value.errormsg,
    options: (value.options as Array<any>).map(MenuOptionToJSON),
    title: value.title,
  };
}
