/**
 * Sudo Decentralized Identity Cloud Agent SDK
 * Provides REST API wrappers for Typescript Agent Controllers using the Sudo Decentralized Identity Cloud Agency Service
 *
 * The version of the OpenAPI document: v0.6.2
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
 * @interface AdminAPIMessageTracing
 */
export interface AdminAPIMessageTracing {
  /**
   * Record trace information, based on agent configuration
   * @type {boolean}
   * @memberof AdminAPIMessageTracing
   */
  trace?: boolean;
}

export function AdminAPIMessageTracingFromJSON(
  json: any,
): AdminAPIMessageTracing {
  return AdminAPIMessageTracingFromJSONTyped(json, false);
}

export function AdminAPIMessageTracingFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): AdminAPIMessageTracing {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    trace: !exists(json, 'trace') ? undefined : json['trace'],
  };
}

export function AdminAPIMessageTracingToJSON(
  value?: AdminAPIMessageTracing | null,
): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    trace: value.trace,
  };
}
