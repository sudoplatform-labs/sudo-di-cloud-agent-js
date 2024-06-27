/**
 * Sudo Decentralized Identity Cloud Agent SDK
 * Provides REST API wrappers for Typescript Agent Controllers using the Sudo Decentralized Identity Cloud Agent Service
 *
 * The version of the OpenAPI document: v0.9.1
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import {
  Credential,
  CredentialFromJSON,
  CredentialFromJSONTyped,
  CredentialToJSON,
  LDProofVCOptions,
  LDProofVCOptionsFromJSON,
  LDProofVCOptionsFromJSONTyped,
  LDProofVCOptionsToJSON,
} from './';

/**
 *
 * @export
 * @interface LDProofVCDetail
 */
export interface LDProofVCDetail {
  /**
   * Detail of the JSON-LD Credential to be issued
   * @type {Credential}
   * @memberof LDProofVCDetail
   */
  credential: Credential;
  /**
   * Options for specifying how the linked data proof is created.
   * @type {LDProofVCOptions}
   * @memberof LDProofVCDetail
   */
  options: LDProofVCOptions;
}

export function LDProofVCDetailFromJSON(json: any): LDProofVCDetail {
  return LDProofVCDetailFromJSONTyped(json, false);
}

export function LDProofVCDetailFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): LDProofVCDetail {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    credential: CredentialFromJSON(json['credential']),
    options: LDProofVCOptionsFromJSON(json['options']),
  };
}

export function LDProofVCDetailToJSON(value?: LDProofVCDetail | null): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    credential: CredentialToJSON(value.credential),
    options: LDProofVCOptionsToJSON(value.options),
  };
}
