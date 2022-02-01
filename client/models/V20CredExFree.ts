/**
 * Sudo Decentralized Identity Cloud Agent SDK
 * Provides REST API wrappers for Typescript Agent Controllers using the Sudo Decentralized Identity Cloud Agent Service
 *
 * The version of the OpenAPI document: v0.6.3
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
 * @interface V20CredExFree
 */
export interface V20CredExFree {
  /**
   * Whether to remove the credential exchange record on completion (overrides --preserve-exchange-records configuration setting)
   * @type {boolean}
   * @memberof V20CredExFree
   */
  auto_remove?: boolean;
  /**
   * Human-readable comment
   * @type {string}
   * @memberof V20CredExFree
   */
  comment?: string | null;
  /**
   * Connection identifier
   * @type {string}
   * @memberof V20CredExFree
   */
  connection_id: string;
  /**
   *
   * @type {V20CredPreview}
   * @memberof V20CredExFree
   */
  credential_preview?: V20CredPreview;
  /**
   * Credential specification criteria by format
   * @type {V20CredFilter}
   * @memberof V20CredExFree
   */
  filter: V20CredFilter;
  /**
   * Record trace information, based on agent configuration
   * @type {boolean}
   * @memberof V20CredExFree
   */
  trace?: boolean;
}

export function V20CredExFreeFromJSON(json: any): V20CredExFree {
  return V20CredExFreeFromJSONTyped(json, false);
}

export function V20CredExFreeFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): V20CredExFree {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    auto_remove: !exists(json, 'auto_remove') ? undefined : json['auto_remove'],
    comment: !exists(json, 'comment') ? undefined : json['comment'],
    connection_id: json['connection_id'],
    credential_preview: !exists(json, 'credential_preview')
      ? undefined
      : V20CredPreviewFromJSON(json['credential_preview']),
    filter: V20CredFilterFromJSON(json['filter']),
    trace: !exists(json, 'trace') ? undefined : json['trace'],
  };
}

export function V20CredExFreeToJSON(value?: V20CredExFree | null): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    auto_remove: value.auto_remove,
    comment: value.comment,
    connection_id: value.connection_id,
    credential_preview: V20CredPreviewToJSON(value.credential_preview),
    filter: V20CredFilterToJSON(value.filter),
    trace: value.trace,
  };
}
