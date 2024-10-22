/**
 * Sudo Decentralized Identity Cloud Agent SDK
 * Provides REST API wrappers for Typescript Agent Controllers using the Sudo Decentralized Identity Cloud Agent Service
 *
 * The version of the OpenAPI document: v0.10.1
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import {
  InvitationMessage,
  InvitationMessageFromJSON,
  InvitationMessageFromJSONTyped,
  InvitationMessageToJSON,
} from './';

/**
 *
 * @export
 * @interface InvitationRecord
 */
export interface InvitationRecord {
  /**
   * Time of record creation
   * @type {string}
   * @memberof InvitationRecord
   */
  created_at?: string;
  /**
   * Invitation message identifier
   * @type {string}
   * @memberof InvitationRecord
   */
  invi_msg_id?: string;
  /**
   * Out of band invitation message
   * @type {InvitationMessage}
   * @memberof InvitationRecord
   */
  invitation?: InvitationMessage;
  /**
   * Invitation record identifier
   * @type {string}
   * @memberof InvitationRecord
   */
  invitation_id?: string;
  /**
   * Invitation message URL
   * @type {string}
   * @memberof InvitationRecord
   */
  invitation_url?: string;
  /**
   * Out of band record identifier
   * @type {string}
   * @memberof InvitationRecord
   */
  oob_id?: string;
  /**
   * Out of band message exchange state
   * @type {string}
   * @memberof InvitationRecord
   */
  state?: string;
  /**
   * Record trace information, based on agent configuration
   * @type {boolean}
   * @memberof InvitationRecord
   */
  trace?: boolean;
  /**
   * Time of last record update
   * @type {string}
   * @memberof InvitationRecord
   */
  updated_at?: string;
}

export function InvitationRecordFromJSON(json: any): InvitationRecord {
  return InvitationRecordFromJSONTyped(json, false);
}

export function InvitationRecordFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): InvitationRecord {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    created_at: !exists(json, 'created_at') ? undefined : json['created_at'],
    invi_msg_id: !exists(json, 'invi_msg_id') ? undefined : json['invi_msg_id'],
    invitation: !exists(json, 'invitation')
      ? undefined
      : InvitationMessageFromJSON(json['invitation']),
    invitation_id: !exists(json, 'invitation_id')
      ? undefined
      : json['invitation_id'],
    invitation_url: !exists(json, 'invitation_url')
      ? undefined
      : json['invitation_url'],
    oob_id: !exists(json, 'oob_id') ? undefined : json['oob_id'],
    state: !exists(json, 'state') ? undefined : json['state'],
    trace: !exists(json, 'trace') ? undefined : json['trace'],
    updated_at: !exists(json, 'updated_at') ? undefined : json['updated_at'],
  };
}

export function InvitationRecordToJSON(value?: InvitationRecord | null): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    created_at: value.created_at,
    invi_msg_id: value.invi_msg_id,
    invitation: InvitationMessageToJSON(value.invitation),
    invitation_id: value.invitation_id,
    invitation_url: value.invitation_url,
    oob_id: value.oob_id,
    state: value.state,
    trace: value.trace,
    updated_at: value.updated_at,
  };
}
