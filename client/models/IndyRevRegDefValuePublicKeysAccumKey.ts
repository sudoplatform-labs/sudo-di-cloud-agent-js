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
 * @interface IndyRevRegDefValuePublicKeysAccumKey
 */
export interface IndyRevRegDefValuePublicKeysAccumKey {
  /**
   * Value for z
   * @type {string}
   * @memberof IndyRevRegDefValuePublicKeysAccumKey
   */
  z?: string;
}

export function IndyRevRegDefValuePublicKeysAccumKeyFromJSON(
  json: any,
): IndyRevRegDefValuePublicKeysAccumKey {
  return IndyRevRegDefValuePublicKeysAccumKeyFromJSONTyped(json, false);
}

export function IndyRevRegDefValuePublicKeysAccumKeyFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): IndyRevRegDefValuePublicKeysAccumKey {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    z: !exists(json, 'z') ? undefined : json['z'],
  };
}

export function IndyRevRegDefValuePublicKeysAccumKeyToJSON(
  value?: IndyRevRegDefValuePublicKeysAccumKey | null,
): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    z: value.z,
  };
}