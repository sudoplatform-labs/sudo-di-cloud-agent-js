/**
 * Sudo Decentralized Identity Cloud Agent SDK
 * Provides REST API wrappers for Typescript Agent Controllers using the Sudo Decentralized Identity Cloud Agent Service
 *
 * The version of the OpenAPI document: v100.0.100
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import {
  AttachDecoratorDataJWSHeader,
  AttachDecoratorDataJWSHeaderFromJSON,
  AttachDecoratorDataJWSHeaderFromJSONTyped,
  AttachDecoratorDataJWSHeaderToJSON,
} from './';

/**
 *
 * @export
 * @interface AttachDecoratorData1JWS
 */
export interface AttachDecoratorData1JWS {
  /**
   *
   * @type {AttachDecoratorDataJWSHeader}
   * @memberof AttachDecoratorData1JWS
   */
  header: AttachDecoratorDataJWSHeader;
  /**
   * protected JWS header
   * @type {string}
   * @memberof AttachDecoratorData1JWS
   */
  _protected?: string;
  /**
   * signature
   * @type {string}
   * @memberof AttachDecoratorData1JWS
   */
  signature: string;
}

export function AttachDecoratorData1JWSFromJSON(
  json: any,
): AttachDecoratorData1JWS {
  return AttachDecoratorData1JWSFromJSONTyped(json, false);
}

export function AttachDecoratorData1JWSFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): AttachDecoratorData1JWS {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    header: AttachDecoratorDataJWSHeaderFromJSON(json['header']),
    _protected: !exists(json, 'protected') ? undefined : json['protected'],
    signature: json['signature'],
  };
}

export function AttachDecoratorData1JWSToJSON(
  value?: AttachDecoratorData1JWS | null,
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
  };
}
