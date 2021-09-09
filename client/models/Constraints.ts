/**
 * Sudo Decentralized Identity Cloud Agent SDK
 * Provides REST API wrappers for Typescript Agent Controllers using the Sudo Decentralized Identity Cloud Agency Service
 *
 * The version of the OpenAPI document: v0.5.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import {
  DIFField,
  DIFFieldFromJSON,
  DIFFieldFromJSONTyped,
  DIFFieldToJSON,
  DIFHolder,
  DIFHolderFromJSON,
  DIFHolderFromJSONTyped,
  DIFHolderToJSON,
} from './';

/**
 *
 * @export
 * @interface Constraints
 */
export interface Constraints {
  /**
   *
   * @type {Array<DIFField>}
   * @memberof Constraints
   */
  fields?: Array<DIFField>;
  /**
   *
   * @type {Array<DIFHolder>}
   * @memberof Constraints
   */
  is_holder?: Array<DIFHolder>;
  /**
   * LimitDisclosure
   * @type {string}
   * @memberof Constraints
   */
  limit_disclosure?: string;
  /**
   *
   * @type {string}
   * @memberof Constraints
   */
  status_active?: ConstraintsStatusActiveEnum;
  /**
   *
   * @type {string}
   * @memberof Constraints
   */
  status_revoked?: ConstraintsStatusRevokedEnum;
  /**
   *
   * @type {string}
   * @memberof Constraints
   */
  status_suspended?: ConstraintsStatusSuspendedEnum;
  /**
   * SubjectIsIssuer
   * @type {string}
   * @memberof Constraints
   */
  subject_is_issuer?: ConstraintsSubjectIsIssuerEnum;
}

/**
 * @export
 * @enum {string}
 */
export enum ConstraintsStatusActiveEnum {
  Required = 'required',
  Allowed = 'allowed',
  Disallowed = 'disallowed',
}
/**
 * @export
 * @enum {string}
 */
export enum ConstraintsStatusRevokedEnum {
  Required = 'required',
  Allowed = 'allowed',
  Disallowed = 'disallowed',
}
/**
 * @export
 * @enum {string}
 */
export enum ConstraintsStatusSuspendedEnum {
  Required = 'required',
  Allowed = 'allowed',
  Disallowed = 'disallowed',
}
/**
 * @export
 * @enum {string}
 */
export enum ConstraintsSubjectIsIssuerEnum {
  Required = 'required',
  Preferred = 'preferred',
}

export function ConstraintsFromJSON(json: any): Constraints {
  return ConstraintsFromJSONTyped(json, false);
}

export function ConstraintsFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): Constraints {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    fields: !exists(json, 'fields')
      ? undefined
      : (json['fields'] as Array<any>).map(DIFFieldFromJSON),
    is_holder: !exists(json, 'is_holder')
      ? undefined
      : (json['is_holder'] as Array<any>).map(DIFHolderFromJSON),
    limit_disclosure: !exists(json, 'limit_disclosure')
      ? undefined
      : json['limit_disclosure'],
    status_active: !exists(json, 'status_active')
      ? undefined
      : json['status_active'],
    status_revoked: !exists(json, 'status_revoked')
      ? undefined
      : json['status_revoked'],
    status_suspended: !exists(json, 'status_suspended')
      ? undefined
      : json['status_suspended'],
    subject_is_issuer: !exists(json, 'subject_is_issuer')
      ? undefined
      : json['subject_is_issuer'],
  };
}

export function ConstraintsToJSON(value?: Constraints | null): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    fields:
      value.fields === undefined
        ? undefined
        : (value.fields as Array<any>).map(DIFFieldToJSON),
    is_holder:
      value.is_holder === undefined
        ? undefined
        : (value.is_holder as Array<any>).map(DIFHolderToJSON),
    limit_disclosure: value.limit_disclosure,
    status_active: value.status_active,
    status_revoked: value.status_revoked,
    status_suspended: value.status_suspended,
    subject_is_issuer: value.subject_is_issuer,
  };
}