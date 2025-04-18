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
 * @interface SignResponse
 */
export interface SignResponse {
  /**
   * Error text
   * @type {string}
   * @memberof SignResponse
   */
  error?: string;
  /**
   * Signed document
   * @type {{ [key: string]: object; }}
   * @memberof SignResponse
   */
  signed_doc?: { [key: string]: object };
}

export function SignResponseFromJSON(json: any): SignResponse {
  return SignResponseFromJSONTyped(json, false);
}

export function SignResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): SignResponse {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    error: !exists(json, 'error') ? undefined : json['error'],
    signed_doc: !exists(json, 'signed_doc') ? undefined : json['signed_doc'],
  };
}

export function SignResponseToJSON(value?: SignResponse | null): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    error: value.error,
    signed_doc: value.signed_doc,
  };
}
