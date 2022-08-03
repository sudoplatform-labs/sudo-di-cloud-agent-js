/**
 * Sudo Decentralized Identity Cloud Agent SDK
 * Provides REST API wrappers for Typescript Agent Controllers using the Sudo Decentralized Identity Cloud Agent Service
 *
 * The version of the OpenAPI document: v0.6.4
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
 * @interface V20CredFilterIndy
 */
export interface V20CredFilterIndy {
  /**
   * Credential definition identifier
   * @type {string}
   * @memberof V20CredFilterIndy
   */
  cred_def_id?: string;
  /**
   * Credential issuer DID
   * @type {string}
   * @memberof V20CredFilterIndy
   */
  issuer_did?: string;
  /**
   * Schema identifier
   * @type {string}
   * @memberof V20CredFilterIndy
   */
  schema_id?: string;
  /**
   * Schema issuer DID
   * @type {string}
   * @memberof V20CredFilterIndy
   */
  schema_issuer_did?: string;
  /**
   * Schema name
   * @type {string}
   * @memberof V20CredFilterIndy
   */
  schema_name?: string;
  /**
   * Schema version
   * @type {string}
   * @memberof V20CredFilterIndy
   */
  schema_version?: string;
}

export function V20CredFilterIndyFromJSON(json: any): V20CredFilterIndy {
  return V20CredFilterIndyFromJSONTyped(json, false);
}

export function V20CredFilterIndyFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): V20CredFilterIndy {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    cred_def_id: !exists(json, 'cred_def_id') ? undefined : json['cred_def_id'],
    issuer_did: !exists(json, 'issuer_did') ? undefined : json['issuer_did'],
    schema_id: !exists(json, 'schema_id') ? undefined : json['schema_id'],
    schema_issuer_did: !exists(json, 'schema_issuer_did')
      ? undefined
      : json['schema_issuer_did'],
    schema_name: !exists(json, 'schema_name') ? undefined : json['schema_name'],
    schema_version: !exists(json, 'schema_version')
      ? undefined
      : json['schema_version'],
  };
}

export function V20CredFilterIndyToJSON(value?: V20CredFilterIndy | null): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    cred_def_id: value.cred_def_id,
    issuer_did: value.issuer_did,
    schema_id: value.schema_id,
    schema_issuer_did: value.schema_issuer_did,
    schema_name: value.schema_name,
    schema_version: value.schema_version,
  };
}
