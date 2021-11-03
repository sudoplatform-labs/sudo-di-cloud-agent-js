/**
 * Sudo Decentralized Identity Cloud Agent SDK
 * Provides REST API wrappers for Typescript Agent Controllers using the Sudo Decentralized Identity Cloud Agency Service
 *
 * The version of the OpenAPI document: v0.6.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import * as runtime from '../runtime';
import {
  AttributeMimeTypesResult,
  AttributeMimeTypesResultFromJSON,
  AttributeMimeTypesResultToJSON,
  CredInfoList,
  CredInfoListFromJSON,
  CredInfoListToJSON,
  CredRevokedResult,
  CredRevokedResultFromJSON,
  CredRevokedResultToJSON,
  IndyCredInfo,
  IndyCredInfoFromJSON,
  IndyCredInfoToJSON,
  VCRecord,
  VCRecordFromJSON,
  VCRecordToJSON,
  VCRecordList,
  VCRecordListFromJSON,
  VCRecordListToJSON,
  W3CCredentialsListRequest,
  W3CCredentialsListRequestFromJSON,
  W3CCredentialsListRequestToJSON,
} from '../models';

export interface CredentialCredentialIdDeleteRequest {
  credentialId: string;
}

export interface CredentialCredentialIdGetRequest {
  credentialId: string;
}

export interface CredentialMimeTypesCredentialIdGetRequest {
  credentialId: string;
}

export interface CredentialRevokedCredentialIdGetRequest {
  credentialId: string;
  from?: string;
  to?: string;
}

export interface CredentialW3cCredentialIdDeleteRequest {
  credentialId: string;
}

export interface CredentialW3cCredentialIdGetRequest {
  credentialId: string;
}

export interface CredentialsGetRequest {
  count?: string;
  start?: string;
  wql?: string;
}

export interface CredentialsW3cPostRequest {
  count?: string;
  start?: string;
  wql?: string;
  body?: W3CCredentialsListRequest;
}

/**
 *
 */
export class CredentialsApi extends runtime.BaseAPI {
  /**
   * Remove credential from wallet by id
   */
  async credentialCredentialIdDeleteRaw(
    requestParameters: CredentialCredentialIdDeleteRequest,
  ): Promise<runtime.ApiResponse<object>> {
    if (
      requestParameters.credentialId === null ||
      requestParameters.credentialId === undefined
    ) {
      throw new runtime.RequiredError(
        'credentialId',
        'Required parameter requestParameters.credentialId was null or undefined when calling credentialCredentialIdDelete.',
      );
    }

    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    const response = await this.request({
      path: `/credential/{credential_id}`.replace(
        `{${'credential_id'}}`,
        encodeURIComponent(String(requestParameters.credentialId)),
      ),
      method: 'DELETE',
      headers: headerParameters,
      query: queryParameters,
    });

    return new runtime.JSONApiResponse<any>(response);
  }

  /**
   * Remove credential from wallet by id
   */
  async credentialCredentialIdDelete(
    requestParameters: CredentialCredentialIdDeleteRequest,
  ): Promise<object> {
    const response = await this.credentialCredentialIdDeleteRaw(
      requestParameters,
    );
    return await response.value();
  }

