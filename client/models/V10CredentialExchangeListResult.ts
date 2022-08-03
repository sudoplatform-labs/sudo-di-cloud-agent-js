/**
 * Sudo Decentralized Identity Cloud Agent SDK
 * Provides REST API wrappers for Typescript Agent Controllers using the Sudo Decentralized Identity Cloud Agent Service
 *
 * The version of the OpenAPI document: v0.6.4
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import {
  V10CredentialExchange,
  V10CredentialExchangeFromJSON,
  V10CredentialExchangeFromJSONTyped,
  V10CredentialExchangeToJSON,
} from './';

/**
 *
 * @export
 * @interface V10CredentialExchangeListResult
 */
export interface V10CredentialExchangeListResult {
  /**
   * Aries#0036 v1.0 credential exchange records
   * @type {Array<V10CredentialExchange>}
   * @memberof V10CredentialExchangeListResult
   */
  results?: Array<V10CredentialExchange>;
}

export function V10CredentialExchangeListResultFromJSON(
  json: any,
): V10CredentialExchangeListResult {
  return V10CredentialExchangeListResultFromJSONTyped(json, false);
}

export function V10CredentialExchangeListResultFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): V10CredentialExchangeListResult {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    results: !exists(json, 'results')
      ? undefined
      : (json['results'] as Array<any>).map(V10CredentialExchangeFromJSON),
  };
}

export function V10CredentialExchangeListResultToJSON(
  value?: V10CredentialExchangeListResult | null,
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
        : (value.results as Array<any>).map(V10CredentialExchangeToJSON),
  };
}
