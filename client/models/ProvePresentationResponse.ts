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
  VerifiablePresentation,
  VerifiablePresentationFromJSON,
  VerifiablePresentationFromJSONTyped,
  VerifiablePresentationToJSON,
} from './';

/**
 *
 * @export
 * @interface ProvePresentationResponse
 */
export interface ProvePresentationResponse {
  /**
   *
   * @type {VerifiablePresentation}
   * @memberof ProvePresentationResponse
   */
  verifiablePresentation?: VerifiablePresentation;
}

export function ProvePresentationResponseFromJSON(
  json: any,
): ProvePresentationResponse {
  return ProvePresentationResponseFromJSONTyped(json, false);
}

export function ProvePresentationResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): ProvePresentationResponse {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    verifiablePresentation: !exists(json, 'verifiablePresentation')
      ? undefined
      : VerifiablePresentationFromJSON(json['verifiablePresentation']),
  };
}

export function ProvePresentationResponseToJSON(
  value?: ProvePresentationResponse | null,
): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    verifiablePresentation: VerifiablePresentationToJSON(
      value.verifiablePresentation,
    ),
  };
}
