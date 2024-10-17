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
  V10DiscoveryExchangeListResult,
  V10DiscoveryExchangeListResultFromJSON,
  V10DiscoveryExchangeListResultToJSON,
  V10DiscoveryRecord,
  V10DiscoveryRecordFromJSON,
  V10DiscoveryRecordToJSON,
} from '../models';

export interface DiscoverFeaturesQueryGetRequest {
  comment?: string;
  connectionId?: string;
  query?: string;
}

export interface DiscoverFeaturesRecordsGetRequest {
  connectionId?: string;
}

/**
 *
 */
export class DiscoverFeaturesApi extends runtime.BaseAPI {
  /**
   * Query supported features
   */
  async discoverFeaturesQueryGetRaw(
    requestParameters: DiscoverFeaturesQueryGetRequest,
  ): Promise<runtime.ApiResponse<V10DiscoveryRecord>> {
    const queryParameters: any = {};

    if (requestParameters.comment !== undefined) {
      queryParameters['comment'] = requestParameters.comment;
    }

    if (requestParameters.connectionId !== undefined) {
      queryParameters['connection_id'] = requestParameters.connectionId;
    }

    if (requestParameters.query !== undefined) {
      queryParameters['query'] = requestParameters.query;
    }

    const headerParameters: runtime.HTTPHeaders = {};

    const response = await this.request({
      path: `/discover-features/query`,
      method: 'GET',
      headers: headerParameters,
      query: queryParameters,
    });

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      V10DiscoveryRecordFromJSON(jsonValue),
    );
  }

  /**
   * Query supported features
   */
  async discoverFeaturesQueryGet(
    requestParameters: DiscoverFeaturesQueryGetRequest,
  ): Promise<V10DiscoveryRecord> {
    const response = await this.discoverFeaturesQueryGetRaw(requestParameters);
    return await response.value();
  }

  /**
   * Discover Features records
   */
  async discoverFeaturesRecordsGetRaw(
    requestParameters: DiscoverFeaturesRecordsGetRequest,
  ): Promise<runtime.ApiResponse<V10DiscoveryExchangeListResult>> {
    const queryParameters: any = {};

    if (requestParameters.connectionId !== undefined) {
      queryParameters['connection_id'] = requestParameters.connectionId;
    }

    const headerParameters: runtime.HTTPHeaders = {};

    const response = await this.request({
      path: `/discover-features/records`,
      method: 'GET',
      headers: headerParameters,
      query: queryParameters,
    });

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      V10DiscoveryExchangeListResultFromJSON(jsonValue),
    );
  }

  /**
   * Discover Features records
   */
  async discoverFeaturesRecordsGet(
    requestParameters: DiscoverFeaturesRecordsGetRequest,
  ): Promise<V10DiscoveryExchangeListResult> {
    const response = await this.discoverFeaturesRecordsGetRaw(
      requestParameters,
    );
    return await response.value();
  }
}
