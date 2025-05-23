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
  AttachDecoratorDataJWS,
  AttachDecoratorDataJWSFromJSON,
  AttachDecoratorDataJWSFromJSONTyped,
  AttachDecoratorDataJWSToJSON,
} from './';

/**
 *
 * @export
 * @interface AttachDecoratorData
 */
export interface AttachDecoratorData {
  /**
   * Base64-encoded data
   * @type {string}
   * @memberof AttachDecoratorData
   */
  base64?: string;
  /**
   * JSON-serialized data
   * @type {object}
   * @memberof AttachDecoratorData
   */
  json?: object;
  /**
   * Detached Java Web Signature
   * @type {AttachDecoratorDataJWS}
   * @memberof AttachDecoratorData
   */
  jws?: AttachDecoratorDataJWS;
  /**
   * List of hypertext links to data
   * @type {Array<string>}
   * @memberof AttachDecoratorData
   */
  links?: Array<string>;
  /**
   * SHA256 hash (binhex encoded) of content
   * @type {string}
   * @memberof AttachDecoratorData
   */
  sha256?: string;
}

export function AttachDecoratorDataFromJSON(json: any): AttachDecoratorData {
  return AttachDecoratorDataFromJSONTyped(json, false);
}

export function AttachDecoratorDataFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): AttachDecoratorData {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    base64: !exists(json, 'base64') ? undefined : json['base64'],
    json: !exists(json, 'json') ? undefined : json['json'],
    jws: !exists(json, 'jws')
      ? undefined
      : AttachDecoratorDataJWSFromJSON(json['jws']),
    links: !exists(json, 'links') ? undefined : json['links'],
    sha256: !exists(json, 'sha256') ? undefined : json['sha256'],
  };
}

export function AttachDecoratorDataToJSON(
  value?: AttachDecoratorData | null,
): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    base64: value.base64,
    json: value.json,
    jws: AttachDecoratorDataJWSToJSON(value.jws),
    links: value.links,
    sha256: value.sha256,
  };
}
