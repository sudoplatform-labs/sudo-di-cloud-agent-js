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
  V20CredBoundOfferRequest,
  V20CredBoundOfferRequestFromJSON,
  V20CredBoundOfferRequestToJSON,
  V20CredExFree,
  V20CredExFreeFromJSON,
  V20CredExFreeToJSON,
  V20CredExRecord,
  V20CredExRecordFromJSON,
  V20CredExRecordToJSON,
  V20CredExRecordDetail,
  V20CredExRecordDetailFromJSON,
  V20CredExRecordDetailToJSON,
  V20CredExRecordListResult,
  V20CredExRecordListResultFromJSON,
  V20CredExRecordListResultToJSON,
  V20CredIssueProblemReportRequest,
  V20CredIssueProblemReportRequestFromJSON,
  V20CredIssueProblemReportRequestToJSON,
  V20CredIssueRequest,
  V20CredIssueRequestFromJSON,
  V20CredIssueRequestToJSON,
  V20CredOfferConnFreeRequest,
  V20CredOfferConnFreeRequestFromJSON,
  V20CredOfferConnFreeRequestToJSON,
  V20CredOfferRequest,
  V20CredOfferRequestFromJSON,
  V20CredOfferRequestToJSON,
  V20CredRequestFree,
  V20CredRequestFreeFromJSON,
  V20CredRequestFreeToJSON,
  V20CredRequestRequest,
  V20CredRequestRequestFromJSON,
  V20CredRequestRequestToJSON,
  V20CredStoreRequest,
  V20CredStoreRequestFromJSON,
  V20CredStoreRequestToJSON,
  V20IssueCredSchemaCore,
  V20IssueCredSchemaCoreFromJSON,
  V20IssueCredSchemaCoreToJSON,
} from '../models';

export interface IssueCredential20CreateOfferPostRequest {
  body?: V20CredOfferConnFreeRequest;
}

export interface IssueCredential20CreatePostRequest {
  body?: V20IssueCredSchemaCore;
}

export interface IssueCredential20RecordsCredExIdDeleteRequest {
  credExId: string;
}

export interface IssueCredential20RecordsCredExIdGetRequest {
  credExId: string;
}

export interface IssueCredential20RecordsCredExIdIssuePostRequest {
  credExId: string;
  body?: V20CredIssueRequest;
}

export interface IssueCredential20RecordsCredExIdProblemReportPostRequest {
  credExId: string;
  body?: V20CredIssueProblemReportRequest;
}

export interface IssueCredential20RecordsCredExIdSendOfferPostRequest {
  credExId: string;
  body?: V20CredBoundOfferRequest;
}

export interface IssueCredential20RecordsCredExIdSendRequestPostRequest {
  credExId: string;
  body?: V20CredRequestRequest;
}

export interface IssueCredential20RecordsCredExIdStorePostRequest {
  credExId: string;
  body?: V20CredStoreRequest;
}

export interface IssueCredential20RecordsGetRequest {
  connectionId?: string;
  role?: IssueCredential20RecordsGetRoleEnum;
  state?: IssueCredential20RecordsGetStateEnum;
  threadId?: string;
}

export interface IssueCredential20SendOfferPostRequest {
  body?: V20CredOfferRequest;
}

export interface IssueCredential20SendPostRequest {
  body?: V20CredExFree;
}

export interface IssueCredential20SendProposalPostRequest {
  body?: V20CredExFree;
}

export interface IssueCredential20SendRequestPostRequest {
  body?: V20CredRequestFree;
}

/**
 *
 */
