/**
 * Sudo Decentralized Identity Cloud Agent SDK
 * Provides REST API wrappers for Typescript Agent Controllers using the Sudo Decentralized Identity Cloud Agency Service
 *
 * The version of the OpenAPI document: v0.5.3
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
  ConnectionList,
  ConnectionListFromJSON,
  ConnectionListToJSON,
  ConnectionMetadata,
  ConnectionMetadataFromJSON,
  ConnectionMetadataToJSON,
  ConnectionMetadataSetRequest,
  ConnectionMetadataSetRequestFromJSON,
  ConnectionMetadataSetRequestToJSON,
  ConnectionStaticRequest,
  ConnectionStaticRequestFromJSON,
  ConnectionStaticRequestToJSON,
  ConnectionStaticResult,
  ConnectionStaticResultFromJSON,
  ConnectionStaticResultToJSON,
  CreateInvitationRequest,
  CreateInvitationRequestFromJSON,
  CreateInvitationRequestToJSON,
  EndpointsResult,
  EndpointsResultFromJSON,
  EndpointsResultToJSON,
  InvitationResult,
  InvitationResultFromJSON,
  InvitationResultToJSON,
  ReceiveInvitationRequest,
  ReceiveInvitationRequestFromJSON,
  ReceiveInvitationRequestToJSON,
} from '../models';

export interface ConnectionsConnIdAcceptInvitationPostRequest {
  connId: string;
  mediationId?: string;
  myEndpoint?: string;
  myLabel?: string;
}

export interface ConnectionsConnIdAcceptRequestPostRequest {
  connId: string;
  myEndpoint?: string;
}

export interface ConnectionsConnIdDeleteRequest {
  connId: string;
}

export interface ConnectionsConnIdEndpointsGetRequest {
  connId: string;
}

export interface ConnectionsConnIdEstablishInboundRefIdPostRequest {
  connId: string;
  refId: string;
}

export interface ConnectionsConnIdGetRequest {
  connId: string;
}

export interface ConnectionsConnIdMetadataGetRequest {
  connId: string;
  key?: string;
}

export interface ConnectionsConnIdMetadataPostRequest {
  connId: string;
  body?: ConnectionMetadataSetRequest;
}

export interface ConnectionsCreateInvitationPostRequest {
  alias?: string;
  autoAccept?: boolean;
  multiUse?: boolean;
  _public?: boolean;
  body?: CreateInvitationRequest;
}

export interface ConnectionsCreateStaticPostRequest {
  body?: ConnectionStaticRequest;
}

export interface ConnectionsGetRequest {
  alias?: string;
  connectionProtocol?: ConnectionsGetConnectionProtocolEnum;
  invitationKey?: string;
  myDid?: string;
  state?: ConnectionsGetStateEnum;
  theirDid?: string;
  theirRole?: ConnectionsGetTheirRoleEnum;
}

export interface ConnectionsReceiveInvitationPostRequest {
  alias?: string;
  autoAccept?: boolean;
  mediationId?: string;
  body?: ReceiveInvitationRequest;
}

/**
 *
 */
