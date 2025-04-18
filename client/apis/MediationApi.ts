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
  Keylist,
  KeylistFromJSON,
  KeylistToJSON,
  KeylistQuery,
  KeylistQueryFromJSON,
  KeylistQueryToJSON,
  KeylistQueryFilterRequest,
  KeylistQueryFilterRequestFromJSON,
  KeylistQueryFilterRequestToJSON,
  KeylistUpdate,
  KeylistUpdateFromJSON,
  KeylistUpdateToJSON,
  KeylistUpdateRequest,
  KeylistUpdateRequestFromJSON,
  KeylistUpdateRequestToJSON,
  MediationDeny,
  MediationDenyFromJSON,
  MediationDenyToJSON,
  MediationGrant,
  MediationGrantFromJSON,
  MediationGrantToJSON,
  MediationIdMatchInfo,
  MediationIdMatchInfoFromJSON,
  MediationIdMatchInfoToJSON,
  MediationList,
  MediationListFromJSON,
  MediationListToJSON,
  MediationRecord,
  MediationRecordFromJSON,
  MediationRecordToJSON,
} from '../models';

export interface MediationKeylistsGetRequest {
  connId?: string;
  role?: MediationKeylistsGetRoleEnum;
}

export interface MediationKeylistsMediationIdSendKeylistQueryPostRequest {
  mediationId: string;
  paginateLimit?: number;
  paginateOffset?: number;
  body?: KeylistQueryFilterRequest;
}

export interface MediationKeylistsMediationIdSendKeylistUpdatePostRequest {
  mediationId: string;
  body?: KeylistUpdateRequest;
}

export interface MediationMediationIdDefaultMediatorPutRequest {
  mediationId: string;
}

export interface MediationRequestConnIdPostRequest {
  connId: string;
  body?: object;
}

export interface MediationRequestsGetRequest {
  connId?: string;
  state?: MediationRequestsGetStateEnum;
}

export interface MediationRequestsMediationIdDeleteRequest {
  mediationId: string;
}

export interface MediationRequestsMediationIdDenyPostRequest {
  mediationId: string;
  body?: object;
}

export interface MediationRequestsMediationIdGetRequest {
  mediationId: string;
}

export interface MediationRequestsMediationIdGrantPostRequest {
  mediationId: string;
}

export interface MediationUpdateKeylistConnIdPostRequest {
  connId: string;
  body?: MediationIdMatchInfo;
}

/**
 *
 */
