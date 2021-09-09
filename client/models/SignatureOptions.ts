/**
 * Sudo Decentralized Identity Cloud Agent SDK
 * Provides REST API wrappers for Typescript Agent Controllers using the Sudo Decentralized Identity Cloud Agency Service
 *
 * The version of the OpenAPI document: v0.5.0
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
 * @interface SignatureOptions
 */
export interface SignatureOptions {
  /**
   *
   * @type {string}
   * @memberof SignatureOptions
   */
  challenge?: string;
  /**
   *
   * @type {string}
   * @memberof SignatureOptions
   */
  domain?: string;
  /**
   *
   * @type {string}
   * @memberof SignatureOptions
   */
  proofPurpose: string;
  /**
   *
   * @type {string}
   * @memberof SignatureOptions
   */
  type?: string;
  /**
   *
   * @type {string}
   * @memberof SignatureOptions
   */
  verificationMethod: string;
}

export function SignatureOptionsFromJSON(json: any): SignatureOptions {
  return SignatureOptionsFromJSONTyped(json, false);
}

export function SignatureOptionsFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): SignatureOptions {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    challenge: !exists(json, 'challenge') ? undefined : json['challenge'],
    domain: !exists(json, 'domain') ? undefined : json['domain'],
    proofPurpose: json['proofPurpose'],
    type: !exists(json, 'type') ? undefined : json['type'],
    verificationMethod: json['verificationMethod'],
  };
}

export function SignatureOptionsToJSON(value?: SignatureOptions | null): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    challenge: value.challenge,
    domain: value.domain,
    proofPurpose: value.proofPurpose,
    type: value.type,
    verificationMethod: value.verificationMethod,
  };
}