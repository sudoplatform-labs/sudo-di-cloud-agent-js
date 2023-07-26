/**
 * Sudo Decentralized Identity Cloud Agent SDK
 * Provides REST API wrappers for Typescript Agent Controllers using the Sudo Decentralized Identity Cloud Agent Service
 *
 * The version of the OpenAPI document: v0.6.8
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import {
  PresentationDefinition,
  PresentationDefinitionFromJSON,
  PresentationDefinitionFromJSONTyped,
  PresentationDefinitionToJSON,
} from './';

/**
 *
 * @export
 * @interface DIFPresSpec
 */
export interface DIFPresSpec {
  /**
   * Issuer identifier to sign the presentation, if different from current public DID
   * @type {string}
   * @memberof DIFPresSpec
   */
  issuer_id?: string;
  /**
   *
   * @type {PresentationDefinition}
   * @memberof DIFPresSpec
   */
  presentation_definition?: PresentationDefinition;
  /**
   * Mapping of input_descriptor id to list of stored W3C credential record_id
   * @type {object}
   * @memberof DIFPresSpec
   */
  record_ids?: object;
  /**
   * reveal doc [JSON-LD frame] dict used to derive the credential when selective disclosure is required
   * @type {object}
   * @memberof DIFPresSpec
   */
  reveal_doc?: object;
}

export function DIFPresSpecFromJSON(json: any): DIFPresSpec {
  return DIFPresSpecFromJSONTyped(json, false);
}

export function DIFPresSpecFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): DIFPresSpec {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    issuer_id: !exists(json, 'issuer_id') ? undefined : json['issuer_id'],
    presentation_definition: !exists(json, 'presentation_definition')
      ? undefined
      : PresentationDefinitionFromJSON(json['presentation_definition']),
    record_ids: !exists(json, 'record_ids') ? undefined : json['record_ids'],
    reveal_doc: !exists(json, 'reveal_doc') ? undefined : json['reveal_doc'],
  };
}

export function DIFPresSpecToJSON(value?: DIFPresSpec | null): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    issuer_id: value.issuer_id,
    presentation_definition: PresentationDefinitionToJSON(
      value.presentation_definition,
    ),
    record_ids: value.record_ids,
    reveal_doc: value.reveal_doc,
  };
}
