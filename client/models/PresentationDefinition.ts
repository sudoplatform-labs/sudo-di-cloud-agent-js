/**
 * Sudo Decentralized Identity Cloud Agent SDK
 * Provides REST API wrappers for Typescript Agent Controllers using the Sudo Decentralized Identity Cloud Agency Service
 *
 * The version of the OpenAPI document: v0.5.1
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import {
  ClaimFormat,
  ClaimFormatFromJSON,
  ClaimFormatFromJSONTyped,
  ClaimFormatToJSON,
  InputDescriptors,
  InputDescriptorsFromJSON,
  InputDescriptorsFromJSONTyped,
  InputDescriptorsToJSON,
  SubmissionRequirements,
  SubmissionRequirementsFromJSON,
  SubmissionRequirementsFromJSONTyped,
  SubmissionRequirementsToJSON,
} from './';

/**
 *
 * @export
 * @interface PresentationDefinition
 */
export interface PresentationDefinition {
  /**
   *
   * @type {ClaimFormat}
   * @memberof PresentationDefinition
   */
  format?: ClaimFormat;
  /**
   * Unique Resource Identifier
   * @type {string}
   * @memberof PresentationDefinition
   */
  id?: string;
  /**
   *
   * @type {Array<InputDescriptors>}
   * @memberof PresentationDefinition
   */
  input_descriptors?: Array<InputDescriptors>;
  /**
   * Human-friendly name that describes what the presentation definition pertains to
   * @type {string}
   * @memberof PresentationDefinition
   */
  name?: string;
  /**
   * Describes the purpose for which the Presentation Definition's inputs are being requested
   * @type {string}
   * @memberof PresentationDefinition
   */
  purpose?: string;
  /**
   *
   * @type {Array<SubmissionRequirements>}
   * @memberof PresentationDefinition
   */
  submission_requirements?: Array<SubmissionRequirements>;
}

export function PresentationDefinitionFromJSON(
  json: any,
): PresentationDefinition {
  return PresentationDefinitionFromJSONTyped(json, false);
}

export function PresentationDefinitionFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): PresentationDefinition {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    format: !exists(json, 'format')
      ? undefined
      : ClaimFormatFromJSON(json['format']),
    id: !exists(json, 'id') ? undefined : json['id'],
    input_descriptors: !exists(json, 'input_descriptors')
      ? undefined
      : (json['input_descriptors'] as Array<any>).map(InputDescriptorsFromJSON),
    name: !exists(json, 'name') ? undefined : json['name'],
    purpose: !exists(json, 'purpose') ? undefined : json['purpose'],
    submission_requirements: !exists(json, 'submission_requirements')
      ? undefined
      : (json['submission_requirements'] as Array<any>).map(
          SubmissionRequirementsFromJSON,
        ),
  };
}

export function PresentationDefinitionToJSON(
  value?: PresentationDefinition | null,
): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    format: ClaimFormatToJSON(value.format),
    id: value.id,
    input_descriptors:
      value.input_descriptors === undefined
        ? undefined
        : (value.input_descriptors as Array<any>).map(InputDescriptorsToJSON),
    name: value.name,
    purpose: value.purpose,
    submission_requirements:
      value.submission_requirements === undefined
        ? undefined
        : (value.submission_requirements as Array<any>).map(
            SubmissionRequirementsToJSON,
          ),
  };
}
