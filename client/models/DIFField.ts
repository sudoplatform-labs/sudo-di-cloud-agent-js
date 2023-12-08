/**
 * Sudo Decentralized Identity Cloud Agent SDK
 * Provides REST API wrappers for Typescript Agent Controllers using the Sudo Decentralized Identity Cloud Agent Service
 *
 * The version of the OpenAPI document: v0.7.1
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import { Filter, FilterFromJSON, FilterFromJSONTyped, FilterToJSON } from './';

/**
 *
 * @export
 * @interface DIFField
 */
export interface DIFField {
  /**
   *
   * @type {Filter}
   * @memberof DIFField
   */
  filter?: Filter;
  /**
   * ID
   * @type {string}
   * @memberof DIFField
   */
  id?: string;
  /**
   *
   * @type {Array<string>}
   * @memberof DIFField
   */
  path?: Array<string>;
  /**
   * Preference
   * @type {string}
   * @memberof DIFField
   */
  predicate?: DIFFieldPredicateEnum;
  /**
   * Purpose
   * @type {string}
   * @memberof DIFField
   */
  purpose?: string;
}

/**
 * @export
 * @enum {string}
 */
export enum DIFFieldPredicateEnum {
  Required = 'required',
  Preferred = 'preferred',
}

export function DIFFieldFromJSON(json: any): DIFField {
  return DIFFieldFromJSONTyped(json, false);
}

export function DIFFieldFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): DIFField {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    filter: !exists(json, 'filter')
      ? undefined
      : FilterFromJSON(json['filter']),
    id: !exists(json, 'id') ? undefined : json['id'],
    path: !exists(json, 'path') ? undefined : json['path'],
    predicate: !exists(json, 'predicate') ? undefined : json['predicate'],
    purpose: !exists(json, 'purpose') ? undefined : json['purpose'],
  };
}

export function DIFFieldToJSON(value?: DIFField | null): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    filter: FilterToJSON(value.filter),
    id: value.id,
    path: value.path,
    predicate: value.predicate,
    purpose: value.purpose,
  };
}
