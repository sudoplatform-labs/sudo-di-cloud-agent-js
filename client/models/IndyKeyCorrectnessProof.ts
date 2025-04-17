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
 * @interface IndyKeyCorrectnessProof
 */
export interface IndyKeyCorrectnessProof {
  /**
   * c in key correctness proof
   * @type {string}
   * @memberof IndyKeyCorrectnessProof
   */
  c: string;
  /**
   * xr_cap in key correctness proof
   * @type {Array<Array<string>>}
   * @memberof IndyKeyCorrectnessProof
   */
  xr_cap: Array<Array<string>>;
  /**
   * xz_cap in key correctness proof
   * @type {string}
   * @memberof IndyKeyCorrectnessProof
   */
  xz_cap: string;
}

export function IndyKeyCorrectnessProofFromJSON(
  json: any,
): IndyKeyCorrectnessProof {
  return IndyKeyCorrectnessProofFromJSONTyped(json, false);
}

export function IndyKeyCorrectnessProofFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): IndyKeyCorrectnessProof {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    c: json['c'],
    xr_cap: json['xr_cap'],
    xz_cap: json['xz_cap'],
  };
}

export function IndyKeyCorrectnessProofToJSON(
  value?: IndyKeyCorrectnessProof | null,
): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    c: value.c,
    xr_cap: value.xr_cap,
    xz_cap: value.xz_cap,
  };
}
