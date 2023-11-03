/**
 * Sudo Decentralized Identity Cloud Agent SDK
 * Provides REST API wrappers for Typescript Agent Controllers using the Sudo Decentralized Identity Cloud Agent Service
 *
 * The version of the OpenAPI document: v0.7.0
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
 * @interface RevRegUpdateTailsFileUri
 */
export interface RevRegUpdateTailsFileUri {
  /**
   * Public URI to the tails file
   * @type {string}
   * @memberof RevRegUpdateTailsFileUri
   */
  tails_public_uri: string;
}

export function RevRegUpdateTailsFileUriFromJSON(
  json: any,
): RevRegUpdateTailsFileUri {
  return RevRegUpdateTailsFileUriFromJSONTyped(json, false);
}

export function RevRegUpdateTailsFileUriFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): RevRegUpdateTailsFileUri {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    tails_public_uri: json['tails_public_uri'],
  };
}

export function RevRegUpdateTailsFileUriToJSON(
  value?: RevRegUpdateTailsFileUri | null,
): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    tails_public_uri: value.tails_public_uri,
  };
}
