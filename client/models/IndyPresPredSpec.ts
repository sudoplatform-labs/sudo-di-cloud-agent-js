/**
 * Sudo Decentralized Identity Cloud Agent SDK
 * Provides REST API wrappers for Typescript Agent Controllers using the Sudo Decentralized Identity Cloud Agency Service
 *
 * The version of the OpenAPI document: v0.5.3
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
 * @interface IndyPresPredSpec
 */
export interface IndyPresPredSpec {
  /**
   * Credential definition identifier
   * @type {string}
   * @memberof IndyPresPredSpec
   */
  cred_def_id?: string;
  /**
   * Attribute name
   * @type {string}
   * @memberof IndyPresPredSpec
   */
  name: string;
  /**
   * Predicate type ('<', '<=', '>=', or '>')
   * @type {string}
   * @memberof IndyPresPredSpec
   */
  predicate: IndyPresPredSpecPredicateEnum;
  /**
   * Threshold value
   * @type {number}
   * @memberof IndyPresPredSpec
   */
  threshold: number;
}

/**
 * @export
 * @enum {string}
 */
export enum IndyPresPredSpecPredicateEnum {
  LessThan = '<',
  LessThanOrEqualTo = '<=',
  GreaterThanOrEqualTo = '>=',
  GreaterThan = '>',
}

export function IndyPresPredSpecFromJSON(json: any): IndyPresPredSpec {
  return IndyPresPredSpecFromJSONTyped(json, false);
}

export function IndyPresPredSpecFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): IndyPresPredSpec {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    cred_def_id: !exists(json, 'cred_def_id') ? undefined : json['cred_def_id'],
    name: json['name'],
    predicate: json['predicate'],
    threshold: json['threshold'],
  };
}

export function IndyPresPredSpecToJSON(value?: IndyPresPredSpec | null): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    cred_def_id: value.cred_def_id,
    name: value.name,
    predicate: value.predicate,
    threshold: value.threshold,
  };
}
