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
import {
  IndyCredPrecis,
  IndyCredPrecisFromJSON,
  IndyCredPrecisToJSON,
  V10PresentationCreateRequestRequest,
  V10PresentationCreateRequestRequestFromJSON,
  V10PresentationCreateRequestRequestToJSON,
  V10PresentationExchange,
  V10PresentationExchangeFromJSON,
  V10PresentationExchangeToJSON,
  V10PresentationExchangeList,
  V10PresentationExchangeListFromJSON,
  V10PresentationExchangeListToJSON,
  V10PresentationProblemReportRequest,
  V10PresentationProblemReportRequestFromJSON,
  V10PresentationProblemReportRequestToJSON,
  V10PresentationProposalRequest,
  V10PresentationProposalRequestFromJSON,
  V10PresentationProposalRequestToJSON,
  V10PresentationSendRequest,
  V10PresentationSendRequestFromJSON,
  V10PresentationSendRequestToJSON,
  V10PresentationSendRequestRequest,
  V10PresentationSendRequestRequestFromJSON,
  V10PresentationSendRequestRequestToJSON,
  V10PresentationSendRequestToProposal,
  V10PresentationSendRequestToProposalFromJSON,
  V10PresentationSendRequestToProposalToJSON,
} from '../models';

export interface PresentProofCreateRequestPostRequest {
  body?: V10PresentationCreateRequestRequest;
}

export interface PresentProofRecordsGetRequest {
  connectionId?: string;
  limit?: number;
  offset?: number;
  role?: PresentProofRecordsGetRoleEnum;
  state?: PresentProofRecordsGetStateEnum;
  threadId?: string;
}

export interface PresentProofRecordsPresExIdCredentialsGetRequest {
  presExId: string;
  count?: string;
  extraQuery?: string;
  referent?: string;
  start?: string;
}

export interface PresentProofRecordsPresExIdDeleteRequest {
  presExId: string;
}

export interface PresentProofRecordsPresExIdGetRequest {
  presExId: string;
}

export interface PresentProofRecordsPresExIdProblemReportPostRequest {
  presExId: string;
  body?: V10PresentationProblemReportRequest;
}

export interface PresentProofRecordsPresExIdSendPresentationPostRequest {
  presExId: string;
  body?: V10PresentationSendRequest;
}

export interface PresentProofRecordsPresExIdSendRequestPostRequest {
  presExId: string;
  body?: V10PresentationSendRequestToProposal;
}

export interface PresentProofRecordsPresExIdVerifyPresentationPostRequest {
  presExId: string;
}

export interface PresentProofSendProposalPostRequest {
  body?: V10PresentationProposalRequest;
}

export interface PresentProofSendRequestPostRequest {
  body?: V10PresentationSendRequestRequest;
}

/**
 *
 */
