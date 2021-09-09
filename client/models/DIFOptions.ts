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
 * @interface DIFOptions
 */
export interface DIFOptions {
  /**
   * Challenge protect against replay attack
   * @type {string}
   * @memberof DIFOptions
   */
  challenge?: string;
  /**
   * Domain protect against replay attack
   * @type {string}
   * @memberof DIFOptions
   */
  domain?: string;
}

export function DIFOptionsFromJSON(json: any): DIFOptions {
  return DIFOptionsFromJSONTyped(json, false);
}

export function DIFOptionsFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): DIFOptions {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    challenge: !exists(json, 'challenge') ? undefined : json['challenge'],
    domain: !exists(json, 'domain') ? undefined : json['domain'],
  };
}

export function DIFOptionsToJSON(value?: DIFOptions | null): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    challenge: value.challenge,
    domain: value.domain,
  };
}
