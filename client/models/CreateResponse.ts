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
 * @interface CreateResponse
 */
export interface CreateResponse {
  /**
   * DID created
   * @type {string}
   * @memberof CreateResponse
   */
  did?: string;
  /**
   * The published didState
   * @type {{ [key: string]: object; }}
   * @memberof CreateResponse
   */
  didState?: { [key: string]: object };
  /**
   * Flag to denote if the operation was successful
   * @type {boolean}
   * @memberof CreateResponse
   */
  success?: boolean;
  /**
   * Verification key
   * @type {string}
   * @memberof CreateResponse
   */
  verkey?: string;
}

export function CreateResponseFromJSON(json: any): CreateResponse {
  return CreateResponseFromJSONTyped(json, false);
}

export function CreateResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): CreateResponse {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    did: !exists(json, 'did') ? undefined : json['did'],
    didState: !exists(json, 'didState') ? undefined : json['didState'],
    success: !exists(json, 'success') ? undefined : json['success'],
    verkey: !exists(json, 'verkey') ? undefined : json['verkey'],
  };
}

export function CreateResponseToJSON(value?: CreateResponse | null): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    did: value.did,
    didState: value.didState,
    success: value.success,
    verkey: value.verkey,
  };
}
