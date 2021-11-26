/**
 * Sudo Decentralized Identity Cloud Agent SDK
 * Provides REST API wrappers for Typescript Agent Controllers using the Sudo Decentralized Identity Cloud Agency Service
 *
 * The version of the OpenAPI document: v0.6.2
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import {
  IndyRevRegDefValuePublicKeysAccumKey,
  IndyRevRegDefValuePublicKeysAccumKeyFromJSON,
  IndyRevRegDefValuePublicKeysAccumKeyFromJSONTyped,
  IndyRevRegDefValuePublicKeysAccumKeyToJSON,
} from './';

/**
 *
 * @export
 * @interface IndyRevRegDefValuePublicKeys
 */
export interface IndyRevRegDefValuePublicKeys {
  /**
   *
   * @type {IndyRevRegDefValuePublicKeysAccumKey}
   * @memberof IndyRevRegDefValuePublicKeys
   */
  accumKey?: IndyRevRegDefValuePublicKeysAccumKey;
}

export function IndyRevRegDefValuePublicKeysFromJSON(
  json: any,
): IndyRevRegDefValuePublicKeys {
  return IndyRevRegDefValuePublicKeysFromJSONTyped(json, false);
}

export function IndyRevRegDefValuePublicKeysFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): IndyRevRegDefValuePublicKeys {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    accumKey: !exists(json, 'accumKey')
      ? undefined
      : IndyRevRegDefValuePublicKeysAccumKeyFromJSON(json['accumKey']),
  };
}

export function IndyRevRegDefValuePublicKeysToJSON(
  value?: IndyRevRegDefValuePublicKeys | null,
): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    accumKey: IndyRevRegDefValuePublicKeysAccumKeyToJSON(value.accumKey),
  };
}
