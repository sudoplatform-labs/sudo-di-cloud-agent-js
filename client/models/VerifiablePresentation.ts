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
import {
  LinkedDataProof,
  LinkedDataProofFromJSON,
  LinkedDataProofFromJSONTyped,
  LinkedDataProofToJSON,
} from './';

/**
 *
 * @export
 * @interface VerifiablePresentation
 */
export interface VerifiablePresentation {
  /**
   * The JSON-LD context of the presentation
   * @type {Array<object>}
   * @memberof VerifiablePresentation
   */
  context: Array<object>;
  /**
   * The JSON-LD Verifiable Credential Holder. Either string of object with id field.
   * @type {object}
   * @memberof VerifiablePresentation
   */
  holder?: object;
  /**
   * The ID of the presentation
   * @type {string}
   * @memberof VerifiablePresentation
   */
  id?: string;
  /**
   * The proof of the presentation
   * @type {LinkedDataProof}
   * @memberof VerifiablePresentation
   */
  proof: LinkedDataProof;
  /**
   * The JSON-LD type of the presentation
   * @type {Array<string>}
   * @memberof VerifiablePresentation
   */
  type: Array<string>;
  /**
   *
   * @type {Array<{ [key: string]: object; }>}
   * @memberof VerifiablePresentation
   */
  verifiableCredential?: Array<{ [key: string]: object }>;
}

export function VerifiablePresentationFromJSON(
  json: any,
): VerifiablePresentation {
  return VerifiablePresentationFromJSONTyped(json, false);
}

export function VerifiablePresentationFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): VerifiablePresentation {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    context: json['@context'],
    holder: !exists(json, 'holder') ? undefined : json['holder'],
    id: !exists(json, 'id') ? undefined : json['id'],
    proof: LinkedDataProofFromJSON(json['proof']),
    type: json['type'],
    verifiableCredential: !exists(json, 'verifiableCredential')
      ? undefined
      : json['verifiableCredential'],
  };
}

export function VerifiablePresentationToJSON(
  value?: VerifiablePresentation | null,
): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    '@context': value.context,
    holder: value.holder,
    id: value.id,
    proof: LinkedDataProofToJSON(value.proof),
    type: value.type,
    verifiableCredential: value.verifiableCredential,
  };
}
