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
/**
 *
 * @export
 * @interface V10PresentationSendRequestToProposal
 */
export interface V10PresentationSendRequestToProposal {
  /**
   * Verifier choice to auto-verify proof presentation
   * @type {boolean}
   * @memberof V10PresentationSendRequestToProposal
   */
  auto_verify?: boolean;
  /**
   * Whether to trace event (default false)
   * @type {boolean}
   * @memberof V10PresentationSendRequestToProposal
   */
  trace?: boolean;
}

export function V10PresentationSendRequestToProposalFromJSON(
  json: any,
): V10PresentationSendRequestToProposal {
  return V10PresentationSendRequestToProposalFromJSONTyped(json, false);
}

export function V10PresentationSendRequestToProposalFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): V10PresentationSendRequestToProposal {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    auto_verify: !exists(json, 'auto_verify') ? undefined : json['auto_verify'],
    trace: !exists(json, 'trace') ? undefined : json['trace'],
  };
}

export function V10PresentationSendRequestToProposalToJSON(
  value?: V10PresentationSendRequestToProposal | null,
): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    auto_verify: value.auto_verify,
    trace: value.trace,
  };
}
