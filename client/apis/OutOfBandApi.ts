/**
 * Sudo Decentralized Identity Cloud Agent SDK
 * Provides REST API wrappers for Typescript Agent Controllers using the Sudo Decentralized Identity Cloud Agent Service
 *
 * The version of the OpenAPI document: v0.9.1
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import * as runtime from '../runtime';
import {
  InvitationCreateRequest,
  InvitationCreateRequestFromJSON,
  InvitationCreateRequestToJSON,
  InvitationMessage,
  InvitationMessageFromJSON,
  InvitationMessageToJSON,
  InvitationRecord,
  InvitationRecordFromJSON,
  InvitationRecordToJSON,
  OobRecord,
  OobRecordFromJSON,
  OobRecordToJSON,
} from '../models';

export interface OutOfBandCreateInvitationPostRequest {
  autoAccept?: boolean;
  createUniqueDid?: boolean;
  multiUse?: boolean;
  body?: InvitationCreateRequest;
}

export interface OutOfBandInvitationsInviMsgIdDeleteRequest {
  inviMsgId: string;
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

    if (requestParameters.createUniqueDid !== undefined) {
      queryParameters['create_unique_did'] = requestParameters.createUniqueDid;
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
   * Delete records associated with invitation
   */
  async outOfBandInvitationsInviMsgIdDeleteRaw(
    requestParameters: OutOfBandInvitationsInviMsgIdDeleteRequest,
  ): Promise<runtime.ApiResponse<object>> {
    if (
      requestParameters.inviMsgId === null ||
      requestParameters.inviMsgId === undefined
    ) {
      throw new runtime.RequiredError(
        'inviMsgId',
        'Required parameter requestParameters.inviMsgId was null or undefined when calling outOfBandInvitationsInviMsgIdDelete.',
      );
    }

    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    const response = await this.request({
      path: `/out-of-band/invitations/{invi_msg_id}`.replace(
        `{${'invi_msg_id'}}`,
        encodeURIComponent(String(requestParameters.inviMsgId)),
      ),
      method: 'DELETE',
      headers: headerParameters,
      query: queryParameters,
    });

    return new runtime.JSONApiResponse<any>(response);
  }

  /**
   * Delete records associated with invitation
   */
  async outOfBandInvitationsInviMsgIdDelete(
    requestParameters: OutOfBandInvitationsInviMsgIdDeleteRequest,
  ): Promise<object> {
    const response = await this.outOfBandInvitationsInviMsgIdDeleteRaw(
      requestParameters,
    );
    return await response.value();
  }

  /**
   * Receive a new connection invitation
   */
  async outOfBandReceiveInvitationPostRaw(
    requestParameters: OutOfBandReceiveInvitationPostRequest,
  ): Promise<runtime.ApiResponse<OobRecord>> {
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
      OobRecordFromJSON(jsonValue),
    );
  }

  /**
   * Receive a new connection invitation
   */
  async outOfBandReceiveInvitationPost(
    requestParameters: OutOfBandReceiveInvitationPostRequest,
  ): Promise<OobRecord> {
    const response = await this.outOfBandReceiveInvitationPostRaw(
      requestParameters,
    );
    return await response.value();
  }
}
