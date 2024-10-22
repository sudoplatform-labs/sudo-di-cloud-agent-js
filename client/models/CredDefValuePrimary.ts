/**
 * Sudo Decentralized Identity Cloud Agent SDK
 * Provides REST API wrappers for Typescript Agent Controllers using the Sudo Decentralized Identity Cloud Agent Service
 *
 * The version of the OpenAPI document: v0.10.1
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import {
  Generated,
  GeneratedFromJSON,
  GeneratedFromJSONTyped,
  GeneratedToJSON,
} from './';

/**
 *
 * @export
 * @interface CredDefValuePrimary
 */
export interface CredDefValuePrimary {
  /**
   *
   * @type {string}
   * @memberof CredDefValuePrimary
   */
  n?: string;
  /**
   *
   * @type {Generated}
   * @memberof CredDefValuePrimary
   */
  r?: Generated;
  /**
   *
   * @type {string}
   * @memberof CredDefValuePrimary
   */
  rctxt?: string;
  /**
   *
   * @type {string}
   * @memberof CredDefValuePrimary
   */
  s?: string;
  /**
   *
   * @type {string}
   * @memberof CredDefValuePrimary
   */
  z?: string;
}

export function CredDefValuePrimaryFromJSON(json: any): CredDefValuePrimary {
  return CredDefValuePrimaryFromJSONTyped(json, false);
}

export function CredDefValuePrimaryFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): CredDefValuePrimary {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    n: !exists(json, 'n') ? undefined : json['n'],
    r: !exists(json, 'r') ? undefined : GeneratedFromJSON(json['r']),
    rctxt: !exists(json, 'rctxt') ? undefined : json['rctxt'],
    s: !exists(json, 's') ? undefined : json['s'],
    z: !exists(json, 'z') ? undefined : json['z'],
  };
}

export function CredDefValuePrimaryToJSON(
  value?: CredDefValuePrimary | null,
): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    n: value.n,
    r: GeneratedToJSON(value.r),
    rctxt: value.rctxt,
    s: value.s,
    z: value.z,
  };
}
