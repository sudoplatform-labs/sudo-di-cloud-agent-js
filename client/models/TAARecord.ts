/**
 * Sudo Decentralized Identity Cloud Agent SDK
 * Provides REST API wrappers for Typescript Agent Controllers using the Sudo Decentralized Identity Cloud Agent Service
 *
 * The version of the OpenAPI document: v0.10.0
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
 * @interface TAARecord
 */
export interface TAARecord {
  /**
   *
   * @type {string}
   * @memberof TAARecord
   */
  digest?: string;
  /**
   *
   * @type {string}
   * @memberof TAARecord
   */
  text?: string;
  /**
   *
   * @type {string}
   * @memberof TAARecord
   */
  version?: string;
}

export function TAARecordFromJSON(json: any): TAARecord {
  return TAARecordFromJSONTyped(json, false);
}

export function TAARecordFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): TAARecord {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    digest: !exists(json, 'digest') ? undefined : json['digest'],
    text: !exists(json, 'text') ? undefined : json['text'],
    version: !exists(json, 'version') ? undefined : json['version'],
  };
}

export function TAARecordToJSON(value?: TAARecord | null): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    digest: value.digest,
    text: value.text,
    version: value.version,
  };
}
