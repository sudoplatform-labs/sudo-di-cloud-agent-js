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
/**
 *
 * @export
 * @interface MenuFormParam
 */
export interface MenuFormParam {
  /**
   * Default parameter value
   * @type {string}
   * @memberof MenuFormParam
   */
  _default?: string;
  /**
   * Additional descriptive text for menu form parameter
   * @type {string}
   * @memberof MenuFormParam
   */
  description?: string;
  /**
   * Menu parameter name
   * @type {string}
   * @memberof MenuFormParam
   */
  name: string;
  /**
   * Whether parameter is required
   * @type {boolean}
   * @memberof MenuFormParam
   */
  required?: boolean;
  /**
   * Menu parameter title
   * @type {string}
   * @memberof MenuFormParam
   */
  title: string;
  /**
   * Menu form parameter input type
   * @type {string}
   * @memberof MenuFormParam
   */
  type?: string;
}

export function MenuFormParamFromJSON(json: any): MenuFormParam {
  return MenuFormParamFromJSONTyped(json, false);
}

export function MenuFormParamFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): MenuFormParam {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    _default: !exists(json, 'default') ? undefined : json['default'],
    description: !exists(json, 'description') ? undefined : json['description'],
    name: json['name'],
    required: !exists(json, 'required') ? undefined : json['required'],
    title: json['title'],
    type: !exists(json, 'type') ? undefined : json['type'],
  };
}

export function MenuFormParamToJSON(value?: MenuFormParam | null): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    default: value._default,
    description: value.description,
    name: value.name,
    required: value.required,
    title: value.title,
    type: value.type,
  };
}
