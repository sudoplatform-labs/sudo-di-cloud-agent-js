/**
 * Sudo Decentralized Identity Cloud Agent SDK
 * Provides REST API wrappers for Typescript Agent Controllers using the Sudo Decentralized Identity Cloud Agency Service
 *
 * The version of the OpenAPI document: v0.5.4
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
 * @interface IndyRequestedCredsRequestedPred
 */
export interface IndyRequestedCredsRequestedPred {
  /**
   * Wallet credential identifier (typically but not necessarily a UUID)
   * @type {string}
   * @memberof IndyRequestedCredsRequestedPred
   */
  cred_id: string;
  /**
   * Epoch timestamp of interest for non-revocation proof
   * @type {number}
   * @memberof IndyRequestedCredsRequestedPred
   */
  timestamp?: number;
}

export function IndyRequestedCredsRequestedPredFromJSON(
  json: any,
): IndyRequestedCredsRequestedPred {
  return IndyRequestedCredsRequestedPredFromJSONTyped(json, false);
}

export function IndyRequestedCredsRequestedPredFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): IndyRequestedCredsRequestedPred {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    cred_id: json['cred_id'],
    timestamp: !exists(json, 'timestamp') ? undefined : json['timestamp'],
  };
}

export function IndyRequestedCredsRequestedPredToJSON(
  value?: IndyRequestedCredsRequestedPred | null,
): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    cred_id: value.cred_id,
    timestamp: value.timestamp,
  };
}
