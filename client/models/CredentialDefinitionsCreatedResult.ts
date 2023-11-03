/**
 * Sudo Decentralized Identity Cloud Agent SDK
 * Provides REST API wrappers for Typescript Agent Controllers using the Sudo Decentralized Identity Cloud Agent Service
 *
 * The version of the OpenAPI document: v0.7.0
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
 * @interface CredentialDefinitionsCreatedResult
 */
export interface CredentialDefinitionsCreatedResult {
  /**
   *
   * @type {Array<string>}
   * @memberof CredentialDefinitionsCreatedResult
   */
  credential_definition_ids?: Array<string>;
}

export function CredentialDefinitionsCreatedResultFromJSON(
  json: any,
): CredentialDefinitionsCreatedResult {
  return CredentialDefinitionsCreatedResultFromJSONTyped(json, false);
}

export function CredentialDefinitionsCreatedResultFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): CredentialDefinitionsCreatedResult {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    credential_definition_ids: !exists(json, 'credential_definition_ids')
      ? undefined
      : json['credential_definition_ids'],
  };
}

export function CredentialDefinitionsCreatedResultToJSON(
  value?: CredentialDefinitionsCreatedResult | null,
): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    credential_definition_ids: value.credential_definition_ids,
  };
}
