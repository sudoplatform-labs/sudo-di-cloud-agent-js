/**
 * Sudo Decentralized Identity Cloud Agent SDK
 * Provides REST API wrappers for Typescript Agent Controllers using the Sudo Decentralized Identity Cloud Agent Service
 *
 * The version of the OpenAPI document: v0.11.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import * as runtime from '../runtime';
import {
  V20DiscoveryExchangeListResult,
  V20DiscoveryExchangeListResultFromJSON,
  V20DiscoveryExchangeListResultToJSON,
  V20DiscoveryExchangeResult,
  V20DiscoveryExchangeResultFromJSON,
  V20DiscoveryExchangeResultToJSON,
} from '../models';

export interface DiscoverFeatures20QueriesGetRequest {
  connectionId?: string;
  queryGoalCode?: string;
  queryProtocol?: string;
}

export interface DiscoverFeatures20RecordsGetRequest {
  connectionId?: string;
}

/**
 *
 */
export class DiscoverFeaturesV20Api extends runtime.BaseAPI {
  /**
   * Query supported features
   */
  async discoverFeatures20QueriesGetRaw(
    requestParameters: DiscoverFeatures20QueriesGetRequest,
  ): Promise<runtime.ApiResponse<V20DiscoveryExchangeResult>> {
    const queryParameters: any = {};

    if (requestParameters.connectionId !== undefined) {
      queryParameters['connection_id'] = requestParameters.connectionId;
    }

    if (requestParameters.queryGoalCode !== undefined) {
      queryParameters['query_goal_code'] = requestParameters.queryGoalCode;
    }

    if (requestParameters.queryProtocol !== undefined) {
      queryParameters['query_protocol'] = requestParameters.queryProtocol;
    }

    const headerParameters: runtime.HTTPHeaders = {};

    const response = await this.request({
      path: `/discover-features-2.0/queries`,
      method: 'GET',
      headers: headerParameters,
      query: queryParameters,
    });

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      V20DiscoveryExchangeResultFromJSON(jsonValue),
    );
  }

  /**
   * Query supported features
   */
  async discoverFeatures20QueriesGet(
    requestParameters: DiscoverFeatures20QueriesGetRequest,
  ): Promise<V20DiscoveryExchangeResult> {
    const response =
      await this.discoverFeatures20QueriesGetRaw(requestParameters);
    return await response.value();
  }

  /**
   * Discover Features v2.0 records
   */
  async discoverFeatures20RecordsGetRaw(
    requestParameters: DiscoverFeatures20RecordsGetRequest,
  ): Promise<runtime.ApiResponse<V20DiscoveryExchangeListResult>> {
    const queryParameters: any = {};

    if (requestParameters.connectionId !== undefined) {
      queryParameters['connection_id'] = requestParameters.connectionId;
    }

    const headerParameters: runtime.HTTPHeaders = {};

    const response = await this.request({
      path: `/discover-features-2.0/records`,
      method: 'GET',
      headers: headerParameters,
      query: queryParameters,
    });

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      V20DiscoveryExchangeListResultFromJSON(jsonValue),
    );
  }

  /**
   * Discover Features v2.0 records
   */
  async discoverFeatures20RecordsGet(
    requestParameters: DiscoverFeatures20RecordsGetRequest,
  ): Promise<V20DiscoveryExchangeListResult> {
    const response =
      await this.discoverFeatures20RecordsGetRaw(requestParameters);
    return await response.value();
  }
}
