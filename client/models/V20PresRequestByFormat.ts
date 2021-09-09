/**
 * Sudo Decentralized Identity Cloud Agent SDK
 * Provides REST API wrappers for Typescript Agent Controllers using the Sudo Decentralized Identity Cloud Agency Service
 *
 * The version of the OpenAPI document: v0.5.1
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import {
  DIFProofRequest,
  DIFProofRequestFromJSON,
  DIFProofRequestFromJSONTyped,
  DIFProofRequestToJSON,
  IndyProofRequest,
  IndyProofRequestFromJSON,
  IndyProofRequestFromJSONTyped,
  IndyProofRequestToJSON,
} from './';

/**
 *
 * @export
 * @interface V20PresRequestByFormat
 */
export interface V20PresRequestByFormat {
  /**
   * Presentation request for DIF
   * @type {DIFProofRequest}
   * @memberof V20PresRequestByFormat
   */
  dif?: DIFProofRequest;
  /**
   * Presentation request for indy
   * @type {IndyProofRequest}
   * @memberof V20PresRequestByFormat
   */
  indy?: IndyProofRequest;
}

export function V20PresRequestByFormatFromJSON(
  json: any,
): V20PresRequestByFormat {
  return V20PresRequestByFormatFromJSONTyped(json, false);
}

export function V20PresRequestByFormatFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): V20PresRequestByFormat {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    dif: !exists(json, 'dif')
      ? undefined
      : DIFProofRequestFromJSON(json['dif']),
    indy: !exists(json, 'indy')
      ? undefined
      : IndyProofRequestFromJSON(json['indy']),
  };
}

export function V20PresRequestByFormatToJSON(
  value?: V20PresRequestByFormat | null,
): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    dif: DIFProofRequestToJSON(value.dif),
    indy: IndyProofRequestToJSON(value.indy),
  };
}
