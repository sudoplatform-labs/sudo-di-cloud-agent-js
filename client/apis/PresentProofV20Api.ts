/**
 * Sudo Decentralized Identity Cloud Agent SDK
 * Provides REST API wrappers for Typescript Agent Controllers using the Sudo Decentralized Identity Cloud Agency Service
 *
 * The version of the OpenAPI document: v0.5.4
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import * as runtime from '../runtime';
import {
  AdminAPIMessageTracing,
  AdminAPIMessageTracingFromJSON,
  AdminAPIMessageTracingToJSON,
  IndyCredPrecis,
  IndyCredPrecisFromJSON,
  IndyCredPrecisToJSON,
  V20PresCreateRequestRequest,
  V20PresCreateRequestRequestFromJSON,
  V20PresCreateRequestRequestToJSON,
  V20PresExRecord,
  V20PresExRecordFromJSON,
  V20PresExRecordToJSON,
  V20PresExRecordList,
  V20PresExRecordListFromJSON,
  V20PresExRecordListToJSON,
  V20PresProblemReportRequest,
  V20PresProblemReportRequestFromJSON,
  V20PresProblemReportRequestToJSON,
  V20PresProposalRequest,
  V20PresProposalRequestFromJSON,
  V20PresProposalRequestToJSON,
  V20PresSendRequestRequest,
  V20PresSendRequestRequestFromJSON,
  V20PresSendRequestRequestToJSON,
  V20PresSpecByFormatRequest,
  V20PresSpecByFormatRequestFromJSON,
  V20PresSpecByFormatRequestToJSON,
} from '../models';

export interface PresentProof20CreateRequestPostRequest {
  body?: V20PresCreateRequestRequest;
}

export interface PresentProof20RecordsGetRequest {
  connectionId?: string;
  role?: PresentProof20RecordsGetRoleEnum;
  state?: PresentProof20RecordsGetStateEnum;
  threadId?: string;
}

export interface PresentProof20RecordsPresExIdCredentialsGetRequest {
  presExId: string;
  count?: string;
  extraQuery?: string;
  referent?: string;
  start?: string;
}

export interface PresentProof20RecordsPresExIdDeleteRequest {
  presExId: string;
}

export interface PresentProof20RecordsPresExIdGetRequest {
  presExId: string;
}

export interface PresentProof20RecordsPresExIdProblemReportPostRequest {
  presExId: string;
  body?: V20PresProblemReportRequest;
}

export interface PresentProof20RecordsPresExIdSendPresentationPostRequest {
  presExId: string;
  body?: V20PresSpecByFormatRequest;
}

export interface PresentProof20RecordsPresExIdSendRequestPostRequest {
  presExId: string;
  body?: AdminAPIMessageTracing;
}

export interface PresentProof20RecordsPresExIdVerifyPresentationPostRequest {
  presExId: string;
}

export interface PresentProof20SendProposalPostRequest {
  body?: V20PresProposalRequest;
}

export interface PresentProof20SendRequestPostRequest {
  body?: V20PresSendRequestRequest;
}

/**
 *
 */
