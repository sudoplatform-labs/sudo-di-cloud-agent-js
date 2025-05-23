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
/**
 *
 * @export
 * @interface IndyRequestedCredsRequestedAttr
 */
export interface IndyRequestedCredsRequestedAttr {
  /**
   * Wallet credential identifier (typically but not necessarily a UUID)
   * @type {string}
   * @memberof IndyRequestedCredsRequestedAttr
   */
  cred_id: string;
  /**
   * Whether to reveal attribute in proof (default true)
   * @type {boolean}
   * @memberof IndyRequestedCredsRequestedAttr
   */
  revealed?: boolean;
}

export function IndyRequestedCredsRequestedAttrFromJSON(
  json: any,
): IndyRequestedCredsRequestedAttr {
  return IndyRequestedCredsRequestedAttrFromJSONTyped(json, false);
}

export function IndyRequestedCredsRequestedAttrFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): IndyRequestedCredsRequestedAttr {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    cred_id: json['cred_id'],
    revealed: !exists(json, 'revealed') ? undefined : json['revealed'],
  };
}

export function IndyRequestedCredsRequestedAttrToJSON(
  value?: IndyRequestedCredsRequestedAttr | null,
): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    cred_id: value.cred_id,
    revealed: value.revealed,
  };
}
