/**
 * Sudo Decentralized Identity Cloud Agent SDK
 * Provides REST API wrappers for Typescript Agent Controllers using the Sudo Decentralized Identity Cloud Agent Service
 *
 * The version of the OpenAPI document: v0.6.8
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
 * @interface V20CredFormat
 */
export interface V20CredFormat {
  /**
   * Attachment identifier
   * @type {string}
   * @memberof V20CredFormat
   */
  attach_id: string;
  /**
   * Attachment format specifier
   * @type {string}
   * @memberof V20CredFormat
   */
  format: string;
}

export function V20CredFormatFromJSON(json: any): V20CredFormat {
  return V20CredFormatFromJSONTyped(json, false);
}

export function V20CredFormatFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): V20CredFormat {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    attach_id: json['attach_id'],
    format: json['format'],
  };
}

export function V20CredFormatToJSON(value?: V20CredFormat | null): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    attach_id: value.attach_id,
    format: value.format,
  };
}
