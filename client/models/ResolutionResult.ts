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
 * @interface ResolutionResult
 */
export interface ResolutionResult {
  /**
   * DID Document
   * @type {{ [key: string]: object; }}
   * @memberof ResolutionResult
   */
  did_document: { [key: string]: object };
  /**
   * Resolution metadata
   * @type {{ [key: string]: object; }}
   * @memberof ResolutionResult
   */
  metadata: { [key: string]: object };
}

export function ResolutionResultFromJSON(json: any): ResolutionResult {
  return ResolutionResultFromJSONTyped(json, false);
}

export function ResolutionResultFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): ResolutionResult {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    did_document: json['did_document'],
    metadata: json['metadata'],
  };
}

export function ResolutionResultToJSON(value?: ResolutionResult | null): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    did_document: value.did_document,
    metadata: value.metadata,
  };
}
