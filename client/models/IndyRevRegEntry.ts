/**
 * Sudo Decentralized Identity Cloud Agent SDK
 * Provides REST API wrappers for Typescript Agent Controllers using the Sudo Decentralized Identity Cloud Agency Service
 *
 * The version of the OpenAPI document: v0.6.1
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import {
  IndyRevRegEntryValue,
  IndyRevRegEntryValueFromJSON,
  IndyRevRegEntryValueFromJSONTyped,
  IndyRevRegEntryValueToJSON,
} from './';

/**
 *
 * @export
 * @interface IndyRevRegEntry
 */
export interface IndyRevRegEntry {
  /**
   * Revocation registry entry value
   * @type {IndyRevRegEntryValue}
   * @memberof IndyRevRegEntry
   */
  value?: IndyRevRegEntryValue;
  /**
   * Version of revocation registry entry
   * @type {string}
   * @memberof IndyRevRegEntry
   */
  ver?: string;
}

export function IndyRevRegEntryFromJSON(json: any): IndyRevRegEntry {
  return IndyRevRegEntryFromJSONTyped(json, false);
}

export function IndyRevRegEntryFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): IndyRevRegEntry {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    value: !exists(json, 'value')
      ? undefined
      : IndyRevRegEntryValueFromJSON(json['value']),
    ver: !exists(json, 'ver') ? undefined : json['ver'],
  };
}

export function IndyRevRegEntryToJSON(value?: IndyRevRegEntry | null): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    value: IndyRevRegEntryValueToJSON(value.value),
    ver: value.ver,
  };
}
