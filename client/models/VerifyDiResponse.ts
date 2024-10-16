/**
 * Sudo Decentralized Identity Cloud Agent SDK
 * Provides REST API wrappers for Typescript Agent Controllers using the Sudo Decentralized Identity Cloud Agent Service
 *
 * The version of the OpenAPI document: v100.0.100
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
 * @interface VerifyDiResponse
 */
export interface VerifyDiResponse {
  /**
   * Verified
   * @type {boolean}
   * @memberof VerifyDiResponse
   */
  verified?: boolean;
}

export function VerifyDiResponseFromJSON(json: any): VerifyDiResponse {
  return VerifyDiResponseFromJSONTyped(json, false);
}

export function VerifyDiResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): VerifyDiResponse {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    verified: !exists(json, 'verified') ? undefined : json['verified'],
  };
}

export function VerifyDiResponseToJSON(value?: VerifyDiResponse | null): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    verified: value.verified,
  };
}
