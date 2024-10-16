/**
 * Sudo Decentralized Identity Cloud Agent SDK
 * Provides REST API wrappers for Typescript Agent Controllers using the Sudo Decentralized Identity Cloud Agent Service
 *
 * The version of the OpenAPI document: v100.0.100
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import {
  IndyAttrValue,
  IndyAttrValueFromJSON,
  IndyAttrValueFromJSONTyped,
  IndyAttrValueToJSON,
} from './';

/**
 *
 * @export
 * @interface IndyCredential
 */
export interface IndyCredential {
  /**
   * Credential definition identifier
   * @type {string}
   * @memberof IndyCredential
   */
  cred_def_id: string;
  /**
   * Revocation registry state
   * @type {object}
   * @memberof IndyCredential
   */
  rev_reg?: object | null;
  /**
   * Revocation registry identifier
   * @type {string}
   * @memberof IndyCredential
   */
  rev_reg_id?: string | null;
  /**
   * Schema identifier
   * @type {string}
   * @memberof IndyCredential
   */
  schema_id: string;
  /**
   * Credential signature
   * @type {object}
   * @memberof IndyCredential
   */
  signature: object;
  /**
   * Credential signature correctness proof
   * @type {object}
   * @memberof IndyCredential
   */
  signature_correctness_proof: object;
  /**
   * Credential attributes
   * @type {{ [key: string]: IndyAttrValue; }}
   * @memberof IndyCredential
   */
  values: { [key: string]: IndyAttrValue };
  /**
   * Witness for revocation proof
   * @type {object}
   * @memberof IndyCredential
   */
  witness?: object | null;
}

export function IndyCredentialFromJSON(json: any): IndyCredential {
  return IndyCredentialFromJSONTyped(json, false);
}

export function IndyCredentialFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): IndyCredential {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    cred_def_id: json['cred_def_id'],
    rev_reg: !exists(json, 'rev_reg') ? undefined : json['rev_reg'],
    rev_reg_id: !exists(json, 'rev_reg_id') ? undefined : json['rev_reg_id'],
    schema_id: json['schema_id'],
    signature: json['signature'],
    signature_correctness_proof: json['signature_correctness_proof'],
    values: mapValues(json['values'], IndyAttrValueFromJSON),
    witness: !exists(json, 'witness') ? undefined : json['witness'],
  };
}

export function IndyCredentialToJSON(value?: IndyCredential | null): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    cred_def_id: value.cred_def_id,
    rev_reg: value.rev_reg,
    rev_reg_id: value.rev_reg_id,
    schema_id: value.schema_id,
    signature: value.signature,
    signature_correctness_proof: value.signature_correctness_proof,
    values: mapValues(value.values, IndyAttrValueToJSON),
    witness: value.witness,
  };
}
