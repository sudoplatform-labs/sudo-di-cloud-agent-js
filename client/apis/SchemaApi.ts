/**
 * Sudo Decentralized Identity Cloud Agent SDK
 * Provides REST API wrappers for Typescript Agent Controllers using the Sudo Decentralized Identity Cloud Agency Service
 *
 * The version of the OpenAPI document: v0.6.1
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import * as runtime from '../runtime';
import {
  SchemaGetResult,
  SchemaGetResultFromJSON,
  SchemaGetResultToJSON,
  SchemaSendRequest,
  SchemaSendRequestFromJSON,
  SchemaSendRequestToJSON,
  SchemasCreatedResult,
  SchemasCreatedResultFromJSON,
  SchemasCreatedResultToJSON,
  TxnOrSchemaSendResult,
  TxnOrSchemaSendResultFromJSON,
  TxnOrSchemaSendResultToJSON,
} from '../models';

export interface SchemasCreatedGetRequest {
  schemaId?: string;
  schemaIssuerDid?: string;
  schemaName?: string;
  schemaVersion?: string;
}

export interface SchemasPostRequest {
  connId?: string;
  createTransactionForEndorser?: boolean;
  body?: SchemaSendRequest;
}

export interface SchemasSchemaIdGetRequest {
  schemaId: string;
}

/**
 *
 */
export class SchemaApi extends runtime.BaseAPI {
  /**
   * Search for matching schema that agent originated
   */
  async schemasCreatedGetRaw(
    requestParameters: SchemasCreatedGetRequest,
  ): Promise<runtime.ApiResponse<SchemasCreatedResult>> {
    const queryParameters: any = {};

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
      path: `/schemas/created`,
      method: 'GET',
      headers: headerParameters,
      query: queryParameters,
    });

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      SchemasCreatedResultFromJSON(jsonValue),
    );
  }

  /**
   * Search for matching schema that agent originated
   */
  async schemasCreatedGet(
    requestParameters: SchemasCreatedGetRequest,
  ): Promise<SchemasCreatedResult> {
    const response = await this.schemasCreatedGetRaw(requestParameters);
    return await response.value();
  }

  /**
   * Sends a schema to the ledger
   */
  async schemasPostRaw(
    requestParameters: SchemasPostRequest,
  ): Promise<runtime.ApiResponse<TxnOrSchemaSendResult>> {
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
      path: `/schemas`,
      method: 'POST',
      headers: headerParameters,
      query: queryParameters,
      body: SchemaSendRequestToJSON(requestParameters.body),
    });

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      TxnOrSchemaSendResultFromJSON(jsonValue),
    );
  }

  /**
   * Sends a schema to the ledger
   */
  async schemasPost(
    requestParameters: SchemasPostRequest,
  ): Promise<TxnOrSchemaSendResult> {
    const response = await this.schemasPostRaw(requestParameters);
    return await response.value();
  }

  /**
   * Gets a schema from the ledger
   */
  async schemasSchemaIdGetRaw(
    requestParameters: SchemasSchemaIdGetRequest,
  ): Promise<runtime.ApiResponse<SchemaGetResult>> {
    if (
      requestParameters.schemaId === null ||
      requestParameters.schemaId === undefined
    ) {
      throw new runtime.RequiredError(
        'schemaId',
        'Required parameter requestParameters.schemaId was null or undefined when calling schemasSchemaIdGet.',
      );
    }

    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    const response = await this.request({
      path: `/schemas/{schema_id}`.replace(
        `{${'schema_id'}}`,
        encodeURIComponent(String(requestParameters.schemaId)),
      ),
      method: 'GET',
      headers: headerParameters,
      query: queryParameters,
    });

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      SchemaGetResultFromJSON(jsonValue),
    );
  }

  /**
   * Gets a schema from the ledger
   */
  async schemasSchemaIdGet(
    requestParameters: SchemasSchemaIdGetRequest,
  ): Promise<SchemaGetResult> {
    const response = await this.schemasSchemaIdGetRaw(requestParameters);
    return await response.value();
  }
}
