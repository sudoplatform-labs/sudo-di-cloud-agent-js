/**
 * Sudo Decentralized Identity Cloud Agent SDK
 * Provides REST API wrappers for Typescript Agent Controllers using the Sudo Decentralized Identity Cloud Agency Service
 *
 * The version of the OpenAPI document: v0.6.1
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
 * @interface V10PresentationProposalRequest
 */
export interface V10PresentationProposalRequest {
  /**
   * Whether to respond automatically to presentation requests, building and presenting requested proof
   * @type {boolean}
   * @memberof V10PresentationProposalRequest
   */
  auto_present?: boolean;
  /**
   * Human-readable comment
   * @type {string}
   * @memberof V10PresentationProposalRequest
   */
  comment?: string | null;
  /**
   * Connection identifier
   * @type {string}
   * @memberof V10PresentationProposalRequest
   */
  connection_id: string;
  /**
   *
   * @type {IndyPresPreview}
   * @memberof V10PresentationProposalRequest
   */
  presentation_proposal: IndyPresPreview;
  /**
   * Whether to trace event (default false)
   * @type {boolean}
   * @memberof V10PresentationProposalRequest
   */
  trace?: boolean;
}

export function V10PresentationProposalRequestFromJSON(
  json: any,
): V10PresentationProposalRequest {
  return V10PresentationProposalRequestFromJSONTyped(json, false);
}

export function V10PresentationProposalRequestFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): V10PresentationProposalRequest {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    auto_present: !exists(json, 'auto_present')
      ? undefined
      : json['auto_present'],
    comment: !exists(json, 'comment') ? undefined : json['comment'],
    connection_id: json['connection_id'],
    presentation_proposal: IndyPresPreviewFromJSON(
      json['presentation_proposal'],
    ),
    trace: !exists(json, 'trace') ? undefined : json['trace'],
  };
}

export function V10PresentationProposalRequestToJSON(
  value?: V10PresentationProposalRequest | null,
): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    auto_present: value.auto_present,
    comment: value.comment,
    connection_id: value.connection_id,
    presentation_proposal: IndyPresPreviewToJSON(value.presentation_proposal),
    trace: value.trace,
  };
}
