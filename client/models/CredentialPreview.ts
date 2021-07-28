/**
 * Sudo Decentralized Identity Cloud Agent SDK
 * Provides REST API wrappers for Typescript Agent Controllers using the Sudo Decentralized Identity Cloud Agency Service
 *
 * The version of the OpenAPI document: v0.4.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import {
  CredAttrSpec,
  CredAttrSpecFromJSON,
  CredAttrSpecFromJSONTyped,
  CredAttrSpecToJSON,
} from './';

/**
 *
 * @export
 * @interface CredentialPreview
 */
export interface CredentialPreview {
  /**
   * Message type identifier
   * @type {string}
   * @memberof CredentialPreview
   */
  type?: string;
  /**
   *
   * @type {Array<CredAttrSpec>}
   * @memberof CredentialPreview
   */
  attributes: Array<CredAttrSpec>;
}

export function CredentialPreviewFromJSON(json: any): CredentialPreview {
  return CredentialPreviewFromJSONTyped(json, false);
}

export function CredentialPreviewFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): CredentialPreview {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    type: !exists(json, '@type') ? undefined : json['@type'],
    attributes: (json['attributes'] as Array<any>).map(CredAttrSpecFromJSON),
  };
}

export function CredentialPreviewToJSON(value?: CredentialPreview | null): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    '@type': value.type,
    attributes: (value.attributes as Array<any>).map(CredAttrSpecToJSON),
  };
}
