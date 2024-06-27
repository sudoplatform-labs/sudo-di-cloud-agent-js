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
  IndyProofRequest,
  IndyProofRequestFromJSON,
  IndyProofRequestFromJSONTyped,
  IndyProofRequestToJSON,
} from './';

/**
 *
 * @export
 * @interface V10PresentationSendRequestRequest
 */
export interface V10PresentationSendRequestRequest {
  /**
   * Whether to remove the presentation exchange record on completion (overrides --preserve-exchange-records configuration setting)
   * @type {boolean}
   * @memberof V10PresentationSendRequestRequest
   */
  auto_remove?: boolean;
  /**
   * Verifier choice to auto-verify proof presentation
   * @type {boolean}
   * @memberof V10PresentationSendRequestRequest
   */
  auto_verify?: boolean;
  /**
   *
   * @type {string}
   * @memberof V10PresentationSendRequestRequest
   */
  comment?: string | null;
  /**
   * Connection identifier
   * @type {string}
   * @memberof V10PresentationSendRequestRequest
   */
  connection_id: string;
  /**
   *
   * @type {IndyProofRequest}
   * @memberof V10PresentationSendRequestRequest
   */
  proof_request: IndyProofRequest;
  /**
   * Whether to trace event (default false)
   * @type {boolean}
   * @memberof V10PresentationSendRequestRequest
   */
  trace?: boolean;
}

export function V10PresentationSendRequestRequestFromJSON(
  json: any,
): V10PresentationSendRequestRequest {
  return V10PresentationSendRequestRequestFromJSONTyped(json, false);
}

export function V10PresentationSendRequestRequestFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): V10PresentationSendRequestRequest {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    auto_remove: !exists(json, 'auto_remove') ? undefined : json['auto_remove'],
    auto_verify: !exists(json, 'auto_verify') ? undefined : json['auto_verify'],
    comment: !exists(json, 'comment') ? undefined : json['comment'],
    connection_id: json['connection_id'],
    proof_request: IndyProofRequestFromJSON(json['proof_request']),
    trace: !exists(json, 'trace') ? undefined : json['trace'],
  };
}

export function V10PresentationSendRequestRequestToJSON(
  value?: V10PresentationSendRequestRequest | null,
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
    comment: value.comment,
    connection_id: value.connection_id,
    proof_request: IndyProofRequestToJSON(value.proof_request),
    trace: value.trace,
  };
}
