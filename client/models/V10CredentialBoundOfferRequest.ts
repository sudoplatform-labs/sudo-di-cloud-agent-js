/**
 * Sudo Decentralized Identity Cloud Agent SDK
 * Provides REST API wrappers for Typescript Agent Controllers using the Sudo Decentralized Identity Cloud Agent Service
 *
 * The version of the OpenAPI document: v0.6.4
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import {
  CredentialProposal,
  CredentialProposalFromJSON,
  CredentialProposalFromJSONTyped,
  CredentialProposalToJSON,
} from './';

/**
 *
 * @export
 * @interface V10CredentialBoundOfferRequest
 */
export interface V10CredentialBoundOfferRequest {
  /**
   * Optional counter-proposal
   * @type {CredentialProposal}
   * @memberof V10CredentialBoundOfferRequest
   */
  counter_proposal?: CredentialProposal;
}

export function V10CredentialBoundOfferRequestFromJSON(
  json: any,
): V10CredentialBoundOfferRequest {
  return V10CredentialBoundOfferRequestFromJSONTyped(json, false);
}

export function V10CredentialBoundOfferRequestFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): V10CredentialBoundOfferRequest {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    counter_proposal: !exists(json, 'counter_proposal')
      ? undefined
      : CredentialProposalFromJSON(json['counter_proposal']),
  };
}

export function V10CredentialBoundOfferRequestToJSON(
  value?: V10CredentialBoundOfferRequest | null,
): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    counter_proposal: CredentialProposalToJSON(value.counter_proposal),
  };
}
