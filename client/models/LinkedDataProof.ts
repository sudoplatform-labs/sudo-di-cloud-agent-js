/**
 * Sudo Decentralized Identity Cloud Agent SDK
 * Provides REST API wrappers for Typescript Agent Controllers using the Sudo Decentralized Identity Cloud Agent Service
 *
 * The version of the OpenAPI document: v0.11.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 *
 * @export
 * @interface LinkedDataProof
 */
export interface LinkedDataProof {
  /**
   * Associates a challenge with a proof, for use with a proofPurpose such as authentication
   * @type {string}
   * @memberof LinkedDataProof
   */
  challenge?: string;
  /**
   * The string value of an ISO8601 combined date and time string generated by the Signature Algorithm
   * @type {string}
   * @memberof LinkedDataProof
   */
  created?: string;
  /**
   * A string value specifying the restricted domain of the signature.
   * @type {string}
   * @memberof LinkedDataProof
   */
  domain?: string;
  /**
   * Associates a Detached Json Web Signature with a proof
   * @type {string}
   * @memberof LinkedDataProof
   */
  jws?: string;
  /**
   * The nonce
   * @type {string}
   * @memberof LinkedDataProof
   */
  nonce?: string;
  /**
   * Proof purpose
   * @type {string}
   * @memberof LinkedDataProof
   */
  proofPurpose: string;
  /**
   * The proof value of a proof
   * @type {string}
   * @memberof LinkedDataProof
   */
  proofValue?: string;
  /**
   * Identifies the digital signature suite that was used to create the signature
   * @type {string}
   * @memberof LinkedDataProof
   */
  type: string;
  /**
   * Information used for proof verification
   * @type {string}
   * @memberof LinkedDataProof
   */
  verificationMethod: string;
}

export function LinkedDataProofFromJSON(json: any): LinkedDataProof {
  return LinkedDataProofFromJSONTyped(json, false);
}

export function LinkedDataProofFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): LinkedDataProof {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    challenge: !exists(json, 'challenge') ? undefined : json['challenge'],
    created: !exists(json, 'created') ? undefined : json['created'],
    domain: !exists(json, 'domain') ? undefined : json['domain'],
    jws: !exists(json, 'jws') ? undefined : json['jws'],
    nonce: !exists(json, 'nonce') ? undefined : json['nonce'],
    proofPurpose: json['proofPurpose'],
    proofValue: !exists(json, 'proofValue') ? undefined : json['proofValue'],
    type: json['type'],
    verificationMethod: json['verificationMethod'],
  };
}

export function LinkedDataProofToJSON(value?: LinkedDataProof | null): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    challenge: value.challenge,
    created: value.created,
    domain: value.domain,
    jws: value.jws,
    nonce: value.nonce,
    proofPurpose: value.proofPurpose,
    proofValue: value.proofValue,
    type: value.type,
    verificationMethod: value.verificationMethod,
  };
}
