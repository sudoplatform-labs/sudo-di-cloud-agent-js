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
 * @interface SchemasCreatedResult
 */
export interface SchemasCreatedResult {
  /**
   *
   * @type {Array<string>}
   * @memberof SchemasCreatedResult
   */
  schema_ids?: Array<string>;
}

export function SchemasCreatedResultFromJSON(json: any): SchemasCreatedResult {
  return SchemasCreatedResultFromJSONTyped(json, false);
}

export function SchemasCreatedResultFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): SchemasCreatedResult {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    schema_ids: !exists(json, 'schema_ids') ? undefined : json['schema_ids'],
  };
}

export function SchemasCreatedResultToJSON(
  value?: SchemasCreatedResult | null,
): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    schema_ids: value.schema_ids,
  };
}
