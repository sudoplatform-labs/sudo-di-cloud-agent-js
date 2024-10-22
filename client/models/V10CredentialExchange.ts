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
import {
  CredentialOffer,
  CredentialOfferFromJSON,
  CredentialOfferFromJSONTyped,
  CredentialOfferToJSON,
  CredentialProposal,
  CredentialProposalFromJSON,
  CredentialProposalFromJSONTyped,
  CredentialProposalToJSON,
  IndyCredAbstract,
  IndyCredAbstractFromJSON,
  IndyCredAbstractFromJSONTyped,
  IndyCredAbstractToJSON,
  IndyCredInfo,
  IndyCredInfoFromJSON,
  IndyCredInfoFromJSONTyped,
  IndyCredInfoToJSON,
  IndyCredRequest,
  IndyCredRequestFromJSON,
  IndyCredRequestFromJSONTyped,
  IndyCredRequestToJSON,
  IndyCredential,
  IndyCredentialFromJSON,
  IndyCredentialFromJSONTyped,
  IndyCredentialToJSON,
} from './';

/**
 *
 * @export
 * @interface V10CredentialExchange
 */
export interface V10CredentialExchange {
  /**
   * Issuer choice to issue to request in this credential exchange
   * @type {boolean}
   * @memberof V10CredentialExchange
   */
  auto_issue?: boolean;
  /**
   * Holder choice to accept offer in this credential exchange
   * @type {boolean}
   * @memberof V10CredentialExchange
   */
  auto_offer?: boolean;
  /**
   * Issuer choice to remove this credential exchange record when complete
   * @type {boolean}
   * @memberof V10CredentialExchange
   */
  auto_remove?: boolean;
  /**
   * Connection identifier
   * @type {string}
   * @memberof V10CredentialExchange
   */
  connection_id?: string;
  /**
   * Time of record creation
   * @type {string}
   * @memberof V10CredentialExchange
   */
  created_at?: string;
  /**
   * Credential as stored
   * @type {IndyCredInfo}
   * @memberof V10CredentialExchange
   */
  credential?: IndyCredInfo;
  /**
   * Credential definition identifier
   * @type {string}
   * @memberof V10CredentialExchange
   */
  credential_definition_id?: string;
  /**
   * Credential exchange identifier
   * @type {string}
   * @memberof V10CredentialExchange
   */
  credential_exchange_id?: string;
  /**
   * Credential identifier
   * @type {string}
   * @memberof V10CredentialExchange
   */
  credential_id?: string;
  /**
   * (Indy) credential offer
   * @type {IndyCredAbstract}
   * @memberof V10CredentialExchange
   */
  credential_offer?: IndyCredAbstract;
  /**
   * Credential offer message
   * @type {CredentialOffer}
   * @memberof V10CredentialExchange
   */
  credential_offer_dict?: CredentialOffer;
  /**
   * Credential proposal message
   * @type {CredentialProposal}
   * @memberof V10CredentialExchange
   */
  credential_proposal_dict?: CredentialProposal;
  /**
   * (Indy) credential request
   * @type {IndyCredRequest}
   * @memberof V10CredentialExchange
   */
  credential_request?: IndyCredRequest;
  /**
   * (Indy) credential request metadata
   * @type {object}
   * @memberof V10CredentialExchange
   */
  credential_request_metadata?: object;
  /**
   * Error message
   * @type {string}
   * @memberof V10CredentialExchange
   */
  error_msg?: string;
  /**
   * Issue-credential exchange initiator: self or external
   * @type {string}
   * @memberof V10CredentialExchange
   */
  initiator?: V10CredentialExchangeInitiatorEnum;
  /**
   * Parent thread identifier
   * @type {string}
   * @memberof V10CredentialExchange
   */
  parent_thread_id?: string;
  /**
   * Credential as received, prior to storage in holder wallet
   * @type {IndyCredential}
   * @memberof V10CredentialExchange
   */
  raw_credential?: IndyCredential;
  /**
   * Revocation registry identifier
   * @type {string}
   * @memberof V10CredentialExchange
   */
  revoc_reg_id?: string;
  /**
   * Credential identifier within revocation registry
   * @type {string}
   * @memberof V10CredentialExchange
   */
  revocation_id?: string;
  /**
   * Issue-credential exchange role: holder or issuer
   * @type {string}
   * @memberof V10CredentialExchange
   */
  role?: V10CredentialExchangeRoleEnum;
  /**
   * Schema identifier
   * @type {string}
   * @memberof V10CredentialExchange
   */
  schema_id?: string;
  /**
   * Issue-credential exchange state
   * @type {string}
   * @memberof V10CredentialExchange
   */
  state?: string;
  /**
   * Thread identifier
   * @type {string}
   * @memberof V10CredentialExchange
   */
  thread_id?: string;
  /**
   * Record trace information, based on agent configuration
   * @type {boolean}
   * @memberof V10CredentialExchange
   */
  trace?: boolean;
  /**
   * Time of last record update
   * @type {string}
   * @memberof V10CredentialExchange
   */
  updated_at?: string;
}

