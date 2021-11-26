/**
 * Sudo Decentralized Identity Cloud Agent SDK
 * Provides REST API wrappers for Typescript Agent Controllers using the Sudo Decentralized Identity Cloud Agency Service
 *
 * The version of the OpenAPI document: v0.6.2
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
 * @interface MediationDeny
 */
export interface MediationDeny {
  /**
   * Message identifier
   * @type {string}
   * @memberof MediationDeny
   */
  id?: string;
  /**
   * Message type
   * @type {string}
   * @memberof MediationDeny
   */
  readonly type?: string;
  /**
   *
   * @type {Array<string>}
   * @memberof MediationDeny
   */
  mediator_terms?: Array<string>;
  /**
   *
   * @type {Array<string>}
   * @memberof MediationDeny
   */
  recipient_terms?: Array<string>;
}

export function MediationDenyFromJSON(json: any): MediationDeny {
  return MediationDenyFromJSONTyped(json, false);
}

export function MediationDenyFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): MediationDeny {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    id: !exists(json, '@id') ? undefined : json['@id'],
    type: !exists(json, '@type') ? undefined : json['@type'],
    mediator_terms: !exists(json, 'mediator_terms')
      ? undefined
      : json['mediator_terms'],
    recipient_terms: !exists(json, 'recipient_terms')
      ? undefined
      : json['recipient_terms'],
  };
}

export function MediationDenyToJSON(value?: MediationDeny | null): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    '@id': value.id,
    mediator_terms: value.mediator_terms,
    recipient_terms: value.recipient_terms,
  };
}
