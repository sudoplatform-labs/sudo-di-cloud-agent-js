/**
 * Sudo Decentralized Identity Cloud Agent SDK
 * Provides REST API wrappers for Typescript Agent Controllers using the Sudo Decentralized Identity Cloud Agent Service
 *
 * The version of the OpenAPI document: v0.9.1
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
 * @interface V20CredIssueRequest
 */
export interface V20CredIssueRequest {
  /**
   * Human-readable comment
   * @type {string}
   * @memberof V20CredIssueRequest
   */
  comment?: string | null;
}

export function V20CredIssueRequestFromJSON(json: any): V20CredIssueRequest {
  return V20CredIssueRequestFromJSONTyped(json, false);
}

export function V20CredIssueRequestFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): V20CredIssueRequest {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    comment: !exists(json, 'comment') ? undefined : json['comment'],
  };
}

export function V20CredIssueRequestToJSON(
  value?: V20CredIssueRequest | null,
): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    comment: value.comment,
  };
}
