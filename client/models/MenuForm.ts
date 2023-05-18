/**
 * Sudo Decentralized Identity Cloud Agent SDK
 * Provides REST API wrappers for Typescript Agent Controllers using the Sudo Decentralized Identity Cloud Agent Service
 *
 * The version of the OpenAPI document: v0.6.6
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import {
  MenuFormParam,
  MenuFormParamFromJSON,
  MenuFormParamFromJSONTyped,
  MenuFormParamToJSON,
} from './';

/**
 *
 * @export
 * @interface MenuForm
 */
export interface MenuForm {
  /**
   * Additional descriptive text for menu form
   * @type {string}
   * @memberof MenuForm
   */
  description?: string;
  /**
   * List of form parameters
   * @type {Array<MenuFormParam>}
   * @memberof MenuForm
   */
  params?: Array<MenuFormParam>;
  /**
   * Alternative label for form submit button
   * @type {string}
   * @memberof MenuForm
   */
  submit_label?: string;
  /**
   * Menu form title
   * @type {string}
   * @memberof MenuForm
   */
  title?: string;
}

export function MenuFormFromJSON(json: any): MenuForm {
  return MenuFormFromJSONTyped(json, false);
}

export function MenuFormFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): MenuForm {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    description: !exists(json, 'description') ? undefined : json['description'],
    params: !exists(json, 'params')
      ? undefined
      : (json['params'] as Array<any>).map(MenuFormParamFromJSON),
    submit_label: !exists(json, 'submit-label')
      ? undefined
      : json['submit-label'],
    title: !exists(json, 'title') ? undefined : json['title'],
  };
}

export function MenuFormToJSON(value?: MenuForm | null): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    description: value.description,
    params:
      value.params === undefined
        ? undefined
        : (value.params as Array<any>).map(MenuFormParamToJSON),
    'submit-label': value.submit_label,
    title: value.title,
  };
}
