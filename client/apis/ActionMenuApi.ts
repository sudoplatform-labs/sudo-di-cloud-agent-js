/**
 * Sudo Decentralized Identity Cloud Agent SDK
 * Provides REST API wrappers for Typescript Agent Controllers using the Sudo Decentralized Identity Cloud Agent Service
 *
 * The version of the OpenAPI document: v0.6.6
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import * as runtime from '../runtime';
import {
  ActionMenuFetchResult,
  ActionMenuFetchResultFromJSON,
  ActionMenuFetchResultToJSON,
  PerformRequest,
  PerformRequestFromJSON,
  PerformRequestToJSON,
  SendMenu,
  SendMenuFromJSON,
  SendMenuToJSON,
} from '../models';

export interface ActionMenuConnIdClosePostRequest {
  connId: string;
}

export interface ActionMenuConnIdFetchPostRequest {
  connId: string;
}

export interface ActionMenuConnIdPerformPostRequest {
  connId: string;
  body?: PerformRequest;
}

export interface ActionMenuConnIdRequestPostRequest {
  connId: string;
}

export interface ActionMenuConnIdSendMenuPostRequest {
  connId: string;
  body?: SendMenu;
}

/**
 *
 */
export class ActionMenuApi extends runtime.BaseAPI {
  /**
   * Close the active menu associated with a connection
   */
  async actionMenuConnIdClosePostRaw(
    requestParameters: ActionMenuConnIdClosePostRequest,
  ): Promise<runtime.ApiResponse<object>> {
    if (
      requestParameters.connId === null ||
      requestParameters.connId === undefined
    ) {
      throw new runtime.RequiredError(
        'connId',
        'Required parameter requestParameters.connId was null or undefined when calling actionMenuConnIdClosePost.',
      );
    }

    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    const response = await this.request({
      path: `/action-menu/{conn_id}/close`.replace(
        `{${'conn_id'}}`,
        encodeURIComponent(String(requestParameters.connId)),
      ),
      method: 'POST',
      headers: headerParameters,
      query: queryParameters,
    });

    return new runtime.JSONApiResponse<any>(response);
  }

  /**
   * Close the active menu associated with a connection
   */
  async actionMenuConnIdClosePost(
    requestParameters: ActionMenuConnIdClosePostRequest,
  ): Promise<object> {
    const response = await this.actionMenuConnIdClosePostRaw(requestParameters);
    return await response.value();
  }

  /**
   * Fetch the active menu
   */
  async actionMenuConnIdFetchPostRaw(
    requestParameters: ActionMenuConnIdFetchPostRequest,
  ): Promise<runtime.ApiResponse<ActionMenuFetchResult>> {
    if (
      requestParameters.connId === null ||
      requestParameters.connId === undefined
    ) {
      throw new runtime.RequiredError(
        'connId',
        'Required parameter requestParameters.connId was null or undefined when calling actionMenuConnIdFetchPost.',
      );
    }

    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    const response = await this.request({
      path: `/action-menu/{conn_id}/fetch`.replace(
        `{${'conn_id'}}`,
        encodeURIComponent(String(requestParameters.connId)),
      ),
      method: 'POST',
      headers: headerParameters,
      query: queryParameters,
    });

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      ActionMenuFetchResultFromJSON(jsonValue),
    );
  }

  /**
   * Fetch the active menu
   */
  async actionMenuConnIdFetchPost(
    requestParameters: ActionMenuConnIdFetchPostRequest,
  ): Promise<ActionMenuFetchResult> {
    const response = await this.actionMenuConnIdFetchPostRaw(requestParameters);
    return await response.value();
  }

  /**
   * Perform an action associated with the active menu
   */
  async actionMenuConnIdPerformPostRaw(
    requestParameters: ActionMenuConnIdPerformPostRequest,
  ): Promise<runtime.ApiResponse<object>> {
    if (
      requestParameters.connId === null ||
      requestParameters.connId === undefined
    ) {
      throw new runtime.RequiredError(
        'connId',
        'Required parameter requestParameters.connId was null or undefined when calling actionMenuConnIdPerformPost.',
      );
    }

    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    headerParameters['Content-Type'] = 'application/json';

    const response = await this.request({
      path: `/action-menu/{conn_id}/perform`.replace(
        `{${'conn_id'}}`,
        encodeURIComponent(String(requestParameters.connId)),
      ),
      method: 'POST',
      headers: headerParameters,
      query: queryParameters,
      body: PerformRequestToJSON(requestParameters.body),
    });

    return new runtime.JSONApiResponse<any>(response);
  }

  /**
   * Perform an action associated with the active menu
   */
  async actionMenuConnIdPerformPost(
    requestParameters: ActionMenuConnIdPerformPostRequest,
  ): Promise<object> {
    const response = await this.actionMenuConnIdPerformPostRaw(
      requestParameters,
    );
    return await response.value();
  }

  /**
   * Request the active menu
   */
  async actionMenuConnIdRequestPostRaw(
    requestParameters: ActionMenuConnIdRequestPostRequest,
  ): Promise<runtime.ApiResponse<object>> {
    if (
      requestParameters.connId === null ||
      requestParameters.connId === undefined
    ) {
      throw new runtime.RequiredError(
        'connId',
        'Required parameter requestParameters.connId was null or undefined when calling actionMenuConnIdRequestPost.',
      );
    }

    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    const response = await this.request({
      path: `/action-menu/{conn_id}/request`.replace(
        `{${'conn_id'}}`,
        encodeURIComponent(String(requestParameters.connId)),
      ),
      method: 'POST',
      headers: headerParameters,
      query: queryParameters,
    });

    return new runtime.JSONApiResponse<any>(response);
  }

  /**
   * Request the active menu
   */
  async actionMenuConnIdRequestPost(
    requestParameters: ActionMenuConnIdRequestPostRequest,
  ): Promise<object> {
    const response = await this.actionMenuConnIdRequestPostRaw(
      requestParameters,
    );
    return await response.value();
  }

  /**
   * Send an action menu to a connection
   */
  async actionMenuConnIdSendMenuPostRaw(
    requestParameters: ActionMenuConnIdSendMenuPostRequest,
  ): Promise<runtime.ApiResponse<object>> {
    if (
      requestParameters.connId === null ||
      requestParameters.connId === undefined
    ) {
      throw new runtime.RequiredError(
        'connId',
        'Required parameter requestParameters.connId was null or undefined when calling actionMenuConnIdSendMenuPost.',
      );
    }

    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    headerParameters['Content-Type'] = 'application/json';

    const response = await this.request({
      path: `/action-menu/{conn_id}/send-menu`.replace(
        `{${'conn_id'}}`,
        encodeURIComponent(String(requestParameters.connId)),
      ),
      method: 'POST',
      headers: headerParameters,
      query: queryParameters,
      body: SendMenuToJSON(requestParameters.body),
    });

    return new runtime.JSONApiResponse<any>(response);
  }

  /**
   * Send an action menu to a connection
   */
  async actionMenuConnIdSendMenuPost(
    requestParameters: ActionMenuConnIdSendMenuPostRequest,
  ): Promise<object> {
    const response = await this.actionMenuConnIdSendMenuPostRaw(
      requestParameters,
    );
    return await response.value();
  }
}
