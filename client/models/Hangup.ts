/**
 * Sudo Decentralized Identity Cloud Agent SDK
 * Provides REST API wrappers for Typescript Agent Controllers using the Sudo Decentralized Identity Cloud Agent Service
 *
 * The version of the OpenAPI document: v0.10.1
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
 * @interface Hangup
 */
export interface Hangup {
  /**
   * Message identifier
   * @type {string}
   * @memberof Hangup
   */
  id?: string;
  /**
   * Message type
   * @type {string}
   * @memberof Hangup
   */
  type?: string;
}

export function HangupFromJSON(json: any): Hangup {
  return HangupFromJSONTyped(json, false);
}

export function HangupFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): Hangup {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    id: !exists(json, '@id') ? undefined : json['@id'],
    type: !exists(json, '@type') ? undefined : json['@type'],
  };
}

export function HangupToJSON(value?: Hangup | null): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    '@id': value.id,
    '@type': value.type,
  };
}
