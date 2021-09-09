/**
 * Sudo Decentralized Identity Cloud Agent SDK
 * Provides REST API wrappers for Typescript Agent Controllers using the Sudo Decentralized Identity Cloud Agency Service
 *
 * The version of the OpenAPI document: v0.5.0
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
 * @interface DIDEndpoint
 */
export interface DIDEndpoint {
  /**
   * DID of interest
   * @type {string}
   * @memberof DIDEndpoint
   */
  did: string;
  /**
   * Endpoint to set (omit to delete)
   * @type {string}
   * @memberof DIDEndpoint
   */
  endpoint?: string;
}

export function DIDEndpointFromJSON(json: any): DIDEndpoint {
  return DIDEndpointFromJSONTyped(json, false);
}

export function DIDEndpointFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): DIDEndpoint {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    did: json['did'],
    endpoint: !exists(json, 'endpoint') ? undefined : json['endpoint'],
  };
}

export function DIDEndpointToJSON(value?: DIDEndpoint | null): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    did: value.did,
    endpoint: value.endpoint,
  };
}