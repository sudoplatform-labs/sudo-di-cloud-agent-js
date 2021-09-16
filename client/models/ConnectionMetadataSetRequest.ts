/**
 * Sudo Decentralized Identity Cloud Agent SDK
 * Provides REST API wrappers for Typescript Agent Controllers using the Sudo Decentralized Identity Cloud Agency Service
 *
 * The version of the OpenAPI document: v0.5.4
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
 * @interface ConnectionMetadataSetRequest
 */
export interface ConnectionMetadataSetRequest {
  /**
   * Dictionary of metadata to set for connection.
   * @type {object}
   * @memberof ConnectionMetadataSetRequest
   */
  metadata: object;
}

export function ConnectionMetadataSetRequestFromJSON(
  json: any,
): ConnectionMetadataSetRequest {
  return ConnectionMetadataSetRequestFromJSONTyped(json, false);
}

export function ConnectionMetadataSetRequestFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): ConnectionMetadataSetRequest {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    metadata: json['metadata'],
  };
}

export function ConnectionMetadataSetRequestToJSON(
  value?: ConnectionMetadataSetRequest | null,
): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    metadata: value.metadata,
  };
}
