/**
 * Sudo Decentralized Identity Cloud Agent SDK
 * Provides REST API wrappers for Typescript Agent Controllers using the Sudo Decentralized Identity Cloud Agent Service
 *
 * The version of the OpenAPI document: v0.6.6
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import {
  IndyPresPreview,
  IndyPresPreviewFromJSON,
  IndyPresPreviewFromJSONTyped,
  IndyPresPreviewToJSON,
} from './';

/**
 *
 * @export
 * @interface PresentationProposal
 */
export interface PresentationProposal {
  /**
   * Message identifier
   * @type {string}
   * @memberof PresentationProposal
   */
  id?: string;
  /**
   * Message type
   * @type {string}
   * @memberof PresentationProposal
   */
  readonly type?: string;
  /**
   * Human-readable comment
   * @type {string}
   * @memberof PresentationProposal
   */
  comment?: string | null;
  /**
   *
   * @type {IndyPresPreview}
   * @memberof PresentationProposal
   */
  presentation_proposal: IndyPresPreview;
}

export function PresentationProposalFromJSON(json: any): PresentationProposal {
  return PresentationProposalFromJSONTyped(json, false);
}

export function PresentationProposalFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): PresentationProposal {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    id: !exists(json, '@id') ? undefined : json['@id'],
    type: !exists(json, '@type') ? undefined : json['@type'],
    comment: !exists(json, 'comment') ? undefined : json['comment'],
    presentation_proposal: IndyPresPreviewFromJSON(
      json['presentation_proposal'],
    ),
  };
}

export function PresentationProposalToJSON(
  value?: PresentationProposal | null,
): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    '@id': value.id,
    comment: value.comment,
    presentation_proposal: IndyPresPreviewToJSON(value.presentation_proposal),
  };
}
