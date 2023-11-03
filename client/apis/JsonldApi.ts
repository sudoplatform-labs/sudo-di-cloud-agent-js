/**
 * Sudo Decentralized Identity Cloud Agent SDK
 * Provides REST API wrappers for Typescript Agent Controllers using the Sudo Decentralized Identity Cloud Agent Service
 *
 * The version of the OpenAPI document: v0.7.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import * as runtime from '../runtime';
import {
  SignRequest,
  SignRequestFromJSON,
  SignRequestToJSON,
  SignResponse,
  SignResponseFromJSON,
  SignResponseToJSON,
  VerifyRequest,
  VerifyRequestFromJSON,
  VerifyRequestToJSON,
  VerifyResponse,
  VerifyResponseFromJSON,
  VerifyResponseToJSON,
} from '../models';

export interface JsonldSignPostRequest {
  body?: SignRequest;
}

export interface JsonldVerifyPostRequest {
  body?: VerifyRequest;
}

/**
 *
 */
export class JsonldApi extends runtime.BaseAPI {
  /**
   * Sign a JSON-LD structure and return it
   */
  async jsonldSignPostRaw(
    requestParameters: JsonldSignPostRequest,
  ): Promise<runtime.ApiResponse<SignResponse>> {
    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    headerParameters['Content-Type'] = 'application/json';

    const response = await this.request({
      path: `/jsonld/sign`,
      method: 'POST',
      headers: headerParameters,
      query: queryParameters,
      body: SignRequestToJSON(requestParameters.body),
    });

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      SignResponseFromJSON(jsonValue),
    );
  }

  /**
   * Sign a JSON-LD structure and return it
   */
  async jsonldSignPost(
    requestParameters: JsonldSignPostRequest,
  ): Promise<SignResponse> {
    const response = await this.jsonldSignPostRaw(requestParameters);
    return await response.value();
  }

  /**
   * Verify a JSON-LD structure.
   */
  async jsonldVerifyPostRaw(
    requestParameters: JsonldVerifyPostRequest,
  ): Promise<runtime.ApiResponse<VerifyResponse>> {
    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    headerParameters['Content-Type'] = 'application/json';

    const response = await this.request({
      path: `/jsonld/verify`,
      method: 'POST',
      headers: headerParameters,
      query: queryParameters,
      body: VerifyRequestToJSON(requestParameters.body),
    });

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      VerifyResponseFromJSON(jsonValue),
    );
  }

  /**
   * Verify a JSON-LD structure.
   */
  async jsonldVerifyPost(
    requestParameters: JsonldVerifyPostRequest,
  ): Promise<VerifyResponse> {
    const response = await this.jsonldVerifyPostRaw(requestParameters);
    return await response.value();
  }
}
