/**
 * Sudo Decentralized Identity Cloud Agent SDK
 * Provides REST API wrappers for Typescript Agent Controllers using the Sudo Decentralized Identity Cloud Agent Service
 *
 * The version of the OpenAPI document: v0.6.3
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
 * @interface LedgerConfigInstance
 */
export interface LedgerConfigInstance {
  /**
   * genesis_file
   * @type {string}
   * @memberof LedgerConfigInstance
   */
  genesis_file?: string;
  /**
   * genesis_transactions
   * @type {string}
   * @memberof LedgerConfigInstance
   */
  genesis_transactions?: string;
  /**
   * genesis_url
   * @type {string}
   * @memberof LedgerConfigInstance
   */
  genesis_url?: string;
  /**
   * ledger_id
   * @type {string}
   * @memberof LedgerConfigInstance
   */
  id?: string;
  /**
   * is_production
   * @type {boolean}
   * @memberof LedgerConfigInstance
   */
  is_production?: boolean;
}

export function LedgerConfigInstanceFromJSON(json: any): LedgerConfigInstance {
  return LedgerConfigInstanceFromJSONTyped(json, false);
}

export function LedgerConfigInstanceFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): LedgerConfigInstance {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    genesis_file: !exists(json, 'genesis_file')
      ? undefined
      : json['genesis_file'],
    genesis_transactions: !exists(json, 'genesis_transactions')
      ? undefined
      : json['genesis_transactions'],
    genesis_url: !exists(json, 'genesis_url') ? undefined : json['genesis_url'],
    id: !exists(json, 'id') ? undefined : json['id'],
    is_production: !exists(json, 'is_production')
      ? undefined
      : json['is_production'],
  };
}

export function LedgerConfigInstanceToJSON(
  value?: LedgerConfigInstance | null,
): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    genesis_file: value.genesis_file,
    genesis_transactions: value.genesis_transactions,
    genesis_url: value.genesis_url,
    id: value.id,
    is_production: value.is_production,
  };
}