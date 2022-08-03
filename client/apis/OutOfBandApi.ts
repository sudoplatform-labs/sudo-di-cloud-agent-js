/**
 * Sudo Decentralized Identity Cloud Agent SDK
 * Provides REST API wrappers for Typescript Agent Controllers using the Sudo Decentralized Identity Cloud Agent Service
 *
 * The version of the OpenAPI document: v0.6.4
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import * as runtime from '../runtime';
import {
  ConnRecord,
  ConnRecordFromJSON,
  ConnRecordToJSON,
  InvitationCreateRequest,
  InvitationCreateRequestFromJSON,
  InvitationCreateRequestToJSON,
  InvitationMessage,
  InvitationMessageFromJSON,
  InvitationMessageToJSON,
  InvitationRecord,
  InvitationRecordFromJSON,
  InvitationRecordToJSON,
} from '../models';

export interface OutOfBandCreateInvitationPostRequest {
  autoAccept?: boolean;
  multiUse?: boolean;
  body?: InvitationCreateRequest;
}

export interface OutOfBandReceiveInvitationPostRequest {
  alias?: string;
  autoAccept?: boolean;
  mediationId?: string;
  useExistingConnection?: boolean;
  body?: InvitationMessage;
}

/**
 *
 */
export class OutOfBandApi extends runtime.BaseAPI {
  /**
   * Create a new connection invitation
   */
  async outOfBandCreateInvitationPostRaw(
    requestParameters: OutOfBandCreateInvitationPostRequest,
  ): Promise<runtime.ApiResponse<InvitationRecord>> {
    const queryParameters: any = {};

    if (requestParameters.autoAccept !== undefined) {
      queryParameters['auto_accept'] = requestParameters.autoAccept;
    }

    if (requestParameters.multiUse !== undefined) {
      queryParameters['multi_use'] = requestParameters.multiUse;
    }

    const headerParameters: runtime.HTTPHeaders = {};

    headerParameters['Content-Type'] = 'application/json';

    const response = await this.request({
      path: `/out-of-band/create-invitation`,
      method: 'POST',
      headers: headerParameters,
      query: queryParameters,
      body: InvitationCreateRequestToJSON(requestParameters.body),
    });

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      InvitationRecordFromJSON(jsonValue),
    );
  }

  /**
   * Create a new connection invitation
   */
  async outOfBandCreateInvitationPost(
    requestParameters: OutOfBandCreateInvitationPostRequest,
  ): Promise<InvitationRecord> {
    const response = await this.outOfBandCreateInvitationPostRaw(
      requestParameters,
    );
    return await response.value();
  }

  /**
   * Receive a new connection invitation
   */
  async outOfBandReceiveInvitationPostRaw(
    requestParameters: OutOfBandReceiveInvitationPostRequest,
  ): Promise<runtime.ApiResponse<ConnRecord>> {
    const queryParameters: any = {};

    if (requestParameters.alias !== undefined) {
      queryParameters['alias'] = requestParameters.alias;
    }

    if (requestParameters.autoAccept !== undefined) {
      queryParameters['auto_accept'] = requestParameters.autoAccept;
    }

    if (requestParameters.mediationId !== undefined) {
      queryParameters['mediation_id'] = requestParameters.mediationId;
    }

    if (requestParameters.useExistingConnection !== undefined) {
      queryParameters['use_existing_connection'] =
        requestParameters.useExistingConnection;
    }

    const headerParameters: runtime.HTTPHeaders = {};

    headerParameters['Content-Type'] = 'application/json';

    const response = await this.request({
      path: `/out-of-band/receive-invitation`,
      method: 'POST',
      headers: headerParameters,
      query: queryParameters,
      body: InvitationMessageToJSON(requestParameters.body),
    });

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      ConnRecordFromJSON(jsonValue),
    );
  }

  /**
   * Receive a new connection invitation
   */
  async outOfBandReceiveInvitationPost(
    requestParameters: OutOfBandReceiveInvitationPostRequest,
  ): Promise<ConnRecord> {
    const response = await this.outOfBandReceiveInvitationPostRaw(
      requestParameters,
    );
    return await response.value();
  }
}
