/**
 * Sudo Decentralized Identity Cloud Agent SDK
 * Provides REST API wrappers for Typescript Agent Controllers using the Sudo Decentralized Identity Cloud Agent Service
 *
 * The version of the OpenAPI document: v0.6.4
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
 * @interface GetNymRoleResponse
 */
export interface GetNymRoleResponse {
  /**
   * Ledger role
   * @type {string}
   * @memberof GetNymRoleResponse
   */
  role?: GetNymRoleResponseRoleEnum;
}

/**
 * @export
 * @enum {string}
 */
export enum GetNymRoleResponseRoleEnum {
  Steward = 'STEWARD',
  Trustee = 'TRUSTEE',
  Endorser = 'ENDORSER',
  NetworkMonitor = 'NETWORK_MONITOR',
  User = 'USER',
  RoleRemove = 'ROLE_REMOVE',
}

export function GetNymRoleResponseFromJSON(json: any): GetNymRoleResponse {
  return GetNymRoleResponseFromJSONTyped(json, false);
}

export function GetNymRoleResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetNymRoleResponse {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    role: !exists(json, 'role') ? undefined : json['role'],
  };
}

export function GetNymRoleResponseToJSON(
  value?: GetNymRoleResponse | null,
): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    role: value.role,
  };
}
