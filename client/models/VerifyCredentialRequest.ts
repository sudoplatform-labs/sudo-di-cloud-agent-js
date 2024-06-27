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
  LDProofVCOptions,
  LDProofVCOptionsFromJSON,
  LDProofVCOptionsFromJSONTyped,
  LDProofVCOptionsToJSON,
  VerifiableCredential,
  VerifiableCredentialFromJSON,
  VerifiableCredentialFromJSONTyped,
  VerifiableCredentialToJSON,
} from './';

/**
 *
 * @export
 * @interface VerifyCredentialRequest
 */
export interface VerifyCredentialRequest {
  /**
   *
   * @type {LDProofVCOptions}
   * @memberof VerifyCredentialRequest
   */
  options?: LDProofVCOptions;
  /**
   *
   * @type {VerifiableCredential}
   * @memberof VerifyCredentialRequest
   */
  verifiableCredential?: VerifiableCredential;
}

export function VerifyCredentialRequestFromJSON(
  json: any,
): VerifyCredentialRequest {
  return VerifyCredentialRequestFromJSONTyped(json, false);
}

export function VerifyCredentialRequestFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): VerifyCredentialRequest {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    options: !exists(json, 'options')
      ? undefined
      : LDProofVCOptionsFromJSON(json['options']),
    verifiableCredential: !exists(json, 'verifiableCredential')
      ? undefined
      : VerifiableCredentialFromJSON(json['verifiableCredential']),
  };
}

export function VerifyCredentialRequestToJSON(
  value?: VerifyCredentialRequest | null,
): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    options: LDProofVCOptionsToJSON(value.options),
    verifiableCredential: VerifiableCredentialToJSON(
      value.verifiableCredential,
    ),
  };
}
