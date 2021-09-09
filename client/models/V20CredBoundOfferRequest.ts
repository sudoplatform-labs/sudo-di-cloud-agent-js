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
  V20CredFilter,
  V20CredFilterFromJSON,
  V20CredFilterFromJSONTyped,
  V20CredFilterToJSON,
  V20CredPreview,
  V20CredPreviewFromJSON,
  V20CredPreviewFromJSONTyped,
  V20CredPreviewToJSON,
} from './';

/**
 *
 * @export
 * @interface V20CredBoundOfferRequest
 */
export interface V20CredBoundOfferRequest {
  /**
   * Optional content for counter-proposal
   * @type {V20CredPreview}
   * @memberof V20CredBoundOfferRequest
   */
  counter_preview?: V20CredPreview;
  /**
   * Credential specification criteria by format
   * @type {V20CredFilter}
   * @memberof V20CredBoundOfferRequest
   */
  filter?: V20CredFilter;
}

export function V20CredBoundOfferRequestFromJSON(
  json: any,
): V20CredBoundOfferRequest {
  return V20CredBoundOfferRequestFromJSONTyped(json, false);
}

export function V20CredBoundOfferRequestFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): V20CredBoundOfferRequest {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    counter_preview: !exists(json, 'counter_preview')
      ? undefined
      : V20CredPreviewFromJSON(json['counter_preview']),
    filter: !exists(json, 'filter')
      ? undefined
      : V20CredFilterFromJSON(json['filter']),
  };
}

export function V20CredBoundOfferRequestToJSON(
  value?: V20CredBoundOfferRequest | null,
): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    counter_preview: V20CredPreviewToJSON(value.counter_preview),
    filter: V20CredFilterToJSON(value.filter),
  };
}