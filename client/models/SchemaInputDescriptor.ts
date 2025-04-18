/**
 * Sudo Decentralized Identity Cloud Agent SDK
 * Provides REST API wrappers for Typescript Agent Controllers using the Sudo Decentralized Identity Cloud Agent Service
 *
 * The version of the OpenAPI document: v0.11.0
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
 * @interface SchemaInputDescriptor
 */
export interface SchemaInputDescriptor {
  /**
   * Required
   * @type {boolean}
   * @memberof SchemaInputDescriptor
   */
  required?: boolean;
  /**
   * URI
   * @type {string}
   * @memberof SchemaInputDescriptor
   */
  uri?: string;
}

export function SchemaInputDescriptorFromJSON(
  json: any,
): SchemaInputDescriptor {
  return SchemaInputDescriptorFromJSONTyped(json, false);
}

export function SchemaInputDescriptorFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): SchemaInputDescriptor {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    required: !exists(json, 'required') ? undefined : json['required'],
    uri: !exists(json, 'uri') ? undefined : json['uri'],
  };
}

export function SchemaInputDescriptorToJSON(
  value?: SchemaInputDescriptor | null,
): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    required: value.required,
    uri: value.uri,
  };
}
