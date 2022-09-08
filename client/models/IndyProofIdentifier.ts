/**
 * Sudo Decentralized Identity Cloud Agent SDK
 * Provides REST API wrappers for Typescript Agent Controllers using the Sudo Decentralized Identity Cloud Agent Service
 *
 * The version of the OpenAPI document: v0.6.5
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
 * @interface IndyProofIdentifier
 */
export interface IndyProofIdentifier {
  /**
   * Credential definition identifier
   * @type {string}
   * @memberof IndyProofIdentifier
   */
  cred_def_id?: string;
  /**
   * Revocation registry identifier
   * @type {string}
   * @memberof IndyProofIdentifier
   */
  rev_reg_id?: string | null;
  /**
   * Schema identifier
   * @type {string}
   * @memberof IndyProofIdentifier
   */
  schema_id?: string;
  /**
   * Timestamp epoch
   * @type {number}
   * @memberof IndyProofIdentifier
   */
  timestamp?: number | null;
}

export function IndyProofIdentifierFromJSON(json: any): IndyProofIdentifier {
  return IndyProofIdentifierFromJSONTyped(json, false);
}

export function IndyProofIdentifierFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): IndyProofIdentifier {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    cred_def_id: !exists(json, 'cred_def_id') ? undefined : json['cred_def_id'],
    rev_reg_id: !exists(json, 'rev_reg_id') ? undefined : json['rev_reg_id'],
    schema_id: !exists(json, 'schema_id') ? undefined : json['schema_id'],
    timestamp: !exists(json, 'timestamp') ? undefined : json['timestamp'],
  };
}

export function IndyProofIdentifierToJSON(
  value?: IndyProofIdentifier | null,
): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    cred_def_id: value.cred_def_id,
    rev_reg_id: value.rev_reg_id,
    schema_id: value.schema_id,
    timestamp: value.timestamp,
  };
}
