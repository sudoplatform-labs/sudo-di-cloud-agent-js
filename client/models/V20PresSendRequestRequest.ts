/**
 * Sudo Decentralized Identity Cloud Agent SDK
 * Provides REST API wrappers for Typescript Agent Controllers using the Sudo Decentralized Identity Cloud Agent Service
 *
 * The version of the OpenAPI document: v0.6.4
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import {
  V20PresRequestByFormat,
  V20PresRequestByFormatFromJSON,
  V20PresRequestByFormatFromJSONTyped,
  V20PresRequestByFormatToJSON,
} from './';

/**
 *
 * @export
 * @interface V20PresSendRequestRequest
 */
export interface V20PresSendRequestRequest {
  /**
   * Verifier choice to auto-verify proof presentation
   * @type {boolean}
   * @memberof V20PresSendRequestRequest
   */
  auto_verify?: boolean;
  /**
   *
   * @type {string}
   * @memberof V20PresSendRequestRequest
   */
  comment?: string | null;
  /**
   * Connection identifier
   * @type {string}
   * @memberof V20PresSendRequestRequest
   */
  connection_id: string;
  /**
   *
   * @type {V20PresRequestByFormat}
   * @memberof V20PresSendRequestRequest
   */
  presentation_request: V20PresRequestByFormat;
  /**
   * Whether to trace event (default false)
   * @type {boolean}
   * @memberof V20PresSendRequestRequest
   */
  trace?: boolean;
}

export function V20PresSendRequestRequestFromJSON(
  json: any,
): V20PresSendRequestRequest {
  return V20PresSendRequestRequestFromJSONTyped(json, false);
}

export function V20PresSendRequestRequestFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): V20PresSendRequestRequest {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    auto_verify: !exists(json, 'auto_verify') ? undefined : json['auto_verify'],
    comment: !exists(json, 'comment') ? undefined : json['comment'],
    connection_id: json['connection_id'],
    presentation_request: V20PresRequestByFormatFromJSON(
      json['presentation_request'],
    ),
    trace: !exists(json, 'trace') ? undefined : json['trace'],
  };
}

export function V20PresSendRequestRequestToJSON(
  value?: V20PresSendRequestRequest | null,
): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    auto_verify: value.auto_verify,
    comment: value.comment,
    connection_id: value.connection_id,
    presentation_request: V20PresRequestByFormatToJSON(
      value.presentation_request,
    ),
    trace: value.trace,
  };
}
