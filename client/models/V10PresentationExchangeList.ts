/**
 * Sudo Decentralized Identity Cloud Agent SDK
 * Provides REST API wrappers for Typescript Agent Controllers using the Sudo Decentralized Identity Cloud Agent Service
 *
 * The version of the OpenAPI document: v0.8.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import {
  V10PresentationExchange,
  V10PresentationExchangeFromJSON,
  V10PresentationExchangeFromJSONTyped,
  V10PresentationExchangeToJSON,
} from './';

/**
 *
 * @export
 * @interface V10PresentationExchangeList
 */
export interface V10PresentationExchangeList {
  /**
   * Aries RFC 37 v1.0 presentation exchange records
   * @type {Array<V10PresentationExchange>}
   * @memberof V10PresentationExchangeList
   */
  results?: Array<V10PresentationExchange>;
}

export function V10PresentationExchangeListFromJSON(
  json: any,
): V10PresentationExchangeList {
  return V10PresentationExchangeListFromJSONTyped(json, false);
}

export function V10PresentationExchangeListFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): V10PresentationExchangeList {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    results: !exists(json, 'results')
      ? undefined
      : (json['results'] as Array<any>).map(V10PresentationExchangeFromJSON),
  };
}

export function V10PresentationExchangeListToJSON(
  value?: V10PresentationExchangeList | null,
): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    results:
      value.results === undefined
        ? undefined
        : (value.results as Array<any>).map(V10PresentationExchangeToJSON),
  };
}
