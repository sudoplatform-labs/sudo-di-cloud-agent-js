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
  IndyProofRequest,
  IndyProofRequestFromJSON,
  IndyProofRequestFromJSONTyped,
  IndyProofRequestToJSON,
} from './';

/**
 *
 * @export
 * @interface V10PresentationCreateRequestRequest
 */
export interface V10PresentationCreateRequestRequest {
  /**
   *
   * @type {string}
   * @memberof V10PresentationCreateRequestRequest
   */
  comment?: string | null;
  /**
   *
   * @type {IndyProofRequest}
   * @memberof V10PresentationCreateRequestRequest
   */
  proof_request: IndyProofRequest;
  /**
   * Whether to trace event (default false)
   * @type {boolean}
   * @memberof V10PresentationCreateRequestRequest
   */
  trace?: boolean;
}

export function V10PresentationCreateRequestRequestFromJSON(
  json: any,
): V10PresentationCreateRequestRequest {
  return V10PresentationCreateRequestRequestFromJSONTyped(json, false);
}

export function V10PresentationCreateRequestRequestFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): V10PresentationCreateRequestRequest {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    comment: !exists(json, 'comment') ? undefined : json['comment'],
    proof_request: IndyProofRequestFromJSON(json['proof_request']),
    trace: !exists(json, 'trace') ? undefined : json['trace'],
  };
}

export function V10PresentationCreateRequestRequestToJSON(
  value?: V10PresentationCreateRequestRequest | null,
): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    comment: value.comment,
    proof_request: IndyProofRequestToJSON(value.proof_request),
    trace: value.trace,
  };
}