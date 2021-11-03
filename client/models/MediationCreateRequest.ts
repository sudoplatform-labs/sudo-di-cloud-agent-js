/**
 * Sudo Decentralized Identity Cloud Agent SDK
 * Provides REST API wrappers for Typescript Agent Controllers using the Sudo Decentralized Identity Cloud Agency Service
 *
 * The version of the OpenAPI document: v0.6.0
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
 * @interface MediationCreateRequest
 */
export interface MediationCreateRequest {
  /**
   * List of mediator rules for recipient
   * @type {Array<string>}
   * @memberof MediationCreateRequest
   */
  mediator_terms?: Array<string>;
  /**
   * List of recipient rules for mediation
   * @type {Array<string>}
   * @memberof MediationCreateRequest
   */
  recipient_terms?: Array<string>;
}

export function MediationCreateRequestFromJSON(
  json: any,
): MediationCreateRequest {
  return MediationCreateRequestFromJSONTyped(json, false);
}

export function MediationCreateRequestFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): MediationCreateRequest {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    mediator_terms: !exists(json, 'mediator_terms')
      ? undefined
      : json['mediator_terms'],
    recipient_terms: !exists(json, 'recipient_terms')
      ? undefined
      : json['recipient_terms'],
  };
}

export function MediationCreateRequestToJSON(
  value?: MediationCreateRequest | null,
): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    mediator_terms: value.mediator_terms,
    recipient_terms: value.recipient_terms,
  };
}
