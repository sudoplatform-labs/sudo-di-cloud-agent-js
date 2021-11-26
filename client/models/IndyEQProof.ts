/**
 * Sudo Decentralized Identity Cloud Agent SDK
 * Provides REST API wrappers for Typescript Agent Controllers using the Sudo Decentralized Identity Cloud Agency Service
 *
 * The version of the OpenAPI document: v0.6.2
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
 * @interface IndyEQProof
 */
export interface IndyEQProof {
  /**
   *
   * @type {string}
   * @memberof IndyEQProof
   */
  a_prime?: string;
  /**
   *
   * @type {string}
   * @memberof IndyEQProof
   */
  e?: string;
  /**
   *
   * @type {{ [key: string]: string; }}
   * @memberof IndyEQProof
   */
  m?: { [key: string]: string };
  /**
   *
   * @type {string}
   * @memberof IndyEQProof
   */
  m2?: string;
  /**
   *
   * @type {{ [key: string]: string; }}
   * @memberof IndyEQProof
   */
  revealed_attrs?: { [key: string]: string };
  /**
   *
   * @type {string}
   * @memberof IndyEQProof
   */
  v?: string;
}

export function IndyEQProofFromJSON(json: any): IndyEQProof {
  return IndyEQProofFromJSONTyped(json, false);
}

export function IndyEQProofFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): IndyEQProof {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    a_prime: !exists(json, 'a_prime') ? undefined : json['a_prime'],
    e: !exists(json, 'e') ? undefined : json['e'],
    m: !exists(json, 'm') ? undefined : json['m'],
    m2: !exists(json, 'm2') ? undefined : json['m2'],
    revealed_attrs: !exists(json, 'revealed_attrs')
      ? undefined
      : json['revealed_attrs'],
    v: !exists(json, 'v') ? undefined : json['v'],
  };
}

export function IndyEQProofToJSON(value?: IndyEQProof | null): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    a_prime: value.a_prime,
    e: value.e,
    m: value.m,
    m2: value.m2,
    revealed_attrs: value.revealed_attrs,
    v: value.v,
  };
}
