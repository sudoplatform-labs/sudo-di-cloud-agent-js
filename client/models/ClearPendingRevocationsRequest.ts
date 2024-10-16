/**
 * Sudo Decentralized Identity Cloud Agent SDK
 * Provides REST API wrappers for Typescript Agent Controllers using the Sudo Decentralized Identity Cloud Agent Service
 *
 * The version of the OpenAPI document: v100.0.100
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
 * @interface ClearPendingRevocationsRequest
 */
export interface ClearPendingRevocationsRequest {
  /**
   * Credential revocation ids by revocation registry id: omit for all, specify null or empty list for all pending per revocation registry
   * @type {{ [key: string]: Array<string>; }}
   * @memberof ClearPendingRevocationsRequest
   */
  purge?: { [key: string]: Array<string> };
}

export function ClearPendingRevocationsRequestFromJSON(
  json: any,
): ClearPendingRevocationsRequest {
  return ClearPendingRevocationsRequestFromJSONTyped(json, false);
}

export function ClearPendingRevocationsRequestFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): ClearPendingRevocationsRequest {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    purge: !exists(json, 'purge') ? undefined : json['purge'],
  };
}

export function ClearPendingRevocationsRequestToJSON(
  value?: ClearPendingRevocationsRequest | null,
): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    purge: value.purge,
  };
}
