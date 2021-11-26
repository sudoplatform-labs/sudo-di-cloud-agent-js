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
 * @interface ReceiveInvitationRequest
 */
export interface ReceiveInvitationRequest {
  /**
   * Message identifier
   * @type {string}
   * @memberof ReceiveInvitationRequest
   */
  id?: string;
  /**
   * Message type
   * @type {string}
   * @memberof ReceiveInvitationRequest
   */
  readonly type?: string;
  /**
   * DID for connection invitation
   * @type {string}
   * @memberof ReceiveInvitationRequest
   */
  did?: string;
  /**
   * Optional image URL for connection invitation
   * @type {string}
   * @memberof ReceiveInvitationRequest
   */
  imageUrl?: string | null;
  /**
   * Optional label for connection invitation
   * @type {string}
   * @memberof ReceiveInvitationRequest
   */
  label?: string;
  /**
   * List of recipient keys
   * @type {Array<string>}
   * @memberof ReceiveInvitationRequest
   */
  recipientKeys?: Array<string>;
  /**
   * List of routing keys
   * @type {Array<string>}
   * @memberof ReceiveInvitationRequest
   */
  routingKeys?: Array<string>;
  /**
   * Service endpoint at which to reach this agent
   * @type {string}
   * @memberof ReceiveInvitationRequest
   */
  serviceEndpoint?: string;
}

export function ReceiveInvitationRequestFromJSON(
  json: any,
): ReceiveInvitationRequest {
  return ReceiveInvitationRequestFromJSONTyped(json, false);
}

export function ReceiveInvitationRequestFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): ReceiveInvitationRequest {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    id: !exists(json, '@id') ? undefined : json['@id'],
    type: !exists(json, '@type') ? undefined : json['@type'],
    did: !exists(json, 'did') ? undefined : json['did'],
    imageUrl: !exists(json, 'imageUrl') ? undefined : json['imageUrl'],
    label: !exists(json, 'label') ? undefined : json['label'],
    recipientKeys: !exists(json, 'recipientKeys')
      ? undefined
      : json['recipientKeys'],
    routingKeys: !exists(json, 'routingKeys') ? undefined : json['routingKeys'],
    serviceEndpoint: !exists(json, 'serviceEndpoint')
      ? undefined
      : json['serviceEndpoint'],
  };
}

export function ReceiveInvitationRequestToJSON(
  value?: ReceiveInvitationRequest | null,
): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    '@id': value.id,
    did: value.did,
    imageUrl: value.imageUrl,
    label: value.label,
    recipientKeys: value.recipientKeys,
    routingKeys: value.routingKeys,
    serviceEndpoint: value.serviceEndpoint,
  };
}
