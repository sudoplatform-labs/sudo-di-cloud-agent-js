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
/**
 *
 * @export
 * @interface CredentialDefinitionSendRequest
 */
export interface CredentialDefinitionSendRequest {
  /**
   * Revocation registry size
   * @type {number}
   * @memberof CredentialDefinitionSendRequest
   */
  revocation_registry_size?: number;
  /**
   * Schema identifier
   * @type {string}
   * @memberof CredentialDefinitionSendRequest
   */
  schema_id?: string;
  /**
   * Revocation supported flag
   * @type {boolean}
   * @memberof CredentialDefinitionSendRequest
   */
  support_revocation?: boolean;
  /**
   * Credential definition identifier tag
   * @type {string}
   * @memberof CredentialDefinitionSendRequest
   */
  tag?: string;
}

export function CredentialDefinitionSendRequestFromJSON(
  json: any,
): CredentialDefinitionSendRequest {
  return CredentialDefinitionSendRequestFromJSONTyped(json, false);
}

export function CredentialDefinitionSendRequestFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): CredentialDefinitionSendRequest {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    revocation_registry_size: !exists(json, 'revocation_registry_size')
      ? undefined
      : json['revocation_registry_size'],
    schema_id: !exists(json, 'schema_id') ? undefined : json['schema_id'],
    support_revocation: !exists(json, 'support_revocation')
      ? undefined
      : json['support_revocation'],
    tag: !exists(json, 'tag') ? undefined : json['tag'],
  };
}

export function CredentialDefinitionSendRequestToJSON(
  value?: CredentialDefinitionSendRequest | null,
): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    revocation_registry_size: value.revocation_registry_size,
    schema_id: value.schema_id,
    support_revocation: value.support_revocation,
    tag: value.tag,
  };
}