/**
 * Sudo Decentralized Identity Cloud Agent SDK
 * Provides REST API wrappers for Typescript Agent Controllers using the Sudo Decentralized Identity Cloud Agent Service
 *
 * The version of the OpenAPI document: v0.6.3
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
 * @interface SubmissionRequirements
 */
export interface SubmissionRequirements {
  /**
   * Count Value
   * @type {number}
   * @memberof SubmissionRequirements
   */
  count?: number;
  /**
   * From
   * @type {string}
   * @memberof SubmissionRequirements
   */
  from?: string;
  /**
   *
   * @type {Array<SubmissionRequirements>}
   * @memberof SubmissionRequirements
   */
  from_nested?: Array<SubmissionRequirements>;
  /**
   * Max Value
   * @type {number}
   * @memberof SubmissionRequirements
   */
  max?: number;
  /**
   * Min Value
   * @type {number}
   * @memberof SubmissionRequirements
   */
  min?: number;
  /**
   * Name
   * @type {string}
   * @memberof SubmissionRequirements
   */
  name?: string;
  /**
   * Purpose
   * @type {string}
   * @memberof SubmissionRequirements
   */
  purpose?: string;
  /**
   * Selection
   * @type {string}
   * @memberof SubmissionRequirements
   */
  rule?: SubmissionRequirementsRuleEnum;
}

/**
 * @export
 * @enum {string}
 */
export enum SubmissionRequirementsRuleEnum {
  All = 'all',
  Pick = 'pick',
}

export function SubmissionRequirementsFromJSON(
  json: any,
): SubmissionRequirements {
  return SubmissionRequirementsFromJSONTyped(json, false);
}

export function SubmissionRequirementsFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): SubmissionRequirements {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    count: !exists(json, 'count') ? undefined : json['count'],
    from: !exists(json, 'from') ? undefined : json['from'],
    from_nested: !exists(json, 'from_nested')
      ? undefined
      : (json['from_nested'] as Array<any>).map(SubmissionRequirementsFromJSON),
    max: !exists(json, 'max') ? undefined : json['max'],
    min: !exists(json, 'min') ? undefined : json['min'],
    name: !exists(json, 'name') ? undefined : json['name'],
    purpose: !exists(json, 'purpose') ? undefined : json['purpose'],
    rule: !exists(json, 'rule') ? undefined : json['rule'],
  };
}

export function SubmissionRequirementsToJSON(
  value?: SubmissionRequirements | null,
): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    count: value.count,
    from: value.from,
    from_nested:
      value.from_nested === undefined
        ? undefined
        : (value.from_nested as Array<any>).map(SubmissionRequirementsToJSON),
    max: value.max,
    min: value.min,
    name: value.name,
    purpose: value.purpose,
    rule: value.rule,
  };
}
