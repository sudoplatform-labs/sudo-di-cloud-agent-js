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
 * @interface SupportedCredCreateRequest
 */
export interface SupportedCredCreateRequest {
  /**
   *
   * @type {Array<string>}
   * @memberof SupportedCredCreateRequest
   */
  cryptographic_binding_methods_supported?: Array<string>;
  /**
   *
   * @type {Array<string>}
   * @memberof SupportedCredCreateRequest
   */
  cryptographic_suites_supported?: Array<string>;
  /**
   *
   * @type {Array<object>}
   * @memberof SupportedCredCreateRequest
   */
  display?: Array<object>;
  /**
   *
   * @type {string}
   * @memberof SupportedCredCreateRequest
   */
  format: string;
  /**
   * Data specific to the credential format to be included in issuer metadata.
   * @type {object}
   * @memberof SupportedCredCreateRequest
   */
  format_data?: object;
  /**
   *
   * @type {string}
   * @memberof SupportedCredCreateRequest
   */
  id: string;
  /**
   * Additional data to be included in each credential of this type. This is for data that is not specific to the subject but required by the credential format and is included in every credential.
   * @type {object}
   * @memberof SupportedCredCreateRequest
   */
  vc_additional_data?: object;
}

export function SupportedCredCreateRequestFromJSON(
  json: any,
): SupportedCredCreateRequest {
  return SupportedCredCreateRequestFromJSONTyped(json, false);
}

export function SupportedCredCreateRequestFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): SupportedCredCreateRequest {
  if (json === undefined || json === null) {
    return json;
  }
  return {
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
    id: json['id'],
    vc_additional_data: !exists(json, 'vc_additional_data')
      ? undefined
      : json['vc_additional_data'],
  };
}

export function SupportedCredCreateRequestToJSON(
  value?: SupportedCredCreateRequest | null,
): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    cryptographic_binding_methods_supported:
      value.cryptographic_binding_methods_supported,
    cryptographic_suites_supported: value.cryptographic_suites_supported,
    display: value.display,
    format: value.format,
    format_data: value.format_data,
    id: value.id,
    vc_additional_data: value.vc_additional_data,
  };
}
