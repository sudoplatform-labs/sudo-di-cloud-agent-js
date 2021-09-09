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
 * @interface W3CCredentialsListRequest
 */
export interface W3CCredentialsListRequest {
  /**
   *
   * @type {Array<string>}
   * @memberof W3CCredentialsListRequest
   */
  contexts?: Array<string>;
  /**
   * Given credential id to match
   * @type {string}
   * @memberof W3CCredentialsListRequest
   */
  given_id?: string;
  /**
   * Credential issuer identifier to match
   * @type {string}
   * @memberof W3CCredentialsListRequest
   */
  issuer_id?: string;
  /**
   * Maximum number of results to return
   * @type {number}
   * @memberof W3CCredentialsListRequest
   */
  max_results?: number;
  /**
   *
   * @type {Array<string>}
   * @memberof W3CCredentialsListRequest
   */
  proof_types?: Array<string>;
  /**
   * Schema identifiers, all of which to match
   * @type {Array<string>}
   * @memberof W3CCredentialsListRequest
   */
  schema_ids?: Array<string>;
  /**
   * Subject identifiers, all of which to match
   * @type {Array<string>}
   * @memberof W3CCredentialsListRequest
   */
  subject_ids?: Array<string>;
  /**
   * Tag filter
   * @type {{ [key: string]: string; }}
   * @memberof W3CCredentialsListRequest
   */
  tag_query?: { [key: string]: string };
  /**
   *
   * @type {Array<string>}
   * @memberof W3CCredentialsListRequest
   */
  types?: Array<string>;
}

export function W3CCredentialsListRequestFromJSON(
  json: any,
): W3CCredentialsListRequest {
  return W3CCredentialsListRequestFromJSONTyped(json, false);
}

export function W3CCredentialsListRequestFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): W3CCredentialsListRequest {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    contexts: !exists(json, 'contexts') ? undefined : json['contexts'],
    given_id: !exists(json, 'given_id') ? undefined : json['given_id'],
    issuer_id: !exists(json, 'issuer_id') ? undefined : json['issuer_id'],
    max_results: !exists(json, 'max_results') ? undefined : json['max_results'],
    proof_types: !exists(json, 'proof_types') ? undefined : json['proof_types'],
    schema_ids: !exists(json, 'schema_ids') ? undefined : json['schema_ids'],
    subject_ids: !exists(json, 'subject_ids') ? undefined : json['subject_ids'],
    tag_query: !exists(json, 'tag_query') ? undefined : json['tag_query'],
    types: !exists(json, 'types') ? undefined : json['types'],
  };
}

export function W3CCredentialsListRequestToJSON(
  value?: W3CCredentialsListRequest | null,
): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    contexts: value.contexts,
    given_id: value.given_id,
    issuer_id: value.issuer_id,
    max_results: value.max_results,
    proof_types: value.proof_types,
    schema_ids: value.schema_ids,
    subject_ids: value.subject_ids,
    tag_query: value.tag_query,
    types: value.types,
  };
}