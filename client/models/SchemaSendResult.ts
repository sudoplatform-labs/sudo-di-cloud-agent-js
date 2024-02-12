/**
 * Sudo Decentralized Identity Cloud Agent SDK
 * Provides REST API wrappers for Typescript Agent Controllers using the Sudo Decentralized Identity Cloud Agent Service
 *
 * The version of the OpenAPI document: v0.8.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import { Schema, SchemaFromJSON, SchemaFromJSONTyped, SchemaToJSON } from './';

/**
 *
 * @export
 * @interface SchemaSendResult
 */
export interface SchemaSendResult {
  /**
   * Schema definition
   * @type {Schema}
   * @memberof SchemaSendResult
   */
  schema?: Schema;
  /**
   * Schema identifier
   * @type {string}
   * @memberof SchemaSendResult
   */
  schema_id: string;
}

export function SchemaSendResultFromJSON(json: any): SchemaSendResult {
  return SchemaSendResultFromJSONTyped(json, false);
}

export function SchemaSendResultFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): SchemaSendResult {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    schema: !exists(json, 'schema')
      ? undefined
      : SchemaFromJSON(json['schema']),
    schema_id: json['schema_id'],
  };
}

export function SchemaSendResultToJSON(value?: SchemaSendResult | null): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    schema: SchemaToJSON(value.schema),
    schema_id: value.schema_id,
  };
}
