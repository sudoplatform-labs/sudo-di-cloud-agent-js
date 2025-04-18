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
  did: string;
  /**
   * Key type associated with the DID
   * @type {string}
   * @memberof DID
   */
  key_type: DIDKeyTypeEnum;
  /**
   * Additional metadata associated with the DID
   * @type {{ [key: string]: object; }}
   * @memberof DID
   */
  metadata?: { [key: string]: object };
  /**
   * Did method associated with the DID
   * @type {string}
   * @memberof DID
   */
  method: string;
  /**
   * Whether DID is current public DID, posted to ledger but not current public DID, or local to the wallet
   * @type {string}
   * @memberof DID
   */
  posture: DIDPostureEnum;
  /**
   * Public verification key
   * @type {string}
   * @memberof DID
   */
  verkey: string;
}

/**
 * @export
 * @enum {string}
 */
export enum DIDKeyTypeEnum {
  Ed25519 = 'ed25519',
  Bls12381g2 = 'bls12381g2',
  P256 = 'p256',
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
    did: json['did'],
    key_type: json['key_type'],
    metadata: !exists(json, 'metadata') ? undefined : json['metadata'],
    method: json['method'],
    posture: json['posture'],
    verkey: json['verkey'],
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
    metadata: value.metadata,
    method: value.method,
    posture: value.posture,
    verkey: value.verkey,
  };
}
