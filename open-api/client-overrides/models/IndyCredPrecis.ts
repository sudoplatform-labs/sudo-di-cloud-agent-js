/**
 * Sudo Decentralized Identity Cloud Agent SDK
 * Provides REST API wrappers for Typescript Agent Controllers using the Sudo Decentralized Identity Cloud Agency Service
 *
 * The version of the OpenAPI document: v0.4.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import {
  IndyCredInfo,
  IndyCredInfoFromJSON,
  IndyCredInfoFromJSONTyped,
  IndyCredInfoToJSON,
  IndyNonRevocationInterval,
  IndyNonRevocationIntervalFromJSON,
  IndyNonRevocationIntervalFromJSONTyped,
  IndyNonRevocationIntervalToJSON,
} from './';

/**
 *
 * @export
 * @interface IndyCredPrecis
 */
export interface IndyCredPrecis {
  /**
   * Credential info
   * @type {IndyCredInfo}
   * @memberof IndyCredPrecis
   */
  cred_info?: IndyCredInfo;
  /**
   * Non-revocation interval from presentation request
   * @type {IndyNonRevocationInterval}
   * @memberof IndyCredPrecis
   */
  interval?: IndyNonRevocationInterval;
  /**
   *
   * @type {Array<string>}
   * @memberof IndyCredPrecis
   */
  pres_referents?: Array<string>;
}

export function IndyCredPrecisFromJSON(json: any): IndyCredPrecis {
  return IndyCredPrecisFromJSONTyped(json, false);
}

export function IndyCredPrecisFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): IndyCredPrecis {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    cred_info: !exists(json, 'cred_info')
      ? undefined
      : IndyCredInfoFromJSON(json['cred_info']),
    interval: !exists(json, 'interval')
      ? undefined
      : IndyNonRevocationIntervalFromJSON(json['interval']),
    // There is a bug in the model spec returned in version 0.7.0
    // pres_referents is returned from the webserver as presentation_referents
    // see https://github.com/hyperledger/aries-cloudagent-python/issues/1327
    pres_referents: !exists(json, 'presentation_referents')
      ? undefined
      : json['presentation_referents'],
  };
}

export function IndyCredPrecisToJSON(value?: IndyCredPrecis | null): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    cred_info: IndyCredInfoToJSON(value.cred_info),
    interval: IndyNonRevocationIntervalToJSON(value.interval),
    pres_referents: value.pres_referents,
  };
}
