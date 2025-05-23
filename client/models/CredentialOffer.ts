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
  CredentialPreview,
  CredentialPreviewFromJSON,
  CredentialPreviewFromJSONTyped,
  CredentialPreviewToJSON,
} from './';

/**
 *
 * @export
 * @interface CredentialOffer
 */
export interface CredentialOffer {
  /**
   * Message identifier
   * @type {string}
   * @memberof CredentialOffer
   */
  id?: string;
  /**
   * Message type
   * @type {string}
   * @memberof CredentialOffer
   */
  type?: string;
  /**
   * Human-readable comment
   * @type {string}
   * @memberof CredentialOffer
   */
  comment?: string | null;
  /**
   *
   * @type {CredentialPreview}
   * @memberof CredentialOffer
   */
  credential_preview?: CredentialPreview;
  /**
   *
   * @type {Array<AttachDecorator>}
   * @memberof CredentialOffer
   */
  offersattach: Array<AttachDecorator>;
}

export function CredentialOfferFromJSON(json: any): CredentialOffer {
  return CredentialOfferFromJSONTyped(json, false);
}

export function CredentialOfferFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): CredentialOffer {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    id: !exists(json, '@id') ? undefined : json['@id'],
    type: !exists(json, '@type') ? undefined : json['@type'],
    comment: !exists(json, 'comment') ? undefined : json['comment'],
    credential_preview: !exists(json, 'credential_preview')
      ? undefined
      : CredentialPreviewFromJSON(json['credential_preview']),
    offersattach: (json['offers~attach'] as Array<any>).map(
      AttachDecoratorFromJSON,
    ),
  };
}

export function CredentialOfferToJSON(value?: CredentialOffer | null): any {
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
    credential_preview: CredentialPreviewToJSON(value.credential_preview),
    'offers~attach': (value.offersattach as Array<any>).map(
      AttachDecoratorToJSON,
    ),
  };
}
