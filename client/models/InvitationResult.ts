/**
 * Sudo Decentralized Identity Cloud Agent SDK
 * Provides REST API wrappers for Typescript Agent Controllers using the Sudo Decentralized Identity Cloud Agent Service
 *
 * The version of the OpenAPI document: v0.6.3
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import {
  ConnectionInvitation,
  ConnectionInvitationFromJSON,
  ConnectionInvitationFromJSONTyped,
  ConnectionInvitationToJSON,
} from './';

/**
 *
 * @export
 * @interface InvitationResult
 */
export interface InvitationResult {
  /**
   * Connection identifier
   * @type {string}
   * @memberof InvitationResult
   */
  connection_id?: string;
  /**
   *
   * @type {ConnectionInvitation}
   * @memberof InvitationResult
   */
  invitation?: ConnectionInvitation;
  /**
   * Invitation URL
   * @type {string}
   * @memberof InvitationResult
   */
  invitation_url?: string;
}

export function InvitationResultFromJSON(json: any): InvitationResult {
  return InvitationResultFromJSONTyped(json, false);
}

export function InvitationResultFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): InvitationResult {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    connection_id: !exists(json, 'connection_id')
      ? undefined
      : json['connection_id'],
    invitation: !exists(json, 'invitation')
      ? undefined
      : ConnectionInvitationFromJSON(json['invitation']),
    invitation_url: !exists(json, 'invitation_url')
      ? undefined
      : json['invitation_url'],
  };
}

export function InvitationResultToJSON(value?: InvitationResult | null): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    connection_id: value.connection_id,
    invitation: ConnectionInvitationToJSON(value.invitation),
    invitation_url: value.invitation_url,
  };
}
