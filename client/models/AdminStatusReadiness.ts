/**
 * Sudo Decentralized Identity Cloud Agent SDK
 * Provides REST API wrappers for Typescript Agent Controllers using the Sudo Decentralized Identity Cloud Agent Service
 *
 * The version of the OpenAPI document: v0.6.8
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
 * @interface AdminStatusReadiness
 */
export interface AdminStatusReadiness {
  /**
   * Readiness status
   * @type {boolean}
   * @memberof AdminStatusReadiness
   */
  ready?: boolean;
}

export function AdminStatusReadinessFromJSON(json: any): AdminStatusReadiness {
  return AdminStatusReadinessFromJSONTyped(json, false);
}

export function AdminStatusReadinessFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): AdminStatusReadiness {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    ready: !exists(json, 'ready') ? undefined : json['ready'],
  };
}

export function AdminStatusReadinessToJSON(
  value?: AdminStatusReadiness | null,
): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    ready: value.ready,
  };
}
