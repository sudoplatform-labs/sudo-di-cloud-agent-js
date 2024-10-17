/**
 * Sudo Decentralized Identity Cloud Agent SDK
 * Provides REST API wrappers for Typescript Agent Controllers using the Sudo Decentralized Identity Cloud Agent Service
 *
 * The version of the OpenAPI document: v0.10.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import {
  IndyProofReqAttrSpecNonRevoked,
  IndyProofReqAttrSpecNonRevokedFromJSON,
  IndyProofReqAttrSpecNonRevokedFromJSONTyped,
  IndyProofReqAttrSpecNonRevokedToJSON,
} from './';

/**
 *
 * @export
 * @interface IndyProofReqAttrSpec
 */
export interface IndyProofReqAttrSpec {
  /**
   * Attribute name
   * @type {string}
   * @memberof IndyProofReqAttrSpec
   */
  name?: string;
  /**
   * Attribute name group
   * @type {Array<string>}
   * @memberof IndyProofReqAttrSpec
   */
  names?: Array<string>;
  /**
   *
   * @type {IndyProofReqAttrSpecNonRevoked}
   * @memberof IndyProofReqAttrSpec
   */
  non_revoked?: IndyProofReqAttrSpecNonRevoked;
  /**
   * If present, credential must satisfy one of given restrictions: specify schema_id, schema_issuer_did, schema_name, schema_version, issuer_did, cred_def_id, and/or attr::<attribute-name>::value where <attribute-name> represents a credential attribute name
   * @type {Array<{ [key: string]: string; }>}
   * @memberof IndyProofReqAttrSpec
   */
  restrictions?: Array<{ [key: string]: string }>;
}

export function IndyProofReqAttrSpecFromJSON(json: any): IndyProofReqAttrSpec {
  return IndyProofReqAttrSpecFromJSONTyped(json, false);
}

export function IndyProofReqAttrSpecFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): IndyProofReqAttrSpec {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    name: !exists(json, 'name') ? undefined : json['name'],
    names: !exists(json, 'names') ? undefined : json['names'],
    non_revoked: !exists(json, 'non_revoked')
      ? undefined
      : IndyProofReqAttrSpecNonRevokedFromJSON(json['non_revoked']),
    restrictions: !exists(json, 'restrictions')
      ? undefined
      : json['restrictions'],
  };
}

export function IndyProofReqAttrSpecToJSON(
  value?: IndyProofReqAttrSpec | null,
): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    name: value.name,
    names: value.names,
    non_revoked: IndyProofReqAttrSpecNonRevokedToJSON(value.non_revoked),
    restrictions: value.restrictions,
  };
}
