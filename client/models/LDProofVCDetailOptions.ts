/**
 * Sudo Decentralized Identity Cloud Agent SDK
 * Provides REST API wrappers for Typescript Agent Controllers using the Sudo Decentralized Identity Cloud Agency Service
 *
 * The version of the OpenAPI document: v0.5.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import {
  CredentialStatusOptions,
  CredentialStatusOptionsFromJSON,
  CredentialStatusOptionsFromJSONTyped,
  CredentialStatusOptionsToJSON,
} from './';

/**
 *
 * @export
 * @interface LDProofVCDetailOptions
 */
export interface LDProofVCDetailOptions {
  /**
   * A challenge to include in the proof. SHOULD be provided by the requesting party of the credential (=holder)
   * @type {string}
   * @memberof LDProofVCDetailOptions
   */
  challenge?: string;
  /**
   * The date and time of the proof (with a maximum accuracy in seconds). Defaults to current system time
   * @type {string}
   * @memberof LDProofVCDetailOptions
   */
  created?: string;
  /**
   * The credential status mechanism to use for the credential. Omitting the property indicates the issued credential will not include a credential status
   * @type {CredentialStatusOptions}
   * @memberof LDProofVCDetailOptions
   */
  credentialStatus?: CredentialStatusOptions;
  /**
   * The intended domain of validity for the proof
   * @type {string}
   * @memberof LDProofVCDetailOptions
   */
  domain?: string;
  /**
   * The proof purpose used for the proof. Should match proof purposes registered in the Linked Data Proofs Specification
   * @type {string}
   * @memberof LDProofVCDetailOptions
   */
  proofPurpose?: string;
  /**
   * The proof type used for the proof. Should match suites registered in the Linked Data Cryptographic Suite Registry
   * @type {string}
   * @memberof LDProofVCDetailOptions
   */
  proofType: string;
}

export function LDProofVCDetailOptionsFromJSON(
  json: any,
): LDProofVCDetailOptions {
  return LDProofVCDetailOptionsFromJSONTyped(json, false);
}

export function LDProofVCDetailOptionsFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): LDProofVCDetailOptions {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    challenge: !exists(json, 'challenge') ? undefined : json['challenge'],
    created: !exists(json, 'created') ? undefined : json['created'],
    credentialStatus: !exists(json, 'credentialStatus')
      ? undefined
      : CredentialStatusOptionsFromJSON(json['credentialStatus']),
    domain: !exists(json, 'domain') ? undefined : json['domain'],
    proofPurpose: !exists(json, 'proofPurpose')
      ? undefined
      : json['proofPurpose'],
    proofType: json['proofType'],
  };
}

export function LDProofVCDetailOptionsToJSON(
  value?: LDProofVCDetailOptions | null,
): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    challenge: value.challenge,
    created: value.created,
    credentialStatus: CredentialStatusOptionsToJSON(value.credentialStatus),
    domain: value.domain,
    proofPurpose: value.proofPurpose,
    proofType: value.proofType,
  };
}
