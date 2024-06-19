/**
 * Sudo Decentralized Identity Cloud Agent SDK
 * Provides REST API wrappers for Typescript Agent Controllers using the Sudo Decentralized Identity Cloud Agent Service
 *
 * The version of the OpenAPI document: v0.9.0
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
 * @interface RevRegCreateRequest
 */
export interface RevRegCreateRequest {
  /**
   * Credential definition identifier
   * @type {string}
   * @memberof RevRegCreateRequest
   */
  credential_definition_id?: string;
  /**
   * Revocation registry size
   * @type {number}
   * @memberof RevRegCreateRequest
   */
  max_cred_num?: number;
}

export function RevRegCreateRequestFromJSON(json: any): RevRegCreateRequest {
  return RevRegCreateRequestFromJSONTyped(json, false);
}

export function RevRegCreateRequestFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): RevRegCreateRequest {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    credential_definition_id: !exists(json, 'credential_definition_id')
      ? undefined
      : json['credential_definition_id'],
    max_cred_num: !exists(json, 'max_cred_num')
      ? undefined
      : json['max_cred_num'],
  };
}

export function RevRegCreateRequestToJSON(
  value?: RevRegCreateRequest | null,
): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    credential_definition_id: value.credential_definition_id,
    max_cred_num: value.max_cred_num,
  };
}
