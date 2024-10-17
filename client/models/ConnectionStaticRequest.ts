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
 * @interface ConnectionStaticRequest
 */
export interface ConnectionStaticRequest {
  /**
   * Alias to assign to this connection
   * @type {string}
   * @memberof ConnectionStaticRequest
   */
  alias?: string;
  /**
   * Local DID
   * @type {string}
   * @memberof ConnectionStaticRequest
   */
  my_did?: string;
  /**
   * Seed to use for the local DID
   * @type {string}
   * @memberof ConnectionStaticRequest
   */
  my_seed?: string;
  /**
   * Remote DID
   * @type {string}
   * @memberof ConnectionStaticRequest
   */
  their_did?: string;
  /**
   * URL endpoint for other party
   * @type {string}
   * @memberof ConnectionStaticRequest
   */
  their_endpoint?: string;
  /**
   * Other party's label for this connection
   * @type {string}
   * @memberof ConnectionStaticRequest
   */
  their_label?: string;
  /**
   * Seed to use for the remote DID
   * @type {string}
   * @memberof ConnectionStaticRequest
   */
  their_seed?: string;
  /**
   * Remote verification key
   * @type {string}
   * @memberof ConnectionStaticRequest
   */
  their_verkey?: string;
}

export function ConnectionStaticRequestFromJSON(
  json: any,
): ConnectionStaticRequest {
  return ConnectionStaticRequestFromJSONTyped(json, false);
}

export function ConnectionStaticRequestFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): ConnectionStaticRequest {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    alias: !exists(json, 'alias') ? undefined : json['alias'],
    my_did: !exists(json, 'my_did') ? undefined : json['my_did'],
    my_seed: !exists(json, 'my_seed') ? undefined : json['my_seed'],
    their_did: !exists(json, 'their_did') ? undefined : json['their_did'],
    their_endpoint: !exists(json, 'their_endpoint')
      ? undefined
      : json['their_endpoint'],
    their_label: !exists(json, 'their_label') ? undefined : json['their_label'],
    their_seed: !exists(json, 'their_seed') ? undefined : json['their_seed'],
    their_verkey: !exists(json, 'their_verkey')
      ? undefined
      : json['their_verkey'],
  };
}

export function ConnectionStaticRequestToJSON(
  value?: ConnectionStaticRequest | null,
): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    alias: value.alias,
    my_did: value.my_did,
    my_seed: value.my_seed,
    their_did: value.their_did,
    their_endpoint: value.their_endpoint,
    their_label: value.their_label,
    their_seed: value.their_seed,
    their_verkey: value.their_verkey,
  };
}
