/**
 * Sudo Decentralized Identity Cloud Agent SDK
 * Provides REST API wrappers for Typescript Agent Controllers using the Sudo Decentralized Identity Cloud Agent Service
 *
 * The version of the OpenAPI document: v0.9.1
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import * as runtime from '../runtime';
import {
  V10CredentialBoundOfferRequest,
  V10CredentialBoundOfferRequestFromJSON,
  V10CredentialBoundOfferRequestToJSON,
  V10CredentialConnFreeOfferRequest,
  V10CredentialConnFreeOfferRequestFromJSON,
  V10CredentialConnFreeOfferRequestToJSON,
  V10CredentialCreate,
  V10CredentialCreateFromJSON,
  V10CredentialCreateToJSON,
  V10CredentialExchange,
  V10CredentialExchangeFromJSON,
  V10CredentialExchangeToJSON,
  V10CredentialExchangeAutoRemoveRequest,
  V10CredentialExchangeAutoRemoveRequestFromJSON,
  V10CredentialExchangeAutoRemoveRequestToJSON,
  V10CredentialExchangeListResult,
  V10CredentialExchangeListResultFromJSON,
  V10CredentialExchangeListResultToJSON,
  V10CredentialFreeOfferRequest,
  V10CredentialFreeOfferRequestFromJSON,
  V10CredentialFreeOfferRequestToJSON,
  V10CredentialIssueRequest,
  V10CredentialIssueRequestFromJSON,
  V10CredentialIssueRequestToJSON,
  V10CredentialProblemReportRequest,
  V10CredentialProblemReportRequestFromJSON,
  V10CredentialProblemReportRequestToJSON,
  V10CredentialProposalRequestMand,
  V10CredentialProposalRequestMandFromJSON,
  V10CredentialProposalRequestMandToJSON,
  V10CredentialProposalRequestOpt,
  V10CredentialProposalRequestOptFromJSON,
  V10CredentialProposalRequestOptToJSON,
  V10CredentialStoreRequest,
  V10CredentialStoreRequestFromJSON,
  V10CredentialStoreRequestToJSON,
} from '../models';

export interface IssueCredentialCreateOfferPostRequest {
  body?: V10CredentialConnFreeOfferRequest;
}

export interface IssueCredentialCreatePostRequest {
  body?: V10CredentialCreate;
}

export interface IssueCredentialRecordsCredExIdDeleteRequest {
  credExId: string;
}

export interface IssueCredentialRecordsCredExIdGetRequest {
  credExId: string;
}

export interface IssueCredentialRecordsCredExIdIssuePostRequest {
  credExId: string;
  body?: V10CredentialIssueRequest;
}

export interface IssueCredentialRecordsCredExIdProblemReportPostRequest {
  credExId: string;
  body?: V10CredentialProblemReportRequest;
}

export interface IssueCredentialRecordsCredExIdSendOfferPostRequest {
  credExId: string;
  body?: V10CredentialBoundOfferRequest;
}

export interface IssueCredentialRecordsCredExIdSendRequestPostRequest {
  credExId: string;
  body?: V10CredentialExchangeAutoRemoveRequest;
}

export interface IssueCredentialRecordsCredExIdStorePostRequest {
  credExId: string;
  body?: V10CredentialStoreRequest;
}

export interface IssueCredentialRecordsGetRequest {
  connectionId?: string;
  role?: IssueCredentialRecordsGetRoleEnum;
  state?: IssueCredentialRecordsGetStateEnum;
  threadId?: string;
}

export interface IssueCredentialSendOfferPostRequest {
  body?: V10CredentialFreeOfferRequest;
}

export interface IssueCredentialSendPostRequest {
  body?: V10CredentialProposalRequestMand;
}

export interface IssueCredentialSendProposalPostRequest {
  body?: V10CredentialProposalRequestOpt;
}

/**
 *
 */
