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
  CredentialPreview,
  CredentialPreviewFromJSON,
  CredentialPreviewFromJSONTyped,
  CredentialPreviewToJSON,
} from './';

/**
 *
 * @export
 * @interface CredentialProposal
 */
export interface CredentialProposal {
  /**
   * Message identifier
   * @type {string}
   * @memberof CredentialProposal
   */
  id?: string;
  /**
   * Message type
   * @type {string}
   * @memberof CredentialProposal
   */
  readonly type?: string;
  /**
   * Human-readable comment
   * @type {string}
   * @memberof CredentialProposal
   */
  comment?: string | null;
  /**
   *
   * @type {string}
   * @memberof CredentialProposal
   */
  cred_def_id?: string;
  /**
   *
   * @type {CredentialPreview}
   * @memberof CredentialProposal
   */
  credential_proposal?: CredentialPreview;
  /**
   *
   * @type {string}
   * @memberof CredentialProposal
   */
  issuer_did?: string;
  /**
   *
   * @type {string}
   * @memberof CredentialProposal
   */
  schema_id?: string;
  /**
   *
   * @type {string}
   * @memberof CredentialProposal
   */
  schema_issuer_did?: string;
  /**
   *
   * @type {string}
   * @memberof CredentialProposal
   */
  schema_name?: string;
  /**
   *
   * @type {string}
   * @memberof CredentialProposal
   */
  schema_version?: string;
}

export function CredentialProposalFromJSON(json: any): CredentialProposal {
  return CredentialProposalFromJSONTyped(json, false);
}

export function CredentialProposalFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): CredentialProposal {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    id: !exists(json, '@id') ? undefined : json['@id'],
    type: !exists(json, '@type') ? undefined : json['@type'],
    comment: !exists(json, 'comment') ? undefined : json['comment'],
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
  };
}

export function CredentialProposalToJSON(
  value?: CredentialProposal | null,
): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    '@id': value.id,
    comment: value.comment,
    cred_def_id: value.cred_def_id,
    credential_proposal: CredentialPreviewToJSON(value.credential_proposal),
    issuer_did: value.issuer_did,
    schema_id: value.schema_id,
    schema_issuer_did: value.schema_issuer_did,
    schema_name: value.schema_name,
    schema_version: value.schema_version,
  };
}
