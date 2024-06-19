/**
 * Sudo Decentralized Identity Cloud Agent SDK
 * Provides REST API wrappers for Typescript Agent Controllers using the Sudo Decentralized Identity Cloud Agent Service
 *
 * The version of the OpenAPI document: v0.9.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import * as runtime from '../runtime';
import {
  FetchCredentialResponse,
  FetchCredentialResponseFromJSON,
  FetchCredentialResponseToJSON,
  IssueCredentialRequest,
  IssueCredentialRequestFromJSON,
  IssueCredentialRequestToJSON,
  IssueCredentialResponse,
  IssueCredentialResponseFromJSON,
  IssueCredentialResponseToJSON,
  ProvePresentationRequest,
  ProvePresentationRequestFromJSON,
  ProvePresentationRequestToJSON,
  ProvePresentationResponse,
  ProvePresentationResponseFromJSON,
  ProvePresentationResponseToJSON,
  VerifyCredentialRequest,
  VerifyCredentialRequestFromJSON,
  VerifyCredentialRequestToJSON,
  VerifyCredentialResponse,
  VerifyCredentialResponseFromJSON,
  VerifyCredentialResponseToJSON,
  VerifyPresentationRequest,
  VerifyPresentationRequestFromJSON,
  VerifyPresentationRequestToJSON,
  VerifyPresentationResponse,
  VerifyPresentationResponseFromJSON,
  VerifyPresentationResponseToJSON,
} from '../models';

export interface VcCredentialsCredentialIdGetRequest {
  credentialId: string;
}

export interface VcCredentialsIssuePostRequest {
  body?: IssueCredentialRequest;
}

export interface VcCredentialsVerifyPostRequest {
  body?: VerifyCredentialRequest;
}

export interface VcPresentationsProvePostRequest {
  body?: ProvePresentationRequest;
}

export interface VcPresentationsVerifyPostRequest {
  body?: VerifyPresentationRequest;
}

/**
 *
 */
