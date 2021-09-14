/**
 * Sudo Decentralized Identity Cloud Agent SDK
 * Provides REST API wrappers for Typescript Agent Controllers using the Sudo Decentralized Identity Cloud Agency Service
 *
 * The version of the OpenAPI document: v0.5.3
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
 * @interface KeylistUpdateRule
 */
export interface KeylistUpdateRule {
  /**
   * Action for specific key
   * @type {string}
   * @memberof KeylistUpdateRule
   */
  action: KeylistUpdateRuleActionEnum;
  /**
   * Key to remove or add
   * @type {string}
   * @memberof KeylistUpdateRule
   */
  recipient_key: string;
}

/**
 * @export
 * @enum {string}
 */
export enum KeylistUpdateRuleActionEnum {
  Add = 'add',
  Remove = 'remove',
}

export function KeylistUpdateRuleFromJSON(json: any): KeylistUpdateRule {
  return KeylistUpdateRuleFromJSONTyped(json, false);
}

export function KeylistUpdateRuleFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): KeylistUpdateRule {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    action: json['action'],
    recipient_key: json['recipient_key'],
  };
}

export function KeylistUpdateRuleToJSON(value?: KeylistUpdateRule | null): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    action: value.action,
    recipient_key: value.recipient_key,
  };
}
