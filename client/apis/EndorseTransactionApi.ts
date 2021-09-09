/**
 * Sudo Decentralized Identity Cloud Agent SDK
 * Provides REST API wrappers for Typescript Agent Controllers using the Sudo Decentralized Identity Cloud Agency Service
 *
 * The version of the OpenAPI document: v0.5.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import * as runtime from '../runtime';
import {
  EndorserInfo,
  EndorserInfoFromJSON,
  EndorserInfoToJSON,
  ModelDate,
  ModelDateFromJSON,
  ModelDateToJSON,
  TransactionJobs,
  TransactionJobsFromJSON,
  TransactionJobsToJSON,
  TransactionList,
  TransactionListFromJSON,
  TransactionListToJSON,
  TransactionRecord,
  TransactionRecordFromJSON,
  TransactionRecordToJSON,
} from '../models';

export interface TransactionTranIdResendPostRequest {
  tranId: string;
}

export interface TransactionsConnIdSetEndorserInfoPostRequest {
  connId: string;
  endorserDid: string;
  endorserName?: string;
}

export interface TransactionsConnIdSetEndorserRolePostRequest {
  connId: string;
  transactionMyJob?: TransactionsConnIdSetEndorserRolePostTransactionMyJobEnum;
}

export interface TransactionsCreateRequestPostRequest {
  tranId: string;
  endorserWriteTxn?: boolean;
  body?: ModelDate;
}

export interface TransactionsTranIdCancelPostRequest {
  tranId: string;
}

export interface TransactionsTranIdEndorsePostRequest {
  tranId: string;
}

export interface TransactionsTranIdGetRequest {
  tranId: string;
}

export interface TransactionsTranIdRefusePostRequest {
  tranId: string;
}

export interface TransactionsTranIdWritePostRequest {
  tranId: string;
}

/**
 *
 */
