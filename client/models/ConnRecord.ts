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
/**
 *
 * @export
 * @interface ConnRecord
 */
export interface ConnRecord {
  /**
   * Connection acceptance: manual or auto
   * @type {string}
   * @memberof ConnRecord
   */
  accept?: ConnRecordAcceptEnum;
  /**
   * Optional alias to apply to connection for later use
   * @type {string}
   * @memberof ConnRecord
   */
  alias?: string;
  /**
   * Connection identifier
   * @type {string}
   * @memberof ConnRecord
   */
  connection_id?: string;
  /**
   * Connection protocol used
   * @type {string}
   * @memberof ConnRecord
   */
  connection_protocol?: ConnRecordConnectionProtocolEnum;
  /**
   * Time of record creation
   * @type {string}
   * @memberof ConnRecord
   */
  created_at?: string;
  /**
   * Error message
   * @type {string}
   * @memberof ConnRecord
   */
  error_msg?: string;
  /**
   * Inbound routing connection id to use
   * @type {string}
   * @memberof ConnRecord
   */
  inbound_connection_id?: string;
  /**
   * Public key for connection
   * @type {string}
   * @memberof ConnRecord
   */
  invitation_key?: string;
  /**
   * Invitation mode
   * @type {string}
   * @memberof ConnRecord
   */
  invitation_mode?: ConnRecordInvitationModeEnum;
  /**
   * ID of out-of-band invitation message
   * @type {string}
   * @memberof ConnRecord
   */
  invitation_msg_id?: string;
  /**
   * Our DID for connection
   * @type {string}
   * @memberof ConnRecord
   */
  my_did?: string;
  /**
   * Connection request identifier
   * @type {string}
   * @memberof ConnRecord
   */
  request_id?: string;
  /**
   * State per RFC 23
   * @type {string}
   * @memberof ConnRecord
   */
  readonly rfc23_state?: string;
  /**
   * Routing state of connection
   * @type {string}
   * @memberof ConnRecord
   */
  routing_state?: ConnRecordRoutingStateEnum;
  /**
   * Current record state
   * @type {string}
   * @memberof ConnRecord
   */
  state?: string;
  /**
   * Their DID for connection
   * @type {string}
   * @memberof ConnRecord
   */
  their_did?: string;
  /**
   * Their label for connection
   * @type {string}
   * @memberof ConnRecord
   */
  their_label?: string;
  /**
   * Other agent's public DID for connection
   * @type {string}
   * @memberof ConnRecord
   */
  their_public_did?: string;
  /**
   * Their role in the connection protocol
   * @type {string}
   * @memberof ConnRecord
   */
  their_role?: ConnRecordTheirRoleEnum;
  /**
   * Time of last record update
   * @type {string}
   * @memberof ConnRecord
   */
  updated_at?: string;
}

/**
 * @export
 * @enum {string}
 */
export enum ConnRecordAcceptEnum {
  Manual = 'manual',
  Auto = 'auto',
}
/**
 * @export
 * @enum {string}
 */
export enum ConnRecordConnectionProtocolEnum {
  Connections10 = 'connections/1.0',
  Didexchange10 = 'didexchange/1.0',
}
/**
 * @export
 * @enum {string}
 */
export enum ConnRecordInvitationModeEnum {
  Once = 'once',
  Multi = 'multi',
  Static = 'static',
}
/**
 * @export
 * @enum {string}
 */
export enum ConnRecordRoutingStateEnum {
  None = 'none',
  Request = 'request',
  Active = 'active',
  Error = 'error',
}
/**
 * @export
 * @enum {string}
 */
export enum ConnRecordTheirRoleEnum {
  Invitee = 'invitee',
  Requester = 'requester',
  Inviter = 'inviter',
  Responder = 'responder',
}

export function ConnRecordFromJSON(json: any): ConnRecord {
  return ConnRecordFromJSONTyped(json, false);
}

export function ConnRecordFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): ConnRecord {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    accept: !exists(json, 'accept') ? undefined : json['accept'],
    alias: !exists(json, 'alias') ? undefined : json['alias'],
    connection_id: !exists(json, 'connection_id')
      ? undefined
      : json['connection_id'],
    connection_protocol: !exists(json, 'connection_protocol')
      ? undefined
      : json['connection_protocol'],
    created_at: !exists(json, 'created_at') ? undefined : json['created_at'],
    error_msg: !exists(json, 'error_msg') ? undefined : json['error_msg'],
    inbound_connection_id: !exists(json, 'inbound_connection_id')
      ? undefined
      : json['inbound_connection_id'],
    invitation_key: !exists(json, 'invitation_key')
      ? undefined
      : json['invitation_key'],
    invitation_mode: !exists(json, 'invitation_mode')
      ? undefined
      : json['invitation_mode'],
    invitation_msg_id: !exists(json, 'invitation_msg_id')
      ? undefined
      : json['invitation_msg_id'],
    my_did: !exists(json, 'my_did') ? undefined : json['my_did'],
    request_id: !exists(json, 'request_id') ? undefined : json['request_id'],
    rfc23_state: !exists(json, 'rfc23_state') ? undefined : json['rfc23_state'],
    routing_state: !exists(json, 'routing_state')
      ? undefined
      : json['routing_state'],
    state: !exists(json, 'state') ? undefined : json['state'],
    their_did: !exists(json, 'their_did') ? undefined : json['their_did'],
    their_label: !exists(json, 'their_label') ? undefined : json['their_label'],
    their_public_did: !exists(json, 'their_public_did')
      ? undefined
      : json['their_public_did'],
    their_role: !exists(json, 'their_role') ? undefined : json['their_role'],
    updated_at: !exists(json, 'updated_at') ? undefined : json['updated_at'],
  };
}

export function ConnRecordToJSON(value?: ConnRecord | null): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    accept: value.accept,
    alias: value.alias,
    connection_id: value.connection_id,
    connection_protocol: value.connection_protocol,
    created_at: value.created_at,
    error_msg: value.error_msg,
    inbound_connection_id: value.inbound_connection_id,
    invitation_key: value.invitation_key,
    invitation_mode: value.invitation_mode,
    invitation_msg_id: value.invitation_msg_id,
    my_did: value.my_did,
    request_id: value.request_id,
    routing_state: value.routing_state,
    state: value.state,
    their_did: value.their_did,
    their_label: value.their_label,
    their_public_did: value.their_public_did,
    their_role: value.their_role,
    updated_at: value.updated_at,
  };
}
