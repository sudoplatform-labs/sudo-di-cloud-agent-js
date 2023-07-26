/**
 * Sudo Decentralized Identity Cloud Agent SDK
 * Provides REST API wrappers for Typescript Agent Controllers using the Sudo Decentralized Identity Cloud Agent Service
 *
 * The version of the OpenAPI document: v0.6.8
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import {
  CredentialPreview,
  CredentialPreviewFromJSON,
  CredentialPreviewFromJSONTyped,
  CredentialPreviewToJSON,
} from './';

/**
 *
 * @export
 * @interface V10CredentialCreate
 */
export interface V10CredentialCreate {
  /**
   * Whether to remove the credential exchange record on completion (overrides --preserve-exchange-records configuration setting)
   * @type {boolean}
   * @memberof V10CredentialCreate
   */
  auto_remove?: boolean;
  /**
   * Human-readable comment
   * @type {string}
   * @memberof V10CredentialCreate
   */
  comment?: string | null;
  /**
   * Credential definition identifier
   * @type {string}
   * @memberof V10CredentialCreate
   */
  cred_def_id?: string;
  /**
   *
   * @type {CredentialPreview}
   * @memberof V10CredentialCreate
   */
  credential_proposal: CredentialPreview;
  /**
   * Credential issuer DID
   * @type {string}
   * @memberof V10CredentialCreate
   */
  issuer_did?: string;
  /**
   * Schema identifier
   * @type {string}
   * @memberof V10CredentialCreate
   */
  schema_id?: string;
  /**
   * Schema issuer DID
   * @type {string}
   * @memberof V10CredentialCreate
   */
  schema_issuer_did?: string;
  /**
   * Schema name
   * @type {string}
   * @memberof V10CredentialCreate
   */
  schema_name?: string;
  /**
   * Schema version
   * @type {string}
   * @memberof V10CredentialCreate
   */
  schema_version?: string;
  /**
   * Record trace information, based on agent configuration
   * @type {boolean}
   * @memberof V10CredentialCreate
   */
  trace?: boolean;
}

export function V10CredentialCreateFromJSON(json: any): V10CredentialCreate {
  return V10CredentialCreateFromJSONTyped(json, false);
}

export function V10CredentialCreateFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): V10CredentialCreate {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    auto_remove: !exists(json, 'auto_remove') ? undefined : json['auto_remove'],
    comment: !exists(json, 'comment') ? undefined : json['comment'],
    cred_def_id: !exists(json, 'cred_def_id') ? undefined : json['cred_def_id'],
    credential_proposal: CredentialPreviewFromJSON(json['credential_proposal']),
    issuer_did: !exists(json, 'issuer_did') ? undefined : json['issuer_did'],
    schema_id: !exists(json, 'schema_id') ? undefined : json['schema_id'],
    schema_issuer_did: !exists(json, 'schema_issuer_did')
      ? undefined
      : json['schema_issuer_did'],
    schema_name: !exists(json, 'schema_name') ? undefined : json['schema_name'],
    schema_version: !exists(json, 'schema_version')
      ? undefined
      : json['schema_version'],
    trace: !exists(json, 'trace') ? undefined : json['trace'],
  };
}

export function V10CredentialCreateToJSON(
  value?: V10CredentialCreate | null,
): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    auto_remove: value.auto_remove,
    comment: value.comment,
    cred_def_id: value.cred_def_id,
    credential_proposal: CredentialPreviewToJSON(value.credential_proposal),
    issuer_did: value.issuer_did,
    schema_id: value.schema_id,
    schema_issuer_did: value.schema_issuer_did,
    schema_name: value.schema_name,
    schema_version: value.schema_version,
    trace: value.trace,
  };
}
