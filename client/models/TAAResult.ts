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
  TAAInfo,
  TAAInfoFromJSON,
  TAAInfoFromJSONTyped,
  TAAInfoToJSON,
} from './';

/**
 *
 * @export
 * @interface TAAResult
 */
export interface TAAResult {
  /**
   *
   * @type {TAAInfo}
   * @memberof TAAResult
   */
  result?: TAAInfo;
}

export function TAAResultFromJSON(json: any): TAAResult {
  return TAAResultFromJSONTyped(json, false);
}

export function TAAResultFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): TAAResult {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    result: !exists(json, 'result')
      ? undefined
      : TAAInfoFromJSON(json['result']),
  };
}

export function TAAResultToJSON(value?: TAAResult | null): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    result: TAAInfoToJSON(value.result),
  };
}