/**
 * Sudo Decentralized Identity Cloud Agent SDK
 * Provides REST API wrappers for Typescript Agent Controllers using the Sudo Decentralized Identity Cloud Agency Service
 *
 * The version of the OpenAPI document: v0.5.3
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import {
  CredDefValue,
  CredDefValueFromJSON,
  CredDefValueFromJSONTyped,
  CredDefValueToJSON,
} from './';

/**
 *
 * @export
 * @interface CredentialDefinition
 */
export interface CredentialDefinition {
  /**
   * Credential definition identifier
   * @type {string}
   * @memberof CredentialDefinition
   */
  id?: string;
  /**
   * Schema identifier within credential definition identifier
   * @type {string}
   * @memberof CredentialDefinition
   */
  schemaId?: string;
  /**
   * Tag within credential definition identifier
   * @type {string}
   * @memberof CredentialDefinition
   */
  tag?: string;
  /**
   * Signature type: CL for Camenisch-Lysyanskaya
   * @type {object}
   * @memberof CredentialDefinition
   */
  type?: object;
  /**
   * Credential definition primary and revocation values
   * @type {CredDefValue}
   * @memberof CredentialDefinition
   */
  value?: CredDefValue;
  /**
   * Node protocol version
   * @type {string}
   * @memberof CredentialDefinition
   */
  ver?: string;
}

export function CredentialDefinitionFromJSON(json: any): CredentialDefinition {
  return CredentialDefinitionFromJSONTyped(json, false);
}

export function CredentialDefinitionFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): CredentialDefinition {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    id: !exists(json, 'id') ? undefined : json['id'],
    schemaId: !exists(json, 'schemaId') ? undefined : json['schemaId'],
    tag: !exists(json, 'tag') ? undefined : json['tag'],
    type: !exists(json, 'type') ? undefined : json['type'],
    value: !exists(json, 'value')
      ? undefined
      : CredDefValueFromJSON(json['value']),
    ver: !exists(json, 'ver') ? undefined : json['ver'],
  };
}

export function CredentialDefinitionToJSON(
  value?: CredentialDefinition | null,
): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    id: value.id,
    schemaId: value.schemaId,
    tag: value.tag,
    type: value.type,
    value: CredDefValueToJSON(value.value),
    ver: value.ver,
  };
}
