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
 * @interface V20PresRequest
 */
export interface V20PresRequest {
  /**
   * Message identifier
   * @type {string}
   * @memberof V20PresRequest
   */
  id?: string;
  /**
   * Message type
   * @type {string}
   * @memberof V20PresRequest
   */
  readonly type?: string;
  /**
   * Human-readable comment
   * @type {string}
   * @memberof V20PresRequest
   */
  comment?: string;
  /**
   *
   * @type {Array<V20PresFormat>}
   * @memberof V20PresRequest
   */
  formats: Array<V20PresFormat>;
  /**
   * Attachment per acceptable format on corresponding identifier
   * @type {Array<AttachDecorator>}
   * @memberof V20PresRequest
   */
  request_presentationsattach: Array<AttachDecorator>;
  /**
   * Whether verifier will send confirmation ack
   * @type {boolean}
   * @memberof V20PresRequest
   */
  will_confirm?: boolean;
}

export function V20PresRequestFromJSON(json: any): V20PresRequest {
  return V20PresRequestFromJSONTyped(json, false);
}

export function V20PresRequestFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): V20PresRequest {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    id: !exists(json, '@id') ? undefined : json['@id'],
    type: !exists(json, '@type') ? undefined : json['@type'],
    comment: !exists(json, 'comment') ? undefined : json['comment'],
    formats: (json['formats'] as Array<any>).map(V20PresFormatFromJSON),
    request_presentationsattach: (json['request_presentations~attach'] as Array<
      any
    >).map(AttachDecoratorFromJSON),
    will_confirm: !exists(json, 'will_confirm')
      ? undefined
      : json['will_confirm'],
  };
}

export function V20PresRequestToJSON(value?: V20PresRequest | null): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    '@id': value.id,
    comment: value.comment,
    formats: (value.formats as Array<any>).map(V20PresFormatToJSON),
    'request_presentations~attach': (value.request_presentationsattach as Array<
      any
    >).map(AttachDecoratorToJSON),
    will_confirm: value.will_confirm,
  };
}