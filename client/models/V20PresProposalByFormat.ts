/**
 * Sudo Decentralized Identity Cloud Agent SDK
 * Provides REST API wrappers for Typescript Agent Controllers using the Sudo Decentralized Identity Cloud Agent Service
 *
 * The version of the OpenAPI document: v0.8.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import {
  DIFProofProposal,
  DIFProofProposalFromJSON,
  DIFProofProposalFromJSONTyped,
  DIFProofProposalToJSON,
  IndyProofRequest,
  IndyProofRequestFromJSON,
  IndyProofRequestFromJSONTyped,
  IndyProofRequestToJSON,
} from './';

/**
 *
 * @export
 * @interface V20PresProposalByFormat
 */
export interface V20PresProposalByFormat {
  /**
   * Presentation proposal for DIF
   * @type {DIFProofProposal}
   * @memberof V20PresProposalByFormat
   */
  dif?: DIFProofProposal;
  /**
   * Presentation proposal for indy
   * @type {IndyProofRequest}
   * @memberof V20PresProposalByFormat
   */
  indy?: IndyProofRequest;
}

export function V20PresProposalByFormatFromJSON(
  json: any,
): V20PresProposalByFormat {
  return V20PresProposalByFormatFromJSONTyped(json, false);
}

export function V20PresProposalByFormatFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): V20PresProposalByFormat {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    dif: !exists(json, 'dif')
      ? undefined
      : DIFProofProposalFromJSON(json['dif']),
    indy: !exists(json, 'indy')
      ? undefined
      : IndyProofRequestFromJSON(json['indy']),
  };
}

export function V20PresProposalByFormatToJSON(
  value?: V20PresProposalByFormat | null,
): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    dif: DIFProofProposalToJSON(value.dif),
    indy: IndyProofRequestToJSON(value.indy),
  };
}