export class IssueCredentialV20Api extends runtime.BaseAPI {
  /**
   * Create a credential offer, independent of any proposal or connection
   */
  async issueCredential20CreateOfferPostRaw(
    requestParameters: IssueCredential20CreateOfferPostRequest,
  ): Promise<runtime.ApiResponse<V20CredExRecord>> {
    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    headerParameters['Content-Type'] = 'application/json';

    const response = await this.request({
      path: `/issue-credential-2.0/create-offer`,
      method: 'POST',
      headers: headerParameters,
      query: queryParameters,
      body: V20CredOfferConnFreeRequestToJSON(requestParameters.body),
    });

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      V20CredExRecordFromJSON(jsonValue),
    );
  }

  /**
   * Create a credential offer, independent of any proposal or connection
   */
  async issueCredential20CreateOfferPost(
    requestParameters: IssueCredential20CreateOfferPostRequest,
  ): Promise<V20CredExRecord> {
    const response = await this.issueCredential20CreateOfferPostRaw(
      requestParameters,
    );
    return await response.value();
  }

  /**
   * Create a credential record without sending (generally for use with Out-Of-Band)
   */
  async issueCredential20CreatePostRaw(
    requestParameters: IssueCredential20CreatePostRequest,
  ): Promise<runtime.ApiResponse<V20CredExRecord>> {
    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    headerParameters['Content-Type'] = 'application/json';

    const response = await this.request({
      path: `/issue-credential-2.0/create`,
      method: 'POST',
      headers: headerParameters,
      query: queryParameters,
      body: V20IssueCredSchemaCoreToJSON(requestParameters.body),
    });

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      V20CredExRecordFromJSON(jsonValue),
    );
  }

  /**
   * Create a credential record without sending (generally for use with Out-Of-Band)
   */
  async issueCredential20CreatePost(
    requestParameters: IssueCredential20CreatePostRequest,
  ): Promise<V20CredExRecord> {
    const response = await this.issueCredential20CreatePostRaw(
      requestParameters,
    );
    return await response.value();
  }

  /**
   * Remove an existing credential exchange record
   */
  async issueCredential20RecordsCredExIdDeleteRaw(
    requestParameters: IssueCredential20RecordsCredExIdDeleteRequest,
  ): Promise<runtime.ApiResponse<object>> {
    if (
      requestParameters.credExId === null ||
      requestParameters.credExId === undefined
    ) {
      throw new runtime.RequiredError(
        'credExId',
        'Required parameter requestParameters.credExId was null or undefined when calling issueCredential20RecordsCredExIdDelete.',
      );
    }

    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    const response = await this.request({
      path: `/issue-credential-2.0/records/{cred_ex_id}`.replace(
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
  async issueCredential20RecordsCredExIdDelete(
    requestParameters: IssueCredential20RecordsCredExIdDeleteRequest,
  ): Promise<object> {
    const response = await this.issueCredential20RecordsCredExIdDeleteRaw(
      requestParameters,
    );
    return await response.value();
  }

  /**
   * Fetch a single credential exchange record
   */
  async issueCredential20RecordsCredExIdGetRaw(
    requestParameters: IssueCredential20RecordsCredExIdGetRequest,
  ): Promise<runtime.ApiResponse<V20CredExRecordDetail>> {
    if (
      requestParameters.credExId === null ||
      requestParameters.credExId === undefined
    ) {
      throw new runtime.RequiredError(
        'credExId',
        'Required parameter requestParameters.credExId was null or undefined when calling issueCredential20RecordsCredExIdGet.',
      );
    }

    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    const response = await this.request({
      path: `/issue-credential-2.0/records/{cred_ex_id}`.replace(
        `{${'cred_ex_id'}}`,
        encodeURIComponent(String(requestParameters.credExId)),
      ),
      method: 'GET',
      headers: headerParameters,
      query: queryParameters,
    });

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      V20CredExRecordDetailFromJSON(jsonValue),
    );
  }

  /**
   * Fetch a single credential exchange record
   */
  async issueCredential20RecordsCredExIdGet(
    requestParameters: IssueCredential20RecordsCredExIdGetRequest,
  ): Promise<V20CredExRecordDetail> {
    const response = await this.issueCredential20RecordsCredExIdGetRaw(
      requestParameters,
    );
    return await response.value();
  }

  /**
   * Send holder a credential
   */
  async issueCredential20RecordsCredExIdIssuePostRaw(
    requestParameters: IssueCredential20RecordsCredExIdIssuePostRequest,
  ): Promise<runtime.ApiResponse<V20CredExRecordDetail>> {
    if (
      requestParameters.credExId === null ||
      requestParameters.credExId === undefined
    ) {
      throw new runtime.RequiredError(
        'credExId',
        'Required parameter requestParameters.credExId was null or undefined when calling issueCredential20RecordsCredExIdIssuePost.',
      );
    }

    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    headerParameters['Content-Type'] = 'application/json';

    const response = await this.request({
      path: `/issue-credential-2.0/records/{cred_ex_id}/issue`.replace(
        `{${'cred_ex_id'}}`,
        encodeURIComponent(String(requestParameters.credExId)),
      ),
      method: 'POST',
      headers: headerParameters,
      query: queryParameters,
      body: V20CredIssueRequestToJSON(requestParameters.body),
    });

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      V20CredExRecordDetailFromJSON(jsonValue),
    );
  }

  /**
   * Send holder a credential
   */
  async issueCredential20RecordsCredExIdIssuePost(
    requestParameters: IssueCredential20RecordsCredExIdIssuePostRequest,
  ): Promise<V20CredExRecordDetail> {
    const response = await this.issueCredential20RecordsCredExIdIssuePostRaw(
      requestParameters,
    );
    return await response.value();
  }

  /**
   * Send a problem report for credential exchange
   */
  async issueCredential20RecordsCredExIdProblemReportPostRaw(
    requestParameters: IssueCredential20RecordsCredExIdProblemReportPostRequest,
  ): Promise<runtime.ApiResponse<object>> {
    if (
      requestParameters.credExId === null ||
      requestParameters.credExId === undefined
    ) {
      throw new runtime.RequiredError(
        'credExId',
        'Required parameter requestParameters.credExId was null or undefined when calling issueCredential20RecordsCredExIdProblemReportPost.',
      );
    }

    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    headerParameters['Content-Type'] = 'application/json';

    const response = await this.request({
      path: `/issue-credential-2.0/records/{cred_ex_id}/problem-report`.replace(
        `{${'cred_ex_id'}}`,
        encodeURIComponent(String(requestParameters.credExId)),
      ),
      method: 'POST',
      headers: headerParameters,
      query: queryParameters,
      body: V20CredIssueProblemReportRequestToJSON(requestParameters.body),
    });

    return new runtime.JSONApiResponse<any>(response);
  }

  /**
   * Send a problem report for credential exchange
   */
  async issueCredential20RecordsCredExIdProblemReportPost(
    requestParameters: IssueCredential20RecordsCredExIdProblemReportPostRequest,
  ): Promise<object> {
    const response =
      await this.issueCredential20RecordsCredExIdProblemReportPostRaw(
        requestParameters,
      );
    return await response.value();
  }

  /**
   * Send holder a credential offer in reference to a proposal with preview
   */
  async issueCredential20RecordsCredExIdSendOfferPostRaw(
    requestParameters: IssueCredential20RecordsCredExIdSendOfferPostRequest,
  ): Promise<runtime.ApiResponse<V20CredExRecord>> {
    if (
      requestParameters.credExId === null ||
      requestParameters.credExId === undefined
    ) {
      throw new runtime.RequiredError(
        'credExId',
        'Required parameter requestParameters.credExId was null or undefined when calling issueCredential20RecordsCredExIdSendOfferPost.',
      );
    }

    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    headerParameters['Content-Type'] = 'application/json';

    const response = await this.request({
      path: `/issue-credential-2.0/records/{cred_ex_id}/send-offer`.replace(
        `{${'cred_ex_id'}}`,
        encodeURIComponent(String(requestParameters.credExId)),
      ),
      method: 'POST',
      headers: headerParameters,
      query: queryParameters,
      body: V20CredBoundOfferRequestToJSON(requestParameters.body),
    });

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      V20CredExRecordFromJSON(jsonValue),
    );
  }

  /**
   * Send holder a credential offer in reference to a proposal with preview
   */
  async issueCredential20RecordsCredExIdSendOfferPost(
    requestParameters: IssueCredential20RecordsCredExIdSendOfferPostRequest,
  ): Promise<V20CredExRecord> {
    const response =
      await this.issueCredential20RecordsCredExIdSendOfferPostRaw(
        requestParameters,
      );
    return await response.value();
  }

  /**
   * Send issuer a credential request
   */
  async issueCredential20RecordsCredExIdSendRequestPostRaw(
    requestParameters: IssueCredential20RecordsCredExIdSendRequestPostRequest,
  ): Promise<runtime.ApiResponse<V20CredExRecord>> {
    if (
      requestParameters.credExId === null ||
      requestParameters.credExId === undefined
    ) {
      throw new runtime.RequiredError(
        'credExId',
        'Required parameter requestParameters.credExId was null or undefined when calling issueCredential20RecordsCredExIdSendRequestPost.',
      );
    }

    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    headerParameters['Content-Type'] = 'application/json';

    const response = await this.request({
      path: `/issue-credential-2.0/records/{cred_ex_id}/send-request`.replace(
        `{${'cred_ex_id'}}`,
        encodeURIComponent(String(requestParameters.credExId)),
      ),
      method: 'POST',
      headers: headerParameters,
      query: queryParameters,
      body: V20CredRequestRequestToJSON(requestParameters.body),
    });

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      V20CredExRecordFromJSON(jsonValue),
    );
  }

  /**
   * Send issuer a credential request
   */
  async issueCredential20RecordsCredExIdSendRequestPost(
    requestParameters: IssueCredential20RecordsCredExIdSendRequestPostRequest,
  ): Promise<V20CredExRecord> {
    const response =
      await this.issueCredential20RecordsCredExIdSendRequestPostRaw(
        requestParameters,
      );
    return await response.value();
  }

  /**
   * Store a received credential
   */
  async issueCredential20RecordsCredExIdStorePostRaw(
    requestParameters: IssueCredential20RecordsCredExIdStorePostRequest,
  ): Promise<runtime.ApiResponse<V20CredExRecordDetail>> {
    if (
      requestParameters.credExId === null ||
      requestParameters.credExId === undefined
    ) {
      throw new runtime.RequiredError(
        'credExId',
        'Required parameter requestParameters.credExId was null or undefined when calling issueCredential20RecordsCredExIdStorePost.',
      );
    }

    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    headerParameters['Content-Type'] = 'application/json';

    const response = await this.request({
      path: `/issue-credential-2.0/records/{cred_ex_id}/store`.replace(
        `{${'cred_ex_id'}}`,
        encodeURIComponent(String(requestParameters.credExId)),
      ),
      method: 'POST',
      headers: headerParameters,
      query: queryParameters,
      body: V20CredStoreRequestToJSON(requestParameters.body),
    });

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      V20CredExRecordDetailFromJSON(jsonValue),
    );
  }

  /**
   * Store a received credential
   */
  async issueCredential20RecordsCredExIdStorePost(
    requestParameters: IssueCredential20RecordsCredExIdStorePostRequest,
  ): Promise<V20CredExRecordDetail> {
    const response = await this.issueCredential20RecordsCredExIdStorePostRaw(
      requestParameters,
    );
    return await response.value();
  }

  /**
   * Fetch all credential exchange records
   */
  async issueCredential20RecordsGetRaw(
    requestParameters: IssueCredential20RecordsGetRequest,
  ): Promise<runtime.ApiResponse<V20CredExRecordListResult>> {
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
      path: `/issue-credential-2.0/records`,
      method: 'GET',
      headers: headerParameters,
      query: queryParameters,
    });

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      V20CredExRecordListResultFromJSON(jsonValue),
    );
  }

  /**
   * Fetch all credential exchange records
   */
  async issueCredential20RecordsGet(
    requestParameters: IssueCredential20RecordsGetRequest,
  ): Promise<V20CredExRecordListResult> {
    const response = await this.issueCredential20RecordsGetRaw(
      requestParameters,
    );
    return await response.value();
  }

  /**
   * Send holder a credential offer, independent of any proposal
   */
  async issueCredential20SendOfferPostRaw(
    requestParameters: IssueCredential20SendOfferPostRequest,
  ): Promise<runtime.ApiResponse<V20CredExRecord>> {
    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    headerParameters['Content-Type'] = 'application/json';

    const response = await this.request({
      path: `/issue-credential-2.0/send-offer`,
      method: 'POST',
      headers: headerParameters,
      query: queryParameters,
      body: V20CredOfferRequestToJSON(requestParameters.body),
    });

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      V20CredExRecordFromJSON(jsonValue),
    );
  }

  /**
   * Send holder a credential offer, independent of any proposal
   */
  async issueCredential20SendOfferPost(
    requestParameters: IssueCredential20SendOfferPostRequest,
  ): Promise<V20CredExRecord> {
    const response = await this.issueCredential20SendOfferPostRaw(
      requestParameters,
    );
    return await response.value();
  }

  /**
   * Send holder a credential, automating entire flow
   */
  async issueCredential20SendPostRaw(
    requestParameters: IssueCredential20SendPostRequest,
  ): Promise<runtime.ApiResponse<V20CredExRecord>> {
    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    headerParameters['Content-Type'] = 'application/json';

    const response = await this.request({
      path: `/issue-credential-2.0/send`,
      method: 'POST',
      headers: headerParameters,
      query: queryParameters,
      body: V20CredExFreeToJSON(requestParameters.body),
    });

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      V20CredExRecordFromJSON(jsonValue),
    );
  }

  /**
   * Send holder a credential, automating entire flow
   */
  async issueCredential20SendPost(
    requestParameters: IssueCredential20SendPostRequest,
  ): Promise<V20CredExRecord> {
    const response = await this.issueCredential20SendPostRaw(requestParameters);
    return await response.value();
  }

  /**
   * Send issuer a credential proposal
   */
  async issueCredential20SendProposalPostRaw(
    requestParameters: IssueCredential20SendProposalPostRequest,
  ): Promise<runtime.ApiResponse<V20CredExRecord>> {
    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    headerParameters['Content-Type'] = 'application/json';

    const response = await this.request({
      path: `/issue-credential-2.0/send-proposal`,
      method: 'POST',
      headers: headerParameters,
      query: queryParameters,
      body: V20CredExFreeToJSON(requestParameters.body),
    });

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      V20CredExRecordFromJSON(jsonValue),
    );
  }

  /**
   * Send issuer a credential proposal
   */
  async issueCredential20SendProposalPost(
    requestParameters: IssueCredential20SendProposalPostRequest,
  ): Promise<V20CredExRecord> {
    const response = await this.issueCredential20SendProposalPostRaw(
      requestParameters,
    );
    return await response.value();
  }

  /**
   * Send issuer a credential request not bound to an existing thread. Indy credentials cannot start at a request
   */
  async issueCredential20SendRequestPostRaw(
    requestParameters: IssueCredential20SendRequestPostRequest,
  ): Promise<runtime.ApiResponse<V20CredExRecord>> {
    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    headerParameters['Content-Type'] = 'application/json';

    const response = await this.request({
      path: `/issue-credential-2.0/send-request`,
      method: 'POST',
      headers: headerParameters,
      query: queryParameters,
      body: V20CredRequestFreeToJSON(requestParameters.body),
    });

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      V20CredExRecordFromJSON(jsonValue),
    );
  }

  /**
   * Send issuer a credential request not bound to an existing thread. Indy credentials cannot start at a request
   */
  async issueCredential20SendRequestPost(
    requestParameters: IssueCredential20SendRequestPostRequest,
  ): Promise<V20CredExRecord> {
    const response = await this.issueCredential20SendRequestPostRaw(
      requestParameters,
    );
    return await response.value();
  }
}

/**
 * @export
 * @enum {string}
 */
export enum IssueCredential20RecordsGetRoleEnum {
  Issuer = 'issuer',
  Holder = 'holder',
}
/**
 * @export
 * @enum {string}
 */
export enum IssueCredential20RecordsGetStateEnum {
  ProposalSent = 'proposal-sent',
  ProposalReceived = 'proposal-received',
  OfferSent = 'offer-sent',
  OfferReceived = 'offer-received',
  RequestSent = 'request-sent',
  RequestReceived = 'request-received',
  CredentialIssued = 'credential-issued',
  CredentialReceived = 'credential-received',
  Done = 'done',
  CredentialRevoked = 'credential-revoked',
  Abandoned = 'abandoned',
}
