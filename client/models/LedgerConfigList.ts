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
  LedgerConfigInstance,
  LedgerConfigInstanceFromJSON,
  LedgerConfigInstanceFromJSONTyped,
  LedgerConfigInstanceToJSON,
} from './';

/**
 *
 * @export
 * @interface LedgerConfigList
 */
export interface LedgerConfigList {
  /**
   *
   * @type {Array<LedgerConfigInstance>}
   * @memberof LedgerConfigList
   */
  ledger_config_list: Array<LedgerConfigInstance>;
}

export function LedgerConfigListFromJSON(json: any): LedgerConfigList {
  return LedgerConfigListFromJSONTyped(json, false);
}

export function LedgerConfigListFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): LedgerConfigList {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    ledger_config_list: (json['ledger_config_list'] as Array<any>).map(
      LedgerConfigInstanceFromJSON,
    ),
  };
}

export function LedgerConfigListToJSON(value?: LedgerConfigList | null): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    ledger_config_list: (value.ledger_config_list as Array<any>).map(
      LedgerConfigInstanceToJSON,
    ),
  };
}
