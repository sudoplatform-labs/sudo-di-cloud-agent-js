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
 * @interface V10PresentationProblemReportRequest
 */
export interface V10PresentationProblemReportRequest {
  /**
   *
   * @type {string}
   * @memberof V10PresentationProblemReportRequest
   */
  description: string;
}

export function V10PresentationProblemReportRequestFromJSON(
  json: any,
): V10PresentationProblemReportRequest {
  return V10PresentationProblemReportRequestFromJSONTyped(json, false);
}

export function V10PresentationProblemReportRequestFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): V10PresentationProblemReportRequest {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    description: json['description'],
  };
}

export function V10PresentationProblemReportRequestToJSON(
  value?: V10PresentationProblemReportRequest | null,
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
