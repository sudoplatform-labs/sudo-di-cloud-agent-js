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
  AttachDecorator,
  AttachDecoratorFromJSON,
  AttachDecoratorFromJSONTyped,
  AttachDecoratorToJSON,
} from './';

/**
 *
 * @export
 * @interface InvitationMessage
 */
export interface InvitationMessage {
  /**
   * Message identifier
   * @type {string}
   * @memberof InvitationMessage
   */
  id?: string;
  /**
   * Message type
   * @type {string}
   * @memberof InvitationMessage
   */
  readonly type?: string;
  /**
   *
   * @type {Array<string>}
   * @memberof InvitationMessage
   */
  handshake_protocols?: Array<string>;
  /**
   * Optional label
   * @type {string}
   * @memberof InvitationMessage
   */
  label?: string;
  /**
   * Optional request attachment
   * @type {Array<AttachDecorator>}
   * @memberof InvitationMessage
   */
  requestsattach?: Array<AttachDecorator>;
  /**
   *
   * @type {Array<object>}
   * @memberof InvitationMessage
   */
  services?: Array<object>;
}

export function InvitationMessageFromJSON(json: any): InvitationMessage {
  return InvitationMessageFromJSONTyped(json, false);
}

export function InvitationMessageFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): InvitationMessage {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    id: !exists(json, '@id') ? undefined : json['@id'],
    type: !exists(json, '@type') ? undefined : json['@type'],
    handshake_protocols: !exists(json, 'handshake_protocols')
      ? undefined
      : json['handshake_protocols'],
    label: !exists(json, 'label') ? undefined : json['label'],
    requestsattach: !exists(json, 'requests~attach')
      ? undefined
      : (json['requests~attach'] as Array<any>).map(AttachDecoratorFromJSON),
    services: !exists(json, 'services') ? undefined : json['services'],
  };
}

export function InvitationMessageToJSON(value?: InvitationMessage | null): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    '@id': value.id,
    handshake_protocols: value.handshake_protocols,
    label: value.label,
    'requests~attach':
      value.requestsattach === undefined
        ? undefined
        : (value.requestsattach as Array<any>).map(AttachDecoratorToJSON),
    services: value.services,
  };
}
