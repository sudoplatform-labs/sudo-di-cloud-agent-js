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
 * @interface TAAAccept
 */
export interface TAAAccept {
  /**
   *
   * @type {string}
   * @memberof TAAAccept
   */
  mechanism?: string;
  /**
   *
   * @type {string}
   * @memberof TAAAccept
   */
  text?: string;
  /**
   *
   * @type {string}
   * @memberof TAAAccept
   */
  version?: string;
}

export function TAAAcceptFromJSON(json: any): TAAAccept {
  return TAAAcceptFromJSONTyped(json, false);
}

export function TAAAcceptFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): TAAAccept {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    mechanism: !exists(json, 'mechanism') ? undefined : json['mechanism'],
    text: !exists(json, 'text') ? undefined : json['text'],
    version: !exists(json, 'version') ? undefined : json['version'],
  };
}

export function TAAAcceptToJSON(value?: TAAAccept | null): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    mechanism: value.mechanism,
    text: value.text,
    version: value.version,
  };
}
