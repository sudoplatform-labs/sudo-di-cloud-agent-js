/**
 * Sudo Decentralized Identity Cloud Agent SDK
 * Provides REST API wrappers for Typescript Agent Controllers using the Sudo Decentralized Identity Cloud Agency Service
 *
 * The version of the OpenAPI document: v0.5.3
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
 * @interface AdminModules
 */
export interface AdminModules {
  /**
   * List of admin modules
   * @type {Array<string>}
   * @memberof AdminModules
   */
  result?: Array<string>;
}

export function AdminModulesFromJSON(json: any): AdminModules {
  return AdminModulesFromJSONTyped(json, false);
}

export function AdminModulesFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): AdminModules {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    result: !exists(json, 'result') ? undefined : json['result'],
  };
}

export function AdminModulesToJSON(value?: AdminModules | null): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    result: value.result,
  };
}
