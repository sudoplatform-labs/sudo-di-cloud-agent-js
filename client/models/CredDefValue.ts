/**
 * Sudo Decentralized Identity Cloud Agent SDK
 * Provides REST API wrappers for Typescript Agent Controllers using the Sudo Decentralized Identity Cloud Agent Service
 *
 * The version of the OpenAPI document: v0.7.1
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import {
  CredDefValuePrimary,
  CredDefValuePrimaryFromJSON,
  CredDefValuePrimaryFromJSONTyped,
  CredDefValuePrimaryToJSON,
  CredDefValueRevocation,
  CredDefValueRevocationFromJSON,
  CredDefValueRevocationFromJSONTyped,
  CredDefValueRevocationToJSON,
} from './';

/**
 *
 * @export
 * @interface CredDefValue
 */
export interface CredDefValue {
  /**
   * Primary value for credential definition
   * @type {CredDefValuePrimary}
   * @memberof CredDefValue
   */
  primary?: CredDefValuePrimary;
  /**
   * Revocation value for credential definition
   * @type {CredDefValueRevocation}
   * @memberof CredDefValue
   */
  revocation?: CredDefValueRevocation;
}

export function CredDefValueFromJSON(json: any): CredDefValue {
  return CredDefValueFromJSONTyped(json, false);
}

export function CredDefValueFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): CredDefValue {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    primary: !exists(json, 'primary')
      ? undefined
      : CredDefValuePrimaryFromJSON(json['primary']),
    revocation: !exists(json, 'revocation')
      ? undefined
      : CredDefValueRevocationFromJSON(json['revocation']),
  };
}

export function CredDefValueToJSON(value?: CredDefValue | null): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    primary: CredDefValuePrimaryToJSON(value.primary),
    revocation: CredDefValueRevocationToJSON(value.revocation),
  };
}
