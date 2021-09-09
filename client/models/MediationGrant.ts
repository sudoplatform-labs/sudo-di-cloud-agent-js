/**
 * Sudo Decentralized Identity Cloud Agent SDK
 * Provides REST API wrappers for Typescript Agent Controllers using the Sudo Decentralized Identity Cloud Agency Service
 *
 * The version of the OpenAPI document: v0.5.2
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
 * @interface MediationGrant
 */
export interface MediationGrant {
  /**
   * Message identifier
   * @type {string}
   * @memberof MediationGrant
   */
  id?: string;
  /**
   * Message type
   * @type {string}
   * @memberof MediationGrant
   */
  readonly type?: string;
  /**
   * endpoint on which messages destined for the recipient are received.
   * @type {string}
   * @memberof MediationGrant
   */
  endpoint?: string;
  /**
   *
   * @type {Array<string>}
   * @memberof MediationGrant
   */
  routing_keys?: Array<string>;
}

export function MediationGrantFromJSON(json: any): MediationGrant {
  return MediationGrantFromJSONTyped(json, false);
}

export function MediationGrantFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): MediationGrant {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    id: !exists(json, '@id') ? undefined : json['@id'],
    type: !exists(json, '@type') ? undefined : json['@type'],
    endpoint: !exists(json, 'endpoint') ? undefined : json['endpoint'],
    routing_keys: !exists(json, 'routing_keys')
      ? undefined
      : json['routing_keys'],
  };
}

export function MediationGrantToJSON(value?: MediationGrant | null): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    '@id': value.id,
    endpoint: value.endpoint,
    routing_keys: value.routing_keys,
  };
}
