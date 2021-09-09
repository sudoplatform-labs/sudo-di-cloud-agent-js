/**
 * Sudo Decentralized Identity Cloud Agent SDK
 * Provides REST API wrappers for Typescript Agent Controllers using the Sudo Decentralized Identity Cloud Agency Service
 *
 * The version of the OpenAPI document: v0.5.2
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import {
  V20CredExRecordByFormat,
  V20CredExRecordByFormatFromJSON,
  V20CredExRecordByFormatFromJSONTyped,
  V20CredExRecordByFormatToJSON,
  V20CredIssue,
  V20CredIssueFromJSON,
  V20CredIssueFromJSONTyped,
  V20CredIssueToJSON,
  V20CredOffer,
  V20CredOfferFromJSON,
  V20CredOfferFromJSONTyped,
  V20CredOfferToJSON,
  V20CredPreview,
  V20CredPreviewFromJSON,
  V20CredPreviewFromJSONTyped,
  V20CredPreviewToJSON,
  V20CredProposal,
  V20CredProposalFromJSON,
  V20CredProposalFromJSONTyped,
  V20CredProposalToJSON,
  V20CredRequest,
  V20CredRequestFromJSON,
  V20CredRequestFromJSONTyped,
  V20CredRequestToJSON,
} from './';

/**
 *
 * @export
 * @interface V20CredExRecord
 */
export interface V20CredExRecord {
  /**
   * Issuer choice to issue to request in this credential exchange
   * @type {boolean}
   * @memberof V20CredExRecord
   */
  auto_issue?: boolean;
  /**
   * Holder choice to accept offer in this credential exchange
   * @type {boolean}
   * @memberof V20CredExRecord
   */
  auto_offer?: boolean;
  /**
   * Issuer choice to remove this credential exchange record when complete
   * @type {boolean}
   * @memberof V20CredExRecord
   */
  auto_remove?: boolean;
  /**
   * Attachment content by format for proposal, offer, request, and issue
   * @type {V20CredExRecordByFormat}
   * @memberof V20CredExRecord
   */
  by_format?: V20CredExRecordByFormat;
  /**
   * Connection identifier
   * @type {string}
   * @memberof V20CredExRecord
   */
  connection_id?: string;
  /**
   * Time of record creation
   * @type {string}
   * @memberof V20CredExRecord
   */
  created_at?: string;
  /**
   * Credential exchange identifier
   * @type {string}
   * @memberof V20CredExRecord
   */
  cred_ex_id?: string;
  /**
   * Serialized credential issue message
   * @type {V20CredIssue}
   * @memberof V20CredExRecord
   */
  cred_issue?: V20CredIssue;
  /**
   * Credential offer message
   * @type {V20CredOffer}
   * @memberof V20CredExRecord
   */
  cred_offer?: V20CredOffer;
  /**
   * Credential preview from credential proposal
   * @type {V20CredPreview}
   * @memberof V20CredExRecord
   */
  cred_preview?: V20CredPreview;
  /**
   * Credential proposal message
   * @type {V20CredProposal}
   * @memberof V20CredExRecord
   */
  cred_proposal?: V20CredProposal;
  /**
   * Serialized credential request message
   * @type {V20CredRequest}
   * @memberof V20CredExRecord
   */
  cred_request?: V20CredRequest;
  /**
   * Error message
   * @type {string}
   * @memberof V20CredExRecord
   */
  error_msg?: string;
  /**
   * Issue-credential exchange initiator: self or external
   * @type {string}
   * @memberof V20CredExRecord
   */
  initiator?: V20CredExRecordInitiatorEnum;
  /**
   * Parent thread identifier
   * @type {string}
   * @memberof V20CredExRecord
   */
  parent_thread_id?: string;
  /**
   * Issue-credential exchange role: holder or issuer
   * @type {string}
   * @memberof V20CredExRecord
   */
  role?: V20CredExRecordRoleEnum;
  /**
   * Issue-credential exchange state
   * @type {string}
   * @memberof V20CredExRecord
   */
  state?: V20CredExRecordStateEnum;
  /**
   * Thread identifier
   * @type {string}
   * @memberof V20CredExRecord
   */
  thread_id?: string;
  /**
   * Record trace information, based on agent configuration
   * @type {boolean}
   * @memberof V20CredExRecord
   */
  trace?: boolean;
  /**
   * Time of last record update
   * @type {string}
   * @memberof V20CredExRecord
   */
  updated_at?: string;
}

