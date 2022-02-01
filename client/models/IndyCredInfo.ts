/**
 * Sudo Decentralized Identity Cloud Agent SDK
 * Provides REST API wrappers for Typescript Agent Controllers using the Sudo Decentralized Identity Cloud Agent Service
 *
 * The version of the OpenAPI document: v0.6.3
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
 * @interface IndyCredInfo
 */
export interface IndyCredInfo {
  /**
   * Attribute names and value
   * @type {{ [key: string]: string; }}
   * @memberof IndyCredInfo
   */
  attrs?: { [key: string]: string };
  /**
   * Credential definition identifier
   * @type {string}
   * @memberof IndyCredInfo
   */
  cred_def_id?: string;
  /**
   * Credential revocation identifier
   * @type {string}
   * @memberof IndyCredInfo
   */
  cred_rev_id?: string | null;
  /**
   * Wallet referent
   * @type {string}
   * @memberof IndyCredInfo
   */
  referent?: string;
  /**
   * Revocation registry identifier
   * @type {string}
   * @memberof IndyCredInfo
   */
  rev_reg_id?: string | null;
  /**
   * Schema identifier
   * @type {string}
   * @memberof IndyCredInfo
   */
  schema_id?: string;
}

export function IndyCredInfoFromJSON(json: any): IndyCredInfo {
  return IndyCredInfoFromJSONTyped(json, false);
}

export function IndyCredInfoFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): IndyCredInfo {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    attrs: !exists(json, 'attrs') ? undefined : json['attrs'],
    cred_def_id: !exists(json, 'cred_def_id') ? undefined : json['cred_def_id'],
    cred_rev_id: !exists(json, 'cred_rev_id') ? undefined : json['cred_rev_id'],
    referent: !exists(json, 'referent') ? undefined : json['referent'],
    rev_reg_id: !exists(json, 'rev_reg_id') ? undefined : json['rev_reg_id'],
    schema_id: !exists(json, 'schema_id') ? undefined : json['schema_id'],
  };
}

export function IndyCredInfoToJSON(value?: IndyCredInfo | null): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    attrs: value.attrs,
    cred_def_id: value.cred_def_id,
    cred_rev_id: value.cred_rev_id,
    referent: value.referent,
    rev_reg_id: value.rev_reg_id,
    schema_id: value.schema_id,
  };
}
