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
 * @interface V20PresProblemReportRequest
 */
export interface V20PresProblemReportRequest {
  /**
   *
   * @type {string}
   * @memberof V20PresProblemReportRequest
   */
  description: string;
}

export function V20PresProblemReportRequestFromJSON(
  json: any,
): V20PresProblemReportRequest {
  return V20PresProblemReportRequestFromJSONTyped(json, false);
}

export function V20PresProblemReportRequestFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): V20PresProblemReportRequest {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    description: json['description'],
  };
}

export function V20PresProblemReportRequestToJSON(
  value?: V20PresProblemReportRequest | null,
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
