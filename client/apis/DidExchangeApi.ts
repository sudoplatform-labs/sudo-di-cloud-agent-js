/**
 * Sudo Decentralized Identity Cloud Agent SDK
 * Provides REST API wrappers for Typescript Agent Controllers using the Sudo Decentralized Identity Cloud Agent Service
 *
 * The version of the OpenAPI document: v0.6.5
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
  DIDXRequest,
  DIDXRequestFromJSON,
  DIDXRequestToJSON,
} from '../models';

export interface DidexchangeConnIdAcceptInvitationPostRequest {
  connId: string;
  myEndpoint?: string;
  myLabel?: string;
}

export interface DidexchangeConnIdAcceptRequestPostRequest {
  connId: string;
  mediationId?: string;
  myEndpoint?: string;
}

export interface DidexchangeCreateRequestPostRequest {
  theirPublicDid: string;
  alias?: string;
  mediationId?: string;
  myEndpoint?: string;
  myLabel?: string;
  usePublicDid?: boolean;
}

export interface DidexchangeReceiveRequestPostRequest {
  alias?: string;
  autoAccept?: boolean;
  mediationId?: string;
  myEndpoint?: string;
  body?: DIDXRequest;
}

/**
 *
 */
export class DidExchangeApi extends runtime.BaseAPI {
  /**
   * Accept a stored connection invitation
   */
  async didexchangeConnIdAcceptInvitationPostRaw(
    requestParameters: DidexchangeConnIdAcceptInvitationPostRequest,
  ): Promise<runtime.ApiResponse<ConnRecord>> {
    if (
      requestParameters.connId === null ||
      requestParameters.connId === undefined
    ) {
      throw new runtime.RequiredError(
        'connId',
        'Required parameter requestParameters.connId was null or undefined when calling didexchangeConnIdAcceptInvitationPost.',
      );
    }

    const queryParameters: any = {};

    if (requestParameters.myEndpoint !== undefined) {
      queryParameters['my_endpoint'] = requestParameters.myEndpoint;
    }

    if (requestParameters.myLabel !== undefined) {
      queryParameters['my_label'] = requestParameters.myLabel;
    }

    const headerParameters: runtime.HTTPHeaders = {};

    const response = await this.request({
      path: `/didexchange/{conn_id}/accept-invitation`.replace(
        `{${'conn_id'}}`,
        encodeURIComponent(String(requestParameters.connId)),
      ),
      method: 'POST',
      headers: headerParameters,
      query: queryParameters,
    });

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      ConnRecordFromJSON(jsonValue),
    );
  }

  /**
   * Accept a stored connection invitation
   */
  async didexchangeConnIdAcceptInvitationPost(
    requestParameters: DidexchangeConnIdAcceptInvitationPostRequest,
  ): Promise<ConnRecord> {
    const response = await this.didexchangeConnIdAcceptInvitationPostRaw(
      requestParameters,
    );
    return await response.value();
  }

  /**
   * Accept a stored connection request
   */
  async didexchangeConnIdAcceptRequestPostRaw(
    requestParameters: DidexchangeConnIdAcceptRequestPostRequest,
  ): Promise<runtime.ApiResponse<ConnRecord>> {
    if (
      requestParameters.connId === null ||
      requestParameters.connId === undefined
    ) {
      throw new runtime.RequiredError(
        'connId',
        'Required parameter requestParameters.connId was null or undefined when calling didexchangeConnIdAcceptRequestPost.',
      );
    }

    const queryParameters: any = {};

    if (requestParameters.mediationId !== undefined) {
      queryParameters['mediation_id'] = requestParameters.mediationId;
    }

    if (requestParameters.myEndpoint !== undefined) {
      queryParameters['my_endpoint'] = requestParameters.myEndpoint;
    }

    const headerParameters: runtime.HTTPHeaders = {};

    const response = await this.request({
      path: `/didexchange/{conn_id}/accept-request`.replace(
        `{${'conn_id'}}`,
        encodeURIComponent(String(requestParameters.connId)),
      ),
      method: 'POST',
      headers: headerParameters,
      query: queryParameters,
    });

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      ConnRecordFromJSON(jsonValue),
    );
  }

  /**
   * Accept a stored connection request
   */
  async didexchangeConnIdAcceptRequestPost(
    requestParameters: DidexchangeConnIdAcceptRequestPostRequest,
  ): Promise<ConnRecord> {
    const response = await this.didexchangeConnIdAcceptRequestPostRaw(
      requestParameters,
    );
    return await response.value();
  }

  /**
   * Create and send a request against public DID\'s implicit invitation
   */
  async didexchangeCreateRequestPostRaw(
    requestParameters: DidexchangeCreateRequestPostRequest,
  ): Promise<runtime.ApiResponse<ConnRecord>> {
    if (
      requestParameters.theirPublicDid === null ||
      requestParameters.theirPublicDid === undefined
    ) {
      throw new runtime.RequiredError(
        'theirPublicDid',
        'Required parameter requestParameters.theirPublicDid was null or undefined when calling didexchangeCreateRequestPost.',
      );
    }

    const queryParameters: any = {};

    if (requestParameters.theirPublicDid !== undefined) {
      queryParameters['their_public_did'] = requestParameters.theirPublicDid;
    }

    if (requestParameters.alias !== undefined) {
      queryParameters['alias'] = requestParameters.alias;
    }

    if (requestParameters.mediationId !== undefined) {
      queryParameters['mediation_id'] = requestParameters.mediationId;
    }

    if (requestParameters.myEndpoint !== undefined) {
      queryParameters['my_endpoint'] = requestParameters.myEndpoint;
    }

    if (requestParameters.myLabel !== undefined) {
      queryParameters['my_label'] = requestParameters.myLabel;
    }

    if (requestParameters.usePublicDid !== undefined) {
      queryParameters['use_public_did'] = requestParameters.usePublicDid;
    }

    const headerParameters: runtime.HTTPHeaders = {};

    const response = await this.request({
      path: `/didexchange/create-request`,
      method: 'POST',
      headers: headerParameters,
      query: queryParameters,
    });

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      ConnRecordFromJSON(jsonValue),
    );
  }

  /**
   * Create and send a request against public DID\'s implicit invitation
   */
  async didexchangeCreateRequestPost(
    requestParameters: DidexchangeCreateRequestPostRequest,
  ): Promise<ConnRecord> {
    const response = await this.didexchangeCreateRequestPostRaw(
      requestParameters,
    );
    return await response.value();
  }

  /**
   * Receive request against public DID\'s implicit invitation
   */
  async didexchangeReceiveRequestPostRaw(
    requestParameters: DidexchangeReceiveRequestPostRequest,
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

    if (requestParameters.myEndpoint !== undefined) {
      queryParameters['my_endpoint'] = requestParameters.myEndpoint;
    }

    const headerParameters: runtime.HTTPHeaders = {};

    headerParameters['Content-Type'] = 'application/json';

    const response = await this.request({
      path: `/didexchange/receive-request`,
      method: 'POST',
      headers: headerParameters,
      query: queryParameters,
      body: DIDXRequestToJSON(requestParameters.body),
    });

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      ConnRecordFromJSON(jsonValue),
    );
  }

  /**
   * Receive request against public DID\'s implicit invitation
   */
  async didexchangeReceiveRequestPost(
    requestParameters: DidexchangeReceiveRequestPostRequest,
  ): Promise<ConnRecord> {
    const response = await this.didexchangeReceiveRequestPostRaw(
      requestParameters,
    );
    return await response.value();
  }
}
