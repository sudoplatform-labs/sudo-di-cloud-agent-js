/**
 * Sudo Decentralized Identity Cloud Agent SDK
 * Provides REST API wrappers for Typescript Agent Controllers using the Sudo Decentralized Identity Cloud Agent Service
 *
 * The version of the OpenAPI document: v0.9.1
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import {
  SchemaInputDescriptor,
  SchemaInputDescriptorFromJSON,
  SchemaInputDescriptorFromJSONTyped,
  SchemaInputDescriptorToJSON,
} from './';

/**
 *
 * @export
 * @interface SchemasInputDescriptorFilter
 */
export interface SchemasInputDescriptorFilter {
  /**
   * oneOf
   * @type {boolean}
   * @memberof SchemasInputDescriptorFilter
   */
  oneof_filter?: boolean;
  /**
   *
   * @type {Array<Array<SchemaInputDescriptor>>}
   * @memberof SchemasInputDescriptorFilter
   */
  uri_groups?: Array<Array<SchemaInputDescriptor>>;
}

export function SchemasInputDescriptorFilterFromJSON(
  json: any,
): SchemasInputDescriptorFilter {
  return SchemasInputDescriptorFilterFromJSONTyped(json, false);
}

export function SchemasInputDescriptorFilterFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): SchemasInputDescriptorFilter {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    oneof_filter: !exists(json, 'oneof_filter')
      ? undefined
      : json['oneof_filter'],
    uri_groups: !exists(json, 'uri_groups') ? undefined : json['uri_groups'],
  };
}

export function SchemasInputDescriptorFilterToJSON(
  value?: SchemasInputDescriptorFilter | null,
): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    oneof_filter: value.oneof_filter,
    uri_groups: value.uri_groups,
  };
}
