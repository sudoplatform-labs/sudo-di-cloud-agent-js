/**
 * Sudo Decentralized Identity Cloud Agent SDK
 * Provides REST API wrappers for Typescript Agent Controllers using the Sudo Decentralized Identity Cloud Agency Service
 *
 * The version of the OpenAPI document: v0.6.0
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
 * @interface PerformRequest
 */
export interface PerformRequest {
  /**
   * Menu option name
   * @type {string}
   * @memberof PerformRequest
   */
  name?: string;
  /**
   * Input parameter values
   * @type {{ [key: string]: string; }}
   * @memberof PerformRequest
   */
  params?: { [key: string]: string };
}

export function PerformRequestFromJSON(json: any): PerformRequest {
  return PerformRequestFromJSONTyped(json, false);
}

export function PerformRequestFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): PerformRequest {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    name: !exists(json, 'name') ? undefined : json['name'],
    params: !exists(json, 'params') ? undefined : json['params'],
  };
}

export function PerformRequestToJSON(value?: PerformRequest | null): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    name: value.name,
    params: value.params,
  };
}
