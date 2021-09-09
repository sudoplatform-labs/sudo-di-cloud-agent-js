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
import {
  Constraints,
  ConstraintsFromJSON,
  ConstraintsFromJSONTyped,
  ConstraintsToJSON,
  SchemaInputDescriptor,
  SchemaInputDescriptorFromJSON,
  SchemaInputDescriptorFromJSONTyped,
  SchemaInputDescriptorToJSON,
} from './';

/**
 *
 * @export
 * @interface InputDescriptors
 */
export interface InputDescriptors {
  /**
   *
   * @type {Constraints}
   * @memberof InputDescriptors
   */
  constraints?: Constraints;
  /**
   *
   * @type {Array<string>}
   * @memberof InputDescriptors
   */
  group?: Array<string>;
  /**
   * ID
   * @type {string}
   * @memberof InputDescriptors
   */
  id?: string;
  /**
   * Metadata dictionary
   * @type {object}
   * @memberof InputDescriptors
   */
  metadata?: object;
  /**
   * Name
   * @type {string}
   * @memberof InputDescriptors
   */
  name?: string;
  /**
   * Purpose
   * @type {string}
   * @memberof InputDescriptors
   */
  purpose?: string;
  /**
   *
   * @type {Array<SchemaInputDescriptor>}
   * @memberof InputDescriptors
   */
  schema?: Array<SchemaInputDescriptor>;
}

export function InputDescriptorsFromJSON(json: any): InputDescriptors {
  return InputDescriptorsFromJSONTyped(json, false);
}

export function InputDescriptorsFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): InputDescriptors {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    constraints: !exists(json, 'constraints')
      ? undefined
      : ConstraintsFromJSON(json['constraints']),
    group: !exists(json, 'group') ? undefined : json['group'],
    id: !exists(json, 'id') ? undefined : json['id'],
    metadata: !exists(json, 'metadata') ? undefined : json['metadata'],
    name: !exists(json, 'name') ? undefined : json['name'],
    purpose: !exists(json, 'purpose') ? undefined : json['purpose'],
    schema: !exists(json, 'schema')
      ? undefined
      : (json['schema'] as Array<any>).map(SchemaInputDescriptorFromJSON),
  };
}

export function InputDescriptorsToJSON(value?: InputDescriptors | null): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    constraints: ConstraintsToJSON(value.constraints),
    group: value.group,
    id: value.id,
    metadata: value.metadata,
    name: value.name,
    purpose: value.purpose,
    schema:
      value.schema === undefined
        ? undefined
        : (value.schema as Array<any>).map(SchemaInputDescriptorToJSON),
  };
}
