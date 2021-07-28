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
import {
  TransactionRecord,
  TransactionRecordFromJSON,
  TransactionRecordFromJSONTyped,
  TransactionRecordToJSON,
} from './';

/**
 *
 * @export
 * @interface TransactionList
 */
export interface TransactionList {
  /**
   * List of transaction records
   * @type {Array<TransactionRecord>}
   * @memberof TransactionList
   */
  results?: Array<TransactionRecord>;
}

export function TransactionListFromJSON(json: any): TransactionList {
  return TransactionListFromJSONTyped(json, false);
}

export function TransactionListFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): TransactionList {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    results: !exists(json, 'results')
      ? undefined
      : (json['results'] as Array<any>).map(TransactionRecordFromJSON),
  };
}

export function TransactionListToJSON(value?: TransactionList | null): any {
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
        : (value.results as Array<any>).map(TransactionRecordToJSON),
  };
}
