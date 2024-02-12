/**
 * Sudo Decentralized Identity Cloud Agent SDK
 * Provides REST API wrappers for Typescript Agent Controllers using the Sudo Decentralized Identity Cloud Agent Service
 *
 * The version of the OpenAPI document: v0.8.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import {
  V20CredFilterLDProof,
  V20CredFilterLDProofFromJSON,
  V20CredFilterLDProofFromJSONTyped,
  V20CredFilterLDProofToJSON,
} from './';

/**
 *
 * @export
 * @interface V20CredRequestFree
 */
export interface V20CredRequestFree {
  /**
   * Whether to remove the credential exchange record on completion (overrides --preserve-exchange-records configuration setting)
   * @type {boolean}
   * @memberof V20CredRequestFree
   */
  auto_remove?: boolean;
  /**
   * Human-readable comment
   * @type {string}
   * @memberof V20CredRequestFree
   */
  comment?: string | null;
  /**
   * Connection identifier
   * @type {string}
   * @memberof V20CredRequestFree
   */
  connection_id: string;
  /**
   * Credential specification criteria by format
   * @type {V20CredFilterLDProof}
   * @memberof V20CredRequestFree
   */
  filter: V20CredFilterLDProof;
  /**
   * Holder DID to substitute for the credentialSubject.id
   * @type {string}
   * @memberof V20CredRequestFree
   */
  holder_did?: string | null;
  /**
   * Whether to trace event (default false)
   * @type {boolean}
   * @memberof V20CredRequestFree
   */
  trace?: boolean;
}

export function V20CredRequestFreeFromJSON(json: any): V20CredRequestFree {
  return V20CredRequestFreeFromJSONTyped(json, false);
}

export function V20CredRequestFreeFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): V20CredRequestFree {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    auto_remove: !exists(json, 'auto_remove') ? undefined : json['auto_remove'],
    comment: !exists(json, 'comment') ? undefined : json['comment'],
    connection_id: json['connection_id'],
    filter: V20CredFilterLDProofFromJSON(json['filter']),
    holder_did: !exists(json, 'holder_did') ? undefined : json['holder_did'],
    trace: !exists(json, 'trace') ? undefined : json['trace'],
  };
}

export function V20CredRequestFreeToJSON(
  value?: V20CredRequestFree | null,
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
    connection_id: value.connection_id,
    filter: V20CredFilterLDProofToJSON(value.filter),
    holder_did: value.holder_did,
    trace: value.trace,
  };
}
