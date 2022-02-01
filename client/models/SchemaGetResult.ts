/**
 * Sudo Decentralized Identity Cloud Agent SDK
 * Provides REST API wrappers for Typescript Agent Controllers using the Sudo Decentralized Identity Cloud Agent Service
 *
 * The version of the OpenAPI document: v0.6.3
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
 * @interface SchemaGetResult
 */
export interface SchemaGetResult {
  /**
   *
   * @type {Schema}
   * @memberof SchemaGetResult
   */
  schema?: Schema;
}

export function SchemaGetResultFromJSON(json: any): SchemaGetResult {
  return SchemaGetResultFromJSONTyped(json, false);
}

export function SchemaGetResultFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): SchemaGetResult {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    schema: !exists(json, 'schema')
      ? undefined
      : SchemaFromJSON(json['schema']),
  };
}

export function SchemaGetResultToJSON(value?: SchemaGetResult | null): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    schema: SchemaToJSON(value.schema),
  };
}
