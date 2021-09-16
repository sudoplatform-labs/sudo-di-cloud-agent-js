/**
 * Sudo Decentralized Identity Cloud Agent SDK
 * Provides REST API wrappers for Typescript Agent Controllers using the Sudo Decentralized Identity Cloud Agency Service
 *
 * The version of the OpenAPI document: v0.5.4
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
 * @interface KeylistUpdate
 */
export interface KeylistUpdate {
  /**
   * Message identifier
   * @type {string}
   * @memberof KeylistUpdate
   */
  id?: string;
  /**
   * Message type
   * @type {string}
   * @memberof KeylistUpdate
   */
  readonly type?: string;
  /**
   * List of update rules
   * @type {Array<KeylistUpdateRule>}
   * @memberof KeylistUpdate
   */
  updates?: Array<KeylistUpdateRule>;
}

export function KeylistUpdateFromJSON(json: any): KeylistUpdate {
  return KeylistUpdateFromJSONTyped(json, false);
}

export function KeylistUpdateFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): KeylistUpdate {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    id: !exists(json, '@id') ? undefined : json['@id'],
    type: !exists(json, '@type') ? undefined : json['@type'],
    updates: !exists(json, 'updates')
      ? undefined
      : (json['updates'] as Array<any>).map(KeylistUpdateRuleFromJSON),
  };
}

export function KeylistUpdateToJSON(value?: KeylistUpdate | null): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    '@id': value.id,
    updates:
      value.updates === undefined
        ? undefined
        : (value.updates as Array<any>).map(KeylistUpdateRuleToJSON),
  };
}
