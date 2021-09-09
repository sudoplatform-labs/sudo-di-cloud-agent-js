/**
 * Sudo Decentralized Identity Cloud Agent SDK
 * Provides REST API wrappers for Typescript Agent Controllers using the Sudo Decentralized Identity Cloud Agency Service
 *
 * The version of the OpenAPI document: v0.5.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import {
  AttachmentDef,
  AttachmentDefFromJSON,
  AttachmentDefFromJSONTyped,
  AttachmentDefToJSON,
} from './';

/**
 *
 * @export
 * @interface InvitationCreateRequest
 */
export interface InvitationCreateRequest {
  /**
   * Alias for connection
   * @type {string}
   * @memberof InvitationCreateRequest
   */
  alias?: string;
  /**
   * Optional invitation attachments
   * @type {Array<AttachmentDef>}
   * @memberof InvitationCreateRequest
   */
  attachments?: Array<AttachmentDef>;
  /**
   *
   * @type {Array<string>}
   * @memberof InvitationCreateRequest
   */
  handshake_protocols?: Array<string>;
  /**
   * Identifier for active mediation record to be used
   * @type {string}
   * @memberof InvitationCreateRequest
   */
  mediation_id?: string;
  /**
   * Optional metadata to attach to the connection created with the invitation
   * @type {object}
   * @memberof InvitationCreateRequest
   */
  metadata?: object;
  /**
   * Label for connection invitation
   * @type {string}
   * @memberof InvitationCreateRequest
   */
  my_label?: string;
  /**
   * Whether to use public DID in invitation
   * @type {boolean}
   * @memberof InvitationCreateRequest
   */
  use_public_did?: boolean;
}

export function InvitationCreateRequestFromJSON(
  json: any,
): InvitationCreateRequest {
  return InvitationCreateRequestFromJSONTyped(json, false);
}

export function InvitationCreateRequestFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): InvitationCreateRequest {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    alias: !exists(json, 'alias') ? undefined : json['alias'],
    attachments: !exists(json, 'attachments')
      ? undefined
      : (json['attachments'] as Array<any>).map(AttachmentDefFromJSON),
    handshake_protocols: !exists(json, 'handshake_protocols')
      ? undefined
      : json['handshake_protocols'],
    mediation_id: !exists(json, 'mediation_id')
      ? undefined
      : json['mediation_id'],
    metadata: !exists(json, 'metadata') ? undefined : json['metadata'],
    my_label: !exists(json, 'my_label') ? undefined : json['my_label'],
    use_public_did: !exists(json, 'use_public_did')
      ? undefined
      : json['use_public_did'],
  };
}

export function InvitationCreateRequestToJSON(
  value?: InvitationCreateRequest | null,
): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    alias: value.alias,
    attachments:
      value.attachments === undefined
        ? undefined
        : (value.attachments as Array<any>).map(AttachmentDefToJSON),
    handshake_protocols: value.handshake_protocols,
    mediation_id: value.mediation_id,
    metadata: value.metadata,
    my_label: value.my_label,
    use_public_did: value.use_public_did,
  };
}