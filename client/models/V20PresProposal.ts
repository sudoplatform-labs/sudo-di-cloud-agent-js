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
import {
  AttachDecorator,
  AttachDecoratorFromJSON,
  AttachDecoratorFromJSONTyped,
  AttachDecoratorToJSON,
  V20PresFormat,
  V20PresFormatFromJSON,
  V20PresFormatFromJSONTyped,
  V20PresFormatToJSON,
} from './';

/**
 *
 * @export
 * @interface V20PresProposal
 */
export interface V20PresProposal {
  /**
   * Message identifier
   * @type {string}
   * @memberof V20PresProposal
   */
  id?: string;
  /**
   * Message type
   * @type {string}
   * @memberof V20PresProposal
   */
  type?: string;
  /**
   * Human-readable comment
   * @type {string}
   * @memberof V20PresProposal
   */
  comment?: string;
  /**
   * Acceptable attachment formats
   * @type {Array<V20PresFormat>}
   * @memberof V20PresProposal
   */
  formats: Array<V20PresFormat>;
  /**
   * Attachment per acceptable format on corresponding identifier
   * @type {Array<AttachDecorator>}
   * @memberof V20PresProposal
   */
  proposalsattach: Array<AttachDecorator>;
}

export function V20PresProposalFromJSON(json: any): V20PresProposal {
  return V20PresProposalFromJSONTyped(json, false);
}

export function V20PresProposalFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): V20PresProposal {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    id: !exists(json, '@id') ? undefined : json['@id'],
    type: !exists(json, '@type') ? undefined : json['@type'],
    comment: !exists(json, 'comment') ? undefined : json['comment'],
    formats: (json['formats'] as Array<any>).map(V20PresFormatFromJSON),
    proposalsattach: (json['proposals~attach'] as Array<any>).map(
      AttachDecoratorFromJSON,
    ),
  };
}

export function V20PresProposalToJSON(value?: V20PresProposal | null): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    '@id': value.id,
    '@type': value.type,
    comment: value.comment,
    formats: (value.formats as Array<any>).map(V20PresFormatToJSON),
    'proposals~attach': (value.proposalsattach as Array<any>).map(
      AttachDecoratorToJSON,
    ),
  };
}
