/**
 * Sudo Decentralized Identity Cloud Agent SDK
 * Provides REST API wrappers for Typescript Agent Controllers using the Sudo Decentralized Identity Cloud Agency Service
 *
 * The version of the OpenAPI document: v0.5.2
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
 * @interface EndpointsResult
 */
export interface EndpointsResult {
  /**
   * My endpoint
   * @type {string}
   * @memberof EndpointsResult
   */
  my_endpoint?: string;
  /**
   * Their endpoint
   * @type {string}
   * @memberof EndpointsResult
   */
  their_endpoint?: string;
}

export function EndpointsResultFromJSON(json: any): EndpointsResult {
  return EndpointsResultFromJSONTyped(json, false);
}

export function EndpointsResultFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): EndpointsResult {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    my_endpoint: !exists(json, 'my_endpoint') ? undefined : json['my_endpoint'],
    their_endpoint: !exists(json, 'their_endpoint')
      ? undefined
      : json['their_endpoint'],
  };
}

export function EndpointsResultToJSON(value?: EndpointsResult | null): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    my_endpoint: value.my_endpoint,
    their_endpoint: value.their_endpoint,
  };
}
