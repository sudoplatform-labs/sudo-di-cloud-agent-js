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
  RevRegResult,
  RevRegResultFromJSON,
  RevRegResultFromJSONTyped,
  RevRegResultToJSON,
  TransactionRecord,
  TransactionRecordFromJSON,
  TransactionRecordFromJSONTyped,
  TransactionRecordToJSON,
} from './';

/**
 *
 * @export
 * @interface TxnOrRevRegResult
 */
export interface TxnOrRevRegResult {
  /**
   *
   * @type {RevRegResult}
   * @memberof TxnOrRevRegResult
   */
  sent?: RevRegResult;
  /**
   * Revocation registry definition transaction to endorse
   * @type {TransactionRecord}
   * @memberof TxnOrRevRegResult
   */
  txn?: TransactionRecord;
}

export function TxnOrRevRegResultFromJSON(json: any): TxnOrRevRegResult {
  return TxnOrRevRegResultFromJSONTyped(json, false);
}

export function TxnOrRevRegResultFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): TxnOrRevRegResult {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    sent: !exists(json, 'sent')
      ? undefined
      : RevRegResultFromJSON(json['sent']),
    txn: !exists(json, 'txn')
      ? undefined
      : TransactionRecordFromJSON(json['txn']),
  };
}

export function TxnOrRevRegResultToJSON(value?: TxnOrRevRegResult | null): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    sent: RevRegResultToJSON(value.sent),
    txn: TransactionRecordToJSON(value.txn),
  };
}
