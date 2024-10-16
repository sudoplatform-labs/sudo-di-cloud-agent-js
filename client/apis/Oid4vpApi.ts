/**
 * Sudo Decentralized Identity Cloud Agent SDK
 * Provides REST API wrappers for Typescript Agent Controllers using the Sudo Decentralized Identity Cloud Agent Service
 *
 * The version of the OpenAPI document: v100.0.100
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import * as runtime from '../runtime';
import {
  CreateOID4VPPresDefRequest,
  CreateOID4VPPresDefRequestFromJSON,
  CreateOID4VPPresDefRequestToJSON,
  CreateOID4VPPresDefResponse,
  CreateOID4VPPresDefResponseFromJSON,
  CreateOID4VPPresDefResponseToJSON,
  CreateOID4VPReqRequest,
  CreateOID4VPReqRequestFromJSON,
  CreateOID4VPReqRequestToJSON,
  CreateOID4VPReqResponse,
  CreateOID4VPReqResponseFromJSON,
  CreateOID4VPReqResponseToJSON,
  GetOID4VPPresResponse,
  GetOID4VPPresResponseFromJSON,
  GetOID4VPPresResponseToJSON,
  OID4VPPresList,
  OID4VPPresListFromJSON,
  OID4VPPresListToJSON,
  OID4VPPresentation,
  OID4VPPresentationFromJSON,
  OID4VPPresentationToJSON,
} from '../models';

export interface Oid4vpPresentationDefinitionPostRequest {
  body?: CreateOID4VPPresDefRequest;
}

export interface Oid4vpPresentationPresentationIdDeleteRequest {
  presentationId: string;
}

export interface Oid4vpPresentationRequestIdGetRequest {
  presentationId: string;
  requestId: string;
}

export interface Oid4vpPresentationRequestIdHeadRequest {
  presentationId: string;
  requestId: string;
}

export interface Oid4vpPresentationsGetRequest {
  presDefId?: string;
  presentationId?: string;
  state?: Oid4vpPresentationsGetStateEnum;
}

export interface Oid4vpPresentationsHeadRequest {
  presDefId?: string;
  presentationId?: string;
  state?: Oid4vpPresentationsHeadStateEnum;
}

export interface Oid4vpRequestPostRequest {
  body?: CreateOID4VPReqRequest;
}

/**
 *
 */
