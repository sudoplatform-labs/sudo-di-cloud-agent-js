/**
 * Sudo Decentralized Identity Cloud Agent SDK
 * Provides REST API wrappers for Typescript Agent Controllers using the Sudo Decentralized Identity Cloud Agent Service
 *
 * The version of the OpenAPI document: v100.0.100
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import {
  MenuForm,
  MenuFormFromJSON,
  MenuFormFromJSONTyped,
  MenuFormToJSON,
} from './';

/**
 *
 * @export
 * @interface MenuOption
 */
export interface MenuOption {
  /**
   * Additional descriptive text for menu option
   * @type {string}
   * @memberof MenuOption
   */
  description?: string;
  /**
   * Whether to show option as disabled
   * @type {boolean}
   * @memberof MenuOption
   */
  disabled?: boolean;
  /**
   *
   * @type {MenuForm}
   * @memberof MenuOption
   */
  form?: MenuForm;
  /**
   * Menu option name (unique identifier)
   * @type {string}
   * @memberof MenuOption
   */
  name: string;
  /**
   * Menu option title
   * @type {string}
   * @memberof MenuOption
   */
  title: string;
}

export function MenuOptionFromJSON(json: any): MenuOption {
  return MenuOptionFromJSONTyped(json, false);
}

export function MenuOptionFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): MenuOption {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    description: !exists(json, 'description') ? undefined : json['description'],
    disabled: !exists(json, 'disabled') ? undefined : json['disabled'],
    form: !exists(json, 'form') ? undefined : MenuFormFromJSON(json['form']),
    name: json['name'],
    title: json['title'],
  };
}

export function MenuOptionToJSON(value?: MenuOption | null): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    description: value.description,
    disabled: value.disabled,
    form: MenuFormToJSON(value.form),
    name: value.name,
    title: value.title,
  };
}
