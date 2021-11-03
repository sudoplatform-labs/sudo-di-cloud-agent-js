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
 * @interface AdminStatus
 */
export interface AdminStatus {
  /**
   * Conductor statistics
   * @type {object}
   * @memberof AdminStatus
   */
  conductor?: object;
  /**
   * Default label
   * @type {string}
   * @memberof AdminStatus
   */
  label?: string | null;
  /**
   * Timing results
   * @type {object}
   * @memberof AdminStatus
   */
  timing?: object;
  /**
   * Version code
   * @type {string}
   * @memberof AdminStatus
   */
  version?: string;
}

export function AdminStatusFromJSON(json: any): AdminStatus {
  return AdminStatusFromJSONTyped(json, false);
}

export function AdminStatusFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): AdminStatus {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    conductor: !exists(json, 'conductor') ? undefined : json['conductor'],
    label: !exists(json, 'label') ? undefined : json['label'],
    timing: !exists(json, 'timing') ? undefined : json['timing'],
    version: !exists(json, 'version') ? undefined : json['version'],
  };
}

export function AdminStatusToJSON(value?: AdminStatus | null): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    conductor: value.conductor,
    label: value.label,
    timing: value.timing,
    version: value.version,
  };
}
