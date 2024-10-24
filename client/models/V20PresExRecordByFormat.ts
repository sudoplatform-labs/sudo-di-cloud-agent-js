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
 * @interface V20PresExRecordByFormat
 */
export interface V20PresExRecordByFormat {
  /**
   *
   * @type {object}
   * @memberof V20PresExRecordByFormat
   */
  pres?: object;
  /**
   *
   * @type {object}
   * @memberof V20PresExRecordByFormat
   */
  pres_proposal?: object;
  /**
   *
   * @type {object}
   * @memberof V20PresExRecordByFormat
   */
  pres_request?: object;
}

export function V20PresExRecordByFormatFromJSON(
  json: any,
): V20PresExRecordByFormat {
  return V20PresExRecordByFormatFromJSONTyped(json, false);
}

export function V20PresExRecordByFormatFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): V20PresExRecordByFormat {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    pres: !exists(json, 'pres') ? undefined : json['pres'],
    pres_proposal: !exists(json, 'pres_proposal')
      ? undefined
      : json['pres_proposal'],
    pres_request: !exists(json, 'pres_request')
      ? undefined
      : json['pres_request'],
  };
}

export function V20PresExRecordByFormatToJSON(
  value?: V20PresExRecordByFormat | null,
): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    pres: value.pres,
    pres_proposal: value.pres_proposal,
    pres_request: value.pres_request,
  };
}
