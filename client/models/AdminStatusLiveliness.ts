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
 * @interface AdminStatusLiveliness
 */
export interface AdminStatusLiveliness {
  /**
   * Liveliness status
   * @type {boolean}
   * @memberof AdminStatusLiveliness
   */
  alive?: boolean;
}

export function AdminStatusLivelinessFromJSON(
  json: any,
): AdminStatusLiveliness {
  return AdminStatusLivelinessFromJSONTyped(json, false);
}

export function AdminStatusLivelinessFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): AdminStatusLiveliness {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    alive: !exists(json, 'alive') ? undefined : json['alive'],
  };
}

export function AdminStatusLivelinessToJSON(
  value?: AdminStatusLiveliness | null,
): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    alive: value.alive,
  };
}
