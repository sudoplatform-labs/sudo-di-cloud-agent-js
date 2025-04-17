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
/**
 *
 * @export
 * @interface RevRegWalletUpdatedResult
 */
export interface RevRegWalletUpdatedResult {
  /**
   * Calculated accumulator for phantom revocations
   * @type {{ [key: string]: object; }}
   * @memberof RevRegWalletUpdatedResult
   */
  accum_calculated?: { [key: string]: object };
  /**
   * Applied ledger transaction to fix revocations
   * @type {{ [key: string]: object; }}
   * @memberof RevRegWalletUpdatedResult
   */
  accum_fixed?: { [key: string]: object };
  /**
   * Indy revocation registry delta
   * @type {{ [key: string]: object; }}
   * @memberof RevRegWalletUpdatedResult
   */
  rev_reg_delta?: { [key: string]: object };
}

export function RevRegWalletUpdatedResultFromJSON(
  json: any,
): RevRegWalletUpdatedResult {
  return RevRegWalletUpdatedResultFromJSONTyped(json, false);
}

export function RevRegWalletUpdatedResultFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): RevRegWalletUpdatedResult {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    accum_calculated: !exists(json, 'accum_calculated')
      ? undefined
      : json['accum_calculated'],
    accum_fixed: !exists(json, 'accum_fixed') ? undefined : json['accum_fixed'],
    rev_reg_delta: !exists(json, 'rev_reg_delta')
      ? undefined
      : json['rev_reg_delta'],
  };
}

export function RevRegWalletUpdatedResultToJSON(
  value?: RevRegWalletUpdatedResult | null,
): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    accum_calculated: value.accum_calculated,
    accum_fixed: value.accum_fixed,
    rev_reg_delta: value.rev_reg_delta,
  };
}
