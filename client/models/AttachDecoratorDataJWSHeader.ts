/**
 * Sudo Decentralized Identity Cloud Agent SDK
 * Provides REST API wrappers for Typescript Agent Controllers using the Sudo Decentralized Identity Cloud Agent Service
 *
 * The version of the OpenAPI document: v0.7.1
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
 * @interface AttachDecoratorDataJWSHeader
 */
export interface AttachDecoratorDataJWSHeader {
  /**
   * Key identifier, in W3C did:key or DID URL format
   * @type {string}
   * @memberof AttachDecoratorDataJWSHeader
   */
  kid: string;
}

export function AttachDecoratorDataJWSHeaderFromJSON(
  json: any,
): AttachDecoratorDataJWSHeader {
  return AttachDecoratorDataJWSHeaderFromJSONTyped(json, false);
}

export function AttachDecoratorDataJWSHeaderFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): AttachDecoratorDataJWSHeader {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    kid: json['kid'],
  };
}

export function AttachDecoratorDataJWSHeaderToJSON(
  value?: AttachDecoratorDataJWSHeader | null,
): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    kid: value.kid,
  };
}
