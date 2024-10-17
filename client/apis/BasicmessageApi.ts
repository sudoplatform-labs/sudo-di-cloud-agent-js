/**
 * Sudo Decentralized Identity Cloud Agent SDK
 * Provides REST API wrappers for Typescript Agent Controllers using the Sudo Decentralized Identity Cloud Agent Service
 *
 * The version of the OpenAPI document: v0.10.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import * as runtime from '../runtime';
import { SendMessage, SendMessageFromJSON, SendMessageToJSON } from '../models';

export interface ConnectionsConnIdSendMessagePostRequest {
  connId: string;
  body?: SendMessage;
}

/**
 *
 */
export class BasicmessageApi extends runtime.BaseAPI {
  /**
   * Send a basic message to a connection
   */
  async connectionsConnIdSendMessagePostRaw(
    requestParameters: ConnectionsConnIdSendMessagePostRequest,
  ): Promise<runtime.ApiResponse<object>> {
    if (
      requestParameters.connId === null ||
      requestParameters.connId === undefined
    ) {
      throw new runtime.RequiredError(
        'connId',
        'Required parameter requestParameters.connId was null or undefined when calling connectionsConnIdSendMessagePost.',
      );
    }

    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    headerParameters['Content-Type'] = 'application/json';

    const response = await this.request({
      path: `/connections/{conn_id}/send-message`.replace(
        `{${'conn_id'}}`,
        encodeURIComponent(String(requestParameters.connId)),
      ),
      method: 'POST',
      headers: headerParameters,
      query: queryParameters,
      body: SendMessageToJSON(requestParameters.body),
    });

    return new runtime.JSONApiResponse<any>(response);
  }

  /**
   * Send a basic message to a connection
   */
  async connectionsConnIdSendMessagePost(
    requestParameters: ConnectionsConnIdSendMessagePostRequest,
  ): Promise<object> {
    const response = await this.connectionsConnIdSendMessagePostRaw(
      requestParameters,
    );
    return await response.value();
  }
}