export class EndorseTransactionApi extends runtime.BaseAPI {
  /**
   * For Author to resend a particular transaction request
   */
  async transactionTranIdResendPostRaw(
    requestParameters: TransactionTranIdResendPostRequest,
  ): Promise<runtime.ApiResponse<TransactionRecord>> {
    if (
      requestParameters.tranId === null ||
      requestParameters.tranId === undefined
    ) {
      throw new runtime.RequiredError(
        'tranId',
        'Required parameter requestParameters.tranId was null or undefined when calling transactionTranIdResendPost.',
      );
    }

    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    const response = await this.request({
      path: `/transaction/{tran_id}/resend`.replace(
        `{${'tran_id'}}`,
        encodeURIComponent(String(requestParameters.tranId)),
      ),
      method: 'POST',
      headers: headerParameters,
      query: queryParameters,
    });

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      TransactionRecordFromJSON(jsonValue),
    );
  }

  /**
   * For Author to resend a particular transaction request
   */
  async transactionTranIdResendPost(
    requestParameters: TransactionTranIdResendPostRequest,
  ): Promise<TransactionRecord> {
    const response = await this.transactionTranIdResendPostRaw(
      requestParameters,
    );
    return await response.value();
  }

  /**
   * Set Endorser Info
   */
  async transactionsConnIdSetEndorserInfoPostRaw(
    requestParameters: TransactionsConnIdSetEndorserInfoPostRequest,
  ): Promise<runtime.ApiResponse<EndorserInfo>> {
    if (
      requestParameters.connId === null ||
      requestParameters.connId === undefined
    ) {
      throw new runtime.RequiredError(
        'connId',
        'Required parameter requestParameters.connId was null or undefined when calling transactionsConnIdSetEndorserInfoPost.',
      );
    }

    if (
      requestParameters.endorserDid === null ||
      requestParameters.endorserDid === undefined
    ) {
      throw new runtime.RequiredError(
        'endorserDid',
        'Required parameter requestParameters.endorserDid was null or undefined when calling transactionsConnIdSetEndorserInfoPost.',
      );
    }

    const queryParameters: any = {};

    if (requestParameters.endorserDid !== undefined) {
      queryParameters['endorser_did'] = requestParameters.endorserDid;
    }

    if (requestParameters.endorserName !== undefined) {
      queryParameters['endorser_name'] = requestParameters.endorserName;
    }

    const headerParameters: runtime.HTTPHeaders = {};

    const response = await this.request({
      path: `/transactions/{conn_id}/set-endorser-info`.replace(
        `{${'conn_id'}}`,
        encodeURIComponent(String(requestParameters.connId)),
      ),
      method: 'POST',
      headers: headerParameters,
      query: queryParameters,
    });

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      EndorserInfoFromJSON(jsonValue),
    );
  }

  /**
   * Set Endorser Info
   */
  async transactionsConnIdSetEndorserInfoPost(
    requestParameters: TransactionsConnIdSetEndorserInfoPostRequest,
  ): Promise<EndorserInfo> {
    const response = await this.transactionsConnIdSetEndorserInfoPostRaw(
      requestParameters,
    );
    return await response.value();
  }

  /**
   * Set transaction jobs
   */
  async transactionsConnIdSetEndorserRolePostRaw(
    requestParameters: TransactionsConnIdSetEndorserRolePostRequest,
  ): Promise<runtime.ApiResponse<TransactionJobs>> {
    if (
      requestParameters.connId === null ||
      requestParameters.connId === undefined
    ) {
      throw new runtime.RequiredError(
        'connId',
        'Required parameter requestParameters.connId was null or undefined when calling transactionsConnIdSetEndorserRolePost.',
      );
    }

    const queryParameters: any = {};

    if (requestParameters.transactionMyJob !== undefined) {
      queryParameters['transaction_my_job'] =
        requestParameters.transactionMyJob;
    }

    const headerParameters: runtime.HTTPHeaders = {};

    const response = await this.request({
      path: `/transactions/{conn_id}/set-endorser-role`.replace(
        `{${'conn_id'}}`,
        encodeURIComponent(String(requestParameters.connId)),
      ),
      method: 'POST',
      headers: headerParameters,
      query: queryParameters,
    });

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      TransactionJobsFromJSON(jsonValue),
    );
  }

  /**
   * Set transaction jobs
   */
  async transactionsConnIdSetEndorserRolePost(
    requestParameters: TransactionsConnIdSetEndorserRolePostRequest,
  ): Promise<TransactionJobs> {
    const response = await this.transactionsConnIdSetEndorserRolePostRaw(
      requestParameters,
    );
    return await response.value();
  }

  /**
   * For author to send a transaction request
   */
  async transactionsCreateRequestPostRaw(
    requestParameters: TransactionsCreateRequestPostRequest,
  ): Promise<runtime.ApiResponse<TransactionRecord>> {
    if (
      requestParameters.tranId === null ||
      requestParameters.tranId === undefined
    ) {
      throw new runtime.RequiredError(
        'tranId',
        'Required parameter requestParameters.tranId was null or undefined when calling transactionsCreateRequestPost.',
      );
    }

    const queryParameters: any = {};

    if (requestParameters.tranId !== undefined) {
      queryParameters['tran_id'] = requestParameters.tranId;
    }

    if (requestParameters.endorserWriteTxn !== undefined) {
      queryParameters['endorser_write_txn'] =
        requestParameters.endorserWriteTxn;
    }

    const headerParameters: runtime.HTTPHeaders = {};

    headerParameters['Content-Type'] = 'application/json';

    const response = await this.request({
      path: `/transactions/create-request`,
      method: 'POST',
      headers: headerParameters,
      query: queryParameters,
      body: ModelDateToJSON(requestParameters.body),
    });

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      TransactionRecordFromJSON(jsonValue),
    );
  }

  /**
   * For author to send a transaction request
   */
  async transactionsCreateRequestPost(
    requestParameters: TransactionsCreateRequestPostRequest,
  ): Promise<TransactionRecord> {
    const response = await this.transactionsCreateRequestPostRaw(
      requestParameters,
    );
    return await response.value();
  }

  /**
   * Query transactions
   */
  async transactionsGetRaw(): Promise<runtime.ApiResponse<TransactionList>> {
    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    const response = await this.request({
      path: `/transactions`,
      method: 'GET',
      headers: headerParameters,
      query: queryParameters,
    });

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      TransactionListFromJSON(jsonValue),
    );
  }

  /**
   * Query transactions
   */
  async transactionsGet(): Promise<TransactionList> {
    const response = await this.transactionsGetRaw();
    return await response.value();
  }

  /**
   * For Author to cancel a particular transaction request
   */
  async transactionsTranIdCancelPostRaw(
    requestParameters: TransactionsTranIdCancelPostRequest,
  ): Promise<runtime.ApiResponse<TransactionRecord>> {
    if (
      requestParameters.tranId === null ||
      requestParameters.tranId === undefined
    ) {
      throw new runtime.RequiredError(
        'tranId',
        'Required parameter requestParameters.tranId was null or undefined when calling transactionsTranIdCancelPost.',
      );
    }

    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    const response = await this.request({
      path: `/transactions/{tran_id}/cancel`.replace(
        `{${'tran_id'}}`,
        encodeURIComponent(String(requestParameters.tranId)),
      ),
      method: 'POST',
      headers: headerParameters,
      query: queryParameters,
    });

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      TransactionRecordFromJSON(jsonValue),
    );
  }

  /**
   * For Author to cancel a particular transaction request
   */
  async transactionsTranIdCancelPost(
    requestParameters: TransactionsTranIdCancelPostRequest,
  ): Promise<TransactionRecord> {
    const response = await this.transactionsTranIdCancelPostRaw(
      requestParameters,
    );
    return await response.value();
  }

  /**
   * For Endorser to endorse a particular transaction record
   */
  async transactionsTranIdEndorsePostRaw(
    requestParameters: TransactionsTranIdEndorsePostRequest,
  ): Promise<runtime.ApiResponse<TransactionRecord>> {
    if (
      requestParameters.tranId === null ||
      requestParameters.tranId === undefined
    ) {
      throw new runtime.RequiredError(
        'tranId',
        'Required parameter requestParameters.tranId was null or undefined when calling transactionsTranIdEndorsePost.',
      );
    }

    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    const response = await this.request({
      path: `/transactions/{tran_id}/endorse`.replace(
        `{${'tran_id'}}`,
        encodeURIComponent(String(requestParameters.tranId)),
      ),
      method: 'POST',
      headers: headerParameters,
      query: queryParameters,
    });

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      TransactionRecordFromJSON(jsonValue),
    );
  }

  /**
   * For Endorser to endorse a particular transaction record
   */
  async transactionsTranIdEndorsePost(
    requestParameters: TransactionsTranIdEndorsePostRequest,
  ): Promise<TransactionRecord> {
    const response = await this.transactionsTranIdEndorsePostRaw(
      requestParameters,
    );
    return await response.value();
  }

  /**
   * Fetch a single transaction record
   */
  async transactionsTranIdGetRaw(
    requestParameters: TransactionsTranIdGetRequest,
  ): Promise<runtime.ApiResponse<TransactionRecord>> {
    if (
      requestParameters.tranId === null ||
      requestParameters.tranId === undefined
    ) {
      throw new runtime.RequiredError(
        'tranId',
        'Required parameter requestParameters.tranId was null or undefined when calling transactionsTranIdGet.',
      );
    }

    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    const response = await this.request({
      path: `/transactions/{tran_id}`.replace(
        `{${'tran_id'}}`,
        encodeURIComponent(String(requestParameters.tranId)),
      ),
      method: 'GET',
      headers: headerParameters,
      query: queryParameters,
    });

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      TransactionRecordFromJSON(jsonValue),
    );
  }

  /**
   * Fetch a single transaction record
   */
  async transactionsTranIdGet(
    requestParameters: TransactionsTranIdGetRequest,
  ): Promise<TransactionRecord> {
    const response = await this.transactionsTranIdGetRaw(requestParameters);
    return await response.value();
  }

  /**
   * For Endorser to refuse a particular transaction record
   */
  async transactionsTranIdRefusePostRaw(
    requestParameters: TransactionsTranIdRefusePostRequest,
  ): Promise<runtime.ApiResponse<TransactionRecord>> {
    if (
      requestParameters.tranId === null ||
      requestParameters.tranId === undefined
    ) {
      throw new runtime.RequiredError(
        'tranId',
        'Required parameter requestParameters.tranId was null or undefined when calling transactionsTranIdRefusePost.',
      );
    }

    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    const response = await this.request({
      path: `/transactions/{tran_id}/refuse`.replace(
        `{${'tran_id'}}`,
        encodeURIComponent(String(requestParameters.tranId)),
      ),
      method: 'POST',
      headers: headerParameters,
      query: queryParameters,
    });

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      TransactionRecordFromJSON(jsonValue),
    );
  }

  /**
   * For Endorser to refuse a particular transaction record
   */
  async transactionsTranIdRefusePost(
    requestParameters: TransactionsTranIdRefusePostRequest,
  ): Promise<TransactionRecord> {
    const response = await this.transactionsTranIdRefusePostRaw(
      requestParameters,
    );
    return await response.value();
  }

  /**
   * For Author / Endorser to write an endorsed transaction to the ledger
   */
  async transactionsTranIdWritePostRaw(
    requestParameters: TransactionsTranIdWritePostRequest,
  ): Promise<runtime.ApiResponse<TransactionRecord>> {
    if (
      requestParameters.tranId === null ||
      requestParameters.tranId === undefined
    ) {
      throw new runtime.RequiredError(
        'tranId',
        'Required parameter requestParameters.tranId was null or undefined when calling transactionsTranIdWritePost.',
      );
    }

    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    const response = await this.request({
      path: `/transactions/{tran_id}/write`.replace(
        `{${'tran_id'}}`,
        encodeURIComponent(String(requestParameters.tranId)),
      ),
      method: 'POST',
      headers: headerParameters,
      query: queryParameters,
    });

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      TransactionRecordFromJSON(jsonValue),
    );
  }

  /**
   * For Author / Endorser to write an endorsed transaction to the ledger
   */
  async transactionsTranIdWritePost(
    requestParameters: TransactionsTranIdWritePostRequest,
  ): Promise<TransactionRecord> {
    const response = await this.transactionsTranIdWritePostRaw(
      requestParameters,
    );
    return await response.value();
  }
}

/**
 * @export
 * @enum {string}
 */
export enum TransactionsConnIdSetEndorserRolePostTransactionMyJobEnum {
  TransactionAuthor = 'TRANSACTION_AUTHOR',
  TransactionEndorser = 'TRANSACTION_ENDORSER',
  Reset = 'reset',
}