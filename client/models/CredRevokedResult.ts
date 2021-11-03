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
 * @interface CredRevokedResult
 */
export interface CredRevokedResult {
  /**
   * Whether credential is revoked on the ledger
   * @type {boolean}
   * @memberof CredRevokedResult
   */
  revoked?: boolean;
}

export function CredRevokedResultFromJSON(json: any): CredRevokedResult {
  return CredRevokedResultFromJSONTyped(json, false);
}

export function CredRevokedResultFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): CredRevokedResult {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    revoked: !exists(json, 'revoked') ? undefined : json['revoked'],
  };
}

export function CredRevokedResultToJSON(value?: CredRevokedResult | null): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    revoked: value.revoked,
  };
}
