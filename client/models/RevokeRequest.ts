/**
 * Sudo Decentralized Identity Cloud Agent SDK
 * Provides REST API wrappers for Typescript Agent Controllers using the Sudo Decentralized Identity Cloud Agent Service
 *
 * The version of the OpenAPI document: v0.7.1
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
 * @interface RevokeRequest
 */
export interface RevokeRequest {
  /**
   * Optional comment to include in revocation notification
   * @type {string}
   * @memberof RevokeRequest
   */
  comment?: string;
  /**
   * Connection ID to which the revocation notification will be sent; required if notify is true
   * @type {string}
   * @memberof RevokeRequest
   */
  connection_id?: string;
  /**
   * Credential exchange identifier
   * @type {string}
   * @memberof RevokeRequest
   */
  cred_ex_id?: string;
  /**
   * Credential revocation identifier
   * @type {string}
   * @memberof RevokeRequest
   */
  cred_rev_id?: string;
  /**
   * Send a notification to the credential recipient
   * @type {boolean}
   * @memberof RevokeRequest
   */
  notify?: boolean;
  /**
   * Specify which version of the revocation notification should be sent
   * @type {string}
   * @memberof RevokeRequest
   */
  notify_version?: RevokeRequestNotifyVersionEnum;
  /**
   * (True) publish revocation to ledger immediately, or (default, False) mark it pending
   * @type {boolean}
   * @memberof RevokeRequest
   */
  publish?: boolean;
  /**
   * Revocation registry identifier
   * @type {string}
   * @memberof RevokeRequest
   */
  rev_reg_id?: string;
  /**
   * Thread ID of the credential exchange message thread resulting in the credential now being revoked; required if notify is true
   * @type {string}
   * @memberof RevokeRequest
   */
  thread_id?: string;
}

/**
 * @export
 * @enum {string}
 */
export enum RevokeRequestNotifyVersionEnum {
  V10 = 'v1_0',
  V20 = 'v2_0',
}

export function RevokeRequestFromJSON(json: any): RevokeRequest {
  return RevokeRequestFromJSONTyped(json, false);
}

export function RevokeRequestFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): RevokeRequest {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    comment: !exists(json, 'comment') ? undefined : json['comment'],
    connection_id: !exists(json, 'connection_id')
      ? undefined
      : json['connection_id'],
    cred_ex_id: !exists(json, 'cred_ex_id') ? undefined : json['cred_ex_id'],
    cred_rev_id: !exists(json, 'cred_rev_id') ? undefined : json['cred_rev_id'],
    notify: !exists(json, 'notify') ? undefined : json['notify'],
    notify_version: !exists(json, 'notify_version')
      ? undefined
      : json['notify_version'],
    publish: !exists(json, 'publish') ? undefined : json['publish'],
    rev_reg_id: !exists(json, 'rev_reg_id') ? undefined : json['rev_reg_id'],
    thread_id: !exists(json, 'thread_id') ? undefined : json['thread_id'],
  };
}

export function RevokeRequestToJSON(value?: RevokeRequest | null): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    comment: value.comment,
    connection_id: value.connection_id,
    cred_ex_id: value.cred_ex_id,
    cred_rev_id: value.cred_rev_id,
    notify: value.notify,
    notify_version: value.notify_version,
    publish: value.publish,
    rev_reg_id: value.rev_reg_id,
    thread_id: value.thread_id,
  };
}
