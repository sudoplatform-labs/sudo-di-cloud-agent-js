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
  DIDCreateOptions,
  DIDCreateOptionsFromJSON,
  DIDCreateOptionsFromJSONTyped,
  DIDCreateOptionsToJSON,
} from './';

/**
 *
 * @export
 * @interface DIDCreate
 */
export interface DIDCreate {
  /**
   *
   * @type {string}
   * @memberof DIDCreate
   */
  method?: DIDCreateMethodEnum;
  /**
   * To define a key type for a did:key
   * @type {DIDCreateOptions}
   * @memberof DIDCreate
   */
  options?: DIDCreateOptions;
}

/**
 * @export
 * @enum {string}
 */
export enum DIDCreateMethodEnum {
  Key = 'key',
  Sov = 'sov',
}

export function DIDCreateFromJSON(json: any): DIDCreate {
  return DIDCreateFromJSONTyped(json, false);
}

export function DIDCreateFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): DIDCreate {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    method: !exists(json, 'method') ? undefined : json['method'],
    options: !exists(json, 'options')
      ? undefined
      : DIDCreateOptionsFromJSON(json['options']),
  };
}

export function DIDCreateToJSON(value?: DIDCreate | null): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    method: value.method,
    options: DIDCreateOptionsToJSON(value.options),
  };
}