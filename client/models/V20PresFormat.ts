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
 * @interface V20PresFormat
 */
export interface V20PresFormat {
  /**
   * Attachment identifier
   * @type {string}
   * @memberof V20PresFormat
   */
  attach_id: string;
  /**
   * Attachment format specifier
   * @type {string}
   * @memberof V20PresFormat
   */
  format: string;
}

export function V20PresFormatFromJSON(json: any): V20PresFormat {
  return V20PresFormatFromJSONTyped(json, false);
}

export function V20PresFormatFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): V20PresFormat {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    attach_id: json['attach_id'],
    format: json['format'],
  };
}

export function V20PresFormatToJSON(value?: V20PresFormat | null): any {
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