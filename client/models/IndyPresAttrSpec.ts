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
 * @interface IndyPresAttrSpec
 */
export interface IndyPresAttrSpec {
  /**
   *
   * @type {string}
   * @memberof IndyPresAttrSpec
   */
  cred_def_id?: string;
  /**
   * MIME type (default null)
   * @type {string}
   * @memberof IndyPresAttrSpec
   */
  mime_type?: string;
  /**
   * Attribute name
   * @type {string}
   * @memberof IndyPresAttrSpec
   */
  name: string;
  /**
   * Credential referent
   * @type {string}
   * @memberof IndyPresAttrSpec
   */
  referent?: string;
  /**
   * Attribute value
   * @type {string}
   * @memberof IndyPresAttrSpec
   */
  value?: string;
}

export function IndyPresAttrSpecFromJSON(json: any): IndyPresAttrSpec {
  return IndyPresAttrSpecFromJSONTyped(json, false);
}

export function IndyPresAttrSpecFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): IndyPresAttrSpec {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    cred_def_id: !exists(json, 'cred_def_id') ? undefined : json['cred_def_id'],
    mime_type: !exists(json, 'mime-type') ? undefined : json['mime-type'],
    name: json['name'],
    referent: !exists(json, 'referent') ? undefined : json['referent'],
    value: !exists(json, 'value') ? undefined : json['value'],
  };
}

export function IndyPresAttrSpecToJSON(value?: IndyPresAttrSpec | null): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    cred_def_id: value.cred_def_id,
    'mime-type': value.mime_type,
    name: value.name,
    referent: value.referent,
    value: value.value,
  };
}
