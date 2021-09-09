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
/**
 *
 * @export
 * @interface V10CredentialProblemReportRequest
 */
export interface V10CredentialProblemReportRequest {
  /**
   *
   * @type {string}
   * @memberof V10CredentialProblemReportRequest
   */
  description: string;
}

export function V10CredentialProblemReportRequestFromJSON(
  json: any,
): V10CredentialProblemReportRequest {
  return V10CredentialProblemReportRequestFromJSONTyped(json, false);
}

export function V10CredentialProblemReportRequestFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): V10CredentialProblemReportRequest {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    description: json['description'],
  };
}

export function V10CredentialProblemReportRequestToJSON(
  value?: V10CredentialProblemReportRequest | null,
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
