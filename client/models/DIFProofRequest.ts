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
  DIFOptions,
  DIFOptionsFromJSON,
  DIFOptionsFromJSONTyped,
  DIFOptionsToJSON,
  PresentationDefinition,
  PresentationDefinitionFromJSON,
  PresentationDefinitionFromJSONTyped,
  PresentationDefinitionToJSON,
} from './';

/**
 *
 * @export
 * @interface DIFProofRequest
 */
export interface DIFProofRequest {
  /**
   *
   * @type {DIFOptions}
   * @memberof DIFProofRequest
   */
  options?: DIFOptions;
  /**
   *
   * @type {PresentationDefinition}
   * @memberof DIFProofRequest
   */
  presentation_definition: PresentationDefinition;
}

export function DIFProofRequestFromJSON(json: any): DIFProofRequest {
  return DIFProofRequestFromJSONTyped(json, false);
}

export function DIFProofRequestFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): DIFProofRequest {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    options: !exists(json, 'options')
      ? undefined
      : DIFOptionsFromJSON(json['options']),
    presentation_definition: PresentationDefinitionFromJSON(
      json['presentation_definition'],
    ),
  };
}

export function DIFProofRequestToJSON(value?: DIFProofRequest | null): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    options: DIFOptionsToJSON(value.options),
    presentation_definition: PresentationDefinitionToJSON(
      value.presentation_definition,
    ),
  };
}
