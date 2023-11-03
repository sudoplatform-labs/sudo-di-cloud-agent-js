/**
 * Sudo Decentralized Identity Cloud Agent SDK
 * Provides REST API wrappers for Typescript Agent Controllers using the Sudo Decentralized Identity Cloud Agent Service
 *
 * The version of the OpenAPI document: v0.7.0
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
 * @interface IndyNonRevocationInterval
 */
export interface IndyNonRevocationInterval {
  /**
   * Earliest time of interest in non-revocation interval
   * @type {number}
   * @memberof IndyNonRevocationInterval
   */
  from?: number;
  /**
   * Latest time of interest in non-revocation interval
   * @type {number}
   * @memberof IndyNonRevocationInterval
   */
  to?: number;
}

export function IndyNonRevocationIntervalFromJSON(
  json: any,
): IndyNonRevocationInterval {
  return IndyNonRevocationIntervalFromJSONTyped(json, false);
}

export function IndyNonRevocationIntervalFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): IndyNonRevocationInterval {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    from: !exists(json, 'from') ? undefined : json['from'],
    to: !exists(json, 'to') ? undefined : json['to'],
  };
}

export function IndyNonRevocationIntervalToJSON(
  value?: IndyNonRevocationInterval | null,
): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    from: value.from,
    to: value.to,
  };
}