export class IssueCredentialV10Api extends runtime.BaseAPI {
  /**
   * Create a credential offer, independent of any proposal or connection
   */
  async issueCredentialCreateOfferPostRaw(
    requestParameters: IssueCredentialCreateOfferPostRequest,
  ): Promise<runtime.ApiResponse<V10CredentialExchange>> {
    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    headerParameters['Content-Type'] = 'application/json';

    const response = await this.request({
      path: `/issue-credential/create-offer`,
      method: 'POST',
      headers: headerParameters,
      query: queryParameters,
      body: V10CredentialConnFreeOfferRequestToJSON(requestParameters.body),
    });

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      V10CredentialExchangeFromJSON(jsonValue),
    );
  }

  /**
   * Create a credential offer, independent of any proposal or connection
   */
  async issueCredentialCreateOfferPost(
    requestParameters: IssueCredentialCreateOfferPostRequest,
  ): Promise<V10CredentialExchange> {
    const response = await this.issueCredentialCreateOfferPostRaw(
      requestParameters,
    );
    return await response.value();
  }

  /**
   * Create a credential record without sending (generally for use with Out-Of-Band)
   */
  async issueCredentialCreatePostRaw(
    requestParameters: IssueCredentialCreatePostRequest,
  ): Promise<runtime.ApiResponse<V10CredentialExchange>> {
    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    headerParameters['Content-Type'] = 'application/json';

    const response = await this.request({
      path: `/issue-credential/create`,
      method: 'POST',
      headers: headerParameters,
      query: queryParameters,
      body: V10CredentialCreateToJSON(requestParameters.body),
    });

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      V10CredentialExchangeFromJSON(jsonValue),
    );
  }

  /**
   * Create a credential record without sending (generally for use with Out-Of-Band)
   */
  async issueCredentialCreatePost(
    requestParameters: IssueCredentialCreatePostRequest,
  ): Promise<V10CredentialExchange> {
    const response = await this.issueCredentialCreatePostRaw(requestParameters);
    return await response.value();
  }

  /**
   * Remove an existing credential exchange record
   */
  async issueCredentialRecordsCredExIdDeleteRaw(
    requestParameters: IssueCredentialRecordsCredExIdDeleteRequest,
  ): Promise<runtime.ApiResponse<object>> {
    if (
      requestParameters.credExId === null ||
      requestParameters.credExId === undefined
    ) {
      throw new runtime.RequiredError(
        'credExId',
        'Required parameter requestParameters.credExId was null or undefined when calling issueCredentialRecordsCredExIdDelete.',
      );
    }

    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    const response = await this.request({
      path: `/issue-credential/records/{cred_ex_id}`.replace(
        `{${'cred_ex_id'}}`,
        encodeURIComponent(String(requestParameters.credExId)),
      ),
      method: 'DELETE',
      headers: headerParameters,
      query: queryParameters,
    });

    return new runtime.JSONApiResponse<any>(response);
  }

  /**
   * Remove an existing credential exchange record
   */
  async issueCredentialRecordsCredExIdDelete(
    requestParameters: IssueCredentialRecordsCredExIdDeleteRequest,
  ): Promise<object> {
    const response = await this.issueCredentialRecordsCredExIdDeleteRaw(
      requestParameters,
    );
    return await response.value();
  }

  /**
   * Fetch a single credential exchange record
   */
  async issueCredentialRecordsCredExIdGetRaw(
    requestParameters: IssueCredentialRecordsCredExIdGetRequest,
  ): Promise<runtime.ApiResponse<V10CredentialExchange>> {
    if (
      requestParameters.credExId === null ||
      requestParameters.credExId === undefined
    ) {
      throw new runtime.RequiredError(
        'credExId',
        'Required parameter requestParameters.credExId was null or undefined when calling issueCredentialRecordsCredExIdGet.',
      );
    }

    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    const response = await this.request({
      path: `/issue-credential/records/{cred_ex_id}`.replace(
        `{${'cred_ex_id'}}`,
        encodeURIComponent(String(requestParameters.credExId)),
      ),
      method: 'GET',
      headers: headerParameters,
      query: queryParameters,
    });

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      V10CredentialExchangeFromJSON(jsonValue),
    );
  }

  /**
   * Fetch a single credential exchange record
   */
  async issueCredentialRecordsCredExIdGet(
    requestParameters: IssueCredentialRecordsCredExIdGetRequest,
  ): Promise<V10CredentialExchange> {
    const response = await this.issueCredentialRecordsCredExIdGetRaw(
      requestParameters,
    );
    return await response.value();
  }

  /**
   * Send holder a credential
   */
  async issueCredentialRecordsCredExIdIssuePostRaw(
    requestParameters: IssueCredentialRecordsCredExIdIssuePostRequest,
  ): Promise<runtime.ApiResponse<V10CredentialExchange>> {
    if (
      requestParameters.credExId === null ||
      requestParameters.credExId === undefined
    ) {
      throw new runtime.RequiredError(
        'credExId',
        'Required parameter requestParameters.credExId was null or undefined when calling issueCredentialRecordsCredExIdIssuePost.',
      );
    }

    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    headerParameters['Content-Type'] = 'application/json';

    const response = await this.request({
      path: `/issue-credential/records/{cred_ex_id}/issue`.replace(
        `{${'cred_ex_id'}}`,
        encodeURIComponent(String(requestParameters.credExId)),
      ),
      method: 'POST',
      headers: headerParameters,
      query: queryParameters,
      body: V10CredentialIssueRequestToJSON(requestParameters.body),
    });

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      V10CredentialExchangeFromJSON(jsonValue),
    );
  }

  /**
   * Send holder a credential
   */
  async issueCredentialRecordsCredExIdIssuePost(
    requestParameters: IssueCredentialRecordsCredExIdIssuePostRequest,
  ): Promise<V10CredentialExchange> {
    const response = await this.issueCredentialRecordsCredExIdIssuePostRaw(
      requestParameters,
    );
    return await response.value();
  }

  /**
   * Send a problem report for credential exchange
   */
  async issueCredentialRecordsCredExIdProblemReportPostRaw(
    requestParameters: IssueCredentialRecordsCredExIdProblemReportPostRequest,
  ): Promise<runtime.ApiResponse<object>> {
    if (
      requestParameters.credExId === null ||
      requestParameters.credExId === undefined
    ) {
      throw new runtime.RequiredError(
        'credExId',
        'Required parameter requestParameters.credExId was null or undefined when calling issueCredentialRecordsCredExIdProblemReportPost.',
      );
    }

    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    headerParameters['Content-Type'] = 'application/json';

    const response = await this.request({
      path: `/issue-credential/records/{cred_ex_id}/problem-report`.replace(
        `{${'cred_ex_id'}}`,
        encodeURIComponent(String(requestParameters.credExId)),
      ),
      method: 'POST',
      headers: headerParameters,
      query: queryParameters,
      body: V10CredentialProblemReportRequestToJSON(requestParameters.body),
    });

    return new runtime.JSONApiResponse<any>(response);
  }

  /**
   * Send a problem report for credential exchange
   */
  async issueCredentialRecordsCredExIdProblemReportPost(
    requestParameters: IssueCredentialRecordsCredExIdProblemReportPostRequest,
  ): Promise<object> {
    const response =
      await this.issueCredentialRecordsCredExIdProblemReportPostRaw(
        requestParameters,
      );
    return await response.value();
  }

  /**
   * Send holder a credential offer in reference to a proposal with preview
   */
  async issueCredentialRecordsCredExIdSendOfferPostRaw(
    requestParameters: IssueCredentialRecordsCredExIdSendOfferPostRequest,
  ): Promise<runtime.ApiResponse<V10CredentialExchange>> {
    if (
      requestParameters.credExId === null ||
      requestParameters.credExId === undefined
    ) {
      throw new runtime.RequiredError(
        'credExId',
        'Required parameter requestParameters.credExId was null or undefined when calling issueCredentialRecordsCredExIdSendOfferPost.',
      );
    }

    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    headerParameters['Content-Type'] = 'application/json';

    const response = await this.request({
      path: `/issue-credential/records/{cred_ex_id}/send-offer`.replace(
        `{${'cred_ex_id'}}`,
        encodeURIComponent(String(requestParameters.credExId)),
      ),
      method: 'POST',
      headers: headerParameters,
      query: queryParameters,
      body: V10CredentialBoundOfferRequestToJSON(requestParameters.body),
    });

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      V10CredentialExchangeFromJSON(jsonValue),
    );
  }

  /**
   * Send holder a credential offer in reference to a proposal with preview
   */
  async issueCredentialRecordsCredExIdSendOfferPost(
    requestParameters: IssueCredentialRecordsCredExIdSendOfferPostRequest,
  ): Promise<V10CredentialExchange> {
    const response = await this.issueCredentialRecordsCredExIdSendOfferPostRaw(
      requestParameters,
    );
    return await response.value();
  }

  /**
   * Send issuer a credential request
   */
  async issueCredentialRecordsCredExIdSendRequestPostRaw(
    requestParameters: IssueCredentialRecordsCredExIdSendRequestPostRequest,
  ): Promise<runtime.ApiResponse<V10CredentialExchange>> {
    if (
      requestParameters.credExId === null ||
      requestParameters.credExId === undefined
    ) {
      throw new runtime.RequiredError(
        'credExId',
        'Required parameter requestParameters.credExId was null or undefined when calling issueCredentialRecordsCredExIdSendRequestPost.',
      );
    }

    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    headerParameters['Content-Type'] = 'application/json';

    const response = await this.request({
      path: `/issue-credential/records/{cred_ex_id}/send-request`.replace(
        `{${'cred_ex_id'}}`,
        encodeURIComponent(String(requestParameters.credExId)),
      ),
      method: 'POST',
      headers: headerParameters,
      query: queryParameters,
      body: V10CredentialExchangeAutoRemoveRequestToJSON(
        requestParameters.body,
      ),
    });

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      V10CredentialExchangeFromJSON(jsonValue),
    );
  }

  /**
   * Send issuer a credential request
   */
  async issueCredentialRecordsCredExIdSendRequestPost(
    requestParameters: IssueCredentialRecordsCredExIdSendRequestPostRequest,
  ): Promise<V10CredentialExchange> {
    const response =
      await this.issueCredentialRecordsCredExIdSendRequestPostRaw(
        requestParameters,
      );
    return await response.value();
  }

  /**
   * Store a received credential
   */
  async issueCredentialRecordsCredExIdStorePostRaw(
    requestParameters: IssueCredentialRecordsCredExIdStorePostRequest,
  ): Promise<runtime.ApiResponse<V10CredentialExchange>> {
    if (
      requestParameters.credExId === null ||
      requestParameters.credExId === undefined
    ) {
      throw new runtime.RequiredError(
        'credExId',
        'Required parameter requestParameters.credExId was null or undefined when calling issueCredentialRecordsCredExIdStorePost.',
      );
    }

    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    headerParameters['Content-Type'] = 'application/json';

    const response = await this.request({
      path: `/issue-credential/records/{cred_ex_id}/store`.replace(
        `{${'cred_ex_id'}}`,
        encodeURIComponent(String(requestParameters.credExId)),
      ),
      method: 'POST',
      headers: headerParameters,
      query: queryParameters,
      body: V10CredentialStoreRequestToJSON(requestParameters.body),
    });

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      V10CredentialExchangeFromJSON(jsonValue),
    );
  }

  /**
   * Store a received credential
   */
  async issueCredentialRecordsCredExIdStorePost(
    requestParameters: IssueCredentialRecordsCredExIdStorePostRequest,
  ): Promise<V10CredentialExchange> {
    const response = await this.issueCredentialRecordsCredExIdStorePostRaw(
      requestParameters,
    );
    return await response.value();
  }

  /**
   * Fetch all credential exchange records
   */
  async issueCredentialRecordsGetRaw(
    requestParameters: IssueCredentialRecordsGetRequest,
  ): Promise<runtime.ApiResponse<V10CredentialExchangeListResult>> {
    const queryParameters: any = {};

    if (requestParameters.connectionId !== undefined) {
      queryParameters['connection_id'] = requestParameters.connectionId;
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
      path: `/issue-credential/records`,
      method: 'GET',
      headers: headerParameters,
      query: queryParameters,
    });

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      V10CredentialExchangeListResultFromJSON(jsonValue),
    );
  }

  /**
   * Fetch all credential exchange records
   */
  async issueCredentialRecordsGet(
    requestParameters: IssueCredentialRecordsGetRequest,
  ): Promise<V10CredentialExchangeListResult> {
    const response = await this.issueCredentialRecordsGetRaw(requestParameters);
    return await response.value();
  }

  /**
   * Send holder a credential offer, independent of any proposal
   */
  async issueCredentialSendOfferPostRaw(
    requestParameters: IssueCredentialSendOfferPostRequest,
  ): Promise<runtime.ApiResponse<V10CredentialExchange>> {
    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    headerParameters['Content-Type'] = 'application/json';

    const response = await this.request({
      path: `/issue-credential/send-offer`,
      method: 'POST',
      headers: headerParameters,
      query: queryParameters,
      body: V10CredentialFreeOfferRequestToJSON(requestParameters.body),
    });

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      V10CredentialExchangeFromJSON(jsonValue),
    );
  }

  /**
   * Send holder a credential offer, independent of any proposal
   */
  async issueCredentialSendOfferPost(
    requestParameters: IssueCredentialSendOfferPostRequest,
  ): Promise<V10CredentialExchange> {
    const response = await this.issueCredentialSendOfferPostRaw(
      requestParameters,
    );
    return await response.value();
  }

  /**
   * Send holder a credential, automating entire flow
   */
  async issueCredentialSendPostRaw(
    requestParameters: IssueCredentialSendPostRequest,
  ): Promise<runtime.ApiResponse<V10CredentialExchange>> {
    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    headerParameters['Content-Type'] = 'application/json';

    const response = await this.request({
      path: `/issue-credential/send`,
      method: 'POST',
      headers: headerParameters,
      query: queryParameters,
      body: V10CredentialProposalRequestMandToJSON(requestParameters.body),
    });

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      V10CredentialExchangeFromJSON(jsonValue),
    );
  }

  /**
   * Send holder a credential, automating entire flow
   */
  async issueCredentialSendPost(
    requestParameters: IssueCredentialSendPostRequest,
  ): Promise<V10CredentialExchange> {
    const response = await this.issueCredentialSendPostRaw(requestParameters);
    return await response.value();
  }

  /**
   * Send issuer a credential proposal
   */
  async issueCredentialSendProposalPostRaw(
    requestParameters: IssueCredentialSendProposalPostRequest,
  ): Promise<runtime.ApiResponse<V10CredentialExchange>> {
    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    headerParameters['Content-Type'] = 'application/json';

    const response = await this.request({
      path: `/issue-credential/send-proposal`,
      method: 'POST',
      headers: headerParameters,
      query: queryParameters,
      body: V10CredentialProposalRequestOptToJSON(requestParameters.body),
    });

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      V10CredentialExchangeFromJSON(jsonValue),
    );
  }

  /**
   * Send issuer a credential proposal
   */
  async issueCredentialSendProposalPost(
    requestParameters: IssueCredentialSendProposalPostRequest,
  ): Promise<V10CredentialExchange> {
    const response = await this.issueCredentialSendProposalPostRaw(
      requestParameters,
    );
    return await response.value();
  }
}

/**
 * @export
 * @enum {string}
 */
export enum IssueCredentialRecordsGetRoleEnum {
  Issuer = 'issuer',
  Holder = 'holder',
}
/**
 * @export
 * @enum {string}
 */
export enum IssueCredentialRecordsGetStateEnum {
  ProposalSent = 'proposal_sent',
  ProposalReceived = 'proposal_received',
  OfferSent = 'offer_sent',
  OfferReceived = 'offer_received',
  RequestSent = 'request_sent',
  RequestReceived = 'request_received',
  CredentialIssued = 'credential_issued',
  CredentialReceived = 'credential_received',
  CredentialAcked = 'credential_acked',
  CredentialRevoked = 'credential_revoked',
  Abandoned = 'abandoned',
}
