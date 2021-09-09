/**
 * Sudo Decentralized Identity Cloud Agent SDK
 * Provides REST API wrappers for Typescript Agent Controllers using the Sudo Decentralized Identity Cloud Agency Service
 *
 * The version of the OpenAPI document: v0.5.2
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import { DID, DIDFromJSON, DIDFromJSONTyped, DIDToJSON } from './';

/**
 *
 * @export
 * @interface DIDList
 */
export interface DIDList {
  /**
   * DID list
   * @type {Array<DID>}
   * @memberof DIDList
   */
  results?: Array<DID>;
}

export function DIDListFromJSON(json: any): DIDList {
  return DIDListFromJSONTyped(json, false);
}

export function DIDListFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): DIDList {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    results: !exists(json, 'results')
      ? undefined
      : (json['results'] as Array<any>).map(DIDFromJSON),
  };
}

export function DIDListToJSON(value?: DIDList | null): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    results:
      value.results === undefined
        ? undefined
        : (value.results as Array<any>).map(DIDToJSON),
  };
}
