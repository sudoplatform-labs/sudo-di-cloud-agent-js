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
  V20CredFormat,
  V20CredFormatFromJSON,
  V20CredFormatFromJSONTyped,
  V20CredFormatToJSON,
} from './';

/**
 *
 * @export
 * @interface V20CredRequest
 */
export interface V20CredRequest {
  /**
   * Message identifier
   * @type {string}
   * @memberof V20CredRequest
   */
  id?: string;
  /**
   * Message type
   * @type {string}
   * @memberof V20CredRequest
   */
  type?: string;
  /**
   * Human-readable comment
   * @type {string}
   * @memberof V20CredRequest
   */
  comment?: string | null;
  /**
   * Acceptable attachment formats
   * @type {Array<V20CredFormat>}
   * @memberof V20CredRequest
   */
  formats: Array<V20CredFormat>;
  /**
   * Request attachments
   * @type {Array<AttachDecorator>}
   * @memberof V20CredRequest
   */
  requestsattach: Array<AttachDecorator>;
}

export function V20CredRequestFromJSON(json: any): V20CredRequest {
  return V20CredRequestFromJSONTyped(json, false);
}

export function V20CredRequestFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): V20CredRequest {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    id: !exists(json, '@id') ? undefined : json['@id'],
    type: !exists(json, '@type') ? undefined : json['@type'],
    comment: !exists(json, 'comment') ? undefined : json['comment'],
    formats: (json['formats'] as Array<any>).map(V20CredFormatFromJSON),
    requestsattach: (json['requests~attach'] as Array<any>).map(
      AttachDecoratorFromJSON,
    ),
  };
}

export function V20CredRequestToJSON(value?: V20CredRequest | null): any {
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
    formats: (value.formats as Array<any>).map(V20CredFormatToJSON),
    'requests~attach': (value.requestsattach as Array<any>).map(
      AttachDecoratorToJSON,
    ),
  };
}