export class MediationApi extends runtime.BaseAPI {
  /**
   * Clear default mediator
   */
  async mediationDefaultMediatorDeleteRaw(): Promise<
    runtime.ApiResponse<MediationRecord>
  > {
    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    const response = await this.request({
      path: `/mediation/default-mediator`,
      method: 'DELETE',
      headers: headerParameters,
      query: queryParameters,
    });

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      MediationRecordFromJSON(jsonValue),
    );
  }

  /**
   * Clear default mediator
   */
  async mediationDefaultMediatorDelete(): Promise<MediationRecord> {
    const response = await this.mediationDefaultMediatorDeleteRaw();
    return await response.value();
  }

  /**
   * Get default mediator
   */
  async mediationDefaultMediatorGetRaw(): Promise<
    runtime.ApiResponse<MediationRecord>
  > {
    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    const response = await this.request({
      path: `/mediation/default-mediator`,
      method: 'GET',
      headers: headerParameters,
      query: queryParameters,
    });

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      MediationRecordFromJSON(jsonValue),
    );
  }

  /**
   * Get default mediator
   */
  async mediationDefaultMediatorGet(): Promise<MediationRecord> {
    const response = await this.mediationDefaultMediatorGetRaw();
    return await response.value();
  }

  /**
   * Retrieve keylists by connection or role
   */
  async mediationKeylistsGetRaw(
    requestParameters: MediationKeylistsGetRequest,
  ): Promise<runtime.ApiResponse<Keylist>> {
    const queryParameters: any = {};

    if (requestParameters.connId !== undefined) {
      queryParameters['conn_id'] = requestParameters.connId;
    }

    if (requestParameters.role !== undefined) {
      queryParameters['role'] = requestParameters.role;
    }

    const headerParameters: runtime.HTTPHeaders = {};

    const response = await this.request({
      path: `/mediation/keylists`,
      method: 'GET',
      headers: headerParameters,
      query: queryParameters,
    });

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      KeylistFromJSON(jsonValue),
    );
  }

  /**
   * Retrieve keylists by connection or role
   */
  async mediationKeylistsGet(
    requestParameters: MediationKeylistsGetRequest,
  ): Promise<Keylist> {
    const response = await this.mediationKeylistsGetRaw(requestParameters);
    return await response.value();
  }

  /**
   * Send keylist query to mediator
   */
  async mediationKeylistsMediationIdSendKeylistQueryPostRaw(
    requestParameters: MediationKeylistsMediationIdSendKeylistQueryPostRequest,
  ): Promise<runtime.ApiResponse<KeylistQuery>> {
    if (
      requestParameters.mediationId === null ||
      requestParameters.mediationId === undefined
    ) {
      throw new runtime.RequiredError(
        'mediationId',
        'Required parameter requestParameters.mediationId was null or undefined when calling mediationKeylistsMediationIdSendKeylistQueryPost.',
      );
    }

    const queryParameters: any = {};

    if (requestParameters.paginateLimit !== undefined) {
      queryParameters['paginate_limit'] = requestParameters.paginateLimit;
    }

    if (requestParameters.paginateOffset !== undefined) {
      queryParameters['paginate_offset'] = requestParameters.paginateOffset;
    }

    const headerParameters: runtime.HTTPHeaders = {};

    headerParameters['Content-Type'] = 'application/json';

    const response = await this.request({
      path: `/mediation/keylists/{mediation_id}/send-keylist-query`.replace(
        `{${'mediation_id'}}`,
        encodeURIComponent(String(requestParameters.mediationId)),
      ),
      method: 'POST',
      headers: headerParameters,
      query: queryParameters,
      body: KeylistQueryFilterRequestToJSON(requestParameters.body),
    });

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      KeylistQueryFromJSON(jsonValue),
    );
  }

  /**
   * Send keylist query to mediator
   */
  async mediationKeylistsMediationIdSendKeylistQueryPost(
    requestParameters: MediationKeylistsMediationIdSendKeylistQueryPostRequest,
  ): Promise<KeylistQuery> {
    const response =
      await this.mediationKeylistsMediationIdSendKeylistQueryPostRaw(
        requestParameters,
      );
    return await response.value();
  }

  /**
   * Send keylist update to mediator
   */
  async mediationKeylistsMediationIdSendKeylistUpdatePostRaw(
    requestParameters: MediationKeylistsMediationIdSendKeylistUpdatePostRequest,
  ): Promise<runtime.ApiResponse<KeylistUpdate>> {
    if (
      requestParameters.mediationId === null ||
      requestParameters.mediationId === undefined
    ) {
      throw new runtime.RequiredError(
        'mediationId',
        'Required parameter requestParameters.mediationId was null or undefined when calling mediationKeylistsMediationIdSendKeylistUpdatePost.',
      );
    }

    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    headerParameters['Content-Type'] = 'application/json';

    const response = await this.request({
      path: `/mediation/keylists/{mediation_id}/send-keylist-update`.replace(
        `{${'mediation_id'}}`,
        encodeURIComponent(String(requestParameters.mediationId)),
      ),
      method: 'POST',
      headers: headerParameters,
      query: queryParameters,
      body: KeylistUpdateRequestToJSON(requestParameters.body),
    });

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      KeylistUpdateFromJSON(jsonValue),
    );
  }

  /**
   * Send keylist update to mediator
   */
  async mediationKeylistsMediationIdSendKeylistUpdatePost(
    requestParameters: MediationKeylistsMediationIdSendKeylistUpdatePostRequest,
  ): Promise<KeylistUpdate> {
    const response =
      await this.mediationKeylistsMediationIdSendKeylistUpdatePostRaw(
        requestParameters,
      );
    return await response.value();
  }

  /**
   * Set default mediator
   */
  async mediationMediationIdDefaultMediatorPutRaw(
    requestParameters: MediationMediationIdDefaultMediatorPutRequest,
  ): Promise<runtime.ApiResponse<MediationRecord>> {
    if (
      requestParameters.mediationId === null ||
      requestParameters.mediationId === undefined
    ) {
      throw new runtime.RequiredError(
        'mediationId',
        'Required parameter requestParameters.mediationId was null or undefined when calling mediationMediationIdDefaultMediatorPut.',
      );
    }

    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    const response = await this.request({
      path: `/mediation/{mediation_id}/default-mediator`.replace(
        `{${'mediation_id'}}`,
        encodeURIComponent(String(requestParameters.mediationId)),
      ),
      method: 'PUT',
      headers: headerParameters,
      query: queryParameters,
    });

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      MediationRecordFromJSON(jsonValue),
    );
  }

  /**
   * Set default mediator
   */
  async mediationMediationIdDefaultMediatorPut(
    requestParameters: MediationMediationIdDefaultMediatorPutRequest,
  ): Promise<MediationRecord> {
    const response =
      await this.mediationMediationIdDefaultMediatorPutRaw(requestParameters);
    return await response.value();
  }

  /**
   * Request mediation from connection
   */
  async mediationRequestConnIdPostRaw(
    requestParameters: MediationRequestConnIdPostRequest,
  ): Promise<runtime.ApiResponse<MediationRecord>> {
    if (
      requestParameters.connId === null ||
      requestParameters.connId === undefined
    ) {
      throw new runtime.RequiredError(
        'connId',
        'Required parameter requestParameters.connId was null or undefined when calling mediationRequestConnIdPost.',
      );
    }

    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    headerParameters['Content-Type'] = 'application/json';

    const response = await this.request({
      path: `/mediation/request/{conn_id}`.replace(
        `{${'conn_id'}}`,
        encodeURIComponent(String(requestParameters.connId)),
      ),
      method: 'POST',
      headers: headerParameters,
      query: queryParameters,
      body: requestParameters.body as any,
    });

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      MediationRecordFromJSON(jsonValue),
    );
  }

  /**
   * Request mediation from connection
   */
  async mediationRequestConnIdPost(
    requestParameters: MediationRequestConnIdPostRequest,
  ): Promise<MediationRecord> {
    const response =
      await this.mediationRequestConnIdPostRaw(requestParameters);
    return await response.value();
  }

  /**
   * Query mediation requests, returns list of all mediation records
   */
  async mediationRequestsGetRaw(
    requestParameters: MediationRequestsGetRequest,
  ): Promise<runtime.ApiResponse<MediationList>> {
    const queryParameters: any = {};

    if (requestParameters.connId !== undefined) {
      queryParameters['conn_id'] = requestParameters.connId;
    }

    if (requestParameters.state !== undefined) {
      queryParameters['state'] = requestParameters.state;
    }

    const headerParameters: runtime.HTTPHeaders = {};

    const response = await this.request({
      path: `/mediation/requests`,
      method: 'GET',
      headers: headerParameters,
      query: queryParameters,
    });

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      MediationListFromJSON(jsonValue),
    );
  }

  /**
   * Query mediation requests, returns list of all mediation records
   */
  async mediationRequestsGet(
    requestParameters: MediationRequestsGetRequest,
  ): Promise<MediationList> {
    const response = await this.mediationRequestsGetRaw(requestParameters);
    return await response.value();
  }

  /**
   * Delete mediation request by ID
   */
  async mediationRequestsMediationIdDeleteRaw(
    requestParameters: MediationRequestsMediationIdDeleteRequest,
  ): Promise<runtime.ApiResponse<MediationRecord>> {
    if (
      requestParameters.mediationId === null ||
      requestParameters.mediationId === undefined
    ) {
      throw new runtime.RequiredError(
        'mediationId',
        'Required parameter requestParameters.mediationId was null or undefined when calling mediationRequestsMediationIdDelete.',
      );
    }

    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    const response = await this.request({
      path: `/mediation/requests/{mediation_id}`.replace(
        `{${'mediation_id'}}`,
        encodeURIComponent(String(requestParameters.mediationId)),
      ),
      method: 'DELETE',
      headers: headerParameters,
      query: queryParameters,
    });

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      MediationRecordFromJSON(jsonValue),
    );
  }

  /**
   * Delete mediation request by ID
   */
  async mediationRequestsMediationIdDelete(
    requestParameters: MediationRequestsMediationIdDeleteRequest,
  ): Promise<MediationRecord> {
    const response =
      await this.mediationRequestsMediationIdDeleteRaw(requestParameters);
    return await response.value();
  }

  /**
   * Deny a stored mediation request
   */
  async mediationRequestsMediationIdDenyPostRaw(
    requestParameters: MediationRequestsMediationIdDenyPostRequest,
  ): Promise<runtime.ApiResponse<MediationDeny>> {
    if (
      requestParameters.mediationId === null ||
      requestParameters.mediationId === undefined
    ) {
      throw new runtime.RequiredError(
        'mediationId',
        'Required parameter requestParameters.mediationId was null or undefined when calling mediationRequestsMediationIdDenyPost.',
      );
    }

    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    headerParameters['Content-Type'] = 'application/json';

    const response = await this.request({
      path: `/mediation/requests/{mediation_id}/deny`.replace(
        `{${'mediation_id'}}`,
        encodeURIComponent(String(requestParameters.mediationId)),
      ),
      method: 'POST',
      headers: headerParameters,
      query: queryParameters,
      body: requestParameters.body as any,
    });

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      MediationDenyFromJSON(jsonValue),
    );
  }

  /**
   * Deny a stored mediation request
   */
  async mediationRequestsMediationIdDenyPost(
    requestParameters: MediationRequestsMediationIdDenyPostRequest,
  ): Promise<MediationDeny> {
    const response =
      await this.mediationRequestsMediationIdDenyPostRaw(requestParameters);
    return await response.value();
  }

  /**
   * Retrieve mediation request record
   */
  async mediationRequestsMediationIdGetRaw(
    requestParameters: MediationRequestsMediationIdGetRequest,
  ): Promise<runtime.ApiResponse<MediationRecord>> {
    if (
      requestParameters.mediationId === null ||
      requestParameters.mediationId === undefined
    ) {
      throw new runtime.RequiredError(
        'mediationId',
        'Required parameter requestParameters.mediationId was null or undefined when calling mediationRequestsMediationIdGet.',
      );
    }

    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    const response = await this.request({
      path: `/mediation/requests/{mediation_id}`.replace(
        `{${'mediation_id'}}`,
        encodeURIComponent(String(requestParameters.mediationId)),
      ),
      method: 'GET',
      headers: headerParameters,
      query: queryParameters,
    });

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      MediationRecordFromJSON(jsonValue),
    );
  }

  /**
   * Retrieve mediation request record
   */
  async mediationRequestsMediationIdGet(
    requestParameters: MediationRequestsMediationIdGetRequest,
  ): Promise<MediationRecord> {
    const response =
      await this.mediationRequestsMediationIdGetRaw(requestParameters);
    return await response.value();
  }

  /**
   * Grant received mediation
   */
  async mediationRequestsMediationIdGrantPostRaw(
    requestParameters: MediationRequestsMediationIdGrantPostRequest,
  ): Promise<runtime.ApiResponse<MediationGrant>> {
    if (
      requestParameters.mediationId === null ||
      requestParameters.mediationId === undefined
    ) {
      throw new runtime.RequiredError(
        'mediationId',
        'Required parameter requestParameters.mediationId was null or undefined when calling mediationRequestsMediationIdGrantPost.',
      );
    }

    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    const response = await this.request({
      path: `/mediation/requests/{mediation_id}/grant`.replace(
        `{${'mediation_id'}}`,
        encodeURIComponent(String(requestParameters.mediationId)),
      ),
      method: 'POST',
      headers: headerParameters,
      query: queryParameters,
    });

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      MediationGrantFromJSON(jsonValue),
    );
  }

  /**
   * Grant received mediation
   */
  async mediationRequestsMediationIdGrantPost(
    requestParameters: MediationRequestsMediationIdGrantPostRequest,
  ): Promise<MediationGrant> {
    const response =
      await this.mediationRequestsMediationIdGrantPostRaw(requestParameters);
    return await response.value();
  }

  /**
   * Update keylist for a connection
   */
  async mediationUpdateKeylistConnIdPostRaw(
    requestParameters: MediationUpdateKeylistConnIdPostRequest,
  ): Promise<runtime.ApiResponse<KeylistUpdate>> {
    if (
      requestParameters.connId === null ||
      requestParameters.connId === undefined
    ) {
      throw new runtime.RequiredError(
        'connId',
        'Required parameter requestParameters.connId was null or undefined when calling mediationUpdateKeylistConnIdPost.',
      );
    }

    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    headerParameters['Content-Type'] = 'application/json';

    const response = await this.request({
      path: `/mediation/update-keylist/{conn_id}`.replace(
        `{${'conn_id'}}`,
        encodeURIComponent(String(requestParameters.connId)),
      ),
      method: 'POST',
      headers: headerParameters,
      query: queryParameters,
      body: MediationIdMatchInfoToJSON(requestParameters.body),
    });

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      KeylistUpdateFromJSON(jsonValue),
    );
  }

  /**
   * Update keylist for a connection
   */
  async mediationUpdateKeylistConnIdPost(
    requestParameters: MediationUpdateKeylistConnIdPostRequest,
  ): Promise<KeylistUpdate> {
    const response =
      await this.mediationUpdateKeylistConnIdPostRaw(requestParameters);
    return await response.value();
  }
}

/**
 * @export
 * @enum {string}
 */
export enum MediationKeylistsGetRoleEnum {
  Client = 'client',
  Server = 'server',
}
/**
 * @export
 * @enum {string}
 */
export enum MediationRequestsGetStateEnum {
  Request = 'request',
  Granted = 'granted',
  Denied = 'denied',
}
