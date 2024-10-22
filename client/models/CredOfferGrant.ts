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
/**
 *
 * @export
 * @interface CredOfferGrant
 */
export interface CredOfferGrant {
  /**
   *
   * @type {string}
   * @memberof CredOfferGrant
   */
  pre_authorized_code: string;
  /**
   *
   * @type {boolean}
   * @memberof CredOfferGrant
   */
  user_pin_required?: boolean;
}

export function CredOfferGrantFromJSON(json: any): CredOfferGrant {
  return CredOfferGrantFromJSONTyped(json, false);
}

export function CredOfferGrantFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): CredOfferGrant {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    pre_authorized_code: json['pre_authorized_code'],
    user_pin_required: !exists(json, 'user_pin_required')
      ? undefined
      : json['user_pin_required'],
  };
}

export function CredOfferGrantToJSON(value?: CredOfferGrant | null): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    pre_authorized_code: value.pre_authorized_code,
    user_pin_required: value.user_pin_required,
  };
}
