/**
 * Sudo Decentralized Identity Cloud Agent SDK
 * Provides REST API wrappers for Typescript Agent Controllers using the Sudo Decentralized Identity Cloud Agent Service
 *
 * The version of the OpenAPI document: v0.10.0
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
 * @interface ModelDate
 */
export interface ModelDate {
  /**
   * Expiry Date
   * @type {Date}
   * @memberof ModelDate
   */
  expires_time: Date;
}

export function ModelDateFromJSON(json: any): ModelDate {
  return ModelDateFromJSONTyped(json, false);
}

export function ModelDateFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): ModelDate {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    expires_time: new Date(json['expires_time']),
  };
}

export function ModelDateToJSON(value?: ModelDate | null): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    expires_time: value.expires_time.toISOString(),
  };
}
