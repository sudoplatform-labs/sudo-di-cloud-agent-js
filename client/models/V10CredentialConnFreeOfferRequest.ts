/**
 * Sudo Decentralized Identity Cloud Agent SDK
 * Provides REST API wrappers for Typescript Agent Controllers using the Sudo Decentralized Identity Cloud Agency Service
 *
 * The version of the OpenAPI document: v0.6.2
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import {
  CredentialPreview,
  CredentialPreviewFromJSON,
  CredentialPreviewFromJSONTyped,
  CredentialPreviewToJSON,
} from './';

/**
 *
 * @export
 * @interface V10CredentialConnFreeOfferRequest
 */
export interface V10CredentialConnFreeOfferRequest {
  /**
   * Whether to respond automatically to credential requests, creating and issuing requested credentials
   * @type {boolean}
   * @memberof V10CredentialConnFreeOfferRequest
   */
  auto_issue?: boolean;
  /**
   * Whether to remove the credential exchange record on completion (overrides --preserve-exchange-records configuration setting)
   * @type {boolean}
   * @memberof V10CredentialConnFreeOfferRequest
   */
  auto_remove?: boolean;
  /**
   * Human-readable comment
   * @type {string}
   * @memberof V10CredentialConnFreeOfferRequest
   */
  comment?: string | null;
  /**
   * Credential definition identifier
   * @type {string}
   * @memberof V10CredentialConnFreeOfferRequest
   */
  cred_def_id: string;
  /**
   *
   * @type {CredentialPreview}
   * @memberof V10CredentialConnFreeOfferRequest
   */
  credential_preview: CredentialPreview;
  /**
   * Record trace information, based on agent configuration
   * @type {boolean}
   * @memberof V10CredentialConnFreeOfferRequest
   */
  trace?: boolean;
}

export function V10CredentialConnFreeOfferRequestFromJSON(
  json: any,
): V10CredentialConnFreeOfferRequest {
  return V10CredentialConnFreeOfferRequestFromJSONTyped(json, false);
}

export function V10CredentialConnFreeOfferRequestFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): V10CredentialConnFreeOfferRequest {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    auto_issue: !exists(json, 'auto_issue') ? undefined : json['auto_issue'],
    auto_remove: !exists(json, 'auto_remove') ? undefined : json['auto_remove'],
    comment: !exists(json, 'comment') ? undefined : json['comment'],
    cred_def_id: json['cred_def_id'],
    credential_preview: CredentialPreviewFromJSON(json['credential_preview']),
    trace: !exists(json, 'trace') ? undefined : json['trace'],
  };
}

export function V10CredentialConnFreeOfferRequestToJSON(
  value?: V10CredentialConnFreeOfferRequest | null,
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
    cred_def_id: value.cred_def_id,
    credential_preview: CredentialPreviewToJSON(value.credential_preview),
    trace: value.trace,
  };
}
