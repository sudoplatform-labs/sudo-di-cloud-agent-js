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
  VerifiablePresentation,
  VerifiablePresentationFromJSON,
  VerifiablePresentationFromJSONTyped,
  VerifiablePresentationToJSON,
} from './';

/**
 *
 * @export
 * @interface VerifyPresentationRequest
 */
export interface VerifyPresentationRequest {
  /**
   *
   * @type {LDProofVCOptions}
   * @memberof VerifyPresentationRequest
   */
  options?: LDProofVCOptions;
  /**
   *
   * @type {VerifiablePresentation}
   * @memberof VerifyPresentationRequest
   */
  verifiablePresentation?: VerifiablePresentation;
}

export function VerifyPresentationRequestFromJSON(
  json: any,
): VerifyPresentationRequest {
  return VerifyPresentationRequestFromJSONTyped(json, false);
}

export function VerifyPresentationRequestFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): VerifyPresentationRequest {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    options: !exists(json, 'options')
      ? undefined
      : LDProofVCOptionsFromJSON(json['options']),
    verifiablePresentation: !exists(json, 'verifiablePresentation')
      ? undefined
      : VerifiablePresentationFromJSON(json['verifiablePresentation']),
  };
}

export function VerifyPresentationRequestToJSON(
  value?: VerifyPresentationRequest | null,
): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    options: LDProofVCOptionsToJSON(value.options),
    verifiablePresentation: VerifiablePresentationToJSON(
      value.verifiablePresentation,
    ),
  };
}
