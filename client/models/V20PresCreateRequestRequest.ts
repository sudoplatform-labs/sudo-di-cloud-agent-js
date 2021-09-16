/**
 * Sudo Decentralized Identity Cloud Agent SDK
 * Provides REST API wrappers for Typescript Agent Controllers using the Sudo Decentralized Identity Cloud Agency Service
 *
 * The version of the OpenAPI document: v0.5.4
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
 * @interface V20PresCreateRequestRequest
 */
export interface V20PresCreateRequestRequest {
  /**
   *
   * @type {string}
   * @memberof V20PresCreateRequestRequest
   */
  comment?: string | null;
  /**
   *
   * @type {V20PresRequestByFormat}
   * @memberof V20PresCreateRequestRequest
   */
  presentation_request: V20PresRequestByFormat;
  /**
   * Whether to trace event (default false)
   * @type {boolean}
   * @memberof V20PresCreateRequestRequest
   */
  trace?: boolean;
}

export function V20PresCreateRequestRequestFromJSON(
  json: any,
): V20PresCreateRequestRequest {
  return V20PresCreateRequestRequestFromJSONTyped(json, false);
}

export function V20PresCreateRequestRequestFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): V20PresCreateRequestRequest {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    comment: !exists(json, 'comment') ? undefined : json['comment'],
    presentation_request: V20PresRequestByFormatFromJSON(
      json['presentation_request'],
    ),
    trace: !exists(json, 'trace') ? undefined : json['trace'],
  };
}

export function V20PresCreateRequestRequestToJSON(
  value?: V20PresCreateRequestRequest | null,
): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    comment: value.comment,
    presentation_request: V20PresRequestByFormatToJSON(
      value.presentation_request,
    ),
    trace: value.trace,
  };
}
