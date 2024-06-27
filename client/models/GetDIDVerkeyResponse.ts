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
 * @interface GetDIDVerkeyResponse
 */
export interface GetDIDVerkeyResponse {
  /**
   * Full verification key
   * @type {string}
   * @memberof GetDIDVerkeyResponse
   */
  verkey?: string | null;
}

export function GetDIDVerkeyResponseFromJSON(json: any): GetDIDVerkeyResponse {
  return GetDIDVerkeyResponseFromJSONTyped(json, false);
}

export function GetDIDVerkeyResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetDIDVerkeyResponse {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    verkey: !exists(json, 'verkey') ? undefined : json['verkey'],
  };
}

export function GetDIDVerkeyResponseToJSON(
  value?: GetDIDVerkeyResponse | null,
): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    verkey: value.verkey,
  };
}
