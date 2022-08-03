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
  PingRequest,
  PingRequestFromJSON,
  PingRequestToJSON,
  PingRequestResponse,
  PingRequestResponseFromJSON,
  PingRequestResponseToJSON,
} from '../models';

export interface ConnectionsConnIdSendPingPostRequest {
  connId: string;
  body?: PingRequest;
}

/**
 *
 */
export class TrustpingApi extends runtime.BaseAPI {
  /**
   * Send a trust ping to a connection
   */
  async connectionsConnIdSendPingPostRaw(
    requestParameters: ConnectionsConnIdSendPingPostRequest,
  ): Promise<runtime.ApiResponse<PingRequestResponse>> {
    if (
      requestParameters.connId === null ||
      requestParameters.connId === undefined
    ) {
      throw new runtime.RequiredError(
        'connId',
        'Required parameter requestParameters.connId was null or undefined when calling connectionsConnIdSendPingPost.',
      );
    }

    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    headerParameters['Content-Type'] = 'application/json';

    const response = await this.request({
      path: `/connections/{conn_id}/send-ping`.replace(
        `{${'conn_id'}}`,
        encodeURIComponent(String(requestParameters.connId)),
      ),
      method: 'POST',
      headers: headerParameters,
      query: queryParameters,
      body: PingRequestToJSON(requestParameters.body),
    });

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      PingRequestResponseFromJSON(jsonValue),
    );
  }

  /**
   * Send a trust ping to a connection
   */
  async connectionsConnIdSendPingPost(
    requestParameters: ConnectionsConnIdSendPingPostRequest,
  ): Promise<PingRequestResponse> {
    const response = await this.connectionsConnIdSendPingPostRaw(
      requestParameters,
    );
    return await response.value();
  }
}
