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
/**
 *
 * @export
 * @interface V20CredExRecordByFormat
 */
export interface V20CredExRecordByFormat {
  /**
   *
   * @type {object}
   * @memberof V20CredExRecordByFormat
   */
  cred_issue?: object;
  /**
   *
   * @type {object}
   * @memberof V20CredExRecordByFormat
   */
  cred_offer?: object;
  /**
   *
   * @type {object}
   * @memberof V20CredExRecordByFormat
   */
  cred_proposal?: object;
  /**
   *
   * @type {object}
   * @memberof V20CredExRecordByFormat
   */
  cred_request?: object;
}

export function V20CredExRecordByFormatFromJSON(
  json: any,
): V20CredExRecordByFormat {
  return V20CredExRecordByFormatFromJSONTyped(json, false);
}

export function V20CredExRecordByFormatFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): V20CredExRecordByFormat {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    cred_issue: !exists(json, 'cred_issue') ? undefined : json['cred_issue'],
    cred_offer: !exists(json, 'cred_offer') ? undefined : json['cred_offer'],
    cred_proposal: !exists(json, 'cred_proposal')
      ? undefined
      : json['cred_proposal'],
    cred_request: !exists(json, 'cred_request')
      ? undefined
      : json['cred_request'],
  };
}

export function V20CredExRecordByFormatToJSON(
  value?: V20CredExRecordByFormat | null,
): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    cred_issue: value.cred_issue,
    cred_offer: value.cred_offer,
    cred_proposal: value.cred_proposal,
    cred_request: value.cred_request,
  };
}