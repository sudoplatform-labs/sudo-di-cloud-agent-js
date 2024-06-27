/**
 * Sudo Decentralized Identity Cloud Agent SDK
 * Provides REST API wrappers for Typescript Agent Controllers using the Sudo Decentralized Identity Cloud Agent Service
 *
 * The version of the OpenAPI document: v0.9.1
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
 * @interface LDProofVCOptions
 */
export interface LDProofVCOptions {
  /**
   * A challenge to include in the proof. SHOULD be provided by the requesting party of the credential (=holder)
   * @type {string}
   * @memberof LDProofVCOptions
   */
  challenge?: string;
  /**
   * The date and time of the proof (with a maximum accuracy in seconds). Defaults to current system time
   * @type {string}
   * @memberof LDProofVCOptions
   */
  created?: string;
  /**
   * The credential status mechanism to use for the credential. Omitting the property indicates the issued credential will not include a credential status
   * @type {CredentialStatusOptions}
   * @memberof LDProofVCOptions
   */
  credentialStatus?: CredentialStatusOptions;
  /**
   * The intended domain of validity for the proof
   * @type {string}
   * @memberof LDProofVCOptions
   */
  domain?: string;
  /**
   * The proof purpose used for the proof. Should match proof purposes registered in the Linked Data Proofs Specification
   * @type {string}
   * @memberof LDProofVCOptions
   */
  proofPurpose?: string;
  /**
   * The proof type used for the proof. Should match suites registered in the Linked Data Cryptographic Suite Registry
   * @type {string}
   * @memberof LDProofVCOptions
   */
  proofType?: string;
  /**
   * The verification method to use for the proof. Should match a verification method in the wallet
   * @type {string}
   * @memberof LDProofVCOptions
   */
  verificationMethod?: string;
}

export function LDProofVCOptionsFromJSON(json: any): LDProofVCOptions {
  return LDProofVCOptionsFromJSONTyped(json, false);
}

export function LDProofVCOptionsFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): LDProofVCOptions {
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
    proofType: !exists(json, 'proofType') ? undefined : json['proofType'],
    verificationMethod: !exists(json, 'verificationMethod')
      ? undefined
      : json['verificationMethod'],
  };
}

export function LDProofVCOptionsToJSON(value?: LDProofVCOptions | null): any {
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
    verificationMethod: value.verificationMethod,
  };
}
