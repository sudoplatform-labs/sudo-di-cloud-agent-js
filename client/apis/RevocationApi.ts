/**
 * Sudo Decentralized Identity Cloud Agent SDK
 * Provides REST API wrappers for Typescript Agent Controllers using the Sudo Decentralized Identity Cloud Agent Service
 *
 * The version of the OpenAPI document: v0.6.8
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import * as runtime from '../runtime';
import {
  ClearPendingRevocationsRequest,
  ClearPendingRevocationsRequestFromJSON,
  ClearPendingRevocationsRequestToJSON,
  CredRevIndyRecordsResult,
  CredRevIndyRecordsResultFromJSON,
  CredRevIndyRecordsResultToJSON,
  CredRevRecordDetailsResult,
  CredRevRecordDetailsResultFromJSON,
  CredRevRecordDetailsResultToJSON,
  CredRevRecordResult,
  CredRevRecordResultFromJSON,
  CredRevRecordResultToJSON,
  PublishRevocations,
  PublishRevocationsFromJSON,
  PublishRevocationsToJSON,
  RevRegCreateRequest,
  RevRegCreateRequestFromJSON,
  RevRegCreateRequestToJSON,
  RevRegIssuedResult,
  RevRegIssuedResultFromJSON,
  RevRegIssuedResultToJSON,
  RevRegResult,
  RevRegResultFromJSON,
  RevRegResultToJSON,
  RevRegUpdateTailsFileUri,
  RevRegUpdateTailsFileUriFromJSON,
  RevRegUpdateTailsFileUriToJSON,
  RevRegWalletUpdatedResult,
  RevRegWalletUpdatedResultFromJSON,
  RevRegWalletUpdatedResultToJSON,
  RevRegsCreated,
  RevRegsCreatedFromJSON,
  RevRegsCreatedToJSON,
  RevokeRequest,
  RevokeRequestFromJSON,
  RevokeRequestToJSON,
  TailsDeleteResponse,
  TailsDeleteResponseFromJSON,
  TailsDeleteResponseToJSON,
  TxnOrPublishRevocationsResult,
  TxnOrPublishRevocationsResultFromJSON,
  TxnOrPublishRevocationsResultToJSON,
  TxnOrRevRegResult,
  TxnOrRevRegResultFromJSON,
  TxnOrRevRegResultToJSON,
} from '../models';

export interface RevocationActiveRegistryCredDefIdGetRequest {
  credDefId: string;
}

export interface RevocationClearPendingRevocationsPostRequest {
  body?: ClearPendingRevocationsRequest;
}

export interface RevocationCreateRegistryPostRequest {
  body?: RevRegCreateRequest;
}

export interface RevocationCredentialRecordGetRequest {
  credExId?: string;
  credRevId?: string;
  revRegId?: string;
}

export interface RevocationPublishRevocationsPostRequest {
  body?: PublishRevocations;
}

export interface RevocationRegistriesCreatedGetRequest {
  credDefId?: string;
  state?: RevocationRegistriesCreatedGetStateEnum;
}

export interface RevocationRegistryDeleteTailsFileDeleteRequest {
  credDefId?: string;
  revRegId?: string;
}

export interface RevocationRegistryRevRegIdDefinitionPostRequest {
  revRegId: string;
  connId?: string;
  createTransactionForEndorser?: boolean;
}

export interface RevocationRegistryRevRegIdEntryPostRequest {
  revRegId: string;
  connId?: string;
  createTransactionForEndorser?: boolean;
}

export interface RevocationRegistryRevRegIdFixRevocationEntryStatePutRequest {
  revRegId: string;
  applyLedgerUpdate: boolean;
}

export interface RevocationRegistryRevRegIdGetRequest {
  revRegId: string;
}

export interface RevocationRegistryRevRegIdIssuedDetailsGetRequest {
  revRegId: string;
}

export interface RevocationRegistryRevRegIdIssuedGetRequest {
  revRegId: string;
}

export interface RevocationRegistryRevRegIdIssuedIndyRecsGetRequest {
  revRegId: string;
}

export interface RevocationRegistryRevRegIdPatchRequest {
  revRegId: string;
  body?: RevRegUpdateTailsFileUri;
}

export interface RevocationRegistryRevRegIdSetStatePatchRequest {
  revRegId: string;
  state: RevocationRegistryRevRegIdSetStatePatchStateEnum;
}

export interface RevocationRegistryRevRegIdTailsFileGetRequest {
  revRegId: string;
}

export interface RevocationRegistryRevRegIdTailsFilePutRequest {
  revRegId: string;
}

export interface RevocationRevokePostRequest {
  body?: RevokeRequest;
}

/**
 *
 */
