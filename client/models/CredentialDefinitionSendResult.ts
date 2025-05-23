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
 * @interface CredentialDefinitionSendResult
 */
export interface CredentialDefinitionSendResult {
  /**
   * Credential definition identifier
   * @type {string}
   * @memberof CredentialDefinitionSendResult
   */
  credential_definition_id: string;
}

export function CredentialDefinitionSendResultFromJSON(
  json: any,
): CredentialDefinitionSendResult {
  return CredentialDefinitionSendResultFromJSONTyped(json, false);
}

export function CredentialDefinitionSendResultFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): CredentialDefinitionSendResult {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    credential_definition_id: json['credential_definition_id'],
  };
}

export function CredentialDefinitionSendResultToJSON(
  value?: CredentialDefinitionSendResult | null,
): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    credential_definition_id: value.credential_definition_id,
  };
}
