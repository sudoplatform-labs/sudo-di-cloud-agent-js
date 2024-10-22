/**
 * Sudo Decentralized Identity Cloud Agent SDK
 * Provides REST API wrappers for Typescript Agent Controllers using the Sudo Decentralized Identity Cloud Agent Service
 *
 * The version of the OpenAPI document: v0.10.1
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
 * @interface CreateOID4VPReqRequest
 */
export interface CreateOID4VPReqRequest {
  /**
   * Identifier used to identify presentation definition
   * @type {string}
   * @memberof CreateOID4VPReqRequest
   */
  pres_def_id?: string;
  /**
   * Expected presentation formats from the holder
   * @type {object}
   * @memberof CreateOID4VPReqRequest
   */
  vp_formats: object;
}

export function CreateOID4VPReqRequestFromJSON(
  json: any,
): CreateOID4VPReqRequest {
  return CreateOID4VPReqRequestFromJSONTyped(json, false);
}

export function CreateOID4VPReqRequestFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): CreateOID4VPReqRequest {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    pres_def_id: !exists(json, 'pres_def_id') ? undefined : json['pres_def_id'],
    vp_formats: json['vp_formats'],
  };
}

export function CreateOID4VPReqRequestToJSON(
  value?: CreateOID4VPReqRequest | null,
): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    pres_def_id: value.pres_def_id,
    vp_formats: value.vp_formats,
  };
}
