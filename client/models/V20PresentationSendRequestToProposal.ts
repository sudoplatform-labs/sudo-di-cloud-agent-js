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
/**
 *
 * @export
 * @interface V20PresentationSendRequestToProposal
 */
export interface V20PresentationSendRequestToProposal {
  /**
   * Whether to remove the presentation exchange record on completion (overrides --preserve-exchange-records configuration setting)
   * @type {boolean}
   * @memberof V20PresentationSendRequestToProposal
   */
  auto_remove?: boolean;
  /**
   * Verifier choice to auto-verify proof presentation
   * @type {boolean}
   * @memberof V20PresentationSendRequestToProposal
   */
  auto_verify?: boolean;
  /**
   * Whether to trace event (default false)
   * @type {boolean}
   * @memberof V20PresentationSendRequestToProposal
   */
  trace?: boolean;
}

export function V20PresentationSendRequestToProposalFromJSON(
  json: any,
): V20PresentationSendRequestToProposal {
  return V20PresentationSendRequestToProposalFromJSONTyped(json, false);
}

export function V20PresentationSendRequestToProposalFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): V20PresentationSendRequestToProposal {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    auto_remove: !exists(json, 'auto_remove') ? undefined : json['auto_remove'],
    auto_verify: !exists(json, 'auto_verify') ? undefined : json['auto_verify'],
    trace: !exists(json, 'trace') ? undefined : json['trace'],
  };
}

export function V20PresentationSendRequestToProposalToJSON(
  value?: V20PresentationSendRequestToProposal | null,
): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    auto_remove: value.auto_remove,
    auto_verify: value.auto_verify,
    trace: value.trace,
  };
}
