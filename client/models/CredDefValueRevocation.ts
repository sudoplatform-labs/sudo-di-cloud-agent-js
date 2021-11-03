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
/**
 *
 * @export
 * @interface CredDefValueRevocation
 */
export interface CredDefValueRevocation {
  /**
   *
   * @type {string}
   * @memberof CredDefValueRevocation
   */
  g?: string;
  /**
   *
   * @type {string}
   * @memberof CredDefValueRevocation
   */
  g_dash?: string;
  /**
   *
   * @type {string}
   * @memberof CredDefValueRevocation
   */
  h?: string;
  /**
   *
   * @type {string}
   * @memberof CredDefValueRevocation
   */
  h0?: string;
  /**
   *
   * @type {string}
   * @memberof CredDefValueRevocation
   */
  h1?: string;
  /**
   *
   * @type {string}
   * @memberof CredDefValueRevocation
   */
  h2?: string;
  /**
   *
   * @type {string}
   * @memberof CredDefValueRevocation
   */
  h_cap?: string;
  /**
   *
   * @type {string}
   * @memberof CredDefValueRevocation
   */
  htilde?: string;
  /**
   *
   * @type {string}
   * @memberof CredDefValueRevocation
   */
  pk?: string;
  /**
   *
   * @type {string}
   * @memberof CredDefValueRevocation
   */
  u?: string;
  /**
   *
   * @type {string}
   * @memberof CredDefValueRevocation
   */
  y?: string;
}

export function CredDefValueRevocationFromJSON(
  json: any,
): CredDefValueRevocation {
  return CredDefValueRevocationFromJSONTyped(json, false);
}

export function CredDefValueRevocationFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): CredDefValueRevocation {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    g: !exists(json, 'g') ? undefined : json['g'],
    g_dash: !exists(json, 'g_dash') ? undefined : json['g_dash'],
    h: !exists(json, 'h') ? undefined : json['h'],
    h0: !exists(json, 'h0') ? undefined : json['h0'],
    h1: !exists(json, 'h1') ? undefined : json['h1'],
    h2: !exists(json, 'h2') ? undefined : json['h2'],
    h_cap: !exists(json, 'h_cap') ? undefined : json['h_cap'],
    htilde: !exists(json, 'htilde') ? undefined : json['htilde'],
    pk: !exists(json, 'pk') ? undefined : json['pk'],
    u: !exists(json, 'u') ? undefined : json['u'],
    y: !exists(json, 'y') ? undefined : json['y'],
  };
}

export function CredDefValueRevocationToJSON(
  value?: CredDefValueRevocation | null,
): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    g: value.g,
    g_dash: value.g_dash,
    h: value.h,
    h0: value.h0,
    h1: value.h1,
    h2: value.h2,
    h_cap: value.h_cap,
    htilde: value.htilde,
    pk: value.pk,
    u: value.u,
    y: value.y,
  };
}
