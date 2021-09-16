/**
 * Sudo Decentralized Identity Cloud Agent SDK
 * Provides REST API wrappers for Typescript Agent Controllers using the Sudo Decentralized Identity Cloud Agency Service
 *
 * The version of the OpenAPI document: v0.5.4
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
 * @interface IndyRevRegEntryValue
 */
export interface IndyRevRegEntryValue {
  /**
   * Accumulator value
   * @type {string}
   * @memberof IndyRevRegEntryValue
   */
  accum?: string;
  /**
   * Previous accumulator value
   * @type {string}
   * @memberof IndyRevRegEntryValue
   */
  prevAccum?: string;
  /**
   * Revoked credential revocation identifiers
   * @type {Array<number>}
   * @memberof IndyRevRegEntryValue
   */
  revoked?: Array<number>;
}

export function IndyRevRegEntryValueFromJSON(json: any): IndyRevRegEntryValue {
  return IndyRevRegEntryValueFromJSONTyped(json, false);
}

export function IndyRevRegEntryValueFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): IndyRevRegEntryValue {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    accum: !exists(json, 'accum') ? undefined : json['accum'],
    prevAccum: !exists(json, 'prevAccum') ? undefined : json['prevAccum'],
    revoked: !exists(json, 'revoked') ? undefined : json['revoked'],
  };
}

export function IndyRevRegEntryValueToJSON(
  value?: IndyRevRegEntryValue | null,
): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    accum: value.accum,
    prevAccum: value.prevAccum,
    revoked: value.revoked,
  };
}
