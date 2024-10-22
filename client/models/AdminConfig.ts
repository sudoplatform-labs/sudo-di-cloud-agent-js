/**
 * Sudo Decentralized Identity Cloud Agent SDK
 * Provides REST API wrappers for Typescript Agent Controllers using the Sudo Decentralized Identity Cloud Agent Service
 *
 * The version of the OpenAPI document: v0.10.1
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
 * @interface AdminConfig
 */
export interface AdminConfig {
  /**
   * Configuration settings
   * @type {object}
   * @memberof AdminConfig
   */
  config: object;
}

export function AdminConfigFromJSON(json: any): AdminConfig {
  return AdminConfigFromJSONTyped(json, false);
}

export function AdminConfigFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): AdminConfig {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    config: json['config'],
  };
}

export function AdminConfigToJSON(value?: AdminConfig | null): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    config: value.config,
  };
}
