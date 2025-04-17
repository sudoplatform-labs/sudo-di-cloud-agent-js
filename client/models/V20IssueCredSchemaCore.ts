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
import {
  V20CredFilter,
  V20CredFilterFromJSON,
  V20CredFilterFromJSONTyped,
  V20CredFilterToJSON,
  V20CredPreview,
  V20CredPreviewFromJSON,
  V20CredPreviewFromJSONTyped,
  V20CredPreviewToJSON,
} from './';

/**
 *
 * @export
 * @interface V20IssueCredSchemaCore
 */
export interface V20IssueCredSchemaCore {
  /**
   * Whether to remove the credential exchange record on completion (overrides --preserve-exchange-records configuration setting)
   * @type {boolean}
   * @memberof V20IssueCredSchemaCore
   */
  auto_remove?: boolean;
  /**
   * Human-readable comment
   * @type {string}
   * @memberof V20IssueCredSchemaCore
   */
  comment?: string | null;
  /**
   *
   * @type {V20CredPreview}
   * @memberof V20IssueCredSchemaCore
   */
  credential_preview?: V20CredPreview;
  /**
   * Credential specification criteria by format
   * @type {V20CredFilter}
   * @memberof V20IssueCredSchemaCore
   */
  filter: V20CredFilter;
  /**
   * Optional identifier used to manage credential replacement
   * @type {string}
   * @memberof V20IssueCredSchemaCore
   */
  replacement_id?: string | null;
  /**
   * Record trace information, based on agent configuration
   * @type {boolean}
   * @memberof V20IssueCredSchemaCore
   */
  trace?: boolean;
}

export function V20IssueCredSchemaCoreFromJSON(
  json: any,
): V20IssueCredSchemaCore {
  return V20IssueCredSchemaCoreFromJSONTyped(json, false);
}

export function V20IssueCredSchemaCoreFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): V20IssueCredSchemaCore {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    auto_remove: !exists(json, 'auto_remove') ? undefined : json['auto_remove'],
    comment: !exists(json, 'comment') ? undefined : json['comment'],
    credential_preview: !exists(json, 'credential_preview')
      ? undefined
      : V20CredPreviewFromJSON(json['credential_preview']),
    filter: V20CredFilterFromJSON(json['filter']),
    replacement_id: !exists(json, 'replacement_id')
      ? undefined
      : json['replacement_id'],
    trace: !exists(json, 'trace') ? undefined : json['trace'],
  };
}

export function V20IssueCredSchemaCoreToJSON(
  value?: V20IssueCredSchemaCore | null,
): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    auto_remove: value.auto_remove,
    comment: value.comment,
    credential_preview: V20CredPreviewToJSON(value.credential_preview),
    filter: V20CredFilterToJSON(value.filter),
    replacement_id: value.replacement_id,
    trace: value.trace,
  };
}
