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

import * as runtime from '../runtime';
import {
  ConnRecord,
  ConnRecordFromJSON,
  ConnRecordToJSON,
  DIDXRejectRequest,
  DIDXRejectRequestFromJSON,
  DIDXRejectRequestToJSON,
  DIDXRequest,
  DIDXRequestFromJSON,
  DIDXRequestToJSON,
} from '../models';

export interface DidexchangeConnIdAcceptInvitationPostRequest {
  connId: string;
  myEndpoint?: string;
  myLabel?: string;
  useDid?: string;
  useDidMethod?: DidexchangeConnIdAcceptInvitationPostUseDidMethodEnum;
}

export interface DidexchangeConnIdAcceptRequestPostRequest {
  connId: string;
  mediationId?: string;
  myEndpoint?: string;
  usePublicDid?: boolean;
}

export interface DidexchangeConnIdRejectPostRequest {
  connId: string;
  body?: DIDXRejectRequest;
}

export interface DidexchangeCreateRequestPostRequest {
  theirPublicDid: string;
  alias?: string;
  autoAccept?: boolean;
  goal?: string;
  goalCode?: string;
  mediationId?: string;
  myEndpoint?: string;
  myLabel?: string;
  protocol?: DidexchangeCreateRequestPostProtocolEnum;
  useDid?: string;
  useDidMethod?: DidexchangeCreateRequestPostUseDidMethodEnum;
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

    if (requestParameters.useDid !== undefined) {
      queryParameters['use_did'] = requestParameters.useDid;
    }

    if (requestParameters.useDidMethod !== undefined) {
      queryParameters['use_did_method'] = requestParameters.useDidMethod;
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
    const response =
      await this.didexchangeConnIdAcceptInvitationPostRaw(requestParameters);
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

    if (requestParameters.usePublicDid !== undefined) {
      queryParameters['use_public_did'] = requestParameters.usePublicDid;
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
    const response =
      await this.didexchangeConnIdAcceptRequestPostRaw(requestParameters);
    return await response.value();
  }

  /**
   * Abandon or reject a DID Exchange
   */
  async didexchangeConnIdRejectPostRaw(
    requestParameters: DidexchangeConnIdRejectPostRequest,
  ): Promise<runtime.ApiResponse<ConnRecord>> {
    if (
      requestParameters.connId === null ||
      requestParameters.connId === undefined
    ) {
      throw new runtime.RequiredError(
        'connId',
        'Required parameter requestParameters.connId was null or undefined when calling didexchangeConnIdRejectPost.',
      );
    }

    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    headerParameters['Content-Type'] = 'application/json';

    const response = await this.request({
      path: `/didexchange/{conn_id}/reject`.replace(
        `{${'conn_id'}}`,
        encodeURIComponent(String(requestParameters.connId)),
      ),
      method: 'POST',
      headers: headerParameters,
      query: queryParameters,
      body: DIDXRejectRequestToJSON(requestParameters.body),
    });

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      ConnRecordFromJSON(jsonValue),
    );
  }

  /**
   * Abandon or reject a DID Exchange
   */
  async didexchangeConnIdRejectPost(
    requestParameters: DidexchangeConnIdRejectPostRequest,
  ): Promise<ConnRecord> {
    const response =
      await this.didexchangeConnIdRejectPostRaw(requestParameters);
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

    if (requestParameters.autoAccept !== undefined) {
      queryParameters['auto_accept'] = requestParameters.autoAccept;
    }

    if (requestParameters.goal !== undefined) {
      queryParameters['goal'] = requestParameters.goal;
    }

    if (requestParameters.goalCode !== undefined) {
      queryParameters['goal_code'] = requestParameters.goalCode;
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

    if (requestParameters.protocol !== undefined) {
      queryParameters['protocol'] = requestParameters.protocol;
    }

    if (requestParameters.useDid !== undefined) {
      queryParameters['use_did'] = requestParameters.useDid;
    }

    if (requestParameters.useDidMethod !== undefined) {
      queryParameters['use_did_method'] = requestParameters.useDidMethod;
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
    const response =
      await this.didexchangeCreateRequestPostRaw(requestParameters);
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
    const response =
      await this.didexchangeReceiveRequestPostRaw(requestParameters);
    return await response.value();
  }
}

/**
 * @export
 * @enum {string}
 */
export enum DidexchangeConnIdAcceptInvitationPostUseDidMethodEnum {
  _2 = 'did:peer:2',
  _4 = 'did:peer:4',
}
/**
 * @export
 * @enum {string}
 */
export enum DidexchangeCreateRequestPostProtocolEnum {
  _0 = 'didexchange/1.0',
  _1 = 'didexchange/1.1',
}
/**
 * @export
 * @enum {string}
 */
export enum DidexchangeCreateRequestPostUseDidMethodEnum {
  _2 = 'did:peer:2',
  _4 = 'did:peer:4',
}
