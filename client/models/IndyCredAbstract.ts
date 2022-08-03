/**
 * Sudo Decentralized Identity Cloud Agent SDK
 * Provides REST API wrappers for Typescript Agent Controllers using the Sudo Decentralized Identity Cloud Agent Service
 *
 * The version of the OpenAPI document: v0.6.4
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import {
  IndyKeyCorrectnessProof,
  IndyKeyCorrectnessProofFromJSON,
  IndyKeyCorrectnessProofFromJSONTyped,
  IndyKeyCorrectnessProofToJSON,
} from './';

/**
 *
 * @export
 * @interface IndyCredAbstract
 */
export interface IndyCredAbstract {
  /**
   * Credential definition identifier
   * @type {string}
   * @memberof IndyCredAbstract
   */
  cred_def_id: string;
  /**
   * Key correctness proof
   * @type {IndyKeyCorrectnessProof}
   * @memberof IndyCredAbstract
   */
  key_correctness_proof: IndyKeyCorrectnessProof;
  /**
   * Nonce in credential abstract
   * @type {string}
   * @memberof IndyCredAbstract
   */
  nonce: string;
  /**
   * Schema identifier
   * @type {string}
   * @memberof IndyCredAbstract
   */
  schema_id: string;
}

export function IndyCredAbstractFromJSON(json: any): IndyCredAbstract {
  return IndyCredAbstractFromJSONTyped(json, false);
}

export function IndyCredAbstractFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): IndyCredAbstract {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    cred_def_id: json['cred_def_id'],
    key_correctness_proof: IndyKeyCorrectnessProofFromJSON(
      json['key_correctness_proof'],
    ),
    nonce: json['nonce'],
    schema_id: json['schema_id'],
  };
}

export function IndyCredAbstractToJSON(value?: IndyCredAbstract | null): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    cred_def_id: value.cred_def_id,
    key_correctness_proof: IndyKeyCorrectnessProofToJSON(
      value.key_correctness_proof,
    ),
    nonce: value.nonce,
    schema_id: value.schema_id,
  };
}
