/**
 * Sudo Decentralized Identity Cloud Agent SDK
 * Provides REST API wrappers for Typescript Agent Controllers using the Sudo Decentralized Identity Cloud Agent Service
 *
 * The version of the OpenAPI document: v0.6.8
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import {
  AttachDecoratorData,
  AttachDecoratorDataFromJSON,
  AttachDecoratorDataFromJSONTyped,
  AttachDecoratorDataToJSON,
} from './';

/**
 *
 * @export
 * @interface AttachDecorator
 */
export interface AttachDecorator {
  /**
   * Attachment identifier
   * @type {string}
   * @memberof AttachDecorator
   */
  id?: string;
  /**
   * Byte count of data included by reference
   * @type {number}
   * @memberof AttachDecorator
   */
  byte_count?: number;
  /**
   *
   * @type {AttachDecoratorData}
   * @memberof AttachDecorator
   */
  data: AttachDecoratorData;
  /**
   * Human-readable description of content
   * @type {string}
   * @memberof AttachDecorator
   */
  description?: string;
  /**
   * File name
   * @type {string}
   * @memberof AttachDecorator
   */
  filename?: string;
  /**
   * Hint regarding last modification datetime, in ISO-8601 format
   * @type {string}
   * @memberof AttachDecorator
   */
  lastmod_time?: string;
  /**
   * MIME type
   * @type {string}
   * @memberof AttachDecorator
   */
  mime_type?: string;
}

export function AttachDecoratorFromJSON(json: any): AttachDecorator {
  return AttachDecoratorFromJSONTyped(json, false);
}

export function AttachDecoratorFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): AttachDecorator {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    id: !exists(json, '@id') ? undefined : json['@id'],
    byte_count: !exists(json, 'byte_count') ? undefined : json['byte_count'],
    data: AttachDecoratorDataFromJSON(json['data']),
    description: !exists(json, 'description') ? undefined : json['description'],
    filename: !exists(json, 'filename') ? undefined : json['filename'],
    lastmod_time: !exists(json, 'lastmod_time')
      ? undefined
      : json['lastmod_time'],
    mime_type: !exists(json, 'mime-type') ? undefined : json['mime-type'],
  };
}

export function AttachDecoratorToJSON(value?: AttachDecorator | null): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    '@id': value.id,
    byte_count: value.byte_count,
    data: AttachDecoratorDataToJSON(value.data),
    description: value.description,
    filename: value.filename,
    lastmod_time: value.lastmod_time,
    'mime-type': value.mime_type,
  };
}
