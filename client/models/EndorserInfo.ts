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
 * @interface EndorserInfo
 */
export interface EndorserInfo {
  /**
   * Endorser DID
   * @type {string}
   * @memberof EndorserInfo
   */
  endorser_did: string;
  /**
   * Endorser Name
   * @type {string}
   * @memberof EndorserInfo
   */
  endorser_name?: string;
}

export function EndorserInfoFromJSON(json: any): EndorserInfo {
  return EndorserInfoFromJSONTyped(json, false);
}

export function EndorserInfoFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): EndorserInfo {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    endorser_did: json['endorser_did'],
    endorser_name: !exists(json, 'endorser_name')
      ? undefined
      : json['endorser_name'],
  };
}

export function EndorserInfoToJSON(value?: EndorserInfo | null): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    endorser_did: value.endorser_did,
    endorser_name: value.endorser_name,
  };
}