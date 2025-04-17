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
/**
 *
 * @export
 * @interface ClaimFormat
 */
export interface ClaimFormat {
  /**
   *
   * @type {{ [key: string]: object; }}
   * @memberof ClaimFormat
   */
  di_vc?: { [key: string]: object };
  /**
   *
   * @type {{ [key: string]: object; }}
   * @memberof ClaimFormat
   */
  jwt?: { [key: string]: object };
  /**
   *
   * @type {{ [key: string]: object; }}
   * @memberof ClaimFormat
   */
  jwt_vc?: { [key: string]: object };
  /**
   *
   * @type {{ [key: string]: object; }}
   * @memberof ClaimFormat
   */
  jwt_vp?: { [key: string]: object };
  /**
   *
   * @type {{ [key: string]: object; }}
   * @memberof ClaimFormat
   */
  ldp?: { [key: string]: object };
  /**
   *
   * @type {{ [key: string]: object; }}
   * @memberof ClaimFormat
   */
  ldp_vc?: { [key: string]: object };
  /**
   *
   * @type {{ [key: string]: object; }}
   * @memberof ClaimFormat
   */
  ldp_vp?: { [key: string]: object };
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
    di_vc: !exists(json, 'di_vc') ? undefined : json['di_vc'],
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
    di_vc: value.di_vc,
    jwt: value.jwt,
    jwt_vc: value.jwt_vc,
    jwt_vp: value.jwt_vp,
    ldp: value.ldp,
    ldp_vc: value.ldp_vc,
    ldp_vp: value.ldp_vp,
  };
}
