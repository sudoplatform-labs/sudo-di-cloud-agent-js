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
 * @interface JWSCreate
 */
export interface JWSCreate {
  /**
   * DID of interest
   * @type {string}
   * @memberof JWSCreate
   */
  did?: string;
  /**
   *
   * @type {object}
   * @memberof JWSCreate
   */
  headers?: object;
  /**
   *
   * @type {object}
   * @memberof JWSCreate
   */
  payload: object;
  /**
   * Information used for proof verification
   * @type {string}
   * @memberof JWSCreate
   */
  verificationMethod?: string;
}

export function JWSCreateFromJSON(json: any): JWSCreate {
  return JWSCreateFromJSONTyped(json, false);
}

export function JWSCreateFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): JWSCreate {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    did: !exists(json, 'did') ? undefined : json['did'],
    headers: !exists(json, 'headers') ? undefined : json['headers'],
    payload: json['payload'],
    verificationMethod: !exists(json, 'verificationMethod')
      ? undefined
      : json['verificationMethod'],
  };
}

export function JWSCreateToJSON(value?: JWSCreate | null): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    did: value.did,
    headers: value.headers,
    payload: value.payload,
    verificationMethod: value.verificationMethod,
  };
}
