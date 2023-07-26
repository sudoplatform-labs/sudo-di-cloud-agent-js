/**
 * Sudo Decentralized Identity Cloud Agent SDK
 * Provides REST API wrappers for Typescript Agent Controllers using the Sudo Decentralized Identity Cloud Agent Service
 *
 * The version of the OpenAPI document: v0.6.8
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
 * @interface DIDXRequest
 */
export interface DIDXRequest {
  /**
   * Message identifier
   * @type {string}
   * @memberof DIDXRequest
   */
  id?: string;
  /**
   * Message type
   * @type {string}
   * @memberof DIDXRequest
   */
  readonly type?: string;
  /**
   * DID of exchange
   * @type {string}
   * @memberof DIDXRequest
   */
  did?: string;
  /**
   * As signed attachment, DID Doc associated with DID
   * @type {AttachDecorator}
   * @memberof DIDXRequest
   */
  did_docattach?: AttachDecorator;
  /**
   * Label for DID exchange request
   * @type {string}
   * @memberof DIDXRequest
   */
  label: string;
}

export function DIDXRequestFromJSON(json: any): DIDXRequest {
  return DIDXRequestFromJSONTyped(json, false);
}

export function DIDXRequestFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): DIDXRequest {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    id: !exists(json, '@id') ? undefined : json['@id'],
    type: !exists(json, '@type') ? undefined : json['@type'],
    did: !exists(json, 'did') ? undefined : json['did'],
    did_docattach: !exists(json, 'did_doc~attach')
      ? undefined
      : AttachDecoratorFromJSON(json['did_doc~attach']),
    label: json['label'],
  };
}

export function DIDXRequestToJSON(value?: DIDXRequest | null): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    '@id': value.id,
    did: value.did,
    'did_doc~attach': AttachDecoratorToJSON(value.did_docattach),
    label: value.label,
  };
}
