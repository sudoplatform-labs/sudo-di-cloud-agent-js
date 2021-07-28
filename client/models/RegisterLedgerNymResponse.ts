/**
 * Sudo Decentralized Identity Cloud Agent SDK
 * Provides REST API wrappers for Typescript Agent Controllers using the Sudo Decentralized Identity Cloud Agency Service
 *
 * The version of the OpenAPI document: v0.4.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 *
 * @export
 * @interface RegisterLedgerNymResponse
 */
export interface RegisterLedgerNymResponse {
  /**
   * Success of nym registration operation
   * @type {boolean}
   * @memberof RegisterLedgerNymResponse
   */
  success?: boolean;
}

export function RegisterLedgerNymResponseFromJSON(
  json: any,
): RegisterLedgerNymResponse {
  return RegisterLedgerNymResponseFromJSONTyped(json, false);
}

export function RegisterLedgerNymResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): RegisterLedgerNymResponse {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    success: !exists(json, 'success') ? undefined : json['success'],
  };
}

export function RegisterLedgerNymResponseToJSON(
  value?: RegisterLedgerNymResponse | null,
): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    success: value.success,
  };
}
