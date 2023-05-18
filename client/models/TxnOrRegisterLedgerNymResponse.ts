/**
 * Sudo Decentralized Identity Cloud Agent SDK
 * Provides REST API wrappers for Typescript Agent Controllers using the Sudo Decentralized Identity Cloud Agent Service
 *
 * The version of the OpenAPI document: v0.6.6
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import {
  TransactionRecord,
  TransactionRecordFromJSON,
  TransactionRecordFromJSONTyped,
  TransactionRecordToJSON,
} from './';

/**
 *
 * @export
 * @interface TxnOrRegisterLedgerNymResponse
 */
export interface TxnOrRegisterLedgerNymResponse {
  /**
   * Success of nym registration operation
   * @type {boolean}
   * @memberof TxnOrRegisterLedgerNymResponse
   */
  success?: boolean;
  /**
   * DID transaction to endorse
   * @type {TransactionRecord}
   * @memberof TxnOrRegisterLedgerNymResponse
   */
  txn?: TransactionRecord;
}

export function TxnOrRegisterLedgerNymResponseFromJSON(
  json: any,
): TxnOrRegisterLedgerNymResponse {
  return TxnOrRegisterLedgerNymResponseFromJSONTyped(json, false);
}

export function TxnOrRegisterLedgerNymResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): TxnOrRegisterLedgerNymResponse {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    success: !exists(json, 'success') ? undefined : json['success'],
    txn: !exists(json, 'txn')
      ? undefined
      : TransactionRecordFromJSON(json['txn']),
  };
}

export function TxnOrRegisterLedgerNymResponseToJSON(
  value?: TxnOrRegisterLedgerNymResponse | null,
): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    success: value.success,
    txn: TransactionRecordToJSON(value.txn),
  };
}