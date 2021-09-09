/**
 * Sudo Decentralized Identity Cloud Agent SDK
 * Provides REST API wrappers for Typescript Agent Controllers using the Sudo Decentralized Identity Cloud Agency Service
 *
 * The version of the OpenAPI document: v0.5.2
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
 * @interface V20CredOfferRequest
 */
export interface V20CredOfferRequest {
  /**
   * Whether to respond automatically to credential requests, creating and issuing requested credentials
   * @type {boolean}
   * @memberof V20CredOfferRequest
   */
  auto_issue?: boolean;
  /**
   * Whether to remove the credential exchange record on completion (overrides --preserve-exchange-records configuration setting)
   * @type {boolean}
   * @memberof V20CredOfferRequest
   */
  auto_remove?: boolean;
  /**
   * Human-readable comment
   * @type {string}
   * @memberof V20CredOfferRequest
   */
  comment?: string | null;
  /**
   * Connection identifier
   * @type {string}
   * @memberof V20CredOfferRequest
   */
  connection_id: string;
  /**
   *
   * @type {V20CredPreview}
   * @memberof V20CredOfferRequest
   */
  credential_preview?: V20CredPreview;
  /**
   * Credential specification criteria by format
   * @type {V20CredFilter}
   * @memberof V20CredOfferRequest
   */
  filter: V20CredFilter;
  /**
   * Record trace information, based on agent configuration
   * @type {boolean}
   * @memberof V20CredOfferRequest
   */
  trace?: boolean;
}

export function V20CredOfferRequestFromJSON(json: any): V20CredOfferRequest {
  return V20CredOfferRequestFromJSONTyped(json, false);
}

export function V20CredOfferRequestFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): V20CredOfferRequest {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    auto_issue: !exists(json, 'auto_issue') ? undefined : json['auto_issue'],
    auto_remove: !exists(json, 'auto_remove') ? undefined : json['auto_remove'],
    comment: !exists(json, 'comment') ? undefined : json['comment'],
    connection_id: json['connection_id'],
    credential_preview: !exists(json, 'credential_preview')
      ? undefined
      : V20CredPreviewFromJSON(json['credential_preview']),
    filter: V20CredFilterFromJSON(json['filter']),
    trace: !exists(json, 'trace') ? undefined : json['trace'],
  };
}

export function V20CredOfferRequestToJSON(
  value?: V20CredOfferRequest | null,
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
    connection_id: value.connection_id,
    credential_preview: V20CredPreviewToJSON(value.credential_preview),
    filter: V20CredFilterToJSON(value.filter),
    trace: value.trace,
  };
}
