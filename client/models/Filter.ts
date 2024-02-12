/**
 * Sudo Decentralized Identity Cloud Agent SDK
 * Provides REST API wrappers for Typescript Agent Controllers using the Sudo Decentralized Identity Cloud Agent Service
 *
 * The version of the OpenAPI document: v0.8.0
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
 * @interface Filter
 */
export interface Filter {
  /**
   * Const
   * @type {object}
   * @memberof Filter
   */
  _const?: object;
  /**
   *
   * @type {Array<object>}
   * @memberof Filter
   */
  _enum?: Array<object>;
  /**
   * ExclusiveMaximum
   * @type {object}
   * @memberof Filter
   */
  exclusiveMaximum?: object;
  /**
   * ExclusiveMinimum
   * @type {object}
   * @memberof Filter
   */
  exclusiveMinimum?: object;
  /**
   * Format
   * @type {string}
   * @memberof Filter
   */
  format?: string;
  /**
   * Max Length
   * @type {number}
   * @memberof Filter
   */
  maxLength?: number;
  /**
   * Maximum
   * @type {object}
   * @memberof Filter
   */
  maximum?: object;
  /**
   * Min Length
   * @type {number}
   * @memberof Filter
   */
  minLength?: number;
  /**
   * Minimum
   * @type {object}
   * @memberof Filter
   */
  minimum?: object;
  /**
   * Not
   * @type {boolean}
   * @memberof Filter
   */
  not?: boolean;
  /**
   * Pattern
   * @type {string}
   * @memberof Filter
   */
  pattern?: string;
  /**
   * Type
   * @type {string}
   * @memberof Filter
   */
  type?: string;
}

export function FilterFromJSON(json: any): Filter {
  return FilterFromJSONTyped(json, false);
}

export function FilterFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): Filter {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    _const: !exists(json, 'const') ? undefined : json['const'],
    _enum: !exists(json, 'enum') ? undefined : json['enum'],
    exclusiveMaximum: !exists(json, 'exclusiveMaximum')
      ? undefined
      : json['exclusiveMaximum'],
    exclusiveMinimum: !exists(json, 'exclusiveMinimum')
      ? undefined
      : json['exclusiveMinimum'],
    format: !exists(json, 'format') ? undefined : json['format'],
    maxLength: !exists(json, 'maxLength') ? undefined : json['maxLength'],
    maximum: !exists(json, 'maximum') ? undefined : json['maximum'],
    minLength: !exists(json, 'minLength') ? undefined : json['minLength'],
    minimum: !exists(json, 'minimum') ? undefined : json['minimum'],
    not: !exists(json, 'not') ? undefined : json['not'],
    pattern: !exists(json, 'pattern') ? undefined : json['pattern'],
    type: !exists(json, 'type') ? undefined : json['type'],
  };
}

export function FilterToJSON(value?: Filter | null): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    const: value._const,
    enum: value._enum,
    exclusiveMaximum: value.exclusiveMaximum,
    exclusiveMinimum: value.exclusiveMinimum,
    format: value.format,
    maxLength: value.maxLength,
    maximum: value.maximum,
    minLength: value.minLength,
    minimum: value.minimum,
    not: value.not,
    pattern: value.pattern,
    type: value.type,
  };
}
