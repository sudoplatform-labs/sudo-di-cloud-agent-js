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
 * @interface VerificationMethod
 */
export interface VerificationMethod {
  /**
   * Verification controller DID
   * @type {string}
   * @memberof VerificationMethod
   */
  controller: string;
  /**
   * Verification Method ID
   * @type {string}
   * @memberof VerificationMethod
   */
  id: string;
  /**
   * Public Key in base58 format
   * @type {string}
   * @memberof VerificationMethod
   */
  publicKeyBase58?: string;
  /**
   * Public Key in Jwk format
   * @type {{ [key: string]: object; }}
   * @memberof VerificationMethod
   */
  publicKeyJwk?: { [key: string]: object };
  /**
   * Public Key in multibase format
   * @type {string}
   * @memberof VerificationMethod
   */
  publicKeyMultibase?: string;
  /**
   * Type of Verification Method
   * @type {string}
   * @memberof VerificationMethod
   */
  type: string;
}

export function VerificationMethodFromJSON(json: any): VerificationMethod {
  return VerificationMethodFromJSONTyped(json, false);
}

export function VerificationMethodFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): VerificationMethod {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    controller: json['controller'],
    id: json['id'],
    publicKeyBase58: !exists(json, 'publicKeyBase58')
      ? undefined
      : json['publicKeyBase58'],
    publicKeyJwk: !exists(json, 'publicKeyJwk')
      ? undefined
      : json['publicKeyJwk'],
    publicKeyMultibase: !exists(json, 'publicKeyMultibase')
      ? undefined
      : json['publicKeyMultibase'],
    type: json['type'],
  };
}

export function VerificationMethodToJSON(
  value?: VerificationMethod | null,
): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    controller: value.controller,
    id: value.id,
    publicKeyBase58: value.publicKeyBase58,
    publicKeyJwk: value.publicKeyJwk,
    publicKeyMultibase: value.publicKeyMultibase,
    type: value.type,
  };
}
