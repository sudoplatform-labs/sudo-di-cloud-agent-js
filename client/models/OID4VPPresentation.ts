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
 * @interface OID4VPPresentation
 */
export interface OID4VPPresentation {
  /**
   * Time of record creation
   * @type {string}
   * @memberof OID4VPPresentation
   */
  created_at?: string;
  /**
   * Identifier used to identify dcql query
   * @type {string}
   * @memberof OID4VPPresentation
   */
  dcql_query_id?: string;
  /**
   * Errors raised during validation, if present
   * @type {Array<string>}
   * @memberof OID4VPPresentation
   */
  errors?: Array<string>;
  /**
   * Verified claims from the presentation, if present
   * @type {{ [key: string]: object; }}
   * @memberof OID4VPPresentation
   */
  matched_credentials?: { [key: string]: object };
  /**
   *
   * @type {string}
   * @memberof OID4VPPresentation
   */
  nonce?: string;
  /**
   * Identifier used to identify presentation defintion
   * @type {string}
   * @memberof OID4VPPresentation
   */
  pres_def_id?: string;
  /**
   * Presentation identifier
   * @type {string}
   * @memberof OID4VPPresentation
   */
  presentation_id?: string;
  /**
   * Identifier used to identify presentation request
   * @type {string}
   * @memberof OID4VPPresentation
   */
  request_id: string;
  /**
   * Current record state
   * @type {string}
   * @memberof OID4VPPresentation
   */
  state?: string;
  /**
   * Time of last record update
   * @type {string}
   * @memberof OID4VPPresentation
   */
  updated_at?: string;
  /**
   * Whether or not the presentation was successfully verified
   * @type {boolean}
   * @memberof OID4VPPresentation
   */
  verified?: boolean;
}

export function OID4VPPresentationFromJSON(json: any): OID4VPPresentation {
  return OID4VPPresentationFromJSONTyped(json, false);
}

export function OID4VPPresentationFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): OID4VPPresentation {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    created_at: !exists(json, 'created_at') ? undefined : json['created_at'],
    dcql_query_id: !exists(json, 'dcql_query_id')
      ? undefined
      : json['dcql_query_id'],
    errors: !exists(json, 'errors') ? undefined : json['errors'],
    matched_credentials: !exists(json, 'matched_credentials')
      ? undefined
      : json['matched_credentials'],
    nonce: !exists(json, 'nonce') ? undefined : json['nonce'],
    pres_def_id: !exists(json, 'pres_def_id') ? undefined : json['pres_def_id'],
    presentation_id: !exists(json, 'presentation_id')
      ? undefined
      : json['presentation_id'],
    request_id: json['request_id'],
    state: !exists(json, 'state') ? undefined : json['state'],
    updated_at: !exists(json, 'updated_at') ? undefined : json['updated_at'],
    verified: !exists(json, 'verified') ? undefined : json['verified'],
  };
}

export function OID4VPPresentationToJSON(
  value?: OID4VPPresentation | null,
): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    created_at: value.created_at,
    dcql_query_id: value.dcql_query_id,
    errors: value.errors,
    matched_credentials: value.matched_credentials,
    nonce: value.nonce,
    pres_def_id: value.pres_def_id,
    presentation_id: value.presentation_id,
    request_id: value.request_id,
    state: value.state,
    updated_at: value.updated_at,
    verified: value.verified,
  };
}
