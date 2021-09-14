/**
 * Sudo Decentralized Identity Cloud Agent SDK
 * Provides REST API wrappers for Typescript Agent Controllers using the Sudo Decentralized Identity Cloud Agency Service
 *
 * The version of the OpenAPI document: v0.5.3
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
 * @interface ConnectionMetadata
 */
export interface ConnectionMetadata {
  /**
   * Dictionary of metadata associated with connection.
   * @type {object}
   * @memberof ConnectionMetadata
   */
  results?: object;
}

export function ConnectionMetadataFromJSON(json: any): ConnectionMetadata {
  return ConnectionMetadataFromJSONTyped(json, false);
}

export function ConnectionMetadataFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): ConnectionMetadata {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    results: !exists(json, 'results') ? undefined : json['results'],
  };
}

export function ConnectionMetadataToJSON(
  value?: ConnectionMetadata | null,
): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    results: value.results,
  };
}
