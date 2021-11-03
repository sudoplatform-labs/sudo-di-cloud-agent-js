/**
 * Sudo Decentralized Identity Cloud Agent SDK
 * Provides REST API wrappers for Typescript Agent Controllers using the Sudo Decentralized Identity Cloud Agency Service
 *
 * The version of the OpenAPI document: v0.6.0
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
 * @interface PresentationRequest
 */
export interface PresentationRequest {
  /**
   * Message identifier
   * @type {string}
   * @memberof PresentationRequest
   */
  id?: string;
  /**
   * Message type
   * @type {string}
   * @memberof PresentationRequest
   */
  readonly type?: string;
  /**
   * Human-readable comment
   * @type {string}
   * @memberof PresentationRequest
   */
  comment?: string | null;
  /**
   *
   * @type {Array<AttachDecorator>}
   * @memberof PresentationRequest
   */
  request_presentationsattach: Array<AttachDecorator>;
}

export function PresentationRequestFromJSON(json: any): PresentationRequest {
  return PresentationRequestFromJSONTyped(json, false);
}

export function PresentationRequestFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): PresentationRequest {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    id: !exists(json, '@id') ? undefined : json['@id'],
    type: !exists(json, '@type') ? undefined : json['@type'],
    comment: !exists(json, 'comment') ? undefined : json['comment'],
    request_presentationsattach: (
      json['request_presentations~attach'] as Array<any>
    ).map(AttachDecoratorFromJSON),
  };
}

export function PresentationRequestToJSON(
  value?: PresentationRequest | null,
): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    '@id': value.id,
    comment: value.comment,
    'request_presentations~attach': (
      value.request_presentationsattach as Array<any>
    ).map(AttachDecoratorToJSON),
  };
}
