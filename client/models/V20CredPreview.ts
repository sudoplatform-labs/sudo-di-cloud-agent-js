/**
 * Sudo Decentralized Identity Cloud Agent SDK
 * Provides REST API wrappers for Typescript Agent Controllers using the Sudo Decentralized Identity Cloud Agency Service
 *
 * The version of the OpenAPI document: v0.6.1
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import {
  V20CredAttrSpec,
  V20CredAttrSpecFromJSON,
  V20CredAttrSpecFromJSONTyped,
  V20CredAttrSpecToJSON,
} from './';

/**
 *
 * @export
 * @interface V20CredPreview
 */
export interface V20CredPreview {
  /**
   * Message type identifier
   * @type {string}
   * @memberof V20CredPreview
   */
  type?: string;
  /**
   *
   * @type {Array<V20CredAttrSpec>}
   * @memberof V20CredPreview
   */
  attributes: Array<V20CredAttrSpec>;
}

export function V20CredPreviewFromJSON(json: any): V20CredPreview {
  return V20CredPreviewFromJSONTyped(json, false);
}

export function V20CredPreviewFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): V20CredPreview {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    type: !exists(json, '@type') ? undefined : json['@type'],
    attributes: (json['attributes'] as Array<any>).map(V20CredAttrSpecFromJSON),
  };
}

export function V20CredPreviewToJSON(value?: V20CredPreview | null): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    '@type': value.type,
    attributes: (value.attributes as Array<any>).map(V20CredAttrSpecToJSON),
  };
}
