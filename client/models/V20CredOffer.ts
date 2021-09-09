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
  V20CredFormat,
  V20CredFormatFromJSON,
  V20CredFormatFromJSONTyped,
  V20CredFormatToJSON,
  V20CredPreview,
  V20CredPreviewFromJSON,
  V20CredPreviewFromJSONTyped,
  V20CredPreviewToJSON,
} from './';

/**
 *
 * @export
 * @interface V20CredOffer
 */
export interface V20CredOffer {
  /**
   * Message identifier
   * @type {string}
   * @memberof V20CredOffer
   */
  id?: string;
  /**
   * Message type
   * @type {string}
   * @memberof V20CredOffer
   */
  readonly type?: string;
  /**
   * Human-readable comment
   * @type {string}
   * @memberof V20CredOffer
   */
  comment?: string | null;
  /**
   *
   * @type {V20CredPreview}
   * @memberof V20CredOffer
   */
  credential_preview?: V20CredPreview;
  /**
   * Acceptable credential formats
   * @type {Array<V20CredFormat>}
   * @memberof V20CredOffer
   */
  formats: Array<V20CredFormat>;
  /**
   * Offer attachments
   * @type {Array<AttachDecorator>}
   * @memberof V20CredOffer
   */
  offersattach: Array<AttachDecorator>;
  /**
   * Issuer-unique identifier to coordinate credential replacement
   * @type {string}
   * @memberof V20CredOffer
   */
  replacement_id?: string;
}

export function V20CredOfferFromJSON(json: any): V20CredOffer {
  return V20CredOfferFromJSONTyped(json, false);
}

export function V20CredOfferFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): V20CredOffer {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    id: !exists(json, '@id') ? undefined : json['@id'],
    type: !exists(json, '@type') ? undefined : json['@type'],
    comment: !exists(json, 'comment') ? undefined : json['comment'],
    credential_preview: !exists(json, 'credential_preview')
      ? undefined
      : V20CredPreviewFromJSON(json['credential_preview']),
    formats: (json['formats'] as Array<any>).map(V20CredFormatFromJSON),
    offersattach: (json['offers~attach'] as Array<any>).map(
      AttachDecoratorFromJSON,
    ),
    replacement_id: !exists(json, 'replacement_id')
      ? undefined
      : json['replacement_id'],
  };
}

export function V20CredOfferToJSON(value?: V20CredOffer | null): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    '@id': value.id,
    comment: value.comment,
    credential_preview: V20CredPreviewToJSON(value.credential_preview),
    formats: (value.formats as Array<any>).map(V20CredFormatToJSON),
    'offers~attach': (value.offersattach as Array<any>).map(
      AttachDecoratorToJSON,
    ),
    replacement_id: value.replacement_id,
  };
}