export class Oid4vpApi extends runtime.BaseAPI {
  /**
   * Create an OID4VP Presentation Definition.
   */
  async oid4vpPresentationDefinitionPostRaw(
    requestParameters: Oid4vpPresentationDefinitionPostRequest,
  ): Promise<runtime.ApiResponse<CreateOID4VPPresDefResponse>> {
    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    headerParameters['Content-Type'] = 'application/json';

    const response = await this.request({
      path: `/oid4vp/presentation-definition`,
      method: 'POST',
      headers: headerParameters,
      query: queryParameters,
      body: CreateOID4VPPresDefRequestToJSON(requestParameters.body),
    });

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      CreateOID4VPPresDefResponseFromJSON(jsonValue),
    );
  }

  /**
   * Create an OID4VP Presentation Definition.
   */
  async oid4vpPresentationDefinitionPost(
    requestParameters: Oid4vpPresentationDefinitionPostRequest,
  ): Promise<CreateOID4VPPresDefResponse> {
    const response = await this.oid4vpPresentationDefinitionPostRaw(
      requestParameters,
    );
    return await response.value();
  }

  /**
   * Delete presentation.
   */
  async oid4vpPresentationPresentationIdDeleteRaw(
    requestParameters: Oid4vpPresentationPresentationIdDeleteRequest,
  ): Promise<runtime.ApiResponse<OID4VPPresentation>> {
    if (
      requestParameters.presentationId === null ||
      requestParameters.presentationId === undefined
    ) {
      throw new runtime.RequiredError(
        'presentationId',
        'Required parameter requestParameters.presentationId was null or undefined when calling oid4vpPresentationPresentationIdDelete.',
      );
    }

    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    const response = await this.request({
      path: `/oid4vp/presentation/{presentation_id}`.replace(
        `{${'presentation_id'}}`,
        encodeURIComponent(String(requestParameters.presentationId)),
      ),
      method: 'DELETE',
      headers: headerParameters,
      query: queryParameters,
    });

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      OID4VPPresentationFromJSON(jsonValue),
    );
  }

  /**
   * Delete presentation.
   */
  async oid4vpPresentationPresentationIdDelete(
    requestParameters: Oid4vpPresentationPresentationIdDeleteRequest,
  ): Promise<OID4VPPresentation> {
    const response = await this.oid4vpPresentationPresentationIdDeleteRaw(
      requestParameters,
    );
    return await response.value();
  }

  /**
   * Fetch presentation.
   */
  async oid4vpPresentationRequestIdGetRaw(
    requestParameters: Oid4vpPresentationRequestIdGetRequest,
  ): Promise<runtime.ApiResponse<GetOID4VPPresResponse>> {
    if (
      requestParameters.presentationId === null ||
      requestParameters.presentationId === undefined
    ) {
      throw new runtime.RequiredError(
        'presentationId',
        'Required parameter requestParameters.presentationId was null or undefined when calling oid4vpPresentationRequestIdGet.',
      );
    }

    if (
      requestParameters.requestId === null ||
      requestParameters.requestId === undefined
    ) {
      throw new runtime.RequiredError(
        'requestId',
        'Required parameter requestParameters.requestId was null or undefined when calling oid4vpPresentationRequestIdGet.',
      );
    }

    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    const response = await this.request({
      path: `/oid4vp/presentation/{request_id}`
        .replace(
          `{${'presentation_id'}}`,
          encodeURIComponent(String(requestParameters.presentationId)),
        )
        .replace(
          `{${'request_id'}}`,
          encodeURIComponent(String(requestParameters.requestId)),
        ),
      method: 'GET',
      headers: headerParameters,
      query: queryParameters,
    });

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      GetOID4VPPresResponseFromJSON(jsonValue),
    );
  }

  /**
   * Fetch presentation.
   */
  async oid4vpPresentationRequestIdGet(
    requestParameters: Oid4vpPresentationRequestIdGetRequest,
  ): Promise<GetOID4VPPresResponse> {
    const response = await this.oid4vpPresentationRequestIdGetRaw(
      requestParameters,
    );
    return await response.value();
  }

  /**
   * Fetch presentation.
   */
  async oid4vpPresentationRequestIdHeadRaw(
    requestParameters: Oid4vpPresentationRequestIdHeadRequest,
  ): Promise<runtime.ApiResponse<GetOID4VPPresResponse>> {
    if (
      requestParameters.presentationId === null ||
      requestParameters.presentationId === undefined
    ) {
      throw new runtime.RequiredError(
        'presentationId',
        'Required parameter requestParameters.presentationId was null or undefined when calling oid4vpPresentationRequestIdHead.',
      );
    }

    if (
      requestParameters.requestId === null ||
      requestParameters.requestId === undefined
    ) {
      throw new runtime.RequiredError(
        'requestId',
        'Required parameter requestParameters.requestId was null or undefined when calling oid4vpPresentationRequestIdHead.',
      );
    }

    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    const response = await this.request({
      path: `/oid4vp/presentation/{request_id}`
        .replace(
          `{${'presentation_id'}}`,
          encodeURIComponent(String(requestParameters.presentationId)),
        )
        .replace(
          `{${'request_id'}}`,
          encodeURIComponent(String(requestParameters.requestId)),
        ),
      method: 'HEAD',
      headers: headerParameters,
      query: queryParameters,
    });

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      GetOID4VPPresResponseFromJSON(jsonValue),
    );
  }

  /**
   * Fetch presentation.
   */
  async oid4vpPresentationRequestIdHead(
    requestParameters: Oid4vpPresentationRequestIdHeadRequest,
  ): Promise<GetOID4VPPresResponse> {
    const response = await this.oid4vpPresentationRequestIdHeadRaw(
      requestParameters,
    );
    return await response.value();
  }

  /**
   * Fetch all Presentations.
   */
  async oid4vpPresentationsGetRaw(
    requestParameters: Oid4vpPresentationsGetRequest,
  ): Promise<runtime.ApiResponse<OID4VPPresList>> {
    const queryParameters: any = {};

    if (requestParameters.presDefId !== undefined) {
      queryParameters['pres_def_id'] = requestParameters.presDefId;
    }

    if (requestParameters.presentationId !== undefined) {
      queryParameters['presentation_id'] = requestParameters.presentationId;
    }

    if (requestParameters.state !== undefined) {
      queryParameters['state'] = requestParameters.state;
    }

    const headerParameters: runtime.HTTPHeaders = {};

    const response = await this.request({
      path: `/oid4vp/presentations`,
      method: 'GET',
      headers: headerParameters,
      query: queryParameters,
    });

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      OID4VPPresListFromJSON(jsonValue),
    );
  }

  /**
   * Fetch all Presentations.
   */
  async oid4vpPresentationsGet(
    requestParameters: Oid4vpPresentationsGetRequest,
  ): Promise<OID4VPPresList> {
    const response = await this.oid4vpPresentationsGetRaw(requestParameters);
    return await response.value();
  }

  /**
   * Fetch all Presentations.
   */
  async oid4vpPresentationsHeadRaw(
    requestParameters: Oid4vpPresentationsHeadRequest,
  ): Promise<runtime.ApiResponse<OID4VPPresList>> {
    const queryParameters: any = {};

    if (requestParameters.presDefId !== undefined) {
      queryParameters['pres_def_id'] = requestParameters.presDefId;
    }

    if (requestParameters.presentationId !== undefined) {
      queryParameters['presentation_id'] = requestParameters.presentationId;
    }

    if (requestParameters.state !== undefined) {
      queryParameters['state'] = requestParameters.state;
    }

    const headerParameters: runtime.HTTPHeaders = {};

    const response = await this.request({
      path: `/oid4vp/presentations`,
      method: 'HEAD',
      headers: headerParameters,
      query: queryParameters,
    });

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      OID4VPPresListFromJSON(jsonValue),
    );
  }

  /**
   * Fetch all Presentations.
   */
  async oid4vpPresentationsHead(
    requestParameters: Oid4vpPresentationsHeadRequest,
  ): Promise<OID4VPPresList> {
    const response = await this.oid4vpPresentationsHeadRaw(requestParameters);
    return await response.value();
  }

  /**
   * Create an OID4VP Request.
   */
  async oid4vpRequestPostRaw(
    requestParameters: Oid4vpRequestPostRequest,
  ): Promise<runtime.ApiResponse<CreateOID4VPReqResponse>> {
    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    headerParameters['Content-Type'] = 'application/json';

    const response = await this.request({
      path: `/oid4vp/request`,
      method: 'POST',
      headers: headerParameters,
      query: queryParameters,
      body: CreateOID4VPReqRequestToJSON(requestParameters.body),
    });

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      CreateOID4VPReqResponseFromJSON(jsonValue),
    );
  }

  /**
   * Create an OID4VP Request.
   */
  async oid4vpRequestPost(
    requestParameters: Oid4vpRequestPostRequest,
  ): Promise<CreateOID4VPReqResponse> {
    const response = await this.oid4vpRequestPostRaw(requestParameters);
    return await response.value();
  }
}

/**
 * @export
 * @enum {string}
 */
export enum Oid4vpPresentationsGetStateEnum {
  RequestCreated = 'request-created',
  RequestRetrieved = 'request-retrieved',
  PresentationInvalid = 'presentation-invalid',
  PresentationValid = 'presentation-valid',
}
/**
 * @export
 * @enum {string}
 */
export enum Oid4vpPresentationsHeadStateEnum {
  RequestCreated = 'request-created',
  RequestRetrieved = 'request-retrieved',
  PresentationInvalid = 'presentation-invalid',
  PresentationValid = 'presentation-valid',
}
