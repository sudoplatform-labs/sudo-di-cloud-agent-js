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
 * @interface MediationRecord
 */
export interface MediationRecord {
  /**
   *
   * @type {string}
   * @memberof MediationRecord
   */
  connection_id: string;
  /**
   * Time of record creation
   * @type {string}
   * @memberof MediationRecord
   */
  created_at?: string;
  /**
   *
   * @type {string}
   * @memberof MediationRecord
   */
  endpoint?: string;
  /**
   *
   * @type {string}
   * @memberof MediationRecord
   */
  mediation_id?: string;
  /**
   *
   * @type {Array<string>}
   * @memberof MediationRecord
   */
  mediator_terms?: Array<string>;
  /**
   *
   * @type {Array<string>}
   * @memberof MediationRecord
   */
  recipient_terms?: Array<string>;
  /**
   *
   * @type {string}
   * @memberof MediationRecord
   */
  role: string;
  /**
   *
   * @type {Array<string>}
   * @memberof MediationRecord
   */
  routing_keys?: Array<string>;
  /**
   * Current record state
   * @type {string}
   * @memberof MediationRecord
   */
  state?: string;
  /**
   * Time of last record update
   * @type {string}
   * @memberof MediationRecord
   */
  updated_at?: string;
}

export function MediationRecordFromJSON(json: any): MediationRecord {
  return MediationRecordFromJSONTyped(json, false);
}

export function MediationRecordFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): MediationRecord {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    connection_id: json['connection_id'],
    created_at: !exists(json, 'created_at') ? undefined : json['created_at'],
    endpoint: !exists(json, 'endpoint') ? undefined : json['endpoint'],
    mediation_id: !exists(json, 'mediation_id')
      ? undefined
      : json['mediation_id'],
    mediator_terms: !exists(json, 'mediator_terms')
      ? undefined
      : json['mediator_terms'],
    recipient_terms: !exists(json, 'recipient_terms')
      ? undefined
      : json['recipient_terms'],
    role: json['role'],
    routing_keys: !exists(json, 'routing_keys')
      ? undefined
      : json['routing_keys'],
    state: !exists(json, 'state') ? undefined : json['state'],
    updated_at: !exists(json, 'updated_at') ? undefined : json['updated_at'],
  };
}

export function MediationRecordToJSON(value?: MediationRecord | null): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    connection_id: value.connection_id,
    created_at: value.created_at,
    endpoint: value.endpoint,
    mediation_id: value.mediation_id,
    mediator_terms: value.mediator_terms,
    recipient_terms: value.recipient_terms,
    role: value.role,
    routing_keys: value.routing_keys,
    state: value.state,
    updated_at: value.updated_at,
  };
}
