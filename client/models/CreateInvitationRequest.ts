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
 * @interface CreateInvitationRequest
 */
export interface CreateInvitationRequest {
  /**
   * Identifier for active mediation record to be used
   * @type {string}
   * @memberof CreateInvitationRequest
   */
  mediation_id?: string;
  /**
   * Optional metadata to attach to the connection created with the invitation
   * @type {{ [key: string]: object; }}
   * @memberof CreateInvitationRequest
   */
  metadata?: { [key: string]: object };
  /**
   * Optional label for connection invitation
   * @type {string}
   * @memberof CreateInvitationRequest
   */
  my_label?: string;
  /**
   * List of recipient keys
   * @type {Array<string>}
   * @memberof CreateInvitationRequest
   */
  recipient_keys?: Array<string>;
  /**
   * List of routing keys
   * @type {Array<string>}
   * @memberof CreateInvitationRequest
   */
  routing_keys?: Array<string>;
  /**
   * Connection endpoint
   * @type {string}
   * @memberof CreateInvitationRequest
   */
  service_endpoint?: string;
}

export function CreateInvitationRequestFromJSON(
  json: any,
): CreateInvitationRequest {
  return CreateInvitationRequestFromJSONTyped(json, false);
}

export function CreateInvitationRequestFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): CreateInvitationRequest {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    mediation_id: !exists(json, 'mediation_id')
      ? undefined
      : json['mediation_id'],
    metadata: !exists(json, 'metadata') ? undefined : json['metadata'],
    my_label: !exists(json, 'my_label') ? undefined : json['my_label'],
    recipient_keys: !exists(json, 'recipient_keys')
      ? undefined
      : json['recipient_keys'],
    routing_keys: !exists(json, 'routing_keys')
      ? undefined
      : json['routing_keys'],
    service_endpoint: !exists(json, 'service_endpoint')
      ? undefined
      : json['service_endpoint'],
  };
}

export function CreateInvitationRequestToJSON(
  value?: CreateInvitationRequest | null,
): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    mediation_id: value.mediation_id,
    metadata: value.metadata,
    my_label: value.my_label,
    recipient_keys: value.recipient_keys,
    routing_keys: value.routing_keys,
    service_endpoint: value.service_endpoint,
  };
}
