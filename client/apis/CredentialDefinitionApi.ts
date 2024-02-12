/**
 * Sudo Decentralized Identity Cloud Agent SDK
 * Provides REST API wrappers for Typescript Agent Controllers using the Sudo Decentralized Identity Cloud Agent Service
 *
 * The version of the OpenAPI document: v0.8.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import * as runtime from '../runtime';
import {
  CredentialDefinitionGetResult,
  CredentialDefinitionGetResultFromJSON,
  CredentialDefinitionGetResultToJSON,
  CredentialDefinitionSendRequest,
  CredentialDefinitionSendRequestFromJSON,
  CredentialDefinitionSendRequestToJSON,
  CredentialDefinitionsCreatedResult,
  CredentialDefinitionsCreatedResultFromJSON,
  CredentialDefinitionsCreatedResultToJSON,
  TxnOrCredentialDefinitionSendResult,
  TxnOrCredentialDefinitionSendResultFromJSON,
  TxnOrCredentialDefinitionSendResultToJSON,
} from '../models';

export interface CredentialDefinitionsCreatedGetRequest {
  credDefId?: string;
  issuerDid?: string;
  schemaId?: string;
  schemaIssuerDid?: string;
  schemaName?: string;
  schemaVersion?: string;
}

export interface CredentialDefinitionsCredDefIdGetRequest {
  credDefId: string;
}

export interface CredentialDefinitionsCredDefIdWriteRecordPostRequest {
  credDefId: string;
}

export interface CredentialDefinitionsPostRequest {
  connId?: string;
  createTransactionForEndorser?: boolean;
  body?: CredentialDefinitionSendRequest;
}

/**
 *
 */
export class CredentialDefinitionApi extends runtime.BaseAPI {
  /**
   * Search for matching credential definitions that agent originated
   */
  async credentialDefinitionsCreatedGetRaw(
    requestParameters: CredentialDefinitionsCreatedGetRequest,
  ): Promise<runtime.ApiResponse<CredentialDefinitionsCreatedResult>> {
    const queryParameters: any = {};

    if (requestParameters.credDefId !== undefined) {
      queryParameters['cred_def_id'] = requestParameters.credDefId;
    }

    if (requestParameters.issuerDid !== undefined) {
      queryParameters['issuer_did'] = requestParameters.issuerDid;
    }

    if (requestParameters.schemaId !== undefined) {
      queryParameters['schema_id'] = requestParameters.schemaId;
    }

    if (requestParameters.schemaIssuerDid !== undefined) {
      queryParameters['schema_issuer_did'] = requestParameters.schemaIssuerDid;
    }

    if (requestParameters.schemaName !== undefined) {
      queryParameters['schema_name'] = requestParameters.schemaName;
    }

    if (requestParameters.schemaVersion !== undefined) {
      queryParameters['schema_version'] = requestParameters.schemaVersion;
    }

    const headerParameters: runtime.HTTPHeaders = {};

    const response = await this.request({
      path: `/credential-definitions/created`,
      method: 'GET',
      headers: headerParameters,
      query: queryParameters,
    });

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      CredentialDefinitionsCreatedResultFromJSON(jsonValue),
    );
  }

  /**
   * Search for matching credential definitions that agent originated
   */
  async credentialDefinitionsCreatedGet(
    requestParameters: CredentialDefinitionsCreatedGetRequest,
  ): Promise<CredentialDefinitionsCreatedResult> {
    const response = await this.credentialDefinitionsCreatedGetRaw(
      requestParameters,
    );
    return await response.value();
  }

  /**
   * Gets a credential definition from the ledger
   */
  async credentialDefinitionsCredDefIdGetRaw(
    requestParameters: CredentialDefinitionsCredDefIdGetRequest,
  ): Promise<runtime.ApiResponse<CredentialDefinitionGetResult>> {
    if (
      requestParameters.credDefId === null ||
      requestParameters.credDefId === undefined
    ) {
      throw new runtime.RequiredError(
        'credDefId',
        'Required parameter requestParameters.credDefId was null or undefined when calling credentialDefinitionsCredDefIdGet.',
      );
    }

    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    const response = await this.request({
      path: `/credential-definitions/{cred_def_id}`.replace(
        `{${'cred_def_id'}}`,
        encodeURIComponent(String(requestParameters.credDefId)),
      ),
      method: 'GET',
      headers: headerParameters,
      query: queryParameters,
    });

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      CredentialDefinitionGetResultFromJSON(jsonValue),
    );
  }

  /**
   * Gets a credential definition from the ledger
   */
  async credentialDefinitionsCredDefIdGet(
    requestParameters: CredentialDefinitionsCredDefIdGetRequest,
  ): Promise<CredentialDefinitionGetResult> {
    const response = await this.credentialDefinitionsCredDefIdGetRaw(
      requestParameters,
    );
    return await response.value();
  }

  /**
   * Writes a credential definition non-secret record to the wallet
   */
  async credentialDefinitionsCredDefIdWriteRecordPostRaw(
    requestParameters: CredentialDefinitionsCredDefIdWriteRecordPostRequest,
  ): Promise<runtime.ApiResponse<CredentialDefinitionGetResult>> {
    if (
      requestParameters.credDefId === null ||
      requestParameters.credDefId === undefined
    ) {
      throw new runtime.RequiredError(
        'credDefId',
        'Required parameter requestParameters.credDefId was null or undefined when calling credentialDefinitionsCredDefIdWriteRecordPost.',
      );
    }

    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    const response = await this.request({
      path: `/credential-definitions/{cred_def_id}/write_record`.replace(
        `{${'cred_def_id'}}`,
        encodeURIComponent(String(requestParameters.credDefId)),
      ),
      method: 'POST',
      headers: headerParameters,
      query: queryParameters,
    });

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      CredentialDefinitionGetResultFromJSON(jsonValue),
    );
  }

  /**
   * Writes a credential definition non-secret record to the wallet
   */
  async credentialDefinitionsCredDefIdWriteRecordPost(
    requestParameters: CredentialDefinitionsCredDefIdWriteRecordPostRequest,
  ): Promise<CredentialDefinitionGetResult> {
    const response =
      await this.credentialDefinitionsCredDefIdWriteRecordPostRaw(
        requestParameters,
      );
    return await response.value();
  }

  /**
   * Sends a credential definition to the ledger
   */
  async credentialDefinitionsPostRaw(
    requestParameters: CredentialDefinitionsPostRequest,
  ): Promise<runtime.ApiResponse<TxnOrCredentialDefinitionSendResult>> {
    const queryParameters: any = {};

    if (requestParameters.connId !== undefined) {
      queryParameters['conn_id'] = requestParameters.connId;
    }

    if (requestParameters.createTransactionForEndorser !== undefined) {
      queryParameters['create_transaction_for_endorser'] =
        requestParameters.createTransactionForEndorser;
    }

    const headerParameters: runtime.HTTPHeaders = {};

    headerParameters['Content-Type'] = 'application/json';

    const response = await this.request({
      path: `/credential-definitions`,
      method: 'POST',
      headers: headerParameters,
      query: queryParameters,
      body: CredentialDefinitionSendRequestToJSON(requestParameters.body),
    });

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      TxnOrCredentialDefinitionSendResultFromJSON(jsonValue),
    );
  }

  /**
   * Sends a credential definition to the ledger
   */
  async credentialDefinitionsPost(
    requestParameters: CredentialDefinitionsPostRequest,
  ): Promise<TxnOrCredentialDefinitionSendResult> {
    const response = await this.credentialDefinitionsPostRaw(requestParameters);
    return await response.value();
  }
}
