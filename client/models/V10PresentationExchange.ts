/**
 * Sudo Decentralized Identity Cloud Agent SDK
 * Provides REST API wrappers for Typescript Agent Controllers using the Sudo Decentralized Identity Cloud Agent Service
 *
 * The version of the OpenAPI document: v0.7.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import {
  IndyProof,
  IndyProofFromJSON,
  IndyProofFromJSONTyped,
  IndyProofToJSON,
  IndyProofRequest,
  IndyProofRequestFromJSON,
  IndyProofRequestFromJSONTyped,
  IndyProofRequestToJSON,
  PresentationProposal,
  PresentationProposalFromJSON,
  PresentationProposalFromJSONTyped,
  PresentationProposalToJSON,
  PresentationRequest,
  PresentationRequestFromJSON,
  PresentationRequestFromJSONTyped,
  PresentationRequestToJSON,
} from './';

/**
 *
 * @export
 * @interface V10PresentationExchange
 */
export interface V10PresentationExchange {
  /**
   * Prover choice to auto-present proof as verifier requests
   * @type {boolean}
   * @memberof V10PresentationExchange
   */
  auto_present?: boolean;
  /**
   * Verifier choice to auto-verify proof presentation
   * @type {boolean}
   * @memberof V10PresentationExchange
   */
  auto_verify?: boolean;
  /**
   * Connection identifier
   * @type {string}
   * @memberof V10PresentationExchange
   */
  connection_id?: string;
  /**
   * Time of record creation
   * @type {string}
   * @memberof V10PresentationExchange
   */
  created_at?: string;
  /**
   * Error message
   * @type {string}
   * @memberof V10PresentationExchange
   */
  error_msg?: string;
  /**
   * Present-proof exchange initiator: self or external
   * @type {string}
   * @memberof V10PresentationExchange
   */
  initiator?: V10PresentationExchangeInitiatorEnum;
  /**
   * (Indy) presentation (also known as proof)
   * @type {IndyProof}
   * @memberof V10PresentationExchange
   */
  presentation?: IndyProof;
  /**
   * Presentation exchange identifier
   * @type {string}
   * @memberof V10PresentationExchange
   */
  presentation_exchange_id?: string;
  /**
   * Presentation proposal message
   * @type {PresentationProposal}
   * @memberof V10PresentationExchange
   */
  presentation_proposal_dict?: PresentationProposal;
  /**
   * (Indy) presentation request (also known as proof request)
   * @type {IndyProofRequest}
   * @memberof V10PresentationExchange
   */
  presentation_request?: IndyProofRequest;
  /**
   * Presentation request message
   * @type {PresentationRequest}
   * @memberof V10PresentationExchange
   */
  presentation_request_dict?: PresentationRequest;
  /**
   * Present-proof exchange role: prover or verifier
   * @type {string}
   * @memberof V10PresentationExchange
   */
  role?: V10PresentationExchangeRoleEnum;
  /**
   * Present-proof exchange state
   * @type {string}
   * @memberof V10PresentationExchange
   */
  state?: string;
  /**
   * Thread identifier
   * @type {string}
   * @memberof V10PresentationExchange
   */
  thread_id?: string;
  /**
   * Record trace information, based on agent configuration
   * @type {boolean}
   * @memberof V10PresentationExchange
   */
  trace?: boolean;
  /**
   * Time of last record update
   * @type {string}
   * @memberof V10PresentationExchange
   */
  updated_at?: string;
  /**
   * Whether presentation is verified: true or false
   * @type {string}
   * @memberof V10PresentationExchange
   */
  verified?: V10PresentationExchangeVerifiedEnum;
  /**
   *
   * @type {Array<string>}
   * @memberof V10PresentationExchange
   */
  verified_msgs?: Array<string>;
}

/**
 * @export
 * @enum {string}
 */
export enum V10PresentationExchangeInitiatorEnum {
  Self = 'self',
  External = 'external',
} /**
 * @export
 * @enum {string}
 */
export enum V10PresentationExchangeRoleEnum {
  Prover = 'prover',
  Verifier = 'verifier',
} /**
 * @export
 * @enum {string}
 */
export enum V10PresentationExchangeVerifiedEnum {
  True = 'true',
  False = 'false',
}

export function V10PresentationExchangeFromJSON(
  json: any,
): V10PresentationExchange {
  return V10PresentationExchangeFromJSONTyped(json, false);
}

export function V10PresentationExchangeFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): V10PresentationExchange {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    auto_present: !exists(json, 'auto_present')
      ? undefined
      : json['auto_present'],
    auto_verify: !exists(json, 'auto_verify') ? undefined : json['auto_verify'],
    connection_id: !exists(json, 'connection_id')
      ? undefined
      : json['connection_id'],
    created_at: !exists(json, 'created_at') ? undefined : json['created_at'],
    error_msg: !exists(json, 'error_msg') ? undefined : json['error_msg'],
    initiator: !exists(json, 'initiator') ? undefined : json['initiator'],
    presentation: !exists(json, 'presentation')
      ? undefined
      : IndyProofFromJSON(json['presentation']),
    presentation_exchange_id: !exists(json, 'presentation_exchange_id')
      ? undefined
      : json['presentation_exchange_id'],
    presentation_proposal_dict: !exists(json, 'presentation_proposal_dict')
      ? undefined
      : PresentationProposalFromJSON(json['presentation_proposal_dict']),
    presentation_request: !exists(json, 'presentation_request')
      ? undefined
      : IndyProofRequestFromJSON(json['presentation_request']),
    presentation_request_dict: !exists(json, 'presentation_request_dict')
      ? undefined
      : PresentationRequestFromJSON(json['presentation_request_dict']),
    role: !exists(json, 'role') ? undefined : json['role'],
    state: !exists(json, 'state') ? undefined : json['state'],
    thread_id: !exists(json, 'thread_id') ? undefined : json['thread_id'],
    trace: !exists(json, 'trace') ? undefined : json['trace'],
    updated_at: !exists(json, 'updated_at') ? undefined : json['updated_at'],
    verified: !exists(json, 'verified') ? undefined : json['verified'],
    verified_msgs: !exists(json, 'verified_msgs')
      ? undefined
      : json['verified_msgs'],
  };
}

export function V10PresentationExchangeToJSON(
  value?: V10PresentationExchange | null,
): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    auto_present: value.auto_present,
    auto_verify: value.auto_verify,
    connection_id: value.connection_id,
    created_at: value.created_at,
    error_msg: value.error_msg,
    initiator: value.initiator,
    presentation: IndyProofToJSON(value.presentation),
    presentation_exchange_id: value.presentation_exchange_id,
    presentation_proposal_dict: PresentationProposalToJSON(
      value.presentation_proposal_dict,
    ),
    presentation_request: IndyProofRequestToJSON(value.presentation_request),
    presentation_request_dict: PresentationRequestToJSON(
      value.presentation_request_dict,
    ),
    role: value.role,
    state: value.state,
    thread_id: value.thread_id,
    trace: value.trace,
    updated_at: value.updated_at,
    verified: value.verified,
    verified_msgs: value.verified_msgs,
  };
}
