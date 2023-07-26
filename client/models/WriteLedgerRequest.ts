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
/**
 *
 * @export
 * @interface WriteLedgerRequest
 */
export interface WriteLedgerRequest {
  /**
   *
   * @type {string}
   * @memberof WriteLedgerRequest
   */
  ledger_id?: string;
}

export function WriteLedgerRequestFromJSON(json: any): WriteLedgerRequest {
  return WriteLedgerRequestFromJSONTyped(json, false);
}

export function WriteLedgerRequestFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): WriteLedgerRequest {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    ledger_id: !exists(json, 'ledger_id') ? undefined : json['ledger_id'],
  };
}

export function WriteLedgerRequestToJSON(
  value?: WriteLedgerRequest | null,
): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    ledger_id: value.ledger_id,
  };
}