export class PresentProofV20Api extends runtime.BaseAPI {
  /**
   * Creates a presentation request not bound to any proposal or connection
   */
  async presentProof20CreateRequestPostRaw(
    requestParameters: PresentProof20CreateRequestPostRequest,
  ): Promise<runtime.ApiResponse<V20PresExRecord>> {
    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    headerParameters['Content-Type'] = 'application/json';

    const response = await this.request({
      path: `/present-proof-2.0/create-request`,
      method: 'POST',
      headers: headerParameters,
      query: queryParameters,
      body: V20PresCreateRequestRequestToJSON(requestParameters.body),
    });

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      V20PresExRecordFromJSON(jsonValue),
    );
  }

  /**
   * Creates a presentation request not bound to any proposal or connection
   */
  async presentProof20CreateRequestPost(
    requestParameters: PresentProof20CreateRequestPostRequest,
  ): Promise<V20PresExRecord> {
    const response = await this.presentProof20CreateRequestPostRaw(
      requestParameters,
    );
    return await response.value();
  }

  /**
   * Fetch all present-proof exchange records
   */
  async presentProof20RecordsGetRaw(
    requestParameters: PresentProof20RecordsGetRequest,
  ): Promise<runtime.ApiResponse<V20PresExRecordList>> {
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
      path: `/present-proof-2.0/records`,
      method: 'GET',
      headers: headerParameters,
      query: queryParameters,
    });

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      V20PresExRecordListFromJSON(jsonValue),
    );
  }

  /**
   * Fetch all present-proof exchange records
   */
  async presentProof20RecordsGet(
    requestParameters: PresentProof20RecordsGetRequest,
  ): Promise<V20PresExRecordList> {
    const response = await this.presentProof20RecordsGetRaw(requestParameters);
    return await response.value();
  }

  /**
   * Fetch credentials from wallet for presentation request
   */
  async presentProof20RecordsPresExIdCredentialsGetRaw(
    requestParameters: PresentProof20RecordsPresExIdCredentialsGetRequest,
  ): Promise<runtime.ApiResponse<Array<IndyCredPrecis>>> {
    if (
      requestParameters.presExId === null ||
      requestParameters.presExId === undefined
    ) {
      throw new runtime.RequiredError(
        'presExId',
        'Required parameter requestParameters.presExId was null or undefined when calling presentProof20RecordsPresExIdCredentialsGet.',
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
      path: `/present-proof-2.0/records/{pres_ex_id}/credentials`.replace(
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
   * Fetch credentials from wallet for presentation request
   */
  async presentProof20RecordsPresExIdCredentialsGet(
    requestParameters: PresentProof20RecordsPresExIdCredentialsGetRequest,
  ): Promise<Array<IndyCredPrecis>> {
    const response = await this.presentProof20RecordsPresExIdCredentialsGetRaw(
      requestParameters,
    );
    return await response.value();
  }

  /**
   * Remove an existing presentation exchange record
   */
  async presentProof20RecordsPresExIdDeleteRaw(
    requestParameters: PresentProof20RecordsPresExIdDeleteRequest,
  ): Promise<runtime.ApiResponse<object>> {
    if (
      requestParameters.presExId === null ||
      requestParameters.presExId === undefined
    ) {
      throw new runtime.RequiredError(
        'presExId',
        'Required parameter requestParameters.presExId was null or undefined when calling presentProof20RecordsPresExIdDelete.',
      );
    }

    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    const response = await this.request({
      path: `/present-proof-2.0/records/{pres_ex_id}`.replace(
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
  async presentProof20RecordsPresExIdDelete(
    requestParameters: PresentProof20RecordsPresExIdDeleteRequest,
  ): Promise<object> {
    const response = await this.presentProof20RecordsPresExIdDeleteRaw(
      requestParameters,
    );
    return await response.value();
  }

  /**
   * Fetch a single presentation exchange record
   */
  async presentProof20RecordsPresExIdGetRaw(
    requestParameters: PresentProof20RecordsPresExIdGetRequest,
  ): Promise<runtime.ApiResponse<V20PresExRecord>> {
    if (
      requestParameters.presExId === null ||
      requestParameters.presExId === undefined
    ) {
      throw new runtime.RequiredError(
        'presExId',
        'Required parameter requestParameters.presExId was null or undefined when calling presentProof20RecordsPresExIdGet.',
      );
    }

    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    const response = await this.request({
      path: `/present-proof-2.0/records/{pres_ex_id}`.replace(
        `{${'pres_ex_id'}}`,
        encodeURIComponent(String(requestParameters.presExId)),
      ),
      method: 'GET',
      headers: headerParameters,
      query: queryParameters,
    });

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      V20PresExRecordFromJSON(jsonValue),
    );
  }

  /**
   * Fetch a single presentation exchange record
   */
  async presentProof20RecordsPresExIdGet(
    requestParameters: PresentProof20RecordsPresExIdGetRequest,
  ): Promise<V20PresExRecord> {
    const response = await this.presentProof20RecordsPresExIdGetRaw(
      requestParameters,
    );
    return await response.value();
  }

  /**
   * Send a problem report for presentation exchange
   */
  async presentProof20RecordsPresExIdProblemReportPostRaw(
    requestParameters: PresentProof20RecordsPresExIdProblemReportPostRequest,
  ): Promise<runtime.ApiResponse<object>> {
    if (
      requestParameters.presExId === null ||
      requestParameters.presExId === undefined
    ) {
      throw new runtime.RequiredError(
        'presExId',
        'Required parameter requestParameters.presExId was null or undefined when calling presentProof20RecordsPresExIdProblemReportPost.',
      );
    }

    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    headerParameters['Content-Type'] = 'application/json';

    const response = await this.request({
      path: `/present-proof-2.0/records/{pres_ex_id}/problem-report`.replace(
        `{${'pres_ex_id'}}`,
        encodeURIComponent(String(requestParameters.presExId)),
      ),
      method: 'POST',
      headers: headerParameters,
      query: queryParameters,
      body: V20PresProblemReportRequestToJSON(requestParameters.body),
    });

    return new runtime.JSONApiResponse<any>(response);
  }

  /**
   * Send a problem report for presentation exchange
   */
  async presentProof20RecordsPresExIdProblemReportPost(
    requestParameters: PresentProof20RecordsPresExIdProblemReportPostRequest,
  ): Promise<object> {
    const response =
      await this.presentProof20RecordsPresExIdProblemReportPostRaw(
        requestParameters,
      );
    return await response.value();
  }

  /**
   * Sends a proof presentation
   */
  async presentProof20RecordsPresExIdSendPresentationPostRaw(
    requestParameters: PresentProof20RecordsPresExIdSendPresentationPostRequest,
  ): Promise<runtime.ApiResponse<V20PresExRecord>> {
    if (
      requestParameters.presExId === null ||
      requestParameters.presExId === undefined
    ) {
      throw new runtime.RequiredError(
        'presExId',
        'Required parameter requestParameters.presExId was null or undefined when calling presentProof20RecordsPresExIdSendPresentationPost.',
      );
    }

    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    headerParameters['Content-Type'] = 'application/json';

    const response = await this.request({
      path: `/present-proof-2.0/records/{pres_ex_id}/send-presentation`.replace(
        `{${'pres_ex_id'}}`,
        encodeURIComponent(String(requestParameters.presExId)),
      ),
      method: 'POST',
      headers: headerParameters,
      query: queryParameters,
      body: V20PresSpecByFormatRequestToJSON(requestParameters.body),
    });

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      V20PresExRecordFromJSON(jsonValue),
    );
  }

  /**
   * Sends a proof presentation
   */
  async presentProof20RecordsPresExIdSendPresentationPost(
    requestParameters: PresentProof20RecordsPresExIdSendPresentationPostRequest,
  ): Promise<V20PresExRecord> {
    const response =
      await this.presentProof20RecordsPresExIdSendPresentationPostRaw(
        requestParameters,
      );
    return await response.value();
  }

  /**
   * Sends a presentation request in reference to a proposal
   */
  async presentProof20RecordsPresExIdSendRequestPostRaw(
    requestParameters: PresentProof20RecordsPresExIdSendRequestPostRequest,
  ): Promise<runtime.ApiResponse<V20PresExRecord>> {
    if (
      requestParameters.presExId === null ||
      requestParameters.presExId === undefined
    ) {
      throw new runtime.RequiredError(
        'presExId',
        'Required parameter requestParameters.presExId was null or undefined when calling presentProof20RecordsPresExIdSendRequestPost.',
      );
    }

    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    headerParameters['Content-Type'] = 'application/json';

    const response = await this.request({
      path: `/present-proof-2.0/records/{pres_ex_id}/send-request`.replace(
        `{${'pres_ex_id'}}`,
        encodeURIComponent(String(requestParameters.presExId)),
      ),
      method: 'POST',
      headers: headerParameters,
      query: queryParameters,
      body: AdminAPIMessageTracingToJSON(requestParameters.body),
    });

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      V20PresExRecordFromJSON(jsonValue),
    );
  }

  /**
   * Sends a presentation request in reference to a proposal
   */
  async presentProof20RecordsPresExIdSendRequestPost(
    requestParameters: PresentProof20RecordsPresExIdSendRequestPostRequest,
  ): Promise<V20PresExRecord> {
    const response = await this.presentProof20RecordsPresExIdSendRequestPostRaw(
      requestParameters,
    );
    return await response.value();
  }

  /**
   * Verify a received presentation
   */
  async presentProof20RecordsPresExIdVerifyPresentationPostRaw(
    requestParameters: PresentProof20RecordsPresExIdVerifyPresentationPostRequest,
  ): Promise<runtime.ApiResponse<V20PresExRecord>> {
    if (
      requestParameters.presExId === null ||
      requestParameters.presExId === undefined
    ) {
      throw new runtime.RequiredError(
        'presExId',
        'Required parameter requestParameters.presExId was null or undefined when calling presentProof20RecordsPresExIdVerifyPresentationPost.',
      );
    }

    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    const response = await this.request({
      path: `/present-proof-2.0/records/{pres_ex_id}/verify-presentation`.replace(
        `{${'pres_ex_id'}}`,
        encodeURIComponent(String(requestParameters.presExId)),
      ),
      method: 'POST',
      headers: headerParameters,
      query: queryParameters,
    });

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      V20PresExRecordFromJSON(jsonValue),
    );
  }

  /**
   * Verify a received presentation
   */
  async presentProof20RecordsPresExIdVerifyPresentationPost(
    requestParameters: PresentProof20RecordsPresExIdVerifyPresentationPostRequest,
  ): Promise<V20PresExRecord> {
    const response =
      await this.presentProof20RecordsPresExIdVerifyPresentationPostRaw(
        requestParameters,
      );
    return await response.value();
  }

  /**
   * Sends a presentation proposal
   */
  async presentProof20SendProposalPostRaw(
    requestParameters: PresentProof20SendProposalPostRequest,
  ): Promise<runtime.ApiResponse<V20PresExRecord>> {
    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    headerParameters['Content-Type'] = 'application/json';

    const response = await this.request({
      path: `/present-proof-2.0/send-proposal`,
      method: 'POST',
      headers: headerParameters,
      query: queryParameters,
      body: V20PresProposalRequestToJSON(requestParameters.body),
    });

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      V20PresExRecordFromJSON(jsonValue),
    );
  }

  /**
   * Sends a presentation proposal
   */
  async presentProof20SendProposalPost(
    requestParameters: PresentProof20SendProposalPostRequest,
  ): Promise<V20PresExRecord> {
    const response = await this.presentProof20SendProposalPostRaw(
      requestParameters,
    );
    return await response.value();
  }

  /**
   * Sends a free presentation request not bound to any proposal
   */
  async presentProof20SendRequestPostRaw(
    requestParameters: PresentProof20SendRequestPostRequest,
  ): Promise<runtime.ApiResponse<V20PresExRecord>> {
    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    headerParameters['Content-Type'] = 'application/json';

    const response = await this.request({
      path: `/present-proof-2.0/send-request`,
      method: 'POST',
      headers: headerParameters,
      query: queryParameters,
      body: V20PresSendRequestRequestToJSON(requestParameters.body),
    });

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      V20PresExRecordFromJSON(jsonValue),
    );
  }

  /**
   * Sends a free presentation request not bound to any proposal
   */
  async presentProof20SendRequestPost(
    requestParameters: PresentProof20SendRequestPostRequest,
  ): Promise<V20PresExRecord> {
    const response = await this.presentProof20SendRequestPostRaw(
      requestParameters,
    );
    return await response.value();
  }
}

/**
 * @export
 * @enum {string}
 */
export enum PresentProof20RecordsGetRoleEnum {
  Prover = 'prover',
  Verifier = 'verifier',
}
/**
 * @export
 * @enum {string}
 */
export enum PresentProof20RecordsGetStateEnum {
  ProposalSent = 'proposal-sent',
  ProposalReceived = 'proposal-received',
  RequestSent = 'request-sent',
  RequestReceived = 'request-received',
  PresentationSent = 'presentation-sent',
  PresentationReceived = 'presentation-received',
  Done = 'done',
  Abandoned = 'abandoned',
}
