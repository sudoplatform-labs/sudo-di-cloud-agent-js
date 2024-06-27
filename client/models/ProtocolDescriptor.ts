/**
 * Sudo Decentralized Identity Cloud Agent SDK
 * Provides REST API wrappers for Typescript Agent Controllers using the Sudo Decentralized Identity Cloud Agent Service
 *
 * The version of the OpenAPI document: v0.9.1
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
 * @interface ProtocolDescriptor
 */
export interface ProtocolDescriptor {
  /**
   *
   * @type {string}
   * @memberof ProtocolDescriptor
   */
  pid: string;
  /**
   * List of roles
   * @type {Array<string>}
   * @memberof ProtocolDescriptor
   */
  roles?: Array<string> | null;
}

export function ProtocolDescriptorFromJSON(json: any): ProtocolDescriptor {
  return ProtocolDescriptorFromJSONTyped(json, false);
}

export function ProtocolDescriptorFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): ProtocolDescriptor {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    pid: json['pid'],
    roles: !exists(json, 'roles') ? undefined : json['roles'],
  };
}

export function ProtocolDescriptorToJSON(
  value?: ProtocolDescriptor | null,
): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    pid: value.pid,
    roles: value.roles,
  };
}
