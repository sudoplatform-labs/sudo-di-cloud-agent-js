/**
 * Sudo Decentralized Identity Cloud Agent SDK
 * Provides REST API wrappers for Typescript Agent Controllers using the Sudo Decentralized Identity Cloud Agent Service
 *
 * The version of the OpenAPI document: v0.6.5
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
  InputDescriptors,
  InputDescriptorsFromJSON,
  InputDescriptorsFromJSONTyped,
  InputDescriptorsToJSON,
} from './';

/**
 *
 * @export
 * @interface DIFProofProposal
 */
export interface DIFProofProposal {
  /**
   *
   * @type {Array<InputDescriptors>}
   * @memberof DIFProofProposal
   */
  input_descriptors?: Array<InputDescriptors>;
  /**
   *
   * @type {DIFOptions}
   * @memberof DIFProofProposal
   */
  options?: DIFOptions;
}

export function DIFProofProposalFromJSON(json: any): DIFProofProposal {
  return DIFProofProposalFromJSONTyped(json, false);
}

export function DIFProofProposalFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): DIFProofProposal {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    input_descriptors: !exists(json, 'input_descriptors')
      ? undefined
      : (json['input_descriptors'] as Array<any>).map(InputDescriptorsFromJSON),
    options: !exists(json, 'options')
      ? undefined
      : DIFOptionsFromJSON(json['options']),
  };
}

export function DIFProofProposalToJSON(value?: DIFProofProposal | null): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    input_descriptors:
      value.input_descriptors === undefined
        ? undefined
        : (value.input_descriptors as Array<any>).map(InputDescriptorsToJSON),
    options: DIFOptionsToJSON(value.options),
  };
}
