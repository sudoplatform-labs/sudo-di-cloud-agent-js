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
import {
  IndyRevRegDefValue,
  IndyRevRegDefValueFromJSON,
  IndyRevRegDefValueFromJSONTyped,
  IndyRevRegDefValueToJSON,
} from './';

/**
 *
 * @export
 * @interface IndyRevRegDef
 */
export interface IndyRevRegDef {
  /**
   * Credential definition identifier
   * @type {string}
   * @memberof IndyRevRegDef
   */
  credDefId?: string;
  /**
   * Indy revocation registry identifier
   * @type {string}
   * @memberof IndyRevRegDef
   */
  id?: string;
  /**
   * Revocation registry type (specify CL_ACCUM)
   * @type {string}
   * @memberof IndyRevRegDef
   */
  revocDefType?: IndyRevRegDefRevocDefTypeEnum;
  /**
   * Revocation registry tag
   * @type {string}
   * @memberof IndyRevRegDef
   */
  tag?: string;
  /**
   * Revocation registry definition value
   * @type {IndyRevRegDefValue}
   * @memberof IndyRevRegDef
   */
  value?: IndyRevRegDefValue;
  /**
   * Version of revocation registry definition
   * @type {string}
   * @memberof IndyRevRegDef
   */
  ver?: string;
}

/**
 * @export
 * @enum {string}
 */
export enum IndyRevRegDefRevocDefTypeEnum {
  ClAccum = 'CL_ACCUM',
}

export function IndyRevRegDefFromJSON(json: any): IndyRevRegDef {
  return IndyRevRegDefFromJSONTyped(json, false);
}

export function IndyRevRegDefFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): IndyRevRegDef {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    credDefId: !exists(json, 'credDefId') ? undefined : json['credDefId'],
    id: !exists(json, 'id') ? undefined : json['id'],
    revocDefType: !exists(json, 'revocDefType')
      ? undefined
      : json['revocDefType'],
    tag: !exists(json, 'tag') ? undefined : json['tag'],
    value: !exists(json, 'value')
      ? undefined
      : IndyRevRegDefValueFromJSON(json['value']),
    ver: !exists(json, 'ver') ? undefined : json['ver'],
  };
}

export function IndyRevRegDefToJSON(value?: IndyRevRegDef | null): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    credDefId: value.credDefId,
    id: value.id,
    revocDefType: value.revocDefType,
    tag: value.tag,
    value: IndyRevRegDefValueToJSON(value.value),
    ver: value.ver,
  };
}