/**
 * Sudo Decentralized Identity Cloud Agent SDK
 * Provides REST API wrappers for Typescript Agent Controllers using the Sudo Decentralized Identity Cloud Agent Service
 *
 * The version of the OpenAPI document: v0.6.3
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import {
  CredentialDefinition,
  CredentialDefinitionFromJSON,
  CredentialDefinitionFromJSONTyped,
  CredentialDefinitionToJSON,
} from './';

/**
 *
 * @export
 * @interface CredentialDefinitionGetResult
 */
export interface CredentialDefinitionGetResult {
  /**
   *
   * @type {CredentialDefinition}
   * @memberof CredentialDefinitionGetResult
   */
  credential_definition?: CredentialDefinition;
}

export function CredentialDefinitionGetResultFromJSON(
  json: any,
): CredentialDefinitionGetResult {
  return CredentialDefinitionGetResultFromJSONTyped(json, false);
}

export function CredentialDefinitionGetResultFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): CredentialDefinitionGetResult {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    credential_definition: !exists(json, 'credential_definition')
      ? undefined
      : CredentialDefinitionFromJSON(json['credential_definition']),
  };
}

export function CredentialDefinitionGetResultToJSON(
  value?: CredentialDefinitionGetResult | null,
): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    credential_definition: CredentialDefinitionToJSON(
      value.credential_definition,
    ),
  };
}
