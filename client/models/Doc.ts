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
import {
  SignatureOptions,
  SignatureOptionsFromJSON,
  SignatureOptionsFromJSONTyped,
  SignatureOptionsToJSON,
} from './';

/**
 *
 * @export
 * @interface Doc
 */
export interface Doc {
  /**
   * Credential to sign
   * @type {object}
   * @memberof Doc
   */
  credential: object;
  /**
   * Signature options
   * @type {SignatureOptions}
   * @memberof Doc
   */
  options: SignatureOptions;
}

export function DocFromJSON(json: any): Doc {
  return DocFromJSONTyped(json, false);
}

export function DocFromJSONTyped(json: any, ignoreDiscriminator: boolean): Doc {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    credential: json['credential'],
    options: SignatureOptionsFromJSON(json['options']),
  };
}

export function DocToJSON(value?: Doc | null): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    credential: value.credential,
    options: SignatureOptionsToJSON(value.options),
  };
}
