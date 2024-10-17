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
 * @interface DIDEndpointWithType
 */
export interface DIDEndpointWithType {
  /**
   * DID of interest
   * @type {string}
   * @memberof DIDEndpointWithType
   */
  did: string;
  /**
   * Endpoint to set (omit to delete)
   * @type {string}
   * @memberof DIDEndpointWithType
   */
  endpoint?: string;
  /**
   * Endpoint type to set (default 'Endpoint'); affects only public or posted DIDs
   * @type {string}
   * @memberof DIDEndpointWithType
   */
  endpoint_type?: DIDEndpointWithTypeEndpointTypeEnum;
  /**
   * Medation ID to use for endpoint information.
   * @type {string}
   * @memberof DIDEndpointWithType
   */
  mediation_id?: string;
}

/**
 * @export
 * @enum {string}
 */
export enum DIDEndpointWithTypeEndpointTypeEnum {
  Endpoint = 'Endpoint',
  Profile = 'Profile',
  LinkedDomains = 'LinkedDomains',
}

export function DIDEndpointWithTypeFromJSON(json: any): DIDEndpointWithType {
  return DIDEndpointWithTypeFromJSONTyped(json, false);
}

export function DIDEndpointWithTypeFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): DIDEndpointWithType {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    did: json['did'],
    endpoint: !exists(json, 'endpoint') ? undefined : json['endpoint'],
    endpoint_type: !exists(json, 'endpoint_type')
      ? undefined
      : json['endpoint_type'],
    mediation_id: !exists(json, 'mediation_id')
      ? undefined
      : json['mediation_id'],
  };
}

export function DIDEndpointWithTypeToJSON(
  value?: DIDEndpointWithType | null,
): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    did: value.did,
    endpoint: value.endpoint,
    endpoint_type: value.endpoint_type,
    mediation_id: value.mediation_id,
  };
}
