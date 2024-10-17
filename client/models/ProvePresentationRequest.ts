/**
 * Sudo Decentralized Identity Cloud Agent SDK
 * Provides REST API wrappers for Typescript Agent Controllers using the Sudo Decentralized Identity Cloud Agent Service
 *
 * The version of the OpenAPI document: v0.10.0
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
  Presentation,
  PresentationFromJSON,
  PresentationFromJSONTyped,
  PresentationToJSON,
} from './';

/**
 *
 * @export
 * @interface ProvePresentationRequest
 */
export interface ProvePresentationRequest {
  /**
   *
   * @type {LDProofVCOptions}
   * @memberof ProvePresentationRequest
   */
  options?: LDProofVCOptions;
  /**
   *
   * @type {Presentation}
   * @memberof ProvePresentationRequest
   */
  presentation?: Presentation;
}

export function ProvePresentationRequestFromJSON(
  json: any,
): ProvePresentationRequest {
  return ProvePresentationRequestFromJSONTyped(json, false);
}

export function ProvePresentationRequestFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): ProvePresentationRequest {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    options: !exists(json, 'options')
      ? undefined
      : LDProofVCOptionsFromJSON(json['options']),
    presentation: !exists(json, 'presentation')
      ? undefined
      : PresentationFromJSON(json['presentation']),
  };
}

export function ProvePresentationRequestToJSON(
  value?: ProvePresentationRequest | null,
): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    options: LDProofVCOptionsToJSON(value.options),
    presentation: PresentationToJSON(value.presentation),
  };
}
