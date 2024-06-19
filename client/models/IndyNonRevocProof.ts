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
/**
 *
 * @export
 * @interface IndyNonRevocProof
 */
export interface IndyNonRevocProof {
  /**
   *
   * @type {{ [key: string]: string; }}
   * @memberof IndyNonRevocProof
   */
  c_list?: { [key: string]: string };
  /**
   *
   * @type {{ [key: string]: string; }}
   * @memberof IndyNonRevocProof
   */
  x_list?: { [key: string]: string };
}

export function IndyNonRevocProofFromJSON(json: any): IndyNonRevocProof {
  return IndyNonRevocProofFromJSONTyped(json, false);
}

export function IndyNonRevocProofFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): IndyNonRevocProof {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    c_list: !exists(json, 'c_list') ? undefined : json['c_list'],
    x_list: !exists(json, 'x_list') ? undefined : json['x_list'],
  };
}

export function IndyNonRevocProofToJSON(value?: IndyNonRevocProof | null): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    c_list: value.c_list,
    x_list: value.x_list,
  };
}
