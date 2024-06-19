/**
 * Sudo Decentralized Identity Cloud Agent SDK
 * Provides REST API wrappers for Typescript Agent Controllers using the Sudo Decentralized Identity Cloud Agent Service
 *
 * The version of the OpenAPI document: v0.9.0
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
 * @interface V10CredentialProposalRequestOpt
 */
export interface V10CredentialProposalRequestOpt {
  /**
   * Whether to remove the credential exchange record on completion (overrides --preserve-exchange-records configuration setting)
   * @type {boolean}
   * @memberof V10CredentialProposalRequestOpt
   */
  auto_remove?: boolean;
  /**
   * Human-readable comment
   * @type {string}
   * @memberof V10CredentialProposalRequestOpt
   */
  comment?: string | null;
  /**
   * Connection identifier
   * @type {string}
   * @memberof V10CredentialProposalRequestOpt
   */
  connection_id: string;
  /**
   * Credential definition identifier
   * @type {string}
   * @memberof V10CredentialProposalRequestOpt
   */
  cred_def_id?: string;
  /**
   *
   * @type {CredentialPreview}
   * @memberof V10CredentialProposalRequestOpt
   */
  credential_proposal?: CredentialPreview;
  /**
   * Credential issuer DID
   * @type {string}
   * @memberof V10CredentialProposalRequestOpt
   */
  issuer_did?: string;
  /**
   * Schema identifier
   * @type {string}
   * @memberof V10CredentialProposalRequestOpt
   */
  schema_id?: string;
  /**
   * Schema issuer DID
   * @type {string}
   * @memberof V10CredentialProposalRequestOpt
   */
  schema_issuer_did?: string;
  /**
   * Schema name
   * @type {string}
   * @memberof V10CredentialProposalRequestOpt
   */
  schema_name?: string;
  /**
   * Schema version
   * @type {string}
   * @memberof V10CredentialProposalRequestOpt
   */
  schema_version?: string;
  /**
   * Record trace information, based on agent configuration
   * @type {boolean}
   * @memberof V10CredentialProposalRequestOpt
   */
  trace?: boolean;
}

export function V10CredentialProposalRequestOptFromJSON(
  json: any,
): V10CredentialProposalRequestOpt {
  return V10CredentialProposalRequestOptFromJSONTyped(json, false);
}

export function V10CredentialProposalRequestOptFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): V10CredentialProposalRequestOpt {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    auto_remove: !exists(json, 'auto_remove') ? undefined : json['auto_remove'],
    comment: !exists(json, 'comment') ? undefined : json['comment'],
    connection_id: json['connection_id'],
    cred_def_id: !exists(json, 'cred_def_id') ? undefined : json['cred_def_id'],
    credential_proposal: !exists(json, 'credential_proposal')
      ? undefined
      : CredentialPreviewFromJSON(json['credential_proposal']),
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

export function V10CredentialProposalRequestOptToJSON(
  value?: V10CredentialProposalRequestOpt | null,
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
    connection_id: value.connection_id,
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
