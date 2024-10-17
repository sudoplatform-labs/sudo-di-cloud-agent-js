/**
 * Sudo Decentralized Identity Cloud Agent SDK
 * Provides REST API wrappers for Typescript Agent Controllers using the Sudo Decentralized Identity Cloud Agent Service
 *
 * The version of the OpenAPI document: v0.10.0
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
 * @interface Schema
 */
export interface Schema {
  /**
   * Schema attribute names
   * @type {Array<string>}
   * @memberof Schema
   */
  attrNames?: Array<string>;
  /**
   * Schema identifier
   * @type {string}
   * @memberof Schema
   */
  id?: string;
  /**
   * Schema name
   * @type {string}
   * @memberof Schema
   */
  name?: string;
  /**
   * Schema sequence number
   * @type {number}
   * @memberof Schema
   */
  seqNo?: number;
  /**
   * Node protocol version
   * @type {string}
   * @memberof Schema
   */
  ver?: string;
  /**
   * Schema version
   * @type {string}
   * @memberof Schema
   */
  version?: string;
}

export function SchemaFromJSON(json: any): Schema {
  return SchemaFromJSONTyped(json, false);
}

export function SchemaFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): Schema {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    attrNames: !exists(json, 'attrNames') ? undefined : json['attrNames'],
    id: !exists(json, 'id') ? undefined : json['id'],
    name: !exists(json, 'name') ? undefined : json['name'],
    seqNo: !exists(json, 'seqNo') ? undefined : json['seqNo'],
    ver: !exists(json, 'ver') ? undefined : json['ver'],
    version: !exists(json, 'version') ? undefined : json['version'],
  };
}

export function SchemaToJSON(value?: Schema | null): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    attrNames: value.attrNames,
    id: value.id,
    name: value.name,
    seqNo: value.seqNo,
    ver: value.ver,
    version: value.version,
  };
}
