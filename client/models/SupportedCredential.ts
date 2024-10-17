/**
 * Sudo Decentralized Identity Cloud Agent SDK
 * Provides REST API wrappers for Typescript Agent Controllers using the Sudo Decentralized Identity Cloud Agent Service
 *
 * The version of the OpenAPI document: v0.10.0
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
 * @interface SupportedCredential
 */
export interface SupportedCredential {
  /**
   * Time of record creation
   * @type {string}
   * @memberof SupportedCredential
   */
  created_at?: string;
  /**
   *
   * @type {Array<string>}
   * @memberof SupportedCredential
   */
  cryptographic_binding_methods_supported?: Array<string>;
  /**
   *
   * @type {Array<string>}
   * @memberof SupportedCredential
   */
  cryptographic_suites_supported?: Array<string>;
  /**
   *
   * @type {Array<object>}
   * @memberof SupportedCredential
   */
  display?: Array<object>;
  /**
   *
   * @type {string}
   * @memberof SupportedCredential
   */
  format: string;
  /**
   *
   * @type {object}
   * @memberof SupportedCredential
   */
  format_data?: object;
  /**
   *
   * @type {string}
   * @memberof SupportedCredential
   */
  identifier: string;
  /**
   * Current record state
   * @type {string}
   * @memberof SupportedCredential
   */
  state?: string;
  /**
   * supported credential identifier
   * @type {string}
   * @memberof SupportedCredential
   */
  supported_cred_id?: string;
  /**
   * Time of last record update
   * @type {string}
   * @memberof SupportedCredential
   */
  updated_at?: string;
  /**
   *
   * @type {object}
   * @memberof SupportedCredential
   */
  vc_additional_data?: object;
}

export function SupportedCredentialFromJSON(json: any): SupportedCredential {
  return SupportedCredentialFromJSONTyped(json, false);
}

export function SupportedCredentialFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): SupportedCredential {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    created_at: !exists(json, 'created_at') ? undefined : json['created_at'],
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
    format_data: !exists(json, 'format_data') ? undefined : json['format_data'],
    identifier: json['identifier'],
    state: !exists(json, 'state') ? undefined : json['state'],
    supported_cred_id: !exists(json, 'supported_cred_id')
      ? undefined
      : json['supported_cred_id'],
    updated_at: !exists(json, 'updated_at') ? undefined : json['updated_at'],
    vc_additional_data: !exists(json, 'vc_additional_data')
      ? undefined
      : json['vc_additional_data'],
  };
}

export function SupportedCredentialToJSON(
  value?: SupportedCredential | null,
): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    created_at: value.created_at,
    cryptographic_binding_methods_supported:
      value.cryptographic_binding_methods_supported,
    cryptographic_suites_supported: value.cryptographic_suites_supported,
    display: value.display,
    format: value.format,
    format_data: value.format_data,
    identifier: value.identifier,
    state: value.state,
    supported_cred_id: value.supported_cred_id,
    updated_at: value.updated_at,
    vc_additional_data: value.vc_additional_data,
  };
}
