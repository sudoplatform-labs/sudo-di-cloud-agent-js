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
  V20CredFilter,
  V20CredFilterFromJSON,
  V20CredFilterFromJSONTyped,
  V20CredFilterToJSON,
  V20CredPreview,
  V20CredPreviewFromJSON,
  V20CredPreviewFromJSONTyped,
  V20CredPreviewToJSON,
} from './';

/**
 *
 * @export
 * @interface V20CredOfferConnFreeRequest
 */
export interface V20CredOfferConnFreeRequest {
  /**
   * Whether to respond automatically to credential requests, creating and issuing requested credentials
   * @type {boolean}
   * @memberof V20CredOfferConnFreeRequest
   */
  auto_issue?: boolean;
  /**
   * Whether to remove the credential exchange record on completion (overrides --preserve-exchange-records configuration setting)
   * @type {boolean}
   * @memberof V20CredOfferConnFreeRequest
   */
  auto_remove?: boolean;
  /**
   * Human-readable comment
   * @type {string}
   * @memberof V20CredOfferConnFreeRequest
   */
  comment?: string | null;
  /**
   *
   * @type {V20CredPreview}
   * @memberof V20CredOfferConnFreeRequest
   */
  credential_preview?: V20CredPreview;
  /**
   * Credential specification criteria by format
   * @type {V20CredFilter}
   * @memberof V20CredOfferConnFreeRequest
   */
  filter: V20CredFilter;
  /**
   * Record trace information, based on agent configuration
   * @type {boolean}
   * @memberof V20CredOfferConnFreeRequest
   */
  trace?: boolean;
}

export function V20CredOfferConnFreeRequestFromJSON(
  json: any,
): V20CredOfferConnFreeRequest {
  return V20CredOfferConnFreeRequestFromJSONTyped(json, false);
}

export function V20CredOfferConnFreeRequestFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): V20CredOfferConnFreeRequest {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    auto_issue: !exists(json, 'auto_issue') ? undefined : json['auto_issue'],
    auto_remove: !exists(json, 'auto_remove') ? undefined : json['auto_remove'],
    comment: !exists(json, 'comment') ? undefined : json['comment'],
    credential_preview: !exists(json, 'credential_preview')
      ? undefined
      : V20CredPreviewFromJSON(json['credential_preview']),
    filter: V20CredFilterFromJSON(json['filter']),
    trace: !exists(json, 'trace') ? undefined : json['trace'],
  };
}

export function V20CredOfferConnFreeRequestToJSON(
  value?: V20CredOfferConnFreeRequest | null,
): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    auto_issue: value.auto_issue,
    auto_remove: value.auto_remove,
    comment: value.comment,
    credential_preview: V20CredPreviewToJSON(value.credential_preview),
    filter: V20CredFilterToJSON(value.filter),
    trace: value.trace,
  };
}
