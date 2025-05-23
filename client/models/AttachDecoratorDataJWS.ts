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
import {
  AttachDecoratorData1JWS,
  AttachDecoratorData1JWSFromJSON,
  AttachDecoratorData1JWSFromJSONTyped,
  AttachDecoratorData1JWSToJSON,
  AttachDecoratorDataJWSHeader,
  AttachDecoratorDataJWSHeaderFromJSON,
  AttachDecoratorDataJWSHeaderFromJSONTyped,
  AttachDecoratorDataJWSHeaderToJSON,
} from './';

/**
 *
 * @export
 * @interface AttachDecoratorDataJWS
 */
export interface AttachDecoratorDataJWS {
  /**
   *
   * @type {AttachDecoratorDataJWSHeader}
   * @memberof AttachDecoratorDataJWS
   */
  header?: AttachDecoratorDataJWSHeader;
  /**
   * protected JWS header
   * @type {string}
   * @memberof AttachDecoratorDataJWS
   */
  _protected?: string;
  /**
   * signature
   * @type {string}
   * @memberof AttachDecoratorDataJWS
   */
  signature?: string;
  /**
   * List of signatures
   * @type {Array<AttachDecoratorData1JWS>}
   * @memberof AttachDecoratorDataJWS
   */
  signatures?: Array<AttachDecoratorData1JWS>;
}

export function AttachDecoratorDataJWSFromJSON(
  json: any,
): AttachDecoratorDataJWS {
  return AttachDecoratorDataJWSFromJSONTyped(json, false);
}

export function AttachDecoratorDataJWSFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): AttachDecoratorDataJWS {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    header: !exists(json, 'header')
      ? undefined
      : AttachDecoratorDataJWSHeaderFromJSON(json['header']),
    _protected: !exists(json, 'protected') ? undefined : json['protected'],
    signature: !exists(json, 'signature') ? undefined : json['signature'],
    signatures: !exists(json, 'signatures')
      ? undefined
      : (json['signatures'] as Array<any>).map(AttachDecoratorData1JWSFromJSON),
  };
}

export function AttachDecoratorDataJWSToJSON(
  value?: AttachDecoratorDataJWS | null,
): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    header: AttachDecoratorDataJWSHeaderToJSON(value.header),
    protected: value._protected,
    signature: value.signature,
    signatures:
      value.signatures === undefined
        ? undefined
        : (value.signatures as Array<any>).map(AttachDecoratorData1JWSToJSON),
  };
}
