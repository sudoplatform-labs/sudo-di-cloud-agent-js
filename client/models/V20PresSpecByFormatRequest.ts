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
import {
  AnonCredsPresSpec,
  AnonCredsPresSpecFromJSON,
  AnonCredsPresSpecFromJSONTyped,
  AnonCredsPresSpecToJSON,
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
   * Presentation specification for anoncreds
   * @type {AnonCredsPresSpec}
   * @memberof V20PresSpecByFormatRequest
   */
  anoncreds?: AnonCredsPresSpec;
  /**
   * Whether to remove the presentation exchange record on completion (overrides --preserve-exchange-records configuration setting)
   * @type {boolean}
   * @memberof V20PresSpecByFormatRequest
   */
  auto_remove?: boolean;
  /**
   * Optional Presentation specification for DIF, overrides the PresentationExchange record's PresRequest
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
    anoncreds: !exists(json, 'anoncreds')
      ? undefined
      : AnonCredsPresSpecFromJSON(json['anoncreds']),
    auto_remove: !exists(json, 'auto_remove') ? undefined : json['auto_remove'],
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
    anoncreds: AnonCredsPresSpecToJSON(value.anoncreds),
    auto_remove: value.auto_remove,
    dif: DIFPresSpecToJSON(value.dif),
    indy: IndyPresSpecToJSON(value.indy),
    trace: value.trace,
  };
}