export class RevocationApi extends runtime.BaseAPI {
  /**
   * Get current active revocation registry by credential definition id
   */
  async revocationActiveRegistryCredDefIdGetRaw(
    requestParameters: RevocationActiveRegistryCredDefIdGetRequest,
  ): Promise<runtime.ApiResponse<RevRegResult>> {
    if (
      requestParameters.credDefId === null ||
      requestParameters.credDefId === undefined
    ) {
      throw new runtime.RequiredError(
        'credDefId',
        'Required parameter requestParameters.credDefId was null or undefined when calling revocationActiveRegistryCredDefIdGet.',
      );
    }

    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    const response = await this.request({
      path: `/revocation/active-registry/{cred_def_id}`.replace(
        `{${'cred_def_id'}}`,
        encodeURIComponent(String(requestParameters.credDefId)),
      ),
      method: 'GET',
      headers: headerParameters,
      query: queryParameters,
    });

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      RevRegResultFromJSON(jsonValue),
    );
  }

  /**
   * Get current active revocation registry by credential definition id
   */
  async revocationActiveRegistryCredDefIdGet(
    requestParameters: RevocationActiveRegistryCredDefIdGetRequest,
  ): Promise<RevRegResult> {
    const response = await this.revocationActiveRegistryCredDefIdGetRaw(
      requestParameters,
    );
    return await response.value();
  }

  /**
   * Clear pending revocations
   */
  async revocationClearPendingRevocationsPostRaw(
    requestParameters: RevocationClearPendingRevocationsPostRequest,
  ): Promise<runtime.ApiResponse<PublishRevocations>> {
    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    headerParameters['Content-Type'] = 'application/json';

    const response = await this.request({
      path: `/revocation/clear-pending-revocations`,
      method: 'POST',
      headers: headerParameters,
      query: queryParameters,
      body: ClearPendingRevocationsRequestToJSON(requestParameters.body),
    });

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      PublishRevocationsFromJSON(jsonValue),
    );
  }

  /**
   * Clear pending revocations
   */
  async revocationClearPendingRevocationsPost(
    requestParameters: RevocationClearPendingRevocationsPostRequest,
  ): Promise<PublishRevocations> {
    const response = await this.revocationClearPendingRevocationsPostRaw(
      requestParameters,
    );
    return await response.value();
  }

  /**
   * Creates a new revocation registry
   */
  async revocationCreateRegistryPostRaw(
    requestParameters: RevocationCreateRegistryPostRequest,
  ): Promise<runtime.ApiResponse<RevRegResult>> {
    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    headerParameters['Content-Type'] = 'application/json';

    const response = await this.request({
      path: `/revocation/create-registry`,
      method: 'POST',
      headers: headerParameters,
      query: queryParameters,
      body: RevRegCreateRequestToJSON(requestParameters.body),
    });

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      RevRegResultFromJSON(jsonValue),
    );
  }

  /**
   * Creates a new revocation registry
   */
  async revocationCreateRegistryPost(
    requestParameters: RevocationCreateRegistryPostRequest,
  ): Promise<RevRegResult> {
    const response = await this.revocationCreateRegistryPostRaw(
      requestParameters,
    );
    return await response.value();
  }

  /**
   * Get credential revocation status
   */
  async revocationCredentialRecordGetRaw(
    requestParameters: RevocationCredentialRecordGetRequest,
  ): Promise<runtime.ApiResponse<CredRevRecordResult>> {
    const queryParameters: any = {};

    if (requestParameters.credExId !== undefined) {
      queryParameters['cred_ex_id'] = requestParameters.credExId;
    }

    if (requestParameters.credRevId !== undefined) {
      queryParameters['cred_rev_id'] = requestParameters.credRevId;
    }

    if (requestParameters.revRegId !== undefined) {
      queryParameters['rev_reg_id'] = requestParameters.revRegId;
    }

    const headerParameters: runtime.HTTPHeaders = {};

    const response = await this.request({
      path: `/revocation/credential-record`,
      method: 'GET',
      headers: headerParameters,
      query: queryParameters,
    });

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      CredRevRecordResultFromJSON(jsonValue),
    );
  }

  /**
   * Get credential revocation status
   */
  async revocationCredentialRecordGet(
    requestParameters: RevocationCredentialRecordGetRequest,
  ): Promise<CredRevRecordResult> {
    const response = await this.revocationCredentialRecordGetRaw(
      requestParameters,
    );
    return await response.value();
  }

  /**
   * Publish pending revocations to ledger
   */
  async revocationPublishRevocationsPostRaw(
    requestParameters: RevocationPublishRevocationsPostRequest,
  ): Promise<runtime.ApiResponse<TxnOrPublishRevocationsResult>> {
    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    headerParameters['Content-Type'] = 'application/json';

    const response = await this.request({
      path: `/revocation/publish-revocations`,
      method: 'POST',
      headers: headerParameters,
      query: queryParameters,
      body: PublishRevocationsToJSON(requestParameters.body),
    });

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      TxnOrPublishRevocationsResultFromJSON(jsonValue),
    );
  }

  /**
   * Publish pending revocations to ledger
   */
  async revocationPublishRevocationsPost(
    requestParameters: RevocationPublishRevocationsPostRequest,
  ): Promise<TxnOrPublishRevocationsResult> {
    const response = await this.revocationPublishRevocationsPostRaw(
      requestParameters,
    );
    return await response.value();
  }

  /**
   * Search for matching revocation registries that current agent created
   */
  async revocationRegistriesCreatedGetRaw(
    requestParameters: RevocationRegistriesCreatedGetRequest,
  ): Promise<runtime.ApiResponse<RevRegsCreated>> {
    const queryParameters: any = {};

    if (requestParameters.credDefId !== undefined) {
      queryParameters['cred_def_id'] = requestParameters.credDefId;
    }

    if (requestParameters.state !== undefined) {
      queryParameters['state'] = requestParameters.state;
    }

    const headerParameters: runtime.HTTPHeaders = {};

    const response = await this.request({
      path: `/revocation/registries/created`,
      method: 'GET',
      headers: headerParameters,
      query: queryParameters,
    });

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      RevRegsCreatedFromJSON(jsonValue),
    );
  }

  /**
   * Search for matching revocation registries that current agent created
   */
  async revocationRegistriesCreatedGet(
    requestParameters: RevocationRegistriesCreatedGetRequest,
  ): Promise<RevRegsCreated> {
    const response = await this.revocationRegistriesCreatedGetRaw(
      requestParameters,
    );
    return await response.value();
  }

  /**
   * Delete the tail files
   */
  async revocationRegistryDeleteTailsFileDeleteRaw(
    requestParameters: RevocationRegistryDeleteTailsFileDeleteRequest,
  ): Promise<runtime.ApiResponse<TailsDeleteResponse>> {
    const queryParameters: any = {};

    if (requestParameters.credDefId !== undefined) {
      queryParameters['cred_def_id'] = requestParameters.credDefId;
    }

    if (requestParameters.revRegId !== undefined) {
      queryParameters['rev_reg_id'] = requestParameters.revRegId;
    }

    const headerParameters: runtime.HTTPHeaders = {};

    const response = await this.request({
      path: `/revocation/registry/delete-tails-file`,
      method: 'DELETE',
      headers: headerParameters,
      query: queryParameters,
    });

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      TailsDeleteResponseFromJSON(jsonValue),
    );
  }

  /**
   * Delete the tail files
   */
  async revocationRegistryDeleteTailsFileDelete(
    requestParameters: RevocationRegistryDeleteTailsFileDeleteRequest,
  ): Promise<TailsDeleteResponse> {
    const response = await this.revocationRegistryDeleteTailsFileDeleteRaw(
      requestParameters,
    );
    return await response.value();
  }

  /**
   * Send revocation registry definition to ledger
   */
  async revocationRegistryRevRegIdDefinitionPostRaw(
    requestParameters: RevocationRegistryRevRegIdDefinitionPostRequest,
  ): Promise<runtime.ApiResponse<TxnOrRevRegResult>> {
    if (
      requestParameters.revRegId === null ||
      requestParameters.revRegId === undefined
    ) {
      throw new runtime.RequiredError(
        'revRegId',
        'Required parameter requestParameters.revRegId was null or undefined when calling revocationRegistryRevRegIdDefinitionPost.',
      );
    }

    const queryParameters: any = {};

    if (requestParameters.connId !== undefined) {
      queryParameters['conn_id'] = requestParameters.connId;
    }

    if (requestParameters.createTransactionForEndorser !== undefined) {
      queryParameters['create_transaction_for_endorser'] =
        requestParameters.createTransactionForEndorser;
    }

    const headerParameters: runtime.HTTPHeaders = {};

    const response = await this.request({
      path: `/revocation/registry/{rev_reg_id}/definition`.replace(
        `{${'rev_reg_id'}}`,
        encodeURIComponent(String(requestParameters.revRegId)),
      ),
      method: 'POST',
      headers: headerParameters,
      query: queryParameters,
    });

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      TxnOrRevRegResultFromJSON(jsonValue),
    );
  }

  /**
   * Send revocation registry definition to ledger
   */
  async revocationRegistryRevRegIdDefinitionPost(
    requestParameters: RevocationRegistryRevRegIdDefinitionPostRequest,
  ): Promise<TxnOrRevRegResult> {
    const response = await this.revocationRegistryRevRegIdDefinitionPostRaw(
      requestParameters,
    );
    return await response.value();
  }

  /**
   * Send revocation registry entry to ledger
   */
  async revocationRegistryRevRegIdEntryPostRaw(
    requestParameters: RevocationRegistryRevRegIdEntryPostRequest,
  ): Promise<runtime.ApiResponse<RevRegResult>> {
    if (
      requestParameters.revRegId === null ||
      requestParameters.revRegId === undefined
    ) {
      throw new runtime.RequiredError(
        'revRegId',
        'Required parameter requestParameters.revRegId was null or undefined when calling revocationRegistryRevRegIdEntryPost.',
      );
    }

    const queryParameters: any = {};

    if (requestParameters.connId !== undefined) {
      queryParameters['conn_id'] = requestParameters.connId;
    }

    if (requestParameters.createTransactionForEndorser !== undefined) {
      queryParameters['create_transaction_for_endorser'] =
        requestParameters.createTransactionForEndorser;
    }

    const headerParameters: runtime.HTTPHeaders = {};

    const response = await this.request({
      path: `/revocation/registry/{rev_reg_id}/entry`.replace(
        `{${'rev_reg_id'}}`,
        encodeURIComponent(String(requestParameters.revRegId)),
      ),
      method: 'POST',
      headers: headerParameters,
      query: queryParameters,
    });

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      RevRegResultFromJSON(jsonValue),
    );
  }

  /**
   * Send revocation registry entry to ledger
   */
  async revocationRegistryRevRegIdEntryPost(
    requestParameters: RevocationRegistryRevRegIdEntryPostRequest,
  ): Promise<RevRegResult> {
    const response = await this.revocationRegistryRevRegIdEntryPostRaw(
      requestParameters,
    );
    return await response.value();
  }

  /**
   * Fix revocation state in wallet and return number of updated entries
   */
  async revocationRegistryRevRegIdFixRevocationEntryStatePutRaw(
    requestParameters: RevocationRegistryRevRegIdFixRevocationEntryStatePutRequest,
  ): Promise<runtime.ApiResponse<RevRegWalletUpdatedResult>> {
    if (
      requestParameters.revRegId === null ||
      requestParameters.revRegId === undefined
    ) {
      throw new runtime.RequiredError(
        'revRegId',
        'Required parameter requestParameters.revRegId was null or undefined when calling revocationRegistryRevRegIdFixRevocationEntryStatePut.',
      );
    }

    if (
      requestParameters.applyLedgerUpdate === null ||
      requestParameters.applyLedgerUpdate === undefined
    ) {
      throw new runtime.RequiredError(
        'applyLedgerUpdate',
        'Required parameter requestParameters.applyLedgerUpdate was null or undefined when calling revocationRegistryRevRegIdFixRevocationEntryStatePut.',
      );
    }

    const queryParameters: any = {};

    if (requestParameters.applyLedgerUpdate !== undefined) {
      queryParameters['apply_ledger_update'] =
        requestParameters.applyLedgerUpdate;
    }

    const headerParameters: runtime.HTTPHeaders = {};

    const response = await this.request({
      path: `/revocation/registry/{rev_reg_id}/fix-revocation-entry-state`.replace(
        `{${'rev_reg_id'}}`,
        encodeURIComponent(String(requestParameters.revRegId)),
      ),
      method: 'PUT',
      headers: headerParameters,
      query: queryParameters,
    });

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      RevRegWalletUpdatedResultFromJSON(jsonValue),
    );
  }

  /**
   * Fix revocation state in wallet and return number of updated entries
   */
  async revocationRegistryRevRegIdFixRevocationEntryStatePut(
    requestParameters: RevocationRegistryRevRegIdFixRevocationEntryStatePutRequest,
  ): Promise<RevRegWalletUpdatedResult> {
    const response =
      await this.revocationRegistryRevRegIdFixRevocationEntryStatePutRaw(
        requestParameters,
      );
    return await response.value();
  }

  /**
   * Get revocation registry by revocation registry id
   */
  async revocationRegistryRevRegIdGetRaw(
    requestParameters: RevocationRegistryRevRegIdGetRequest,
  ): Promise<runtime.ApiResponse<RevRegResult>> {
    if (
      requestParameters.revRegId === null ||
      requestParameters.revRegId === undefined
    ) {
      throw new runtime.RequiredError(
        'revRegId',
        'Required parameter requestParameters.revRegId was null or undefined when calling revocationRegistryRevRegIdGet.',
      );
    }

    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    const response = await this.request({
      path: `/revocation/registry/{rev_reg_id}`.replace(
        `{${'rev_reg_id'}}`,
        encodeURIComponent(String(requestParameters.revRegId)),
      ),
      method: 'GET',
      headers: headerParameters,
      query: queryParameters,
    });

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      RevRegResultFromJSON(jsonValue),
    );
  }

  /**
   * Get revocation registry by revocation registry id
   */
  async revocationRegistryRevRegIdGet(
    requestParameters: RevocationRegistryRevRegIdGetRequest,
  ): Promise<RevRegResult> {
    const response = await this.revocationRegistryRevRegIdGetRaw(
      requestParameters,
    );
    return await response.value();
  }

  /**
   * Get details of credentials issued against revocation registry
   */
  async revocationRegistryRevRegIdIssuedDetailsGetRaw(
    requestParameters: RevocationRegistryRevRegIdIssuedDetailsGetRequest,
  ): Promise<runtime.ApiResponse<CredRevRecordDetailsResult>> {
    if (
      requestParameters.revRegId === null ||
      requestParameters.revRegId === undefined
    ) {
      throw new runtime.RequiredError(
        'revRegId',
        'Required parameter requestParameters.revRegId was null or undefined when calling revocationRegistryRevRegIdIssuedDetailsGet.',
      );
    }

    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    const response = await this.request({
      path: `/revocation/registry/{rev_reg_id}/issued/details`.replace(
        `{${'rev_reg_id'}}`,
        encodeURIComponent(String(requestParameters.revRegId)),
      ),
      method: 'GET',
      headers: headerParameters,
      query: queryParameters,
    });

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      CredRevRecordDetailsResultFromJSON(jsonValue),
    );
  }

  /**
   * Get details of credentials issued against revocation registry
   */
  async revocationRegistryRevRegIdIssuedDetailsGet(
    requestParameters: RevocationRegistryRevRegIdIssuedDetailsGetRequest,
  ): Promise<CredRevRecordDetailsResult> {
    const response = await this.revocationRegistryRevRegIdIssuedDetailsGetRaw(
      requestParameters,
    );
    return await response.value();
  }

  /**
   * Get number of credentials issued against revocation registry
   */
  async revocationRegistryRevRegIdIssuedGetRaw(
    requestParameters: RevocationRegistryRevRegIdIssuedGetRequest,
  ): Promise<runtime.ApiResponse<RevRegIssuedResult>> {
    if (
      requestParameters.revRegId === null ||
      requestParameters.revRegId === undefined
    ) {
      throw new runtime.RequiredError(
        'revRegId',
        'Required parameter requestParameters.revRegId was null or undefined when calling revocationRegistryRevRegIdIssuedGet.',
      );
    }

    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    const response = await this.request({
      path: `/revocation/registry/{rev_reg_id}/issued`.replace(
        `{${'rev_reg_id'}}`,
        encodeURIComponent(String(requestParameters.revRegId)),
      ),
      method: 'GET',
      headers: headerParameters,
      query: queryParameters,
    });

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      RevRegIssuedResultFromJSON(jsonValue),
    );
  }

  /**
   * Get number of credentials issued against revocation registry
   */
  async revocationRegistryRevRegIdIssuedGet(
    requestParameters: RevocationRegistryRevRegIdIssuedGetRequest,
  ): Promise<RevRegIssuedResult> {
    const response = await this.revocationRegistryRevRegIdIssuedGetRaw(
      requestParameters,
    );
    return await response.value();
  }

  /**
   * Get details of revoked credentials from ledger
   */
  async revocationRegistryRevRegIdIssuedIndyRecsGetRaw(
    requestParameters: RevocationRegistryRevRegIdIssuedIndyRecsGetRequest,
  ): Promise<runtime.ApiResponse<CredRevIndyRecordsResult>> {
    if (
      requestParameters.revRegId === null ||
      requestParameters.revRegId === undefined
    ) {
      throw new runtime.RequiredError(
        'revRegId',
        'Required parameter requestParameters.revRegId was null or undefined when calling revocationRegistryRevRegIdIssuedIndyRecsGet.',
      );
    }

    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    const response = await this.request({
      path: `/revocation/registry/{rev_reg_id}/issued/indy_recs`.replace(
        `{${'rev_reg_id'}}`,
        encodeURIComponent(String(requestParameters.revRegId)),
      ),
      method: 'GET',
      headers: headerParameters,
      query: queryParameters,
    });

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      CredRevIndyRecordsResultFromJSON(jsonValue),
    );
  }

  /**
   * Get details of revoked credentials from ledger
   */
  async revocationRegistryRevRegIdIssuedIndyRecsGet(
    requestParameters: RevocationRegistryRevRegIdIssuedIndyRecsGetRequest,
  ): Promise<CredRevIndyRecordsResult> {
    const response = await this.revocationRegistryRevRegIdIssuedIndyRecsGetRaw(
      requestParameters,
    );
    return await response.value();
  }

  /**
   * Update revocation registry with new public URI to its tails file
   */
  async revocationRegistryRevRegIdPatchRaw(
    requestParameters: RevocationRegistryRevRegIdPatchRequest,
  ): Promise<runtime.ApiResponse<RevRegResult>> {
    if (
      requestParameters.revRegId === null ||
      requestParameters.revRegId === undefined
    ) {
      throw new runtime.RequiredError(
        'revRegId',
        'Required parameter requestParameters.revRegId was null or undefined when calling revocationRegistryRevRegIdPatch.',
      );
    }

    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    headerParameters['Content-Type'] = 'application/json';

    const response = await this.request({
      path: `/revocation/registry/{rev_reg_id}`.replace(
        `{${'rev_reg_id'}}`,
        encodeURIComponent(String(requestParameters.revRegId)),
      ),
      method: 'PATCH',
      headers: headerParameters,
      query: queryParameters,
      body: RevRegUpdateTailsFileUriToJSON(requestParameters.body),
    });

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      RevRegResultFromJSON(jsonValue),
    );
  }

  /**
   * Update revocation registry with new public URI to its tails file
   */
  async revocationRegistryRevRegIdPatch(
    requestParameters: RevocationRegistryRevRegIdPatchRequest,
  ): Promise<RevRegResult> {
    const response = await this.revocationRegistryRevRegIdPatchRaw(
      requestParameters,
    );
    return await response.value();
  }

  /**
   * Set revocation registry state manually
   */
  async revocationRegistryRevRegIdSetStatePatchRaw(
    requestParameters: RevocationRegistryRevRegIdSetStatePatchRequest,
  ): Promise<runtime.ApiResponse<RevRegResult>> {
    if (
      requestParameters.revRegId === null ||
      requestParameters.revRegId === undefined
    ) {
      throw new runtime.RequiredError(
        'revRegId',
        'Required parameter requestParameters.revRegId was null or undefined when calling revocationRegistryRevRegIdSetStatePatch.',
      );
    }

    if (
      requestParameters.state === null ||
      requestParameters.state === undefined
    ) {
      throw new runtime.RequiredError(
        'state',
        'Required parameter requestParameters.state was null or undefined when calling revocationRegistryRevRegIdSetStatePatch.',
      );
    }

    const queryParameters: any = {};

    if (requestParameters.state !== undefined) {
      queryParameters['state'] = requestParameters.state;
    }

    const headerParameters: runtime.HTTPHeaders = {};

    const response = await this.request({
      path: `/revocation/registry/{rev_reg_id}/set-state`.replace(
        `{${'rev_reg_id'}}`,
        encodeURIComponent(String(requestParameters.revRegId)),
      ),
      method: 'PATCH',
      headers: headerParameters,
      query: queryParameters,
    });

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      RevRegResultFromJSON(jsonValue),
    );
  }

  /**
   * Set revocation registry state manually
   */
  async revocationRegistryRevRegIdSetStatePatch(
    requestParameters: RevocationRegistryRevRegIdSetStatePatchRequest,
  ): Promise<RevRegResult> {
    const response = await this.revocationRegistryRevRegIdSetStatePatchRaw(
      requestParameters,
    );
    return await response.value();
  }

  /**
   * Download tails file
   */
  async revocationRegistryRevRegIdTailsFileGetRaw(
    requestParameters: RevocationRegistryRevRegIdTailsFileGetRequest,
  ): Promise<runtime.ApiResponse<Blob>> {
    if (
      requestParameters.revRegId === null ||
      requestParameters.revRegId === undefined
    ) {
      throw new runtime.RequiredError(
        'revRegId',
        'Required parameter requestParameters.revRegId was null or undefined when calling revocationRegistryRevRegIdTailsFileGet.',
      );
    }

    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    const response = await this.request({
      path: `/revocation/registry/{rev_reg_id}/tails-file`.replace(
        `{${'rev_reg_id'}}`,
        encodeURIComponent(String(requestParameters.revRegId)),
      ),
      method: 'GET',
      headers: headerParameters,
      query: queryParameters,
    });

    return new runtime.BlobApiResponse(response);
  }

  /**
   * Download tails file
   */
  async revocationRegistryRevRegIdTailsFileGet(
    requestParameters: RevocationRegistryRevRegIdTailsFileGetRequest,
  ): Promise<Blob> {
    const response = await this.revocationRegistryRevRegIdTailsFileGetRaw(
      requestParameters,
    );
    return await response.value();
  }

  /**
   * Upload local tails file to server
   */
  async revocationRegistryRevRegIdTailsFilePutRaw(
    requestParameters: RevocationRegistryRevRegIdTailsFilePutRequest,
  ): Promise<runtime.ApiResponse<object>> {
    if (
      requestParameters.revRegId === null ||
      requestParameters.revRegId === undefined
    ) {
      throw new runtime.RequiredError(
        'revRegId',
        'Required parameter requestParameters.revRegId was null or undefined when calling revocationRegistryRevRegIdTailsFilePut.',
      );
    }

    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    const response = await this.request({
      path: `/revocation/registry/{rev_reg_id}/tails-file`.replace(
        `{${'rev_reg_id'}}`,
        encodeURIComponent(String(requestParameters.revRegId)),
      ),
      method: 'PUT',
      headers: headerParameters,
      query: queryParameters,
    });

    return new runtime.JSONApiResponse<any>(response);
  }

  /**
   * Upload local tails file to server
   */
  async revocationRegistryRevRegIdTailsFilePut(
    requestParameters: RevocationRegistryRevRegIdTailsFilePutRequest,
  ): Promise<object> {
    const response = await this.revocationRegistryRevRegIdTailsFilePutRaw(
      requestParameters,
    );
    return await response.value();
  }

  /**
   * Revoke an issued credential
   */
  async revocationRevokePostRaw(
    requestParameters: RevocationRevokePostRequest,
  ): Promise<runtime.ApiResponse<object>> {
    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    headerParameters['Content-Type'] = 'application/json';

    const response = await this.request({
      path: `/revocation/revoke`,
      method: 'POST',
      headers: headerParameters,
      query: queryParameters,
      body: RevokeRequestToJSON(requestParameters.body),
    });

    return new runtime.JSONApiResponse<any>(response);
  }

  /**
   * Revoke an issued credential
   */
  async revocationRevokePost(
    requestParameters: RevocationRevokePostRequest,
  ): Promise<object> {
    const response = await this.revocationRevokePostRaw(requestParameters);
    return await response.value();
  }
}

/**
 * @export
 * @enum {string}
 */
export enum RevocationRegistriesCreatedGetStateEnum {
  Init = 'init',
  Generated = 'generated',
  Posted = 'posted',
  Active = 'active',
  Full = 'full',
}
/**
 * @export
 * @enum {string}
 */
export enum RevocationRegistryRevRegIdSetStatePatchStateEnum {
  Init = 'init',
  Generated = 'generated',
  Posted = 'posted',
  Active = 'active',
  Full = 'full',
}