/**
 * @export
 * @enum {string}
 */
export enum V10CredentialExchangeInitiatorEnum {
  Self = 'self',
  External = 'external',
} /**
 * @export
 * @enum {string}
 */
export enum V10CredentialExchangeRoleEnum {
  Holder = 'holder',
  Issuer = 'issuer',
}

export function V10CredentialExchangeFromJSON(
  json: any,
): V10CredentialExchange {
  return V10CredentialExchangeFromJSONTyped(json, false);
}

export function V10CredentialExchangeFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): V10CredentialExchange {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    auto_issue: !exists(json, 'auto_issue') ? undefined : json['auto_issue'],
    auto_offer: !exists(json, 'auto_offer') ? undefined : json['auto_offer'],
    auto_remove: !exists(json, 'auto_remove') ? undefined : json['auto_remove'],
    connection_id: !exists(json, 'connection_id')
      ? undefined
      : json['connection_id'],
    created_at: !exists(json, 'created_at') ? undefined : json['created_at'],
    credential: !exists(json, 'credential')
      ? undefined
      : IndyCredInfoFromJSON(json['credential']),
    credential_definition_id: !exists(json, 'credential_definition_id')
      ? undefined
      : json['credential_definition_id'],
    credential_exchange_id: !exists(json, 'credential_exchange_id')
      ? undefined
      : json['credential_exchange_id'],
    credential_id: !exists(json, 'credential_id')
      ? undefined
      : json['credential_id'],
    credential_offer: !exists(json, 'credential_offer')
      ? undefined
      : IndyCredAbstractFromJSON(json['credential_offer']),
    credential_offer_dict: !exists(json, 'credential_offer_dict')
      ? undefined
      : CredentialOfferFromJSON(json['credential_offer_dict']),
    credential_proposal_dict: !exists(json, 'credential_proposal_dict')
      ? undefined
      : CredentialProposalFromJSON(json['credential_proposal_dict']),
    credential_request: !exists(json, 'credential_request')
      ? undefined
      : IndyCredRequestFromJSON(json['credential_request']),
    credential_request_metadata: !exists(json, 'credential_request_metadata')
      ? undefined
      : json['credential_request_metadata'],
    error_msg: !exists(json, 'error_msg') ? undefined : json['error_msg'],
    initiator: !exists(json, 'initiator') ? undefined : json['initiator'],
    parent_thread_id: !exists(json, 'parent_thread_id')
      ? undefined
      : json['parent_thread_id'],
    raw_credential: !exists(json, 'raw_credential')
      ? undefined
      : IndyCredentialFromJSON(json['raw_credential']),
    revoc_reg_id: !exists(json, 'revoc_reg_id')
      ? undefined
      : json['revoc_reg_id'],
    revocation_id: !exists(json, 'revocation_id')
      ? undefined
      : json['revocation_id'],
    role: !exists(json, 'role') ? undefined : json['role'],
    schema_id: !exists(json, 'schema_id') ? undefined : json['schema_id'],
    state: !exists(json, 'state') ? undefined : json['state'],
    thread_id: !exists(json, 'thread_id') ? undefined : json['thread_id'],
    trace: !exists(json, 'trace') ? undefined : json['trace'],
    updated_at: !exists(json, 'updated_at') ? undefined : json['updated_at'],
  };
}

export function V10CredentialExchangeToJSON(
  value?: V10CredentialExchange | null,
): any {
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
    connection_id: value.connection_id,
    created_at: value.created_at,
    credential: IndyCredInfoToJSON(value.credential),
    credential_definition_id: value.credential_definition_id,
    credential_exchange_id: value.credential_exchange_id,
    credential_id: value.credential_id,
    credential_offer: IndyCredAbstractToJSON(value.credential_offer),
    credential_offer_dict: CredentialOfferToJSON(value.credential_offer_dict),
    credential_proposal_dict: CredentialProposalToJSON(
      value.credential_proposal_dict,
    ),
    credential_request: IndyCredRequestToJSON(value.credential_request),
    credential_request_metadata: value.credential_request_metadata,
    error_msg: value.error_msg,
    initiator: value.initiator,
    parent_thread_id: value.parent_thread_id,
    raw_credential: IndyCredentialToJSON(value.raw_credential),
    revoc_reg_id: value.revoc_reg_id,
    revocation_id: value.revocation_id,
    role: value.role,
    schema_id: value.schema_id,
    state: value.state,
    thread_id: value.thread_id,
    trace: value.trace,
    updated_at: value.updated_at,
  };
}
