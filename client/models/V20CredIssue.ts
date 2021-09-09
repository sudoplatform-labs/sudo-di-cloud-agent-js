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
  AttachDecorator,
  AttachDecoratorFromJSON,
  AttachDecoratorFromJSONTyped,
  AttachDecoratorToJSON,
  V20CredFormat,
  V20CredFormatFromJSON,
  V20CredFormatFromJSONTyped,
  V20CredFormatToJSON,
} from './';

/**
 *
 * @export
 * @interface V20CredIssue
 */
export interface V20CredIssue {
  /**
   * Message identifier
   * @type {string}
   * @memberof V20CredIssue
   */
  id?: string;
  /**
   * Message type
   * @type {string}
   * @memberof V20CredIssue
   */
  readonly type?: string;
  /**
   * Human-readable comment
   * @type {string}
   * @memberof V20CredIssue
   */
  comment?: string | null;
  /**
   * Credential attachments
   * @type {Array<AttachDecorator>}
   * @memberof V20CredIssue
   */
  credentialsattach: Array<AttachDecorator>;
  /**
   * Acceptable attachment formats
   * @type {Array<V20CredFormat>}
   * @memberof V20CredIssue
   */
  formats: Array<V20CredFormat>;
  /**
   * Issuer-unique identifier to coordinate credential replacement
   * @type {string}
   * @memberof V20CredIssue
   */
  replacement_id?: string;
}

export function V20CredIssueFromJSON(json: any): V20CredIssue {
  return V20CredIssueFromJSONTyped(json, false);
}

export function V20CredIssueFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): V20CredIssue {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    id: !exists(json, '@id') ? undefined : json['@id'],
    type: !exists(json, '@type') ? undefined : json['@type'],
    comment: !exists(json, 'comment') ? undefined : json['comment'],
    credentialsattach: (json['credentials~attach'] as Array<any>).map(
      AttachDecoratorFromJSON,
    ),
    formats: (json['formats'] as Array<any>).map(V20CredFormatFromJSON),
    replacement_id: !exists(json, 'replacement_id')
      ? undefined
      : json['replacement_id'],
  };
}

export function V20CredIssueToJSON(value?: V20CredIssue | null): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    '@id': value.id,
    comment: value.comment,
    'credentials~attach': (value.credentialsattach as Array<any>).map(
      AttachDecoratorToJSON,
    ),
    formats: (value.formats as Array<any>).map(V20CredFormatToJSON),
    replacement_id: value.replacement_id,
  };
}