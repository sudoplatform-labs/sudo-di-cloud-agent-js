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
import {
  MediationRecord,
  MediationRecordFromJSON,
  MediationRecordFromJSONTyped,
  MediationRecordToJSON,
} from './';

/**
 *
 * @export
 * @interface MediationList
 */
export interface MediationList {
  /**
   * List of mediation records
   * @type {Array<MediationRecord>}
   * @memberof MediationList
   */
  results: Array<MediationRecord>;
}

export function MediationListFromJSON(json: any): MediationList {
  return MediationListFromJSONTyped(json, false);
}

export function MediationListFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): MediationList {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    results: (json['results'] as Array<any>).map(MediationRecordFromJSON),
  };
}

export function MediationListToJSON(value?: MediationList | null): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    results: (value.results as Array<any>).map(MediationRecordToJSON),
  };
}
