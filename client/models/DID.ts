/**
 * Sudo Decentralized Identity Cloud Agent SDK
 * Provides REST API wrappers for Typescript Agent Controllers using the Sudo Decentralized Identity Cloud Agent Service
 *
 * The version of the OpenAPI document: v0.7.1
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
 * @interface DID
 */
export interface DID {
  /**
   * DID of interest
   * @type {string}
   * @memberof DID
   */
  did?: string;
  /**
   * Key type associated with the DID
   * @type {string}
   * @memberof DID
   */
  key_type?: DIDKeyTypeEnum;
  /**
   * Did method associated with the DID
   * @type {string}
   * @memberof DID
   */
  method?: string;
  /**
   * Whether DID is current public DID, posted to ledger but not current public DID, or local to the wallet
   * @type {string}
   * @memberof DID
   */
  posture?: DIDPostureEnum;
  /**
   * Public verification key
   * @type {string}
   * @memberof DID
   */
  verkey?: string;
}

/**
 * @export
 * @enum {string}
 */
export enum DIDKeyTypeEnum {
  Ed25519 = 'ed25519',
  Bls12381g2 = 'bls12381g2',
} /**
 * @export
 * @enum {string}
 */
export enum DIDPostureEnum {
  Public = 'public',
  Posted = 'posted',
  WalletOnly = 'wallet_only',
}

export function DIDFromJSON(json: any): DID {
  return DIDFromJSONTyped(json, false);
}

export function DIDFromJSONTyped(json: any, ignoreDiscriminator: boolean): DID {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    did: !exists(json, 'did') ? undefined : json['did'],
    key_type: !exists(json, 'key_type') ? undefined : json['key_type'],
    method: !exists(json, 'method') ? undefined : json['method'],
    posture: !exists(json, 'posture') ? undefined : json['posture'],
    verkey: !exists(json, 'verkey') ? undefined : json['verkey'],
  };
}

export function DIDToJSON(value?: DID | null): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    did: value.did,
    key_type: value.key_type,
    method: value.method,
    posture: value.posture,
    verkey: value.verkey,
  };
}
