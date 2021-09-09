/**
 * Sudo Decentralized Identity Cloud Agent SDK
 * Provides REST API wrappers for Typescript Agent Controllers using the Sudo Decentralized Identity Cloud Agency Service
 *
 * The version of the OpenAPI document: v0.5.0
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
 * @interface DIFHolder
 */
export interface DIFHolder {
  /**
   * Preference
   * @type {string}
   * @memberof DIFHolder
   */
  directive?: DIFHolderDirectiveEnum;
  /**
   *
   * @type {Array<string>}
   * @memberof DIFHolder
   */
  field_id?: Array<string>;
}

/**
 * @export
 * @enum {string}
 */
export enum DIFHolderDirectiveEnum {
  Required = 'required',
  Preferred = 'preferred',
}

export function DIFHolderFromJSON(json: any): DIFHolder {
  return DIFHolderFromJSONTyped(json, false);
}

export function DIFHolderFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): DIFHolder {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    directive: !exists(json, 'directive') ? undefined : json['directive'],
    field_id: !exists(json, 'field_id') ? undefined : json['field_id'],
  };
}

export function DIFHolderToJSON(value?: DIFHolder | null): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    directive: value.directive,
    field_id: value.field_id,
  };
}
