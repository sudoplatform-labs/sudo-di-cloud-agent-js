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
 * @interface IndyProofReqAttrSpecNonRevoked
 */
export interface IndyProofReqAttrSpecNonRevoked {
  /**
   * Earliest time of interest in non-revocation interval
   * @type {number}
   * @memberof IndyProofReqAttrSpecNonRevoked
   */
  from?: number;
  /**
   * Latest time of interest in non-revocation interval
   * @type {number}
   * @memberof IndyProofReqAttrSpecNonRevoked
   */
  to?: number;
}

export function IndyProofReqAttrSpecNonRevokedFromJSON(
  json: any,
): IndyProofReqAttrSpecNonRevoked {
  return IndyProofReqAttrSpecNonRevokedFromJSONTyped(json, false);
}

export function IndyProofReqAttrSpecNonRevokedFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): IndyProofReqAttrSpecNonRevoked {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    from: !exists(json, 'from') ? undefined : json['from'],
    to: !exists(json, 'to') ? undefined : json['to'],
  };
}

export function IndyProofReqAttrSpecNonRevokedToJSON(
  value?: IndyProofReqAttrSpecNonRevoked | null,
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