  /**
   * Fetch credential from wallet by id
   */
  async credentialCredentialIdGetRaw(
    requestParameters: CredentialCredentialIdGetRequest,
  ): Promise<runtime.ApiResponse<IndyCredInfo>> {
    if (
      requestParameters.credentialId === null ||
      requestParameters.credentialId === undefined
    ) {
      throw new runtime.RequiredError(
        'credentialId',
        'Required parameter requestParameters.credentialId was null or undefined when calling credentialCredentialIdGet.',
      );
    }

    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    const response = await this.request({
      path: `/credential/{credential_id}`.replace(
        `{${'credential_id'}}`,
        encodeURIComponent(String(requestParameters.credentialId)),
      ),
      method: 'GET',
      headers: headerParameters,
      query: queryParameters,
    });

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      IndyCredInfoFromJSON(jsonValue),
    );
  }

  /**
   * Fetch credential from wallet by id
   */
  async credentialCredentialIdGet(
    requestParameters: CredentialCredentialIdGetRequest,
  ): Promise<IndyCredInfo> {
    const response = await this.credentialCredentialIdGetRaw(requestParameters);
    return await response.value();
  }

  /**
   * Get attribute MIME types from wallet
   */
  async credentialMimeTypesCredentialIdGetRaw(
    requestParameters: CredentialMimeTypesCredentialIdGetRequest,
  ): Promise<runtime.ApiResponse<AttributeMimeTypesResult>> {
    if (
      requestParameters.credentialId === null ||
      requestParameters.credentialId === undefined
    ) {
      throw new runtime.RequiredError(
        'credentialId',
        'Required parameter requestParameters.credentialId was null or undefined when calling credentialMimeTypesCredentialIdGet.',
      );
    }

    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    const response = await this.request({
      path: `/credential/mime-types/{credential_id}`.replace(
        `{${'credential_id'}}`,
        encodeURIComponent(String(requestParameters.credentialId)),
      ),
      method: 'GET',
      headers: headerParameters,
      query: queryParameters,
    });

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      AttributeMimeTypesResultFromJSON(jsonValue),
    );
  }

  /**
   * Get attribute MIME types from wallet
   */
  async credentialMimeTypesCredentialIdGet(
    requestParameters: CredentialMimeTypesCredentialIdGetRequest,
  ): Promise<AttributeMimeTypesResult> {
    const response = await this.credentialMimeTypesCredentialIdGetRaw(
      requestParameters,
    );
    return await response.value();
  }

  /**
   * Query credential revocation status by id
   */
  async credentialRevokedCredentialIdGetRaw(
    requestParameters: CredentialRevokedCredentialIdGetRequest,
  ): Promise<runtime.ApiResponse<CredRevokedResult>> {
    if (
      requestParameters.credentialId === null ||
      requestParameters.credentialId === undefined
    ) {
      throw new runtime.RequiredError(
        'credentialId',
        'Required parameter requestParameters.credentialId was null or undefined when calling credentialRevokedCredentialIdGet.',
      );
    }

    const queryParameters: any = {};

    if (requestParameters.from !== undefined) {
      queryParameters['from'] = requestParameters.from;
    }

    if (requestParameters.to !== undefined) {
      queryParameters['to'] = requestParameters.to;
    }

    const headerParameters: runtime.HTTPHeaders = {};

    const response = await this.request({
      path: `/credential/revoked/{credential_id}`.replace(
        `{${'credential_id'}}`,
        encodeURIComponent(String(requestParameters.credentialId)),
      ),
      method: 'GET',
      headers: headerParameters,
      query: queryParameters,
    });

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      CredRevokedResultFromJSON(jsonValue),
    );
  }

  /**
   * Query credential revocation status by id
   */
  async credentialRevokedCredentialIdGet(
    requestParameters: CredentialRevokedCredentialIdGetRequest,
  ): Promise<CredRevokedResult> {
    const response = await this.credentialRevokedCredentialIdGetRaw(
      requestParameters,
    );
    return await response.value();
  }

  /**
   * Remove W3C credential from wallet by id
   */
  async credentialW3cCredentialIdDeleteRaw(
    requestParameters: CredentialW3cCredentialIdDeleteRequest,
  ): Promise<runtime.ApiResponse<object>> {
    if (
      requestParameters.credentialId === null ||
      requestParameters.credentialId === undefined
    ) {
      throw new runtime.RequiredError(
        'credentialId',
        'Required parameter requestParameters.credentialId was null or undefined when calling credentialW3cCredentialIdDelete.',
      );
    }

    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    const response = await this.request({
      path: `/credential/w3c/{credential_id}`.replace(
        `{${'credential_id'}}`,
        encodeURIComponent(String(requestParameters.credentialId)),
      ),
      method: 'DELETE',
      headers: headerParameters,
      query: queryParameters,
    });

    return new runtime.JSONApiResponse<any>(response);
  }

  /**
   * Remove W3C credential from wallet by id
   */
  async credentialW3cCredentialIdDelete(
    requestParameters: CredentialW3cCredentialIdDeleteRequest,
  ): Promise<object> {
    const response = await this.credentialW3cCredentialIdDeleteRaw(
      requestParameters,
    );
    return await response.value();
  }

  /**
   * Fetch W3C credential from wallet by id
   */
  async credentialW3cCredentialIdGetRaw(
    requestParameters: CredentialW3cCredentialIdGetRequest,
  ): Promise<runtime.ApiResponse<VCRecord>> {
    if (
      requestParameters.credentialId === null ||
      requestParameters.credentialId === undefined
    ) {
      throw new runtime.RequiredError(
        'credentialId',
        'Required parameter requestParameters.credentialId was null or undefined when calling credentialW3cCredentialIdGet.',
      );
    }

    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    const response = await this.request({
      path: `/credential/w3c/{credential_id}`.replace(
        `{${'credential_id'}}`,
        encodeURIComponent(String(requestParameters.credentialId)),
      ),
      method: 'GET',
      headers: headerParameters,
      query: queryParameters,
    });

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      VCRecordFromJSON(jsonValue),
    );
  }

  /**
   * Fetch W3C credential from wallet by id
   */
  async credentialW3cCredentialIdGet(
    requestParameters: CredentialW3cCredentialIdGetRequest,
  ): Promise<VCRecord> {
    const response = await this.credentialW3cCredentialIdGetRaw(
      requestParameters,
    );
    return await response.value();
  }

  /**
   * Fetch credentials from wallet
   */
  async credentialsGetRaw(
    requestParameters: CredentialsGetRequest,
  ): Promise<runtime.ApiResponse<CredInfoList>> {
    const queryParameters: any = {};

    if (requestParameters.count !== undefined) {
      queryParameters['count'] = requestParameters.count;
    }

    if (requestParameters.start !== undefined) {
      queryParameters['start'] = requestParameters.start;
    }

    if (requestParameters.wql !== undefined) {
      queryParameters['wql'] = requestParameters.wql;
    }

    const headerParameters: runtime.HTTPHeaders = {};

    const response = await this.request({
      path: `/credentials`,
      method: 'GET',
      headers: headerParameters,
      query: queryParameters,
    });

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      CredInfoListFromJSON(jsonValue),
    );
  }

  /**
   * Fetch credentials from wallet
   */
  async credentialsGet(
    requestParameters: CredentialsGetRequest,
  ): Promise<CredInfoList> {
    const response = await this.credentialsGetRaw(requestParameters);
    return await response.value();
  }

  /**
   * Fetch W3C credentials from wallet
   */
  async credentialsW3cPostRaw(
    requestParameters: CredentialsW3cPostRequest,
  ): Promise<runtime.ApiResponse<VCRecordList>> {
    const queryParameters: any = {};

    if (requestParameters.count !== undefined) {
      queryParameters['count'] = requestParameters.count;
    }

    if (requestParameters.start !== undefined) {
      queryParameters['start'] = requestParameters.start;
    }

    if (requestParameters.wql !== undefined) {
      queryParameters['wql'] = requestParameters.wql;
    }

    const headerParameters: runtime.HTTPHeaders = {};

    headerParameters['Content-Type'] = 'application/json';

    const response = await this.request({
      path: `/credentials/w3c`,
      method: 'POST',
      headers: headerParameters,
      query: queryParameters,
      body: W3CCredentialsListRequestToJSON(requestParameters.body),
    });

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      VCRecordListFromJSON(jsonValue),
    );
  }

  /**
   * Fetch W3C credentials from wallet
   */
  async credentialsW3cPost(
    requestParameters: CredentialsW3cPostRequest,
  ): Promise<VCRecordList> {
    const response = await this.credentialsW3cPostRaw(requestParameters);
    return await response.value();
  }
}
