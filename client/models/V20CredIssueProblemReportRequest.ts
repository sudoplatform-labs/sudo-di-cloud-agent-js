/**
 * Sudo Decentralized Identity Cloud Agent SDK
 * Provides REST API wrappers for Typescript Agent Controllers using the Sudo Decentralized Identity Cloud Agent Service
 *
 * The version of the OpenAPI document: v0.6.8
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
 * @interface V20CredIssueProblemReportRequest
 */
export interface V20CredIssueProblemReportRequest {
  /**
   *
   * @type {string}
   * @memberof V20CredIssueProblemReportRequest
   */
  description: string;
}

export function V20CredIssueProblemReportRequestFromJSON(
  json: any,
): V20CredIssueProblemReportRequest {
  return V20CredIssueProblemReportRequestFromJSONTyped(json, false);
}

export function V20CredIssueProblemReportRequestFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): V20CredIssueProblemReportRequest {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    description: json['description'],
  };
}

export function V20CredIssueProblemReportRequestToJSON(
  value?: V20CredIssueProblemReportRequest | null,
): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    description: value.description,
  };
}
