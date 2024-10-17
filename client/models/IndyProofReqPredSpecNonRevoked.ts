/**
 * Sudo Decentralized Identity Cloud Agent SDK
 * Provides REST API wrappers for Typescript Agent Controllers using the Sudo Decentralized Identity Cloud Agent Service
 *
 * The version of the OpenAPI document: v0.10.0
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
 * @interface IndyProofReqPredSpecNonRevoked
 */
export interface IndyProofReqPredSpecNonRevoked {
  /**
   * Earliest time of interest in non-revocation interval
   * @type {number}
   * @memberof IndyProofReqPredSpecNonRevoked
   */
  from?: number;
  /**
   * Latest time of interest in non-revocation interval
   * @type {number}
   * @memberof IndyProofReqPredSpecNonRevoked
   */
  to?: number;
}

export function IndyProofReqPredSpecNonRevokedFromJSON(
  json: any,
): IndyProofReqPredSpecNonRevoked {
  return IndyProofReqPredSpecNonRevokedFromJSONTyped(json, false);
}

export function IndyProofReqPredSpecNonRevokedFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): IndyProofReqPredSpecNonRevoked {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    from: !exists(json, 'from') ? undefined : json['from'],
    to: !exists(json, 'to') ? undefined : json['to'],
  };
}

export function IndyProofReqPredSpecNonRevokedToJSON(
  value?: IndyProofReqPredSpecNonRevoked | null,
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
