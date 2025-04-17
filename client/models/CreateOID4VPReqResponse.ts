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
  OID4VPPresentation,
  OID4VPPresentationFromJSON,
  OID4VPPresentationFromJSONTyped,
  OID4VPPresentationToJSON,
  OID4VPRequest,
  OID4VPRequestFromJSON,
  OID4VPRequestFromJSONTyped,
  OID4VPRequestToJSON,
} from './';

/**
 *
 * @export
 * @interface CreateOID4VPReqResponse
 */
export interface CreateOID4VPReqResponse {
  /**
   *
   * @type {OID4VPPresentation}
   * @memberof CreateOID4VPReqResponse
   */
  presentation: OID4VPPresentation;
  /**
   *
   * @type {OID4VPRequest}
   * @memberof CreateOID4VPReqResponse
   */
  request: OID4VPRequest;
  /**
   * URI for the holder to resolve the request
   * @type {string}
   * @memberof CreateOID4VPReqResponse
   */
  request_uri: string;
}

export function CreateOID4VPReqResponseFromJSON(
  json: any,
): CreateOID4VPReqResponse {
  return CreateOID4VPReqResponseFromJSONTyped(json, false);
}

export function CreateOID4VPReqResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): CreateOID4VPReqResponse {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    presentation: OID4VPPresentationFromJSON(json['presentation']),
    request: OID4VPRequestFromJSON(json['request']),
    request_uri: json['request_uri'],
  };
}

export function CreateOID4VPReqResponseToJSON(
  value?: CreateOID4VPReqResponse | null,
): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    presentation: OID4VPPresentationToJSON(value.presentation),
    request: OID4VPRequestToJSON(value.request),
    request_uri: value.request_uri,
  };
}
