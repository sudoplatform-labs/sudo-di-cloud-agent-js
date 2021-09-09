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
import {
  IndyRevRegDefValuePublicKeys,
  IndyRevRegDefValuePublicKeysFromJSON,
  IndyRevRegDefValuePublicKeysFromJSONTyped,
  IndyRevRegDefValuePublicKeysToJSON,
} from './';

/**
 *
 * @export
 * @interface IndyRevRegDefValue
 */
export interface IndyRevRegDefValue {
  /**
   * Issuance type
   * @type {string}
   * @memberof IndyRevRegDefValue
   */
  issuanceType?: IndyRevRegDefValueIssuanceTypeEnum;
  /**
   * Maximum number of credentials; registry size
   * @type {number}
   * @memberof IndyRevRegDefValue
   */
  maxCredNum?: number;
  /**
   * Public keys
   * @type {IndyRevRegDefValuePublicKeys}
   * @memberof IndyRevRegDefValue
   */
  publicKeys?: IndyRevRegDefValuePublicKeys;
  /**
   * Tails hash value
   * @type {string}
   * @memberof IndyRevRegDefValue
   */
  tailsHash?: string;
  /**
   * Tails file location
   * @type {string}
   * @memberof IndyRevRegDefValue
   */
  tailsLocation?: string;
}

/**
 * @export
 * @enum {string}
 */
export enum IndyRevRegDefValueIssuanceTypeEnum {
  OnDemand = 'ISSUANCE_ON_DEMAND',
  ByDefault = 'ISSUANCE_BY_DEFAULT',
}

export function IndyRevRegDefValueFromJSON(json: any): IndyRevRegDefValue {
  return IndyRevRegDefValueFromJSONTyped(json, false);
}

export function IndyRevRegDefValueFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): IndyRevRegDefValue {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    issuanceType: !exists(json, 'issuanceType')
      ? undefined
      : json['issuanceType'],
    maxCredNum: !exists(json, 'maxCredNum') ? undefined : json['maxCredNum'],
    publicKeys: !exists(json, 'publicKeys')
      ? undefined
      : IndyRevRegDefValuePublicKeysFromJSON(json['publicKeys']),
    tailsHash: !exists(json, 'tailsHash') ? undefined : json['tailsHash'],
    tailsLocation: !exists(json, 'tailsLocation')
      ? undefined
      : json['tailsLocation'],
  };
}

export function IndyRevRegDefValueToJSON(
  value?: IndyRevRegDefValue | null,
): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    issuanceType: value.issuanceType,
    maxCredNum: value.maxCredNum,
    publicKeys: IndyRevRegDefValuePublicKeysToJSON(value.publicKeys),
    tailsHash: value.tailsHash,
    tailsLocation: value.tailsLocation,
  };
}
