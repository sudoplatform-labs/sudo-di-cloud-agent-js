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
 * @interface IndyProofRequestNonRevoked
 */
export interface IndyProofRequestNonRevoked {
  /**
   * Earliest time of interest in non-revocation interval
   * @type {number}
   * @memberof IndyProofRequestNonRevoked
   */
  from?: number;
  /**
   * Latest time of interest in non-revocation interval
   * @type {number}
   * @memberof IndyProofRequestNonRevoked
   */
  to?: number;
}

export function IndyProofRequestNonRevokedFromJSON(
  json: any,
): IndyProofRequestNonRevoked {
  return IndyProofRequestNonRevokedFromJSONTyped(json, false);
}

export function IndyProofRequestNonRevokedFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): IndyProofRequestNonRevoked {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    from: !exists(json, 'from') ? undefined : json['from'],
    to: !exists(json, 'to') ? undefined : json['to'],
  };
}

export function IndyProofRequestNonRevokedToJSON(
  value?: IndyProofRequestNonRevoked | null,
): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    from: value.from,
    to: value.to,
  };
}
