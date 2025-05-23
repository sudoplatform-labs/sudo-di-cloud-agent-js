/**
 * Sudo Decentralized Identity Cloud Agent SDK
 * Provides REST API wrappers for Typescript Agent Controllers using the Sudo Decentralized Identity Cloud Agent Service
 *
 * The version of the OpenAPI document: v0.11.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import {
  AnonCredsPresentationReqAttrSpec,
  AnonCredsPresentationReqAttrSpecFromJSON,
  AnonCredsPresentationReqAttrSpecFromJSONTyped,
  AnonCredsPresentationReqAttrSpecToJSON,
  AnonCredsPresentationReqPredSpec,
  AnonCredsPresentationReqPredSpecFromJSON,
  AnonCredsPresentationReqPredSpecFromJSONTyped,
  AnonCredsPresentationReqPredSpecToJSON,
  AnonCredsPresentationRequestNonRevoked,
  AnonCredsPresentationRequestNonRevokedFromJSON,
  AnonCredsPresentationRequestNonRevokedFromJSONTyped,
  AnonCredsPresentationRequestNonRevokedToJSON,
} from './';

/**
 *
 * @export
 * @interface AnonCredsPresentationRequest
 */
export interface AnonCredsPresentationRequest {
  /**
   * Proof request name
   * @type {string}
   * @memberof AnonCredsPresentationRequest
   */
  name?: string;
  /**
   *
   * @type {AnonCredsPresentationRequestNonRevoked}
   * @memberof AnonCredsPresentationRequest
   */
  non_revoked?: AnonCredsPresentationRequestNonRevoked;
  /**
   * Nonce
   * @type {string}
   * @memberof AnonCredsPresentationRequest
   */
  nonce?: string;
  /**
   * Requested attribute specifications of proof request
   * @type {{ [key: string]: AnonCredsPresentationReqAttrSpec; }}
   * @memberof AnonCredsPresentationRequest
   */
  requested_attributes: { [key: string]: AnonCredsPresentationReqAttrSpec };
  /**
   * Requested predicate specifications of proof request
   * @type {{ [key: string]: AnonCredsPresentationReqPredSpec; }}
   * @memberof AnonCredsPresentationRequest
   */
  requested_predicates: { [key: string]: AnonCredsPresentationReqPredSpec };
  /**
   * Proof request version
   * @type {string}
   * @memberof AnonCredsPresentationRequest
   */
  version?: string;
}

export function AnonCredsPresentationRequestFromJSON(
  json: any,
): AnonCredsPresentationRequest {
  return AnonCredsPresentationRequestFromJSONTyped(json, false);
}

export function AnonCredsPresentationRequestFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): AnonCredsPresentationRequest {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    name: !exists(json, 'name') ? undefined : json['name'],
    non_revoked: !exists(json, 'non_revoked')
      ? undefined
      : AnonCredsPresentationRequestNonRevokedFromJSON(json['non_revoked']),
    nonce: !exists(json, 'nonce') ? undefined : json['nonce'],
    requested_attributes: mapValues(
      json['requested_attributes'],
      AnonCredsPresentationReqAttrSpecFromJSON,
    ),
    requested_predicates: mapValues(
      json['requested_predicates'],
      AnonCredsPresentationReqPredSpecFromJSON,
    ),
    version: !exists(json, 'version') ? undefined : json['version'],
  };
}

export function AnonCredsPresentationRequestToJSON(
  value?: AnonCredsPresentationRequest | null,
): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    name: value.name,
    non_revoked: AnonCredsPresentationRequestNonRevokedToJSON(
      value.non_revoked,
    ),
    nonce: value.nonce,
    requested_attributes: mapValues(
      value.requested_attributes,
      AnonCredsPresentationReqAttrSpecToJSON,
    ),
    requested_predicates: mapValues(
      value.requested_predicates,
      AnonCredsPresentationReqPredSpecToJSON,
    ),
    version: value.version,
  };
}
