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
 * @interface SendMessage
 */
export interface SendMessage {
  /**
   * Message content
   * @type {string}
   * @memberof SendMessage
   */
  content?: string;
}

export function SendMessageFromJSON(json: any): SendMessage {
  return SendMessageFromJSONTyped(json, false);
}

export function SendMessageFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): SendMessage {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    content: !exists(json, 'content') ? undefined : json['content'],
  };
}

export function SendMessageToJSON(value?: SendMessage | null): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    content: value.content,
  };
}
