/**
 * Sudo Decentralized Identity Cloud Agent SDK
 * Provides REST API wrappers for Typescript Agent Controllers using the Sudo Decentralized Identity Cloud Agent Service
 *
 * The version of the OpenAPI document: v0.9.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import { Doc, DocFromJSON, DocFromJSONTyped, DocToJSON } from './';

/**
 *
 * @export
 * @interface SignRequest
 */
export interface SignRequest {
  /**
   *
   * @type {Doc}
   * @memberof SignRequest
   */
  doc: Doc;
  /**
   * Verkey to use for signing
   * @type {string}
   * @memberof SignRequest
   */
  verkey: string;
}

export function SignRequestFromJSON(json: any): SignRequest {
  return SignRequestFromJSONTyped(json, false);
}

export function SignRequestFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): SignRequest {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    doc: DocFromJSON(json['doc']),
    verkey: json['verkey'],
  };
}

export function SignRequestToJSON(value?: SignRequest | null): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    doc: DocToJSON(value.doc),
    verkey: value.verkey,
  };
}
