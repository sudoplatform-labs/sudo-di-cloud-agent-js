/**
 * Sudo Decentralized Identity Cloud Agent SDK
 * Provides REST API wrappers for Typescript Agent Controllers using the Sudo Decentralized Identity Cloud Agent Service
 *
 * The version of the OpenAPI document: v0.7.0
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
 * @interface TAAAcceptance
 */
export interface TAAAcceptance {
  /**
   *
   * @type {string}
   * @memberof TAAAcceptance
   */
  mechanism?: string;
  /**
   *
   * @type {number}
   * @memberof TAAAcceptance
   */
  time?: number;
}

export function TAAAcceptanceFromJSON(json: any): TAAAcceptance {
  return TAAAcceptanceFromJSONTyped(json, false);
}

export function TAAAcceptanceFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): TAAAcceptance {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    mechanism: !exists(json, 'mechanism') ? undefined : json['mechanism'],
    time: !exists(json, 'time') ? undefined : json['time'],
  };
}

export function TAAAcceptanceToJSON(value?: TAAAcceptance | null): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    mechanism: value.mechanism,
    time: value.time,
  };
}
