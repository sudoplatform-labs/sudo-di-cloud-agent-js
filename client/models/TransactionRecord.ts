/**
 * Sudo Decentralized Identity Cloud Agent SDK
 * Provides REST API wrappers for Typescript Agent Controllers using the Sudo Decentralized Identity Cloud Agent Service
 *
 * The version of the OpenAPI document: v0.10.0
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
 * @interface TransactionRecord
 */
export interface TransactionRecord {
  /**
   * Transaction type
   * @type {string}
   * @memberof TransactionRecord
   */
  _type?: string;
  /**
   * The connection identifier for this particular transaction record
   * @type {string}
   * @memberof TransactionRecord
   */
  connection_id?: string;
  /**
   * Time of record creation
   * @type {string}
   * @memberof TransactionRecord
   */
  created_at?: string;
  /**
   * Request Endorser to write the ledger transaction, this parameter is deprecated and no longer supported.
   * @type {boolean}
   * @memberof TransactionRecord
   */
  endorser_write_txn?: boolean;
  /**
   *
   * @type {Array<{ [key: string]: string; }>}
   * @memberof TransactionRecord
   */
  formats?: Array<{ [key: string]: string }>;
  /**
   *
   * @type {Array<object>}
   * @memberof TransactionRecord
   */
  messages_attach?: Array<object>;
  /**
   *
   * @type {object}
   * @memberof TransactionRecord
   */
  meta_data?: object;
  /**
   *
   * @type {Array<object>}
   * @memberof TransactionRecord
   */
  signature_request?: Array<object>;
  /**
   *
   * @type {Array<object>}
   * @memberof TransactionRecord
   */
  signature_response?: Array<object>;
  /**
   * Current record state
   * @type {string}
   * @memberof TransactionRecord
   */
  state?: string;
  /**
   * Thread Identifier
   * @type {string}
   * @memberof TransactionRecord
   */
  thread_id?: string;
  /**
   *
   * @type {object}
   * @memberof TransactionRecord
   */
  timing?: object;
  /**
   * Record trace information, based on agent configuration
   * @type {boolean}
   * @memberof TransactionRecord
   */
  trace?: boolean;
  /**
   * Transaction identifier
   * @type {string}
   * @memberof TransactionRecord
   */
  transaction_id?: string;
  /**
   * Time of last record update
   * @type {string}
   * @memberof TransactionRecord
   */
  updated_at?: string;
}

export function TransactionRecordFromJSON(json: any): TransactionRecord {
  return TransactionRecordFromJSONTyped(json, false);
}

export function TransactionRecordFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): TransactionRecord {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    _type: !exists(json, '_type') ? undefined : json['_type'],
    connection_id: !exists(json, 'connection_id')
      ? undefined
      : json['connection_id'],
    created_at: !exists(json, 'created_at') ? undefined : json['created_at'],
    endorser_write_txn: !exists(json, 'endorser_write_txn')
      ? undefined
      : json['endorser_write_txn'],
    formats: !exists(json, 'formats') ? undefined : json['formats'],
    messages_attach: !exists(json, 'messages_attach')
      ? undefined
      : json['messages_attach'],
    meta_data: !exists(json, 'meta_data') ? undefined : json['meta_data'],
    signature_request: !exists(json, 'signature_request')
      ? undefined
      : json['signature_request'],
    signature_response: !exists(json, 'signature_response')
      ? undefined
      : json['signature_response'],
    state: !exists(json, 'state') ? undefined : json['state'],
    thread_id: !exists(json, 'thread_id') ? undefined : json['thread_id'],
    timing: !exists(json, 'timing') ? undefined : json['timing'],
    trace: !exists(json, 'trace') ? undefined : json['trace'],
    transaction_id: !exists(json, 'transaction_id')
      ? undefined
      : json['transaction_id'],
    updated_at: !exists(json, 'updated_at') ? undefined : json['updated_at'],
  };
}

export function TransactionRecordToJSON(value?: TransactionRecord | null): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    _type: value._type,
    connection_id: value.connection_id,
    created_at: value.created_at,
    endorser_write_txn: value.endorser_write_txn,
    formats: value.formats,
    messages_attach: value.messages_attach,
    meta_data: value.meta_data,
    signature_request: value.signature_request,
    signature_response: value.signature_response,
    state: value.state,
    thread_id: value.thread_id,
    timing: value.timing,
    trace: value.trace,
    transaction_id: value.transaction_id,
    updated_at: value.updated_at,
  };
}
