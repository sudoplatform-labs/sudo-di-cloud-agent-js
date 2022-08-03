/**
 * Sudo Decentralized Identity Cloud Agent SDK
 * Provides REST API wrappers for Typescript Agent Controllers using the Sudo Decentralized Identity Cloud Agent Service
 *
 * The version of the OpenAPI document: v0.6.4
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
 * @interface Generated
 */
export interface Generated {
  /**
   *
   * @type {string}
   * @memberof Generated
   */
  master_secret?: string;
  /**
   *
   * @type {string}
   * @memberof Generated
   */
  number?: string;
  /**
   *
   * @type {string}
   * @memberof Generated
   */
  remainder?: string;
}

export function GeneratedFromJSON(json: any): Generated {
  return GeneratedFromJSONTyped(json, false);
}

export function GeneratedFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): Generated {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    master_secret: !exists(json, 'master_secret')
      ? undefined
      : json['master_secret'],
    number: !exists(json, 'number') ? undefined : json['number'],
    remainder: !exists(json, 'remainder') ? undefined : json['remainder'],
  };
}

export function GeneratedToJSON(value?: Generated | null): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    master_secret: value.master_secret,
    number: value.number,
    remainder: value.remainder,
  };
}
