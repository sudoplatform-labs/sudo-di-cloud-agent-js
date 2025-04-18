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
  IndyGEProofPred,
  IndyGEProofPredFromJSON,
  IndyGEProofPredFromJSONTyped,
  IndyGEProofPredToJSON,
} from './';

/**
 *
 * @export
 * @interface IndyGEProof
 */
export interface IndyGEProof {
  /**
   *
   * @type {string}
   * @memberof IndyGEProof
   */
  alpha?: string;
  /**
   *
   * @type {string}
   * @memberof IndyGEProof
   */
  mj?: string;
  /**
   *
   * @type {IndyGEProofPred}
   * @memberof IndyGEProof
   */
  predicate?: IndyGEProofPred;
  /**
   *
   * @type {{ [key: string]: string; }}
   * @memberof IndyGEProof
   */
  r?: { [key: string]: string };
  /**
   *
   * @type {{ [key: string]: string; }}
   * @memberof IndyGEProof
   */
  t?: { [key: string]: string };
  /**
   *
   * @type {{ [key: string]: string; }}
   * @memberof IndyGEProof
   */
  u?: { [key: string]: string };
}

export function IndyGEProofFromJSON(json: any): IndyGEProof {
  return IndyGEProofFromJSONTyped(json, false);
}

export function IndyGEProofFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): IndyGEProof {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    alpha: !exists(json, 'alpha') ? undefined : json['alpha'],
    mj: !exists(json, 'mj') ? undefined : json['mj'],
    predicate: !exists(json, 'predicate')
      ? undefined
      : IndyGEProofPredFromJSON(json['predicate']),
    r: !exists(json, 'r') ? undefined : json['r'],
    t: !exists(json, 't') ? undefined : json['t'],
    u: !exists(json, 'u') ? undefined : json['u'],
  };
}

export function IndyGEProofToJSON(value?: IndyGEProof | null): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    alpha: value.alpha,
    mj: value.mj,
    predicate: IndyGEProofPredToJSON(value.predicate),
    r: value.r,
    t: value.t,
    u: value.u,
  };
}
