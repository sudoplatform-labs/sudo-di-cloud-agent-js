/**
 * Sudo Decentralized Identity Cloud Agent SDK
 * Provides REST API wrappers for Typescript Agent Controllers using the Sudo Decentralized Identity Cloud Agent Service
 *
 * The version of the OpenAPI document: v0.6.5
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
 * @interface IndyAttrValue
 */
export interface IndyAttrValue {
  /**
   * Attribute encoded value
   * @type {string}
   * @memberof IndyAttrValue
   */
  encoded: string;
  /**
   * Attribute raw value
   * @type {string}
   * @memberof IndyAttrValue
   */
  raw: string;
}

export function IndyAttrValueFromJSON(json: any): IndyAttrValue {
  return IndyAttrValueFromJSONTyped(json, false);
}

export function IndyAttrValueFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): IndyAttrValue {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    encoded: json['encoded'],
    raw: json['raw'],
  };
}

export function IndyAttrValueToJSON(value?: IndyAttrValue | null): any {
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
