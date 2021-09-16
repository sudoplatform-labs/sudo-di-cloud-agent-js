/**
 * Sudo Decentralized Identity Cloud Agent SDK
 * Provides REST API wrappers for Typescript Agent Controllers using the Sudo Decentralized Identity Cloud Agency Service
 *
 * The version of the OpenAPI document: v0.5.4
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import {
  IndyPresAttrSpec,
  IndyPresAttrSpecFromJSON,
  IndyPresAttrSpecFromJSONTyped,
  IndyPresAttrSpecToJSON,
  IndyPresPredSpec,
  IndyPresPredSpecFromJSON,
  IndyPresPredSpecFromJSONTyped,
  IndyPresPredSpecToJSON,
} from './';

/**
 *
 * @export
 * @interface IndyPresPreview
 */
export interface IndyPresPreview {
  /**
   * Message type identifier
   * @type {string}
   * @memberof IndyPresPreview
   */
  type?: string;
  /**
   *
   * @type {Array<IndyPresAttrSpec>}
   * @memberof IndyPresPreview
   */
  attributes: Array<IndyPresAttrSpec>;
  /**
   *
   * @type {Array<IndyPresPredSpec>}
   * @memberof IndyPresPreview
   */
  predicates: Array<IndyPresPredSpec>;
}

export function IndyPresPreviewFromJSON(json: any): IndyPresPreview {
  return IndyPresPreviewFromJSONTyped(json, false);
}

export function IndyPresPreviewFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): IndyPresPreview {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    type: !exists(json, '@type') ? undefined : json['@type'],
    attributes: (json['attributes'] as Array<any>).map(
      IndyPresAttrSpecFromJSON,
    ),
    predicates: (json['predicates'] as Array<any>).map(
      IndyPresPredSpecFromJSON,
    ),
  };
}

export function IndyPresPreviewToJSON(value?: IndyPresPreview | null): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    '@type': value.type,
    attributes: (value.attributes as Array<any>).map(IndyPresAttrSpecToJSON),
    predicates: (value.predicates as Array<any>).map(IndyPresPredSpecToJSON),
  };
}