export class VcApiApi extends runtime.BaseAPI {
  /**
   * Fetch credential by ID
   */
  async vcCredentialsCredentialIdGetRaw(
    requestParameters: VcCredentialsCredentialIdGetRequest,
  ): Promise<runtime.ApiResponse<FetchCredentialResponse>> {
    if (
      requestParameters.credentialId === null ||
      requestParameters.credentialId === undefined
    ) {
      throw new runtime.RequiredError(
        'credentialId',
        'Required parameter requestParameters.credentialId was null or undefined when calling vcCredentialsCredentialIdGet.',
      );
    }

    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    const response = await this.request({
      path: `/vc/credentials/{credential_id}`.replace(
        `{${'credential_id'}}`,
        encodeURIComponent(String(requestParameters.credentialId)),
      ),
      method: 'GET',
      headers: headerParameters,
      query: queryParameters,
    });

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      FetchCredentialResponseFromJSON(jsonValue),
    );
  }

  /**
   * Fetch credential by ID
   */
  async vcCredentialsCredentialIdGet(
    requestParameters: VcCredentialsCredentialIdGetRequest,
  ): Promise<FetchCredentialResponse> {
    const response = await this.vcCredentialsCredentialIdGetRaw(
      requestParameters,
    );
    return await response.value();
  }

  /**
   * List credentials
   */
  async vcCredentialsGetRaw(): Promise<runtime.ApiResponse<object>> {
    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    const response = await this.request({
      path: `/vc/credentials`,
      method: 'GET',
      headers: headerParameters,
      query: queryParameters,
    });

    return new runtime.JSONApiResponse<any>(response);
  }

  /**
   * List credentials
   */
  async vcCredentialsGet(): Promise<object> {
    const response = await this.vcCredentialsGetRaw();
    return await response.value();
  }

  /**
   * Issue a credential
   */
  async vcCredentialsIssuePostRaw(
    requestParameters: VcCredentialsIssuePostRequest,
  ): Promise<runtime.ApiResponse<IssueCredentialResponse>> {
    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    headerParameters['Content-Type'] = 'application/json';

    const response = await this.request({
      path: `/vc/credentials/issue`,
      method: 'POST',
      headers: headerParameters,
      query: queryParameters,
      body: IssueCredentialRequestToJSON(requestParameters.body),
    });

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      IssueCredentialResponseFromJSON(jsonValue),
    );
  }

  /**
   * Issue a credential
   */
  async vcCredentialsIssuePost(
    requestParameters: VcCredentialsIssuePostRequest,
  ): Promise<IssueCredentialResponse> {
    const response = await this.vcCredentialsIssuePostRaw(requestParameters);
    return await response.value();
  }

  /**
   * Store a credential
   */
  async vcCredentialsStorePostRaw(): Promise<runtime.ApiResponse<void>> {
    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    const response = await this.request({
      path: `/vc/credentials/store`,
      method: 'POST',
      headers: headerParameters,
      query: queryParameters,
    });

    return new runtime.VoidApiResponse(response);
  }

  /**
   * Store a credential
   */
  async vcCredentialsStorePost(): Promise<void> {
    await this.vcCredentialsStorePostRaw();
  }

  /**
   * Verify a credential
   */
  async vcCredentialsVerifyPostRaw(
    requestParameters: VcCredentialsVerifyPostRequest,
  ): Promise<runtime.ApiResponse<VerifyCredentialResponse>> {
    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    headerParameters['Content-Type'] = 'application/json';

    const response = await this.request({
      path: `/vc/credentials/verify`,
      method: 'POST',
      headers: headerParameters,
      query: queryParameters,
      body: VerifyCredentialRequestToJSON(requestParameters.body),
    });

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      VerifyCredentialResponseFromJSON(jsonValue),
    );
  }

  /**
   * Verify a credential
   */
  async vcCredentialsVerifyPost(
    requestParameters: VcCredentialsVerifyPostRequest,
  ): Promise<VerifyCredentialResponse> {
    const response = await this.vcCredentialsVerifyPostRaw(requestParameters);
    return await response.value();
  }

  /**
   * Prove a presentation
   */
  async vcPresentationsProvePostRaw(
    requestParameters: VcPresentationsProvePostRequest,
  ): Promise<runtime.ApiResponse<ProvePresentationResponse>> {
    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    headerParameters['Content-Type'] = 'application/json';

    const response = await this.request({
      path: `/vc/presentations/prove`,
      method: 'POST',
      headers: headerParameters,
      query: queryParameters,
      body: ProvePresentationRequestToJSON(requestParameters.body),
    });

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      ProvePresentationResponseFromJSON(jsonValue),
    );
  }

  /**
   * Prove a presentation
   */
  async vcPresentationsProvePost(
    requestParameters: VcPresentationsProvePostRequest,
  ): Promise<ProvePresentationResponse> {
    const response = await this.vcPresentationsProvePostRaw(requestParameters);
    return await response.value();
  }

  /**
   * Verify a Presentation
   */
  async vcPresentationsVerifyPostRaw(
    requestParameters: VcPresentationsVerifyPostRequest,
  ): Promise<runtime.ApiResponse<VerifyPresentationResponse>> {
    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    headerParameters['Content-Type'] = 'application/json';

    const response = await this.request({
      path: `/vc/presentations/verify`,
      method: 'POST',
      headers: headerParameters,
      query: queryParameters,
      body: VerifyPresentationRequestToJSON(requestParameters.body),
    });

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      VerifyPresentationResponseFromJSON(jsonValue),
    );
  }

  /**
   * Verify a Presentation
   */
  async vcPresentationsVerifyPost(
    requestParameters: VcPresentationsVerifyPostRequest,
  ): Promise<VerifyPresentationResponse> {
    const response = await this.vcPresentationsVerifyPostRaw(requestParameters);
    return await response.value();
  }
}
