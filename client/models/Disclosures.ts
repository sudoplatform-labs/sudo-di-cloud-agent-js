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
 * @interface Disclosures
 */
export interface Disclosures {
  /**
   * Message identifier
   * @type {string}
   * @memberof Disclosures
   */
  id?: string;
  /**
   * Message type
   * @type {string}
   * @memberof Disclosures
   */
  type?: string;
  /**
   * List of protocol or goal_code descriptors
   * @type {Array<object>}
   * @memberof Disclosures
   */
  disclosures: Array<object>;
}

export function DisclosuresFromJSON(json: any): Disclosures {
  return DisclosuresFromJSONTyped(json, false);
}

export function DisclosuresFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): Disclosures {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    id: !exists(json, '@id') ? undefined : json['@id'],
    type: !exists(json, '@type') ? undefined : json['@type'],
    disclosures: json['disclosures'],
  };
}

export function DisclosuresToJSON(value?: Disclosures | null): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    '@id': value.id,
    '@type': value.type,
    disclosures: value.disclosures,
  };
}
