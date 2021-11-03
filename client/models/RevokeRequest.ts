/**
 * Sudo Decentralized Identity Cloud Agent SDK
 * Provides REST API wrappers for Typescript Agent Controllers using the Sudo Decentralized Identity Cloud Agency Service
 *
 * The version of the OpenAPI document: v0.6.1
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
 * @interface RevokeRequest
 */
export interface RevokeRequest {
  /**
   * Credential exchange identifier
   * @type {string}
   * @memberof RevokeRequest
   */
  cred_ex_id?: string;
  /**
   * Credential revocation identifier
   * @type {string}
   * @memberof RevokeRequest
   */
  cred_rev_id?: string;
  /**
   * (True) publish revocation to ledger immediately, or (default, False) mark it pending
   * @type {boolean}
   * @memberof RevokeRequest
   */
  publish?: boolean;
  /**
   * Revocation registry identifier
   * @type {string}
   * @memberof RevokeRequest
   */
  rev_reg_id?: string;
}

export function RevokeRequestFromJSON(json: any): RevokeRequest {
  return RevokeRequestFromJSONTyped(json, false);
}

export function RevokeRequestFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): RevokeRequest {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    cred_ex_id: !exists(json, 'cred_ex_id') ? undefined : json['cred_ex_id'],
    cred_rev_id: !exists(json, 'cred_rev_id') ? undefined : json['cred_rev_id'],
    publish: !exists(json, 'publish') ? undefined : json['publish'],
    rev_reg_id: !exists(json, 'rev_reg_id') ? undefined : json['rev_reg_id'],
  };
}

export function RevokeRequestToJSON(value?: RevokeRequest | null): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    cred_ex_id: value.cred_ex_id,
    cred_rev_id: value.cred_rev_id,
    publish: value.publish,
    rev_reg_id: value.rev_reg_id,
  };
}
