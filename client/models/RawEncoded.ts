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
 * @interface RawEncoded
 */
export interface RawEncoded {
  /**
   * Encoded value
   * @type {string}
   * @memberof RawEncoded
   */
  encoded?: string;
  /**
   * Raw value
   * @type {string}
   * @memberof RawEncoded
   */
  raw?: string;
}

export function RawEncodedFromJSON(json: any): RawEncoded {
  return RawEncodedFromJSONTyped(json, false);
}

export function RawEncodedFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): RawEncoded {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    encoded: !exists(json, 'encoded') ? undefined : json['encoded'],
    raw: !exists(json, 'raw') ? undefined : json['raw'],
  };
}

export function RawEncodedToJSON(value?: RawEncoded | null): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    encoded: value.encoded,
    raw: value.raw,
  };
}
