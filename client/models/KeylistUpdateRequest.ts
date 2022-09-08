/**
 * Sudo Decentralized Identity Cloud Agent SDK
 * Provides REST API wrappers for Typescript Agent Controllers using the Sudo Decentralized Identity Cloud Agent Service
 *
 * The version of the OpenAPI document: v0.6.5
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import {
  KeylistUpdateRule,
  KeylistUpdateRuleFromJSON,
  KeylistUpdateRuleFromJSONTyped,
  KeylistUpdateRuleToJSON,
} from './';

/**
 *
 * @export
 * @interface KeylistUpdateRequest
 */
export interface KeylistUpdateRequest {
  /**
   *
   * @type {Array<KeylistUpdateRule>}
   * @memberof KeylistUpdateRequest
   */
  updates?: Array<KeylistUpdateRule>;
}

export function KeylistUpdateRequestFromJSON(json: any): KeylistUpdateRequest {
  return KeylistUpdateRequestFromJSONTyped(json, false);
}

export function KeylistUpdateRequestFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): KeylistUpdateRequest {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    updates: !exists(json, 'updates')
      ? undefined
      : (json['updates'] as Array<any>).map(KeylistUpdateRuleFromJSON),
  };
}

export function KeylistUpdateRequestToJSON(
  value?: KeylistUpdateRequest | null,
): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    updates:
      value.updates === undefined
        ? undefined
        : (value.updates as Array<any>).map(KeylistUpdateRuleToJSON),
  };
}
