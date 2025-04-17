/**
 * Sudo Decentralized Identity Cloud Agent SDK
 * Provides REST API wrappers for Typescript Agent Controllers using the Sudo Decentralized Identity Cloud Agent Service
 *
 * The version of the OpenAPI document: v0.11.0
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
 * @interface ConnectionInvitation
 */
export interface ConnectionInvitation {
  /**
   * Message identifier
   * @type {string}
   * @memberof ConnectionInvitation
   */
  id?: string;
  /**
   * Message type
   * @type {string}
   * @memberof ConnectionInvitation
   */
  type?: string;
  /**
   * DID for connection invitation
   * @type {string}
   * @memberof ConnectionInvitation
   */
  did?: string;
  /**
   * Optional image URL for connection invitation
   * @type {string}
   * @memberof ConnectionInvitation
   */
  imageUrl?: string | null;
  /**
   * Optional label for connection invitation
   * @type {string}
   * @memberof ConnectionInvitation
   */
  label?: string;
  /**
   * List of recipient keys
   * @type {Array<string>}
   * @memberof ConnectionInvitation
   */
  recipientKeys?: Array<string>;
  /**
   * List of routing keys
   * @type {Array<string>}
   * @memberof ConnectionInvitation
   */
  routingKeys?: Array<string>;
  /**
   * Service endpoint at which to reach this agent
   * @type {string}
   * @memberof ConnectionInvitation
   */
  serviceEndpoint?: string;
}

export function ConnectionInvitationFromJSON(json: any): ConnectionInvitation {
  return ConnectionInvitationFromJSONTyped(json, false);
}

export function ConnectionInvitationFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): ConnectionInvitation {
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

export function ConnectionInvitationToJSON(
  value?: ConnectionInvitation | null,
): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    '@id': value.id,
    '@type': value.type,
    did: value.did,
    imageUrl: value.imageUrl,
    label: value.label,
    recipientKeys: value.recipientKeys,
    routingKeys: value.routingKeys,
    serviceEndpoint: value.serviceEndpoint,
  };
}
