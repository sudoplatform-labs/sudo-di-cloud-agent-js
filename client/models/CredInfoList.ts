/**
 * Sudo Decentralized Identity Cloud Agent SDK
 * Provides REST API wrappers for Typescript Agent Controllers using the Sudo Decentralized Identity Cloud Agency Service
 *
 * The version of the OpenAPI document: v0.5.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import {
  IndyCredInfo,
  IndyCredInfoFromJSON,
  IndyCredInfoFromJSONTyped,
  IndyCredInfoToJSON,
} from './';

/**
 *
 * @export
 * @interface CredInfoList
 */
export interface CredInfoList {
  /**
   *
   * @type {Array<IndyCredInfo>}
   * @memberof CredInfoList
   */
  results?: Array<IndyCredInfo>;
}

export function CredInfoListFromJSON(json: any): CredInfoList {
  return CredInfoListFromJSONTyped(json, false);
}

export function CredInfoListFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): CredInfoList {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    results: !exists(json, 'results')
      ? undefined
      : (json['results'] as Array<any>).map(IndyCredInfoFromJSON),
  };
}

export function CredInfoListToJSON(value?: CredInfoList | null): any {
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
        : (value.results as Array<any>).map(IndyCredInfoToJSON),
  };
}