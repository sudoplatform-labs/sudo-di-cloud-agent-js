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
  ResolutionResult,
  ResolutionResultFromJSON,
  ResolutionResultToJSON,
} from '../models';

export interface ResolverResolveDidGetRequest {
  did: string;
}

/**
 *
 */
export class ResolverApi extends runtime.BaseAPI {
  /**
   * Retrieve doc for requested did
   */
  async resolverResolveDidGetRaw(
    requestParameters: ResolverResolveDidGetRequest,
  ): Promise<runtime.ApiResponse<ResolutionResult>> {
    if (requestParameters.did === null || requestParameters.did === undefined) {
      throw new runtime.RequiredError(
        'did',
        'Required parameter requestParameters.did was null or undefined when calling resolverResolveDidGet.',
      );
    }

    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    const response = await this.request({
      path: `/resolver/resolve/{did}`.replace(
        `{${'did'}}`,
        encodeURIComponent(String(requestParameters.did)),
      ),
      method: 'GET',
      headers: headerParameters,
      query: queryParameters,
    });

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      ResolutionResultFromJSON(jsonValue),
    );
  }

  /**
   * Retrieve doc for requested did
   */
  async resolverResolveDidGet(
    requestParameters: ResolverResolveDidGetRequest,
  ): Promise<ResolutionResult> {
    const response = await this.resolverResolveDidGetRaw(requestParameters);
    return await response.value();
  }
}
