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
  SchemaSendResult,
  SchemaSendResultFromJSON,
  SchemaSendResultFromJSONTyped,
  SchemaSendResultToJSON,
  TransactionRecord,
  TransactionRecordFromJSON,
  TransactionRecordFromJSONTyped,
  TransactionRecordToJSON,
} from './';

/**
 *
 * @export
 * @interface TxnOrSchemaSendResult
 */
export interface TxnOrSchemaSendResult {
  /**
   * Content sent
   * @type {SchemaSendResult}
   * @memberof TxnOrSchemaSendResult
   */
  sent?: SchemaSendResult;
  /**
   * Schema transaction to endorse
   * @type {TransactionRecord}
   * @memberof TxnOrSchemaSendResult
   */
  txn?: TransactionRecord;
}

export function TxnOrSchemaSendResultFromJSON(
  json: any,
): TxnOrSchemaSendResult {
  return TxnOrSchemaSendResultFromJSONTyped(json, false);
}

export function TxnOrSchemaSendResultFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): TxnOrSchemaSendResult {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    sent: !exists(json, 'sent')
      ? undefined
      : SchemaSendResultFromJSON(json['sent']),
    txn: !exists(json, 'txn')
      ? undefined
      : TransactionRecordFromJSON(json['txn']),
  };
}

export function TxnOrSchemaSendResultToJSON(
  value?: TxnOrSchemaSendResult | null,
): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    sent: SchemaSendResultToJSON(value.sent),
    txn: TransactionRecordToJSON(value.txn),
  };
}
