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
  V20PresFormat,
  V20PresFormatFromJSON,
  V20PresFormatFromJSONTyped,
  V20PresFormatToJSON,
} from './';

/**
 *
 * @export
 * @interface V20Pres
 */
export interface V20Pres {
  /**
   * Message identifier
   * @type {string}
   * @memberof V20Pres
   */
  id?: string;
  /**
   * Message type
   * @type {string}
   * @memberof V20Pres
   */
  readonly type?: string;
  /**
   * Human-readable comment
   * @type {string}
   * @memberof V20Pres
   */
  comment?: string | null;
  /**
   * Acceptable attachment formats
   * @type {Array<V20PresFormat>}
   * @memberof V20Pres
   */
  formats: Array<V20PresFormat>;
  /**
   *
   * @type {Array<AttachDecorator>}
   * @memberof V20Pres
   */
  presentationsattach: Array<AttachDecorator>;
}

export function V20PresFromJSON(json: any): V20Pres {
  return V20PresFromJSONTyped(json, false);
}

export function V20PresFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): V20Pres {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    id: !exists(json, '@id') ? undefined : json['@id'],
    type: !exists(json, '@type') ? undefined : json['@type'],
    comment: !exists(json, 'comment') ? undefined : json['comment'],
    formats: (json['formats'] as Array<any>).map(V20PresFormatFromJSON),
    presentationsattach: (json['presentations~attach'] as Array<any>).map(
      AttachDecoratorFromJSON,
    ),
  };
}

export function V20PresToJSON(value?: V20Pres | null): any {
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
    'presentations~attach': (value.presentationsattach as Array<any>).map(
      AttachDecoratorToJSON,
    ),
  };
}