/**
 * @export
 * @enum {string}
 */
export enum V20CredExRecordInitiatorEnum {
  Self = 'self',
  External = 'external',
}
/**
 * @export
 * @enum {string}
 */
export enum V20CredExRecordRoleEnum {
  Issuer = 'issuer',
  Holder = 'holder',
}
/**
 * @export
 * @enum {string}
 */
export enum V20CredExRecordStateEnum {
  ProposalSent = 'proposal-sent',
  ProposalReceived = 'proposal-received',
  OfferSent = 'offer-sent',
  OfferReceived = 'offer-received',
  RequestSent = 'request-sent',
  RequestReceived = 'request-received',
  CredentialIssued = 'credential-issued',
  CredentialReceived = 'credential-received',
  Done = 'done',
}

export function V20CredExRecordFromJSON(json: any): V20CredExRecord {
  return V20CredExRecordFromJSONTyped(json, false);
}

export function V20CredExRecordFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): V20CredExRecord {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    auto_issue: !exists(json, 'auto_issue') ? undefined : json['auto_issue'],
    auto_offer: !exists(json, 'auto_offer') ? undefined : json['auto_offer'],
    auto_remove: !exists(json, 'auto_remove') ? undefined : json['auto_remove'],
    by_format: !exists(json, 'by_format')
      ? undefined
      : V20CredExRecordByFormatFromJSON(json['by_format']),
    connection_id: !exists(json, 'connection_id')
      ? undefined
      : json['connection_id'],
    created_at: !exists(json, 'created_at') ? undefined : json['created_at'],
    cred_ex_id: !exists(json, 'cred_ex_id') ? undefined : json['cred_ex_id'],
    cred_issue: !exists(json, 'cred_issue')
      ? undefined
      : V20CredIssueFromJSON(json['cred_issue']),
    cred_offer: !exists(json, 'cred_offer')
      ? undefined
      : V20CredOfferFromJSON(json['cred_offer']),
    cred_preview: !exists(json, 'cred_preview')
      ? undefined
      : V20CredPreviewFromJSON(json['cred_preview']),
    cred_proposal: !exists(json, 'cred_proposal')
      ? undefined
      : V20CredProposalFromJSON(json['cred_proposal']),
    cred_request: !exists(json, 'cred_request')
      ? undefined
      : V20CredRequestFromJSON(json['cred_request']),
    error_msg: !exists(json, 'error_msg') ? undefined : json['error_msg'],
    initiator: !exists(json, 'initiator') ? undefined : json['initiator'],
    parent_thread_id: !exists(json, 'parent_thread_id')
      ? undefined
      : json['parent_thread_id'],
    role: !exists(json, 'role') ? undefined : json['role'],
    state: !exists(json, 'state') ? undefined : json['state'],
    thread_id: !exists(json, 'thread_id') ? undefined : json['thread_id'],
    trace: !exists(json, 'trace') ? undefined : json['trace'],
    updated_at: !exists(json, 'updated_at') ? undefined : json['updated_at'],
  };
}

export function V20CredExRecordToJSON(value?: V20CredExRecord | null): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    auto_issue: value.auto_issue,
    auto_offer: value.auto_offer,
    auto_remove: value.auto_remove,
    by_format: V20CredExRecordByFormatToJSON(value.by_format),
    connection_id: value.connection_id,
    created_at: value.created_at,
    cred_ex_id: value.cred_ex_id,
    cred_issue: V20CredIssueToJSON(value.cred_issue),
    cred_offer: V20CredOfferToJSON(value.cred_offer),
    cred_preview: V20CredPreviewToJSON(value.cred_preview),
    cred_proposal: V20CredProposalToJSON(value.cred_proposal),
    cred_request: V20CredRequestToJSON(value.cred_request),
    error_msg: value.error_msg,
    initiator: value.initiator,
    parent_thread_id: value.parent_thread_id,
    role: value.role,
    state: value.state,
    thread_id: value.thread_id,
    trace: value.trace,
    updated_at: value.updated_at,
  };
}
