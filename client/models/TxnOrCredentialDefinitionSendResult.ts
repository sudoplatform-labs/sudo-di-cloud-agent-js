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
  CredentialDefinitionSendResult,
  CredentialDefinitionSendResultFromJSON,
  CredentialDefinitionSendResultFromJSONTyped,
  CredentialDefinitionSendResultToJSON,
  TransactionRecord,
  TransactionRecordFromJSON,
  TransactionRecordFromJSONTyped,
  TransactionRecordToJSON,
} from './';

/**
 *
 * @export
 * @interface TxnOrCredentialDefinitionSendResult
 */
export interface TxnOrCredentialDefinitionSendResult {
  /**
   *
   * @type {CredentialDefinitionSendResult}
   * @memberof TxnOrCredentialDefinitionSendResult
   */
  sent?: CredentialDefinitionSendResult;
  /**
   * Credential definition transaction to endorse
   * @type {TransactionRecord}
   * @memberof TxnOrCredentialDefinitionSendResult
   */
  txn?: TransactionRecord;
}

export function TxnOrCredentialDefinitionSendResultFromJSON(
  json: any,
): TxnOrCredentialDefinitionSendResult {
  return TxnOrCredentialDefinitionSendResultFromJSONTyped(json, false);
}

export function TxnOrCredentialDefinitionSendResultFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): TxnOrCredentialDefinitionSendResult {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    sent: !exists(json, 'sent')
      ? undefined
      : CredentialDefinitionSendResultFromJSON(json['sent']),
    txn: !exists(json, 'txn')
      ? undefined
      : TransactionRecordFromJSON(json['txn']),
  };
}

export function TxnOrCredentialDefinitionSendResultToJSON(
  value?: TxnOrCredentialDefinitionSendResult | null,
): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    sent: CredentialDefinitionSendResultToJSON(value.sent),
    txn: TransactionRecordToJSON(value.txn),
  };
}
