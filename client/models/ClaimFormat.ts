/**
 * Sudo Decentralized Identity Cloud Agent SDK
 * Provides REST API wrappers for Typescript Agent Controllers using the Sudo Decentralized Identity Cloud Agent Service
 *
 * The version of the OpenAPI document: v0.9.0
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
 * @interface ClaimFormat
 */
export interface ClaimFormat {
  /**
   *
   * @type {object}
   * @memberof ClaimFormat
   */
  jwt?: object;
  /**
   *
   * @type {object}
   * @memberof ClaimFormat
   */
  jwt_vc?: object;
  /**
   *
   * @type {object}
   * @memberof ClaimFormat
   */
  jwt_vp?: object;
  /**
   *
   * @type {object}
   * @memberof ClaimFormat
   */
  ldp?: object;
  /**
   *
   * @type {object}
   * @memberof ClaimFormat
   */
  ldp_vc?: object;
  /**
   *
   * @type {object}
   * @memberof ClaimFormat
   */
  ldp_vp?: object;
}

export function ClaimFormatFromJSON(json: any): ClaimFormat {
  return ClaimFormatFromJSONTyped(json, false);
}

export function ClaimFormatFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): ClaimFormat {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    jwt: !exists(json, 'jwt') ? undefined : json['jwt'],
    jwt_vc: !exists(json, 'jwt_vc') ? undefined : json['jwt_vc'],
    jwt_vp: !exists(json, 'jwt_vp') ? undefined : json['jwt_vp'],
    ldp: !exists(json, 'ldp') ? undefined : json['ldp'],
    ldp_vc: !exists(json, 'ldp_vc') ? undefined : json['ldp_vc'],
    ldp_vp: !exists(json, 'ldp_vp') ? undefined : json['ldp_vp'],
  };
}

export function ClaimFormatToJSON(value?: ClaimFormat | null): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    jwt: value.jwt,
    jwt_vc: value.jwt_vc,
    jwt_vp: value.jwt_vp,
    ldp: value.ldp,
    ldp_vc: value.ldp_vc,
    ldp_vp: value.ldp_vp,
  };
}
