/**
 * Sudo Decentralized Identity Cloud Agent SDK
 * Provides REST API wrappers for Typescript Agent Controllers using the Sudo Decentralized Identity Cloud Agent Service
 *
 * The version of the OpenAPI document: v0.10.1
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
 * @interface AddProofResponse
 */
export interface AddProofResponse {
  /**
   *
   * @type {object}
   * @memberof AddProofResponse
   */
  secured_document: object;
}

export function AddProofResponseFromJSON(json: any): AddProofResponse {
  return AddProofResponseFromJSONTyped(json, false);
}

export function AddProofResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): AddProofResponse {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    secured_document: json['secured_document'],
  };
}

export function AddProofResponseToJSON(value?: AddProofResponse | null): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    secured_document: value.secured_document,
  };
}