export class ConnectionApi extends runtime.BaseAPI {
  /**
   * Accept a stored connection invitation
   */
  async connectionsConnIdAcceptInvitationPostRaw(
    requestParameters: ConnectionsConnIdAcceptInvitationPostRequest,
  ): Promise<runtime.ApiResponse<ConnRecord>> {
    if (
      requestParameters.connId === null ||
      requestParameters.connId === undefined
    ) {
      throw new runtime.RequiredError(
        'connId',
        'Required parameter requestParameters.connId was null or undefined when calling connectionsConnIdAcceptInvitationPost.',
      );
    }

    const queryParameters: any = {};

    if (requestParameters.mediationId !== undefined) {
      queryParameters['mediation_id'] = requestParameters.mediationId;
    }

    if (requestParameters.myEndpoint !== undefined) {
      queryParameters['my_endpoint'] = requestParameters.myEndpoint;
    }

    if (requestParameters.myLabel !== undefined) {
      queryParameters['my_label'] = requestParameters.myLabel;
    }

    const headerParameters: runtime.HTTPHeaders = {};

    const response = await this.request({
      path: `/connections/{conn_id}/accept-invitation`.replace(
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
  async connectionsConnIdAcceptInvitationPost(
    requestParameters: ConnectionsConnIdAcceptInvitationPostRequest,
  ): Promise<ConnRecord> {
    const response = await this.connectionsConnIdAcceptInvitationPostRaw(
      requestParameters,
    );
    return await response.value();
  }

  /**
   * Accept a stored connection request
   */
  async connectionsConnIdAcceptRequestPostRaw(
    requestParameters: ConnectionsConnIdAcceptRequestPostRequest,
  ): Promise<runtime.ApiResponse<ConnRecord>> {
    if (
      requestParameters.connId === null ||
      requestParameters.connId === undefined
    ) {
      throw new runtime.RequiredError(
        'connId',
        'Required parameter requestParameters.connId was null or undefined when calling connectionsConnIdAcceptRequestPost.',
      );
    }

    const queryParameters: any = {};

    if (requestParameters.myEndpoint !== undefined) {
      queryParameters['my_endpoint'] = requestParameters.myEndpoint;
    }

    const headerParameters: runtime.HTTPHeaders = {};

    const response = await this.request({
      path: `/connections/{conn_id}/accept-request`.replace(
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
  async connectionsConnIdAcceptRequestPost(
    requestParameters: ConnectionsConnIdAcceptRequestPostRequest,
  ): Promise<ConnRecord> {
    const response = await this.connectionsConnIdAcceptRequestPostRaw(
      requestParameters,
    );
    return await response.value();
  }

  /**
   * Remove an existing connection record
   */
  async connectionsConnIdDeleteRaw(
    requestParameters: ConnectionsConnIdDeleteRequest,
  ): Promise<runtime.ApiResponse<object>> {
    if (
      requestParameters.connId === null ||
      requestParameters.connId === undefined
    ) {
      throw new runtime.RequiredError(
        'connId',
        'Required parameter requestParameters.connId was null or undefined when calling connectionsConnIdDelete.',
      );
    }

    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    const response = await this.request({
      path: `/connections/{conn_id}`.replace(
        `{${'conn_id'}}`,
        encodeURIComponent(String(requestParameters.connId)),
      ),
      method: 'DELETE',
      headers: headerParameters,
      query: queryParameters,
    });

    return new runtime.JSONApiResponse<any>(response);
  }

  /**
   * Remove an existing connection record
   */
  async connectionsConnIdDelete(
    requestParameters: ConnectionsConnIdDeleteRequest,
  ): Promise<object> {
    const response = await this.connectionsConnIdDeleteRaw(requestParameters);
    return await response.value();
  }

  /**
   * Fetch connection remote endpoint
   */
  async connectionsConnIdEndpointsGetRaw(
    requestParameters: ConnectionsConnIdEndpointsGetRequest,
  ): Promise<runtime.ApiResponse<EndpointsResult>> {
    if (
      requestParameters.connId === null ||
      requestParameters.connId === undefined
    ) {
      throw new runtime.RequiredError(
        'connId',
        'Required parameter requestParameters.connId was null or undefined when calling connectionsConnIdEndpointsGet.',
      );
    }

    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    const response = await this.request({
      path: `/connections/{conn_id}/endpoints`.replace(
        `{${'conn_id'}}`,
        encodeURIComponent(String(requestParameters.connId)),
      ),
      method: 'GET',
      headers: headerParameters,
      query: queryParameters,
    });

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      EndpointsResultFromJSON(jsonValue),
    );
  }

  /**
   * Fetch connection remote endpoint
   */
  async connectionsConnIdEndpointsGet(
    requestParameters: ConnectionsConnIdEndpointsGetRequest,
  ): Promise<EndpointsResult> {
    const response = await this.connectionsConnIdEndpointsGetRaw(
      requestParameters,
    );
    return await response.value();
  }

  /**
   * Assign another connection as the inbound connection
   */
  async connectionsConnIdEstablishInboundRefIdPostRaw(
    requestParameters: ConnectionsConnIdEstablishInboundRefIdPostRequest,
  ): Promise<runtime.ApiResponse<object>> {
    if (
      requestParameters.connId === null ||
      requestParameters.connId === undefined
    ) {
      throw new runtime.RequiredError(
        'connId',
        'Required parameter requestParameters.connId was null or undefined when calling connectionsConnIdEstablishInboundRefIdPost.',
      );
    }

    if (
      requestParameters.refId === null ||
      requestParameters.refId === undefined
    ) {
      throw new runtime.RequiredError(
        'refId',
        'Required parameter requestParameters.refId was null or undefined when calling connectionsConnIdEstablishInboundRefIdPost.',
      );
    }

    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    const response = await this.request({
      path: `/connections/{conn_id}/establish-inbound/{ref_id}`
        .replace(
          `{${'conn_id'}}`,
          encodeURIComponent(String(requestParameters.connId)),
        )
        .replace(
          `{${'ref_id'}}`,
          encodeURIComponent(String(requestParameters.refId)),
        ),
      method: 'POST',
      headers: headerParameters,
      query: queryParameters,
    });

    return new runtime.JSONApiResponse<any>(response);
  }

  /**
   * Assign another connection as the inbound connection
   */
  async connectionsConnIdEstablishInboundRefIdPost(
    requestParameters: ConnectionsConnIdEstablishInboundRefIdPostRequest,
  ): Promise<object> {
    const response = await this.connectionsConnIdEstablishInboundRefIdPostRaw(
      requestParameters,
    );
    return await response.value();
  }

  /**
   * Fetch a single connection record
   */
  async connectionsConnIdGetRaw(
    requestParameters: ConnectionsConnIdGetRequest,
  ): Promise<runtime.ApiResponse<ConnRecord>> {
    if (
      requestParameters.connId === null ||
      requestParameters.connId === undefined
    ) {
      throw new runtime.RequiredError(
        'connId',
        'Required parameter requestParameters.connId was null or undefined when calling connectionsConnIdGet.',
      );
    }

    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    const response = await this.request({
      path: `/connections/{conn_id}`.replace(
        `{${'conn_id'}}`,
        encodeURIComponent(String(requestParameters.connId)),
      ),
      method: 'GET',
      headers: headerParameters,
      query: queryParameters,
    });

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      ConnRecordFromJSON(jsonValue),
    );
  }

  /**
   * Fetch a single connection record
   */
  async connectionsConnIdGet(
    requestParameters: ConnectionsConnIdGetRequest,
  ): Promise<ConnRecord> {
    const response = await this.connectionsConnIdGetRaw(requestParameters);
    return await response.value();
  }

  /**
   * Fetch connection metadata
   */
  async connectionsConnIdMetadataGetRaw(
    requestParameters: ConnectionsConnIdMetadataGetRequest,
  ): Promise<runtime.ApiResponse<ConnectionMetadata>> {
    if (
      requestParameters.connId === null ||
      requestParameters.connId === undefined
    ) {
      throw new runtime.RequiredError(
        'connId',
        'Required parameter requestParameters.connId was null or undefined when calling connectionsConnIdMetadataGet.',
      );
    }

    const queryParameters: any = {};

    if (requestParameters.key !== undefined) {
      queryParameters['key'] = requestParameters.key;
    }

    const headerParameters: runtime.HTTPHeaders = {};

    const response = await this.request({
      path: `/connections/{conn_id}/metadata`.replace(
        `{${'conn_id'}}`,
        encodeURIComponent(String(requestParameters.connId)),
      ),
      method: 'GET',
      headers: headerParameters,
      query: queryParameters,
    });

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      ConnectionMetadataFromJSON(jsonValue),
    );
  }

  /**
   * Fetch connection metadata
   */
  async connectionsConnIdMetadataGet(
    requestParameters: ConnectionsConnIdMetadataGetRequest,
  ): Promise<ConnectionMetadata> {
    const response = await this.connectionsConnIdMetadataGetRaw(
      requestParameters,
    );
    return await response.value();
  }

  /**
   * Set connection metadata
   */
  async connectionsConnIdMetadataPostRaw(
    requestParameters: ConnectionsConnIdMetadataPostRequest,
  ): Promise<runtime.ApiResponse<ConnectionMetadata>> {
    if (
      requestParameters.connId === null ||
      requestParameters.connId === undefined
    ) {
      throw new runtime.RequiredError(
        'connId',
        'Required parameter requestParameters.connId was null or undefined when calling connectionsConnIdMetadataPost.',
      );
    }

    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    headerParameters['Content-Type'] = 'application/json';

    const response = await this.request({
      path: `/connections/{conn_id}/metadata`.replace(
        `{${'conn_id'}}`,
        encodeURIComponent(String(requestParameters.connId)),
      ),
      method: 'POST',
      headers: headerParameters,
      query: queryParameters,
      body: ConnectionMetadataSetRequestToJSON(requestParameters.body),
    });

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      ConnectionMetadataFromJSON(jsonValue),
    );
  }

  /**
   * Set connection metadata
   */
  async connectionsConnIdMetadataPost(
    requestParameters: ConnectionsConnIdMetadataPostRequest,
  ): Promise<ConnectionMetadata> {
    const response = await this.connectionsConnIdMetadataPostRaw(
      requestParameters,
    );
    return await response.value();
  }

  /**
   * Create a new connection invitation
   */
  async connectionsCreateInvitationPostRaw(
    requestParameters: ConnectionsCreateInvitationPostRequest,
  ): Promise<runtime.ApiResponse<InvitationResult>> {
    const queryParameters: any = {};

    if (requestParameters.alias !== undefined) {
      queryParameters['alias'] = requestParameters.alias;
    }

    if (requestParameters.autoAccept !== undefined) {
      queryParameters['auto_accept'] = requestParameters.autoAccept;
    }

    if (requestParameters.multiUse !== undefined) {
      queryParameters['multi_use'] = requestParameters.multiUse;
    }

    if (requestParameters._public !== undefined) {
      queryParameters['public'] = requestParameters._public;
    }

    const headerParameters: runtime.HTTPHeaders = {};

    headerParameters['Content-Type'] = 'application/json';

    const response = await this.request({
      path: `/connections/create-invitation`,
      method: 'POST',
      headers: headerParameters,
      query: queryParameters,
      body: CreateInvitationRequestToJSON(requestParameters.body),
    });

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      InvitationResultFromJSON(jsonValue),
    );
  }

  /**
   * Create a new connection invitation
   */
  async connectionsCreateInvitationPost(
    requestParameters: ConnectionsCreateInvitationPostRequest,
  ): Promise<InvitationResult> {
    const response = await this.connectionsCreateInvitationPostRaw(
      requestParameters,
    );
    return await response.value();
  }

  /**
   * Create a new static connection
   */
  async connectionsCreateStaticPostRaw(
    requestParameters: ConnectionsCreateStaticPostRequest,
  ): Promise<runtime.ApiResponse<ConnectionStaticResult>> {
    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    headerParameters['Content-Type'] = 'application/json';

    const response = await this.request({
      path: `/connections/create-static`,
      method: 'POST',
      headers: headerParameters,
      query: queryParameters,
      body: ConnectionStaticRequestToJSON(requestParameters.body),
    });

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      ConnectionStaticResultFromJSON(jsonValue),
    );
  }

  /**
   * Create a new static connection
   */
  async connectionsCreateStaticPost(
    requestParameters: ConnectionsCreateStaticPostRequest,
  ): Promise<ConnectionStaticResult> {
    const response = await this.connectionsCreateStaticPostRaw(
      requestParameters,
    );
    return await response.value();
  }

  /**
   * Query agent-to-agent connections
   */
  async connectionsGetRaw(
    requestParameters: ConnectionsGetRequest,
  ): Promise<runtime.ApiResponse<ConnectionList>> {
    const queryParameters: any = {};

    if (requestParameters.alias !== undefined) {
      queryParameters['alias'] = requestParameters.alias;
    }

    if (requestParameters.connectionProtocol !== undefined) {
      queryParameters['connection_protocol'] =
        requestParameters.connectionProtocol;
    }

    if (requestParameters.invitationKey !== undefined) {
      queryParameters['invitation_key'] = requestParameters.invitationKey;
    }

    if (requestParameters.myDid !== undefined) {
      queryParameters['my_did'] = requestParameters.myDid;
    }

    if (requestParameters.state !== undefined) {
      queryParameters['state'] = requestParameters.state;
    }

    if (requestParameters.theirDid !== undefined) {
      queryParameters['their_did'] = requestParameters.theirDid;
    }

    if (requestParameters.theirRole !== undefined) {
      queryParameters['their_role'] = requestParameters.theirRole;
    }

    const headerParameters: runtime.HTTPHeaders = {};

    const response = await this.request({
      path: `/connections`,
      method: 'GET',
      headers: headerParameters,
      query: queryParameters,
    });

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      ConnectionListFromJSON(jsonValue),
    );
  }

  /**
   * Query agent-to-agent connections
   */
  async connectionsGet(
    requestParameters: ConnectionsGetRequest,
  ): Promise<ConnectionList> {
    const response = await this.connectionsGetRaw(requestParameters);
    return await response.value();
  }

  /**
   * Receive a new connection invitation
   */
  async connectionsReceiveInvitationPostRaw(
    requestParameters: ConnectionsReceiveInvitationPostRequest,
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

    const headerParameters: runtime.HTTPHeaders = {};

    headerParameters['Content-Type'] = 'application/json';

    const response = await this.request({
      path: `/connections/receive-invitation`,
      method: 'POST',
      headers: headerParameters,
      query: queryParameters,
      body: ReceiveInvitationRequestToJSON(requestParameters.body),
    });

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      ConnRecordFromJSON(jsonValue),
    );
  }

  /**
   * Receive a new connection invitation
   */
  async connectionsReceiveInvitationPost(
    requestParameters: ConnectionsReceiveInvitationPostRequest,
  ): Promise<ConnRecord> {
    const response = await this.connectionsReceiveInvitationPostRaw(
      requestParameters,
    );
    return await response.value();
  }
}

/**
 * @export
 * @enum {string}
 */
export enum ConnectionsGetConnectionProtocolEnum {
  Connections10 = 'connections/1.0',
  Didexchange10 = 'didexchange/1.0',
}
/**
 * @export
 * @enum {string}
 */
export enum ConnectionsGetStateEnum {
  Request = 'request',
  Error = 'error',
  Active = 'active',
  Init = 'init',
  Invitation = 'invitation',
  Start = 'start',
  Abandoned = 'abandoned',
  Completed = 'completed',
  Response = 'response',
}
/**
 * @export
 * @enum {string}
 */
export enum ConnectionsGetTheirRoleEnum {
  Invitee = 'invitee',
  Requester = 'requester',
  Inviter = 'inviter',
  Responder = 'responder',
}
