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
  V20PresProposalByFormat,
  V20PresProposalByFormatFromJSON,
  V20PresProposalByFormatFromJSONTyped,
  V20PresProposalByFormatToJSON,
} from './';

/**
 *
 * @export
 * @interface V20PresProposalRequest
 */
export interface V20PresProposalRequest {
  /**
   * Whether to respond automatically to presentation requests, building and presenting requested proof
   * @type {boolean}
   * @memberof V20PresProposalRequest
   */
  auto_present?: boolean;
  /**
   * Whether to remove the presentation exchange record on completion (overrides --preserve-exchange-records configuration setting)
   * @type {boolean}
   * @memberof V20PresProposalRequest
   */
  auto_remove?: boolean;
  /**
   * Human-readable comment
   * @type {string}
   * @memberof V20PresProposalRequest
   */
  comment?: string | null;
  /**
   * Connection identifier
   * @type {string}
   * @memberof V20PresProposalRequest
   */
  connection_id: string;
  /**
   *
   * @type {V20PresProposalByFormat}
   * @memberof V20PresProposalRequest
   */
  presentation_proposal: V20PresProposalByFormat;
  /**
   * Whether to trace event (default false)
   * @type {boolean}
   * @memberof V20PresProposalRequest
   */
  trace?: boolean;
}

export function V20PresProposalRequestFromJSON(
  json: any,
): V20PresProposalRequest {
  return V20PresProposalRequestFromJSONTyped(json, false);
}

export function V20PresProposalRequestFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): V20PresProposalRequest {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    auto_present: !exists(json, 'auto_present')
      ? undefined
      : json['auto_present'],
    auto_remove: !exists(json, 'auto_remove') ? undefined : json['auto_remove'],
    comment: !exists(json, 'comment') ? undefined : json['comment'],
    connection_id: json['connection_id'],
    presentation_proposal: V20PresProposalByFormatFromJSON(
      json['presentation_proposal'],
    ),
    trace: !exists(json, 'trace') ? undefined : json['trace'],
  };
}

export function V20PresProposalRequestToJSON(
  value?: V20PresProposalRequest | null,
): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    auto_present: value.auto_present,
    auto_remove: value.auto_remove,
    comment: value.comment,
    connection_id: value.connection_id,
    presentation_proposal: V20PresProposalByFormatToJSON(
      value.presentation_proposal,
    ),
    trace: value.trace,
  };
}
