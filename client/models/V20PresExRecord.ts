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
  V20Pres,
  V20PresFromJSON,
  V20PresFromJSONTyped,
  V20PresToJSON,
  V20PresExRecordByFormat,
  V20PresExRecordByFormatFromJSON,
  V20PresExRecordByFormatFromJSONTyped,
  V20PresExRecordByFormatToJSON,
  V20PresProposal,
  V20PresProposalFromJSON,
  V20PresProposalFromJSONTyped,
  V20PresProposalToJSON,
  V20PresRequest,
  V20PresRequestFromJSON,
  V20PresRequestFromJSONTyped,
  V20PresRequestToJSON,
} from './';

/**
 *
 * @export
 * @interface V20PresExRecord
 */
export interface V20PresExRecord {
  /**
   * Prover choice to auto-present proof as verifier requests
   * @type {boolean}
   * @memberof V20PresExRecord
   */
  auto_present?: boolean;
  /**
   * Attachment content by format for proposal, request, and presentation
   * @type {V20PresExRecordByFormat}
   * @memberof V20PresExRecord
   */
  by_format?: V20PresExRecordByFormat;
  /**
   * Connection identifier
   * @type {string}
   * @memberof V20PresExRecord
   */
  connection_id?: string;
  /**
   * Time of record creation
   * @type {string}
   * @memberof V20PresExRecord
   */
  created_at?: string;
  /**
   * Error message
   * @type {string}
   * @memberof V20PresExRecord
   */
  error_msg?: string;
  /**
   * Present-proof exchange initiator: self or external
   * @type {string}
   * @memberof V20PresExRecord
   */
  initiator?: V20PresExRecordInitiatorEnum;
  /**
   * Presentation message
   * @type {V20Pres}
   * @memberof V20PresExRecord
   */
  pres?: V20Pres;
  /**
   * Presentation exchange identifier
   * @type {string}
   * @memberof V20PresExRecord
   */
  pres_ex_id?: string;
  /**
   * Presentation proposal message
   * @type {V20PresProposal}
   * @memberof V20PresExRecord
   */
  pres_proposal?: V20PresProposal;
  /**
   * Presentation request message
   * @type {V20PresRequest}
   * @memberof V20PresExRecord
   */
  pres_request?: V20PresRequest;
  /**
   * Present-proof exchange role: prover or verifier
   * @type {string}
   * @memberof V20PresExRecord
   */
  role?: V20PresExRecordRoleEnum;
  /**
   * Present-proof exchange state
   * @type {string}
   * @memberof V20PresExRecord
   */
  state?: V20PresExRecordStateEnum;
  /**
   * Thread identifier
   * @type {string}
   * @memberof V20PresExRecord
   */
  thread_id?: string;
  /**
   * Record trace information, based on agent configuration
   * @type {boolean}
   * @memberof V20PresExRecord
   */
  trace?: boolean;
  /**
   * Time of last record update
   * @type {string}
   * @memberof V20PresExRecord
   */
  updated_at?: string;
  /**
   * Whether presentation is verified: 'true' or 'false'
   * @type {string}
   * @memberof V20PresExRecord
   */
  verified?: V20PresExRecordVerifiedEnum;
}

/**
 * @export
 * @enum {string}
 */
export enum V20PresExRecordInitiatorEnum {
  Self = 'self',
  External = 'external',
}
/**
 * @export
 * @enum {string}
 */
export enum V20PresExRecordRoleEnum {
  Prover = 'prover',
  Verifier = 'verifier',
}
/**
 * @export
 * @enum {string}
 */
export enum V20PresExRecordStateEnum {
  ProposalSent = 'proposal-sent',
  ProposalReceived = 'proposal-received',
  RequestSent = 'request-sent',
  RequestReceived = 'request-received',
  PresentationSent = 'presentation-sent',
  PresentationReceived = 'presentation-received',
  Done = 'done',
  Abandoned = 'abandoned',
}
/**
 * @export
 * @enum {string}
 */
export enum V20PresExRecordVerifiedEnum {
  True = 'true',
  False = 'false',
}

export function V20PresExRecordFromJSON(json: any): V20PresExRecord {
  return V20PresExRecordFromJSONTyped(json, false);
}

export function V20PresExRecordFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): V20PresExRecord {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    auto_present: !exists(json, 'auto_present')
      ? undefined
      : json['auto_present'],
    by_format: !exists(json, 'by_format')
      ? undefined
      : V20PresExRecordByFormatFromJSON(json['by_format']),
    connection_id: !exists(json, 'connection_id')
      ? undefined
      : json['connection_id'],
    created_at: !exists(json, 'created_at') ? undefined : json['created_at'],
    error_msg: !exists(json, 'error_msg') ? undefined : json['error_msg'],
    initiator: !exists(json, 'initiator') ? undefined : json['initiator'],
    pres: !exists(json, 'pres') ? undefined : V20PresFromJSON(json['pres']),
    pres_ex_id: !exists(json, 'pres_ex_id') ? undefined : json['pres_ex_id'],
    pres_proposal: !exists(json, 'pres_proposal')
      ? undefined
      : V20PresProposalFromJSON(json['pres_proposal']),
    pres_request: !exists(json, 'pres_request')
      ? undefined
      : V20PresRequestFromJSON(json['pres_request']),
    role: !exists(json, 'role') ? undefined : json['role'],
    state: !exists(json, 'state') ? undefined : json['state'],
    thread_id: !exists(json, 'thread_id') ? undefined : json['thread_id'],
    trace: !exists(json, 'trace') ? undefined : json['trace'],
    updated_at: !exists(json, 'updated_at') ? undefined : json['updated_at'],
    verified: !exists(json, 'verified') ? undefined : json['verified'],
  };
}

export function V20PresExRecordToJSON(value?: V20PresExRecord | null): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    auto_present: value.auto_present,
    by_format: V20PresExRecordByFormatToJSON(value.by_format),
    connection_id: value.connection_id,
    created_at: value.created_at,
    error_msg: value.error_msg,
    initiator: value.initiator,
    pres: V20PresToJSON(value.pres),
    pres_ex_id: value.pres_ex_id,
    pres_proposal: V20PresProposalToJSON(value.pres_proposal),
    pres_request: V20PresRequestToJSON(value.pres_request),
    role: value.role,
    state: value.state,
    thread_id: value.thread_id,
    trace: value.trace,
    updated_at: value.updated_at,
    verified: value.verified,
  };
}
