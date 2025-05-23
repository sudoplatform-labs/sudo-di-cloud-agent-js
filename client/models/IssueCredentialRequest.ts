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
 * @interface IssueCredentialRequest
 */
export interface IssueCredentialRequest {
  /**
   *
   * @type {Credential}
   * @memberof IssueCredentialRequest
   */
  credential?: Credential;
  /**
   *
   * @type {LDProofVCOptions}
   * @memberof IssueCredentialRequest
   */
  options?: LDProofVCOptions;
}

export function IssueCredentialRequestFromJSON(
  json: any,
): IssueCredentialRequest {
  return IssueCredentialRequestFromJSONTyped(json, false);
}

export function IssueCredentialRequestFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): IssueCredentialRequest {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    credential: !exists(json, 'credential')
      ? undefined
      : CredentialFromJSON(json['credential']),
    options: !exists(json, 'options')
      ? undefined
      : LDProofVCOptionsFromJSON(json['options']),
  };
}

export function IssueCredentialRequestToJSON(
  value?: IssueCredentialRequest | null,
): any {
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
