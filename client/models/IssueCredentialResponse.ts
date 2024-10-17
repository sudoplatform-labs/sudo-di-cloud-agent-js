/**
 * Sudo Decentralized Identity Cloud Agent SDK
 * Provides REST API wrappers for Typescript Agent Controllers using the Sudo Decentralized Identity Cloud Agent Service
 *
 * The version of the OpenAPI document: v0.10.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import {
  VerifiableCredential,
  VerifiableCredentialFromJSON,
  VerifiableCredentialFromJSONTyped,
  VerifiableCredentialToJSON,
} from './';

/**
 *
 * @export
 * @interface IssueCredentialResponse
 */
export interface IssueCredentialResponse {
  /**
   *
   * @type {VerifiableCredential}
   * @memberof IssueCredentialResponse
   */
  verifiableCredential?: VerifiableCredential;
}

export function IssueCredentialResponseFromJSON(
  json: any,
): IssueCredentialResponse {
  return IssueCredentialResponseFromJSONTyped(json, false);
}

export function IssueCredentialResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): IssueCredentialResponse {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    verifiableCredential: !exists(json, 'verifiableCredential')
      ? undefined
      : VerifiableCredentialFromJSON(json['verifiableCredential']),
  };
}

export function IssueCredentialResponseToJSON(
  value?: IssueCredentialResponse | null,
): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    verifiableCredential: VerifiableCredentialToJSON(
      value.verifiableCredential,
    ),
  };
}
