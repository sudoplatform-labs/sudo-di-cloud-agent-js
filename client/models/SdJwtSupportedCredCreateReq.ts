/**
 * Sudo Decentralized Identity Cloud Agent SDK
 * Provides REST API wrappers for Typescript Agent Controllers using the Sudo Decentralized Identity Cloud Agent Service
 *
 * The version of the OpenAPI document: v0.10.1
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
 * @interface SdJwtSupportedCredCreateReq
 */
export interface SdJwtSupportedCredCreateReq {
  /**
   * Display information about claims.
   * @type {object}
   * @memberof SdJwtSupportedCredCreateReq
   */
  claims?: object;
  /**
   *
   * @type {Array<string>}
   * @memberof SdJwtSupportedCredCreateReq
   */
  cryptographic_binding_methods_supported?: Array<string>;
  /**
   *
   * @type {Array<string>}
   * @memberof SdJwtSupportedCredCreateReq
   */
  cryptographic_suites_supported?: Array<string>;
  /**
   *
   * @type {Array<object>}
   * @memberof SdJwtSupportedCredCreateReq
   */
  display?: Array<object>;
  /**
   *
   * @type {string}
   * @memberof SdJwtSupportedCredCreateReq
   */
  format: string;
  /**
   *
   * @type {string}
   * @memberof SdJwtSupportedCredCreateReq
   */
  id: string;
  /**
   * The order in which claims should be displayed. This is not well defined by the spec right now. Best to omit for now.
   * @type {Array<string>}
   * @memberof SdJwtSupportedCredCreateReq
   */
  order?: Array<string>;
  /**
   * List of JSON pointers to selectively disclosable attributes.
   * @type {Array<string>}
   * @memberof SdJwtSupportedCredCreateReq
   */
  sd_list?: Array<string>;
  /**
   * String designating the type of a Credential. This MAY be a URI but it can also be an arbitrary string value.
   * @type {string}
   * @memberof SdJwtSupportedCredCreateReq
   */
  vct: string;
}

export function SdJwtSupportedCredCreateReqFromJSON(
  json: any,
): SdJwtSupportedCredCreateReq {
  return SdJwtSupportedCredCreateReqFromJSONTyped(json, false);
}

export function SdJwtSupportedCredCreateReqFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): SdJwtSupportedCredCreateReq {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    claims: !exists(json, 'claims') ? undefined : json['claims'],
    cryptographic_binding_methods_supported: !exists(
      json,
      'cryptographic_binding_methods_supported',
    )
      ? undefined
      : json['cryptographic_binding_methods_supported'],
    cryptographic_suites_supported: !exists(
      json,
      'cryptographic_suites_supported',
    )
      ? undefined
      : json['cryptographic_suites_supported'],
    display: !exists(json, 'display') ? undefined : json['display'],
    format: json['format'],
    id: json['id'],
    order: !exists(json, 'order') ? undefined : json['order'],
    sd_list: !exists(json, 'sd_list') ? undefined : json['sd_list'],
    vct: json['vct'],
  };
}

export function SdJwtSupportedCredCreateReqToJSON(
  value?: SdJwtSupportedCredCreateReq | null,
): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    claims: value.claims,
    cryptographic_binding_methods_supported:
      value.cryptographic_binding_methods_supported,
    cryptographic_suites_supported: value.cryptographic_suites_supported,
    display: value.display,
    format: value.format,
    id: value.id,
    order: value.order,
    sd_list: value.sd_list,
    vct: value.vct,
  };
}
