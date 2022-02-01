/**
 * Sudo Decentralized Identity Cloud Agent SDK
 * Provides REST API wrappers for Typescript Agent Controllers using the Sudo Decentralized Identity Cloud Agent Service
 *
 * The version of the OpenAPI document: v0.6.3
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
 * @interface DIDCreateOptions
 */
export interface DIDCreateOptions {
  /**
   *
   * @type {string}
   * @memberof DIDCreateOptions
   */
  key_type: DIDCreateOptionsKeyTypeEnum;
}

/**
 * @export
 * @enum {string}
 */
export enum DIDCreateOptionsKeyTypeEnum {
  Ed25519 = 'ed25519',
  Bls12381g2 = 'bls12381g2',
}

export function DIDCreateOptionsFromJSON(json: any): DIDCreateOptions {
  return DIDCreateOptionsFromJSONTyped(json, false);
}

export function DIDCreateOptionsFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): DIDCreateOptions {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    key_type: json['key_type'],
  };
}

export function DIDCreateOptionsToJSON(value?: DIDCreateOptions | null): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    key_type: value.key_type,
  };
}
