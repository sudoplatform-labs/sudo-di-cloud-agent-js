/**
 * Sudo Decentralized Identity Cloud Agent SDK
 * Provides REST API wrappers for Typescript Agent Controllers using the Sudo Decentralized Identity Cloud Agency Service
 *
 * The version of the OpenAPI document: v0.6.0
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
 * @interface TransactionJobs
 */
export interface TransactionJobs {
  /**
   * My transaction related job
   * @type {string}
   * @memberof TransactionJobs
   */
  transaction_my_job?: TransactionJobsTransactionMyJobEnum;
  /**
   * Their transaction related job
   * @type {string}
   * @memberof TransactionJobs
   */
  transaction_their_job?: TransactionJobsTransactionTheirJobEnum;
}

/**
 * @export
 * @enum {string}
 */
export enum TransactionJobsTransactionMyJobEnum {
  TransactionAuthor = 'TRANSACTION_AUTHOR',
  TransactionEndorser = 'TRANSACTION_ENDORSER',
  Reset = 'reset',
}
/**
 * @export
 * @enum {string}
 */
export enum TransactionJobsTransactionTheirJobEnum {
  TransactionAuthor = 'TRANSACTION_AUTHOR',
  TransactionEndorser = 'TRANSACTION_ENDORSER',
  Reset = 'reset',
}

export function TransactionJobsFromJSON(json: any): TransactionJobs {
  return TransactionJobsFromJSONTyped(json, false);
}

export function TransactionJobsFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): TransactionJobs {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    transaction_my_job: !exists(json, 'transaction_my_job')
      ? undefined
      : json['transaction_my_job'],
    transaction_their_job: !exists(json, 'transaction_their_job')
      ? undefined
      : json['transaction_their_job'],
  };
}

export function TransactionJobsToJSON(value?: TransactionJobs | null): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    transaction_my_job: value.transaction_my_job,
    transaction_their_job: value.transaction_their_job,
  };
}
