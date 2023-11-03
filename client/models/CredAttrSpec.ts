/**
 * Sudo Decentralized Identity Cloud Agent SDK
 * Provides REST API wrappers for Typescript Agent Controllers using the Sudo Decentralized Identity Cloud Agent Service
 *
 * The version of the OpenAPI document: v0.7.0
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
 * @interface CredAttrSpec
 */
export interface CredAttrSpec {
  /**
   * MIME type: omit for (null) default
   * @type {string}
   * @memberof CredAttrSpec
   */
  mime_type?: string | null;
  /**
   * Attribute name
   * @type {string}
   * @memberof CredAttrSpec
   */
  name: string;
  /**
   * Attribute value: base64-encode if MIME type is present
   * @type {string}
   * @memberof CredAttrSpec
   */
  value: string;
}

export function CredAttrSpecFromJSON(json: any): CredAttrSpec {
  return CredAttrSpecFromJSONTyped(json, false);
}

export function CredAttrSpecFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): CredAttrSpec {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    mime_type: !exists(json, 'mime-type') ? undefined : json['mime-type'],
    name: json['name'],
    value: json['value'],
  };
}

export function CredAttrSpecToJSON(value?: CredAttrSpec | null): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    'mime-type': value.mime_type,
    name: value.name,
    value: value.value,
  };
}
