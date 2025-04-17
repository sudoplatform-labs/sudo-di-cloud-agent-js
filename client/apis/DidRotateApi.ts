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
  DIDRotateRequestJSON,
  DIDRotateRequestJSONFromJSON,
  DIDRotateRequestJSONToJSON,
  Hangup,
  HangupFromJSON,
  HangupToJSON,
  Rotate,
  RotateFromJSON,
  RotateToJSON,
} from '../models';

export interface DidRotateConnIdHangupPostRequest {
  connId: string;
}

export interface DidRotateConnIdRotatePostRequest {
  connId: string;
  body?: DIDRotateRequestJSON;
}

/**
 *
 */
export class DidRotateApi extends runtime.BaseAPI {
  /**
   * Send hangup of DID rotation as a rotator
   */
  async didRotateConnIdHangupPostRaw(
    requestParameters: DidRotateConnIdHangupPostRequest,
  ): Promise<runtime.ApiResponse<Hangup>> {
    if (
      requestParameters.connId === null ||
      requestParameters.connId === undefined
    ) {
      throw new runtime.RequiredError(
        'connId',
        'Required parameter requestParameters.connId was null or undefined when calling didRotateConnIdHangupPost.',
      );
    }

    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    const response = await this.request({
      path: `/did-rotate/{conn_id}/hangup`.replace(
        `{${'conn_id'}}`,
        encodeURIComponent(String(requestParameters.connId)),
      ),
      method: 'POST',
      headers: headerParameters,
      query: queryParameters,
    });

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      HangupFromJSON(jsonValue),
    );
  }

  /**
   * Send hangup of DID rotation as a rotator
   */
  async didRotateConnIdHangupPost(
    requestParameters: DidRotateConnIdHangupPostRequest,
  ): Promise<Hangup> {
    const response = await this.didRotateConnIdHangupPostRaw(requestParameters);
    return await response.value();
  }

  /**
   * Begin rotation of a DID as a rotator
   */
  async didRotateConnIdRotatePostRaw(
    requestParameters: DidRotateConnIdRotatePostRequest,
  ): Promise<runtime.ApiResponse<Rotate>> {
    if (
      requestParameters.connId === null ||
      requestParameters.connId === undefined
    ) {
      throw new runtime.RequiredError(
        'connId',
        'Required parameter requestParameters.connId was null or undefined when calling didRotateConnIdRotatePost.',
      );
    }

    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    headerParameters['Content-Type'] = 'application/json';

    const response = await this.request({
      path: `/did-rotate/{conn_id}/rotate`.replace(
        `{${'conn_id'}}`,
        encodeURIComponent(String(requestParameters.connId)),
      ),
      method: 'POST',
      headers: headerParameters,
      query: queryParameters,
      body: DIDRotateRequestJSONToJSON(requestParameters.body),
    });

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      RotateFromJSON(jsonValue),
    );
  }

  /**
   * Begin rotation of a DID as a rotator
   */
  async didRotateConnIdRotatePost(
    requestParameters: DidRotateConnIdRotatePostRequest,
  ): Promise<Rotate> {
    const response = await this.didRotateConnIdRotatePostRaw(requestParameters);
    return await response.value();
  }
}
