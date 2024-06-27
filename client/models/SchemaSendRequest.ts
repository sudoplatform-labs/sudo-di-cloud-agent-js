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
/**
 *
 * @export
 * @interface SchemaSendRequest
 */
export interface SchemaSendRequest {
  /**
   * List of schema attributes
   * @type {Array<string>}
   * @memberof SchemaSendRequest
   */
  attributes: Array<string>;
  /**
   * Schema name
   * @type {string}
   * @memberof SchemaSendRequest
   */
  schema_name: string;
  /**
   * Schema version
   * @type {string}
   * @memberof SchemaSendRequest
   */
  schema_version: string;
}

export function SchemaSendRequestFromJSON(json: any): SchemaSendRequest {
  return SchemaSendRequestFromJSONTyped(json, false);
}

export function SchemaSendRequestFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): SchemaSendRequest {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    attributes: json['attributes'],
    schema_name: json['schema_name'],
    schema_version: json['schema_version'],
  };
}

export function SchemaSendRequestToJSON(value?: SchemaSendRequest | null): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    attributes: value.attributes,
    schema_name: value.schema_name,
    schema_version: value.schema_version,
  };
}
