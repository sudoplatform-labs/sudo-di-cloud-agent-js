/**
 * Sudo Decentralized Identity Cloud Agent SDK
 * Provides REST API wrappers for Typescript Agent Controllers using the Sudo Decentralized Identity Cloud Agent Service
 *
 * The version of the OpenAPI document: v0.10.1
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
 * @interface ConfigurableWriteLedgers
 */
export interface ConfigurableWriteLedgers {
  /**
   * List of configurable write ledgers identifiers
   * @type {Array<string>}
   * @memberof ConfigurableWriteLedgers
   */
  write_ledgers?: Array<string>;
}

export function ConfigurableWriteLedgersFromJSON(
  json: any,
): ConfigurableWriteLedgers {
  return ConfigurableWriteLedgersFromJSONTyped(json, false);
}

export function ConfigurableWriteLedgersFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): ConfigurableWriteLedgers {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    write_ledgers: !exists(json, 'write_ledgers')
      ? undefined
      : json['write_ledgers'],
  };
}

export function ConfigurableWriteLedgersToJSON(
  value?: ConfigurableWriteLedgers | null,
): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    write_ledgers: value.write_ledgers,
  };
}
