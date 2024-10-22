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
  LinkedDataProof,
  LinkedDataProofFromJSON,
  LinkedDataProofFromJSONTyped,
  LinkedDataProofToJSON,
} from './';

/**
 *
 * @export
 * @interface Credential
 */
export interface Credential {
  /**
   * The JSON-LD context of the credential
   * @type {Array<object>}
   * @memberof Credential
   */
  context: Array<object>;
  /**
   *
   * @type {object}
   * @memberof Credential
   */
  credentialStatus?: object;
  /**
   *
   * @type {object}
   * @memberof Credential
   */
  credentialSubject: object;
  /**
   * The expiration date
   * @type {string}
   * @memberof Credential
   */
  expirationDate?: string;
  /**
   * The ID of the credential
   * @type {string}
   * @memberof Credential
   */
  id?: string;
  /**
   * The issuance date
   * @type {string}
   * @memberof Credential
   */
  issuanceDate: string;
  /**
   * The JSON-LD Verifiable Credential Issuer. Either string of object with id field.
   * @type {object}
   * @memberof Credential
   */
  issuer: object;
  /**
   * The proof of the credential
   * @type {LinkedDataProof}
   * @memberof Credential
   */
  proof?: LinkedDataProof;
  /**
   * The JSON-LD type of the credential
   * @type {Array<string>}
   * @memberof Credential
   */
  type: Array<string>;
}

export function CredentialFromJSON(json: any): Credential {
  return CredentialFromJSONTyped(json, false);
}

export function CredentialFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): Credential {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    context: json['@context'],
    credentialStatus: !exists(json, 'credentialStatus')
      ? undefined
      : json['credentialStatus'],
    credentialSubject: json['credentialSubject'],
    expirationDate: !exists(json, 'expirationDate')
      ? undefined
      : json['expirationDate'],
    id: !exists(json, 'id') ? undefined : json['id'],
    issuanceDate: json['issuanceDate'],
    issuer: json['issuer'],
    proof: !exists(json, 'proof')
      ? undefined
      : LinkedDataProofFromJSON(json['proof']),
    type: json['type'],
  };
}

export function CredentialToJSON(value?: Credential | null): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    '@context': value.context,
    credentialStatus: value.credentialStatus,
    credentialSubject: value.credentialSubject,
    expirationDate: value.expirationDate,
    id: value.id,
    issuanceDate: value.issuanceDate,
    issuer: value.issuer,
    proof: LinkedDataProofToJSON(value.proof),
    type: value.type,
  };
}
