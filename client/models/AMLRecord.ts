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
 * @interface AMLRecord
 */
export interface AMLRecord {
  /**
   *
   * @type {{ [key: string]: string; }}
   * @memberof AMLRecord
   */
  aml?: { [key: string]: string };
  /**
   *
   * @type {string}
   * @memberof AMLRecord
   */
  amlContext?: string;
  /**
   *
   * @type {string}
   * @memberof AMLRecord
   */
  version?: string;
}

export function AMLRecordFromJSON(json: any): AMLRecord {
  return AMLRecordFromJSONTyped(json, false);
}

export function AMLRecordFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): AMLRecord {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    aml: !exists(json, 'aml') ? undefined : json['aml'],
    amlContext: !exists(json, 'amlContext') ? undefined : json['amlContext'],
    version: !exists(json, 'version') ? undefined : json['version'],
  };
}

export function AMLRecordToJSON(value?: AMLRecord | null): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    aml: value.aml,
    amlContext: value.amlContext,
    version: value.version,
  };
}
