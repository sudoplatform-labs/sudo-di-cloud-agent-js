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
 * @interface AttachmentDef
 */
export interface AttachmentDef {
  /**
   * Attachment identifier
   * @type {string}
   * @memberof AttachmentDef
   */
  id?: string;
  /**
   * Attachment type
   * @type {string}
   * @memberof AttachmentDef
   */
  type?: AttachmentDefTypeEnum;
}

/**
 * @export
 * @enum {string}
 */
export enum AttachmentDefTypeEnum {
  CredentialOffer = 'credential-offer',
  PresentProof = 'present-proof',
}

export function AttachmentDefFromJSON(json: any): AttachmentDef {
  return AttachmentDefFromJSONTyped(json, false);
}

export function AttachmentDefFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): AttachmentDef {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    id: !exists(json, 'id') ? undefined : json['id'],
    type: !exists(json, 'type') ? undefined : json['type'],
  };
}

export function AttachmentDefToJSON(value?: AttachmentDef | null): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    id: value.id,
    type: value.type,
  };
}