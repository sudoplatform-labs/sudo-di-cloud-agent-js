/**
 * Sudo Decentralized Identity Cloud Agent SDK
 * Provides REST API wrappers for Typescript Agent Controllers using the Sudo Decentralized Identity Cloud Agency Service
 *
 * The version of the OpenAPI document: v0.4.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import {
  DIFPresSpec,
  DIFPresSpecFromJSON,
  DIFPresSpecFromJSONTyped,
  DIFPresSpecToJSON,
  IndyPresSpec,
  IndyPresSpecFromJSON,
  IndyPresSpecFromJSONTyped,
  IndyPresSpecToJSON,
} from './';

/**
 *
 * @export
 * @interface V20PresSpecByFormatRequest
 */
export interface V20PresSpecByFormatRequest {
  /**
   * Optional Presentation specification for DIF, overrides the PresentionExchange record's PresRequest
   * @type {DIFPresSpec}
   * @memberof V20PresSpecByFormatRequest
   */
  dif?: DIFPresSpec;
  /**
   * Presentation specification for indy
   * @type {IndyPresSpec}
   * @memberof V20PresSpecByFormatRequest
   */
  indy?: IndyPresSpec;
  /**
   * Record trace information, based on agent configuration
   * @type {boolean}
   * @memberof V20PresSpecByFormatRequest
   */
  trace?: boolean;
}

export function V20PresSpecByFormatRequestFromJSON(
  json: any,
): V20PresSpecByFormatRequest {
  return V20PresSpecByFormatRequestFromJSONTyped(json, false);
}

export function V20PresSpecByFormatRequestFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): V20PresSpecByFormatRequest {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    dif: !exists(json, 'dif') ? undefined : DIFPresSpecFromJSON(json['dif']),
    indy: !exists(json, 'indy')
      ? undefined
      : IndyPresSpecFromJSON(json['indy']),
    trace: !exists(json, 'trace') ? undefined : json['trace'],
  };
}

export function V20PresSpecByFormatRequestToJSON(
  value?: V20PresSpecByFormatRequest | null,
): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    dif: DIFPresSpecToJSON(value.dif),
    indy: IndyPresSpecToJSON(value.indy),
    trace: value.trace,
  };
}
