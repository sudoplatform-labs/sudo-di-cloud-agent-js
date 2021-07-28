/**
 * Sudo Decentralized Identity Cloud Agent SDK
 * Provides REST API wrappers for Typescript Agent Controllers using the Sudo Decentralized Identity Cloud Agency Service
 *
 * The version of the OpenAPI document: v0.4.0
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
 * @interface RevRegsCreated
 */
export interface RevRegsCreated {
  /**
   *
   * @type {Array<string>}
   * @memberof RevRegsCreated
   */
  rev_reg_ids?: Array<string>;
}

export function RevRegsCreatedFromJSON(json: any): RevRegsCreated {
  return RevRegsCreatedFromJSONTyped(json, false);
}

export function RevRegsCreatedFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): RevRegsCreated {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    rev_reg_ids: !exists(json, 'rev_reg_ids') ? undefined : json['rev_reg_ids'],
  };
}

export function RevRegsCreatedToJSON(value?: RevRegsCreated | null): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    rev_reg_ids: value.rev_reg_ids,
  };
}
