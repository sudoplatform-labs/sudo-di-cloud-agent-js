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

export interface ConnectionsConnIdStartIntroductionPostRequest {
  connId: string;
  targetConnectionId: string;
  message?: string;
}

/**
 *
 */
export class IntroductionApi extends runtime.BaseAPI {
  /**
   * Start an introduction between two connections
   */
  async connectionsConnIdStartIntroductionPostRaw(
    requestParameters: ConnectionsConnIdStartIntroductionPostRequest,
  ): Promise<runtime.ApiResponse<object>> {
    if (
      requestParameters.connId === null ||
      requestParameters.connId === undefined
    ) {
      throw new runtime.RequiredError(
        'connId',
        'Required parameter requestParameters.connId was null or undefined when calling connectionsConnIdStartIntroductionPost.',
      );
    }

    if (
      requestParameters.targetConnectionId === null ||
      requestParameters.targetConnectionId === undefined
    ) {
      throw new runtime.RequiredError(
        'targetConnectionId',
        'Required parameter requestParameters.targetConnectionId was null or undefined when calling connectionsConnIdStartIntroductionPost.',
      );
    }

    const queryParameters: any = {};

    if (requestParameters.targetConnectionId !== undefined) {
      queryParameters['target_connection_id'] =
        requestParameters.targetConnectionId;
    }

    if (requestParameters.message !== undefined) {
      queryParameters['message'] = requestParameters.message;
    }

    const headerParameters: runtime.HTTPHeaders = {};

    const response = await this.request({
      path: `/connections/{conn_id}/start-introduction`.replace(
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
   * Start an introduction between two connections
   */
  async connectionsConnIdStartIntroductionPost(
    requestParameters: ConnectionsConnIdStartIntroductionPostRequest,
  ): Promise<object> {
    const response =
      await this.connectionsConnIdStartIntroductionPostRaw(requestParameters);
    return await response.value();
  }
}
