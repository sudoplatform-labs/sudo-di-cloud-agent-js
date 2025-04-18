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
import {
  SignatureOptions,
  SignatureOptionsFromJSON,
  SignatureOptionsFromJSONTyped,
  SignatureOptionsToJSON,
} from './';

/**
 *
 * @export
 * @interface SignedDoc
 */
export interface SignedDoc {
  /**
   * Linked data proof
   * @type {SignatureOptions}
   * @memberof SignedDoc
   */
  proof: SignatureOptions;
}

export function SignedDocFromJSON(json: any): SignedDoc {
  return SignedDocFromJSONTyped(json, false);
}

export function SignedDocFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): SignedDoc {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    proof: SignatureOptionsFromJSON(json['proof']),
  };
}

export function SignedDocToJSON(value?: SignedDoc | null): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    proof: SignatureOptionsToJSON(value.proof),
  };
}
