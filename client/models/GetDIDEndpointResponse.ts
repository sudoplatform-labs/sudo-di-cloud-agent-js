/**
 * Sudo Decentralized Identity Cloud Agent SDK
 * Provides REST API wrappers for Typescript Agent Controllers using the Sudo Decentralized Identity Cloud Agent Service
 *
 * The version of the OpenAPI document: v0.11.0
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
 * @interface GetDIDEndpointResponse
 */
export interface GetDIDEndpointResponse {
  /**
   * Full verification key
   * @type {string}
   * @memberof GetDIDEndpointResponse
   */
  endpoint?: string | null;
}

export function GetDIDEndpointResponseFromJSON(
  json: any,
): GetDIDEndpointResponse {
  return GetDIDEndpointResponseFromJSONTyped(json, false);
}

export function GetDIDEndpointResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetDIDEndpointResponse {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    endpoint: !exists(json, 'endpoint') ? undefined : json['endpoint'],
  };
}

export function GetDIDEndpointResponseToJSON(
  value?: GetDIDEndpointResponse | null,
): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    endpoint: value.endpoint,
  };
}