export class PresentProofV10Api extends runtime.BaseAPI {
  /**
   * Creates a presentation request not bound to any proposal or connection
   */
  async presentProofCreateRequestPostRaw(
    requestParameters: PresentProofCreateRequestPostRequest,
  ): Promise<runtime.ApiResponse<V10PresentationExchange>> {
    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    headerParameters['Content-Type'] = 'application/json';

    const response = await this.request({
      path: `/present-proof/create-request`,
      method: 'POST',
      headers: headerParameters,
      query: queryParameters,
      body: V10PresentationCreateRequestRequestToJSON(requestParameters.body),
    });

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      V10PresentationExchangeFromJSON(jsonValue),
    );
  }

  /**
   * Creates a presentation request not bound to any proposal or connection
   */
  async presentProofCreateRequestPost(
    requestParameters: PresentProofCreateRequestPostRequest,
  ): Promise<V10PresentationExchange> {
    const response = await this.presentProofCreateRequestPostRaw(
      requestParameters,
    );
    return await response.value();
  }

  /**
   * Fetch all present-proof exchange records
   */
  async presentProofRecordsGetRaw(
    requestParameters: PresentProofRecordsGetRequest,
  ): Promise<runtime.ApiResponse<V10PresentationExchangeList>> {
    const queryParameters: any = {};

    if (requestParameters.connectionId !== undefined) {
      queryParameters['connection_id'] = requestParameters.connectionId;
    }

    if (requestParameters.limit !== undefined) {
      queryParameters['limit'] = requestParameters.limit;
    }

    if (requestParameters.offset !== undefined) {
      queryParameters['offset'] = requestParameters.offset;
    }

    if (requestParameters.role !== undefined) {
      queryParameters['role'] = requestParameters.role;
    }

    if (requestParameters.state !== undefined) {
      queryParameters['state'] = requestParameters.state;
    }

    if (requestParameters.threadId !== undefined) {
      queryParameters['thread_id'] = requestParameters.threadId;
    }

    const headerParameters: runtime.HTTPHeaders = {};

    const response = await this.request({
      path: `/present-proof/records`,
      method: 'GET',
      headers: headerParameters,
      query: queryParameters,
    });

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      V10PresentationExchangeListFromJSON(jsonValue),
    );
  }

  /**
   * Fetch all present-proof exchange records
   */
  async presentProofRecordsGet(
    requestParameters: PresentProofRecordsGetRequest,
  ): Promise<V10PresentationExchangeList> {
    const response = await this.presentProofRecordsGetRaw(requestParameters);
    return await response.value();
  }

  /**
   * Fetch credentials for a presentation request from wallet
   */
  async presentProofRecordsPresExIdCredentialsGetRaw(
    requestParameters: PresentProofRecordsPresExIdCredentialsGetRequest,
  ): Promise<runtime.ApiResponse<Array<IndyCredPrecis>>> {
    if (
      requestParameters.presExId === null ||
      requestParameters.presExId === undefined
    ) {
      throw new runtime.RequiredError(
        'presExId',
        'Required parameter requestParameters.presExId was null or undefined when calling presentProofRecordsPresExIdCredentialsGet.',
      );
    }

    const queryParameters: any = {};

    if (requestParameters.count !== undefined) {
      queryParameters['count'] = requestParameters.count;
    }

    if (requestParameters.extraQuery !== undefined) {
      queryParameters['extra_query'] = requestParameters.extraQuery;
    }

    if (requestParameters.referent !== undefined) {
      queryParameters['referent'] = requestParameters.referent;
    }

    if (requestParameters.start !== undefined) {
      queryParameters['start'] = requestParameters.start;
    }

    const headerParameters: runtime.HTTPHeaders = {};

    const response = await this.request({
      path: `/present-proof/records/{pres_ex_id}/credentials`.replace(
        `{${'pres_ex_id'}}`,
        encodeURIComponent(String(requestParameters.presExId)),
      ),
      method: 'GET',
      headers: headerParameters,
      query: queryParameters,
    });

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      jsonValue.map(IndyCredPrecisFromJSON),
    );
  }

  /**
   * Fetch credentials for a presentation request from wallet
   */
  async presentProofRecordsPresExIdCredentialsGet(
    requestParameters: PresentProofRecordsPresExIdCredentialsGetRequest,
  ): Promise<Array<IndyCredPrecis>> {
    const response = await this.presentProofRecordsPresExIdCredentialsGetRaw(
      requestParameters,
    );
    return await response.value();
  }

  /**
   * Remove an existing presentation exchange record
   */
  async presentProofRecordsPresExIdDeleteRaw(
    requestParameters: PresentProofRecordsPresExIdDeleteRequest,
  ): Promise<runtime.ApiResponse<object>> {
    if (
      requestParameters.presExId === null ||
      requestParameters.presExId === undefined
    ) {
      throw new runtime.RequiredError(
        'presExId',
        'Required parameter requestParameters.presExId was null or undefined when calling presentProofRecordsPresExIdDelete.',
      );
    }

    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    const response = await this.request({
      path: `/present-proof/records/{pres_ex_id}`.replace(
        `{${'pres_ex_id'}}`,
        encodeURIComponent(String(requestParameters.presExId)),
      ),
      method: 'DELETE',
      headers: headerParameters,
      query: queryParameters,
    });

    return new runtime.JSONApiResponse<any>(response);
  }

  /**
   * Remove an existing presentation exchange record
   */
  async presentProofRecordsPresExIdDelete(
    requestParameters: PresentProofRecordsPresExIdDeleteRequest,
  ): Promise<object> {
    const response = await this.presentProofRecordsPresExIdDeleteRaw(
      requestParameters,
    );
    return await response.value();
  }

  /**
   * Fetch a single presentation exchange record
   */
  async presentProofRecordsPresExIdGetRaw(
    requestParameters: PresentProofRecordsPresExIdGetRequest,
  ): Promise<runtime.ApiResponse<V10PresentationExchange>> {
    if (
      requestParameters.presExId === null ||
      requestParameters.presExId === undefined
    ) {
      throw new runtime.RequiredError(
        'presExId',
        'Required parameter requestParameters.presExId was null or undefined when calling presentProofRecordsPresExIdGet.',
      );
    }

    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    const response = await this.request({
      path: `/present-proof/records/{pres_ex_id}`.replace(
        `{${'pres_ex_id'}}`,
        encodeURIComponent(String(requestParameters.presExId)),
      ),
      method: 'GET',
      headers: headerParameters,
      query: queryParameters,
    });

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      V10PresentationExchangeFromJSON(jsonValue),
    );
  }

  /**
   * Fetch a single presentation exchange record
   */
  async presentProofRecordsPresExIdGet(
    requestParameters: PresentProofRecordsPresExIdGetRequest,
  ): Promise<V10PresentationExchange> {
    const response = await this.presentProofRecordsPresExIdGetRaw(
      requestParameters,
    );
    return await response.value();
  }

  /**
   * Send a problem report for presentation exchange
   */
  async presentProofRecordsPresExIdProblemReportPostRaw(
    requestParameters: PresentProofRecordsPresExIdProblemReportPostRequest,
  ): Promise<runtime.ApiResponse<object>> {
    if (
      requestParameters.presExId === null ||
      requestParameters.presExId === undefined
    ) {
      throw new runtime.RequiredError(
        'presExId',
        'Required parameter requestParameters.presExId was null or undefined when calling presentProofRecordsPresExIdProblemReportPost.',
      );
    }

    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    headerParameters['Content-Type'] = 'application/json';

    const response = await this.request({
      path: `/present-proof/records/{pres_ex_id}/problem-report`.replace(
        `{${'pres_ex_id'}}`,
        encodeURIComponent(String(requestParameters.presExId)),
      ),
      method: 'POST',
      headers: headerParameters,
      query: queryParameters,
      body: V10PresentationProblemReportRequestToJSON(requestParameters.body),
    });

    return new runtime.JSONApiResponse<any>(response);
  }

  /**
   * Send a problem report for presentation exchange
   */
  async presentProofRecordsPresExIdProblemReportPost(
    requestParameters: PresentProofRecordsPresExIdProblemReportPostRequest,
  ): Promise<object> {
    const response = await this.presentProofRecordsPresExIdProblemReportPostRaw(
      requestParameters,
    );
    return await response.value();
  }

  /**
   * Sends a proof presentation
   */
  async presentProofRecordsPresExIdSendPresentationPostRaw(
    requestParameters: PresentProofRecordsPresExIdSendPresentationPostRequest,
  ): Promise<runtime.ApiResponse<V10PresentationExchange>> {
    if (
      requestParameters.presExId === null ||
      requestParameters.presExId === undefined
    ) {
      throw new runtime.RequiredError(
        'presExId',
        'Required parameter requestParameters.presExId was null or undefined when calling presentProofRecordsPresExIdSendPresentationPost.',
      );
    }

    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    headerParameters['Content-Type'] = 'application/json';

    const response = await this.request({
      path: `/present-proof/records/{pres_ex_id}/send-presentation`.replace(
        `{${'pres_ex_id'}}`,
        encodeURIComponent(String(requestParameters.presExId)),
      ),
      method: 'POST',
      headers: headerParameters,
      query: queryParameters,
      body: V10PresentationSendRequestToJSON(requestParameters.body),
    });

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      V10PresentationExchangeFromJSON(jsonValue),
    );
  }

  /**
   * Sends a proof presentation
   */
  async presentProofRecordsPresExIdSendPresentationPost(
    requestParameters: PresentProofRecordsPresExIdSendPresentationPostRequest,
  ): Promise<V10PresentationExchange> {
    const response =
      await this.presentProofRecordsPresExIdSendPresentationPostRaw(
        requestParameters,
      );
    return await response.value();
  }

  /**
   * Sends a presentation request in reference to a proposal
   */
  async presentProofRecordsPresExIdSendRequestPostRaw(
    requestParameters: PresentProofRecordsPresExIdSendRequestPostRequest,
  ): Promise<runtime.ApiResponse<V10PresentationExchange>> {
    if (
      requestParameters.presExId === null ||
      requestParameters.presExId === undefined
    ) {
      throw new runtime.RequiredError(
        'presExId',
        'Required parameter requestParameters.presExId was null or undefined when calling presentProofRecordsPresExIdSendRequestPost.',
      );
    }

    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    headerParameters['Content-Type'] = 'application/json';

    const response = await this.request({
      path: `/present-proof/records/{pres_ex_id}/send-request`.replace(
        `{${'pres_ex_id'}}`,
        encodeURIComponent(String(requestParameters.presExId)),
      ),
      method: 'POST',
      headers: headerParameters,
      query: queryParameters,
      body: V10PresentationSendRequestToProposalToJSON(requestParameters.body),
    });

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      V10PresentationExchangeFromJSON(jsonValue),
    );
  }

  /**
   * Sends a presentation request in reference to a proposal
   */
  async presentProofRecordsPresExIdSendRequestPost(
    requestParameters: PresentProofRecordsPresExIdSendRequestPostRequest,
  ): Promise<V10PresentationExchange> {
    const response = await this.presentProofRecordsPresExIdSendRequestPostRaw(
      requestParameters,
    );
    return await response.value();
  }

  /**
   * Verify a received presentation
   */
  async presentProofRecordsPresExIdVerifyPresentationPostRaw(
    requestParameters: PresentProofRecordsPresExIdVerifyPresentationPostRequest,
  ): Promise<runtime.ApiResponse<V10PresentationExchange>> {
    if (
      requestParameters.presExId === null ||
      requestParameters.presExId === undefined
    ) {
      throw new runtime.RequiredError(
        'presExId',
        'Required parameter requestParameters.presExId was null or undefined when calling presentProofRecordsPresExIdVerifyPresentationPost.',
      );
    }

    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    const response = await this.request({
      path: `/present-proof/records/{pres_ex_id}/verify-presentation`.replace(
        `{${'pres_ex_id'}}`,
        encodeURIComponent(String(requestParameters.presExId)),
      ),
      method: 'POST',
      headers: headerParameters,
      query: queryParameters,
    });

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      V10PresentationExchangeFromJSON(jsonValue),
    );
  }

  /**
   * Verify a received presentation
   */
  async presentProofRecordsPresExIdVerifyPresentationPost(
    requestParameters: PresentProofRecordsPresExIdVerifyPresentationPostRequest,
  ): Promise<V10PresentationExchange> {
    const response =
      await this.presentProofRecordsPresExIdVerifyPresentationPostRaw(
        requestParameters,
      );
    return await response.value();
  }

  /**
   * Sends a presentation proposal
   */
  async presentProofSendProposalPostRaw(
    requestParameters: PresentProofSendProposalPostRequest,
  ): Promise<runtime.ApiResponse<V10PresentationExchange>> {
    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    headerParameters['Content-Type'] = 'application/json';

    const response = await this.request({
      path: `/present-proof/send-proposal`,
      method: 'POST',
      headers: headerParameters,
      query: queryParameters,
      body: V10PresentationProposalRequestToJSON(requestParameters.body),
    });

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      V10PresentationExchangeFromJSON(jsonValue),
    );
  }

  /**
   * Sends a presentation proposal
   */
  async presentProofSendProposalPost(
    requestParameters: PresentProofSendProposalPostRequest,
  ): Promise<V10PresentationExchange> {
    const response = await this.presentProofSendProposalPostRaw(
      requestParameters,
    );
    return await response.value();
  }

  /**
   * Sends a free presentation request not bound to any proposal
   */
  async presentProofSendRequestPostRaw(
    requestParameters: PresentProofSendRequestPostRequest,
  ): Promise<runtime.ApiResponse<V10PresentationExchange>> {
    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    headerParameters['Content-Type'] = 'application/json';

    const response = await this.request({
      path: `/present-proof/send-request`,
      method: 'POST',
      headers: headerParameters,
      query: queryParameters,
      body: V10PresentationSendRequestRequestToJSON(requestParameters.body),
    });

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      V10PresentationExchangeFromJSON(jsonValue),
    );
  }

  /**
   * Sends a free presentation request not bound to any proposal
   */
  async presentProofSendRequestPost(
    requestParameters: PresentProofSendRequestPostRequest,
  ): Promise<V10PresentationExchange> {
    const response = await this.presentProofSendRequestPostRaw(
      requestParameters,
    );
    return await response.value();
  }
}

/**
 * @export
 * @enum {string}
 */
export enum PresentProofRecordsGetRoleEnum {
  Prover = 'prover',
  Verifier = 'verifier',
}
/**
 * @export
 * @enum {string}
 */
export enum PresentProofRecordsGetStateEnum {
  ProposalSent = 'proposal_sent',
  ProposalReceived = 'proposal_received',
  RequestSent = 'request_sent',
  RequestReceived = 'request_received',
  PresentationSent = 'presentation_sent',
  PresentationReceived = 'presentation_received',
  Verified = 'verified',
  PresentationAcked = 'presentation_acked',
  Abandoned = 'abandoned',
}
