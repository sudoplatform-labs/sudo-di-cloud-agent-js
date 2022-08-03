/**
 * Sudo Decentralized Identity Cloud Agent SDK
 * Provides REST API wrappers for Typescript Agent Controllers using the Sudo Decentralized Identity Cloud Agent Service
 *
 * The version of the OpenAPI document: v0.6.4
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import {
  IndyRequestedCredsRequestedAttr,
  IndyRequestedCredsRequestedAttrFromJSON,
  IndyRequestedCredsRequestedAttrFromJSONTyped,
  IndyRequestedCredsRequestedAttrToJSON,
  IndyRequestedCredsRequestedPred,
  IndyRequestedCredsRequestedPredFromJSON,
  IndyRequestedCredsRequestedPredFromJSONTyped,
  IndyRequestedCredsRequestedPredToJSON,
} from './';

/**
 *
 * @export
 * @interface IndyPresSpec
 */
export interface IndyPresSpec {
  /**
   * Nested object mapping proof request attribute referents to requested-attribute specifiers
   * @type {{ [key: string]: IndyRequestedCredsRequestedAttr; }}
   * @memberof IndyPresSpec
   */
  requested_attributes: { [key: string]: IndyRequestedCredsRequestedAttr };
  /**
   * Nested object mapping proof request predicate referents to requested-predicate specifiers
   * @type {{ [key: string]: IndyRequestedCredsRequestedPred; }}
   * @memberof IndyPresSpec
   */
  requested_predicates: { [key: string]: IndyRequestedCredsRequestedPred };
  /**
   * Self-attested attributes to build into proof
   * @type {{ [key: string]: string; }}
   * @memberof IndyPresSpec
   */
  self_attested_attributes: { [key: string]: string };
  /**
   * Whether to trace event (default false)
   * @type {boolean}
   * @memberof IndyPresSpec
   */
  trace?: boolean;
}

export function IndyPresSpecFromJSON(json: any): IndyPresSpec {
  return IndyPresSpecFromJSONTyped(json, false);
}

export function IndyPresSpecFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): IndyPresSpec {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    requested_attributes: mapValues(
      json['requested_attributes'],
      IndyRequestedCredsRequestedAttrFromJSON,
    ),
    requested_predicates: mapValues(
      json['requested_predicates'],
      IndyRequestedCredsRequestedPredFromJSON,
    ),
    self_attested_attributes: json['self_attested_attributes'],
    trace: !exists(json, 'trace') ? undefined : json['trace'],
  };
}

export function IndyPresSpecToJSON(value?: IndyPresSpec | null): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    requested_attributes: mapValues(
      value.requested_attributes,
      IndyRequestedCredsRequestedAttrToJSON,
    ),
    requested_predicates: mapValues(
      value.requested_predicates,
      IndyRequestedCredsRequestedPredToJSON,
    ),
    self_attested_attributes: value.self_attested_attributes,
    trace: value.trace,
  };
}
