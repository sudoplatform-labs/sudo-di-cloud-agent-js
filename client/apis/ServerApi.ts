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
  AdminConfig,
  AdminConfigFromJSON,
  AdminConfigToJSON,
  AdminModules,
  AdminModulesFromJSON,
  AdminModulesToJSON,
  AdminStatus,
  AdminStatusFromJSON,
  AdminStatusToJSON,
  AdminStatusLiveliness,
  AdminStatusLivelinessFromJSON,
  AdminStatusLivelinessToJSON,
  AdminStatusReadiness,
  AdminStatusReadinessFromJSON,
  AdminStatusReadinessToJSON,
} from '../models';

/**
 *
 */
export class ServerApi extends runtime.BaseAPI {
  /**
   * Fetch the list of loaded plugins
   */
  async pluginsGetRaw(): Promise<runtime.ApiResponse<AdminModules>> {
    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    const response = await this.request({
      path: `/plugins`,
      method: 'GET',
      headers: headerParameters,
      query: queryParameters,
    });

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      AdminModulesFromJSON(jsonValue),
    );
  }

  /**
   * Fetch the list of loaded plugins
   */
  async pluginsGet(): Promise<AdminModules> {
    const response = await this.pluginsGetRaw();
    return await response.value();
  }

  /**
   * Shut down server
   */
  async shutdownGetRaw(): Promise<runtime.ApiResponse<object>> {
    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    const response = await this.request({
      path: `/shutdown`,
      method: 'GET',
      headers: headerParameters,
      query: queryParameters,
    });

    return new runtime.JSONApiResponse<any>(response);
  }

  /**
   * Shut down server
   */
  async shutdownGet(): Promise<object> {
    const response = await this.shutdownGetRaw();
    return await response.value();
  }

  /**
   * Fetch the server configuration
   */
  async statusConfigGetRaw(): Promise<runtime.ApiResponse<AdminConfig>> {
    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    const response = await this.request({
      path: `/status/config`,
      method: 'GET',
      headers: headerParameters,
      query: queryParameters,
    });

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      AdminConfigFromJSON(jsonValue),
    );
  }

  /**
   * Fetch the server configuration
   */
  async statusConfigGet(): Promise<AdminConfig> {
    const response = await this.statusConfigGetRaw();
    return await response.value();
  }

  /**
   * Fetch the server status
   */
  async statusGetRaw(): Promise<runtime.ApiResponse<AdminStatus>> {
    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    const response = await this.request({
      path: `/status`,
      method: 'GET',
      headers: headerParameters,
      query: queryParameters,
    });

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      AdminStatusFromJSON(jsonValue),
    );
  }

  /**
   * Fetch the server status
   */
  async statusGet(): Promise<AdminStatus> {
    const response = await this.statusGetRaw();
    return await response.value();
  }

  /**
   * Liveliness check
   */
  async statusLiveGetRaw(): Promise<
    runtime.ApiResponse<AdminStatusLiveliness>
  > {
    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    const response = await this.request({
      path: `/status/live`,
      method: 'GET',
      headers: headerParameters,
      query: queryParameters,
    });

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      AdminStatusLivelinessFromJSON(jsonValue),
    );
  }

  /**
   * Liveliness check
   */
  async statusLiveGet(): Promise<AdminStatusLiveliness> {
    const response = await this.statusLiveGetRaw();
    return await response.value();
  }

  /**
   * Readiness check
   */
  async statusReadyGetRaw(): Promise<
    runtime.ApiResponse<AdminStatusReadiness>
  > {
    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    const response = await this.request({
      path: `/status/ready`,
      method: 'GET',
      headers: headerParameters,
      query: queryParameters,
    });

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      AdminStatusReadinessFromJSON(jsonValue),
    );
  }

  /**
   * Readiness check
   */
  async statusReadyGet(): Promise<AdminStatusReadiness> {
    const response = await this.statusReadyGetRaw();
    return await response.value();
  }

  /**
   * Reset statistics
   */
  async statusResetPostRaw(): Promise<runtime.ApiResponse<object>> {
    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    const response = await this.request({
      path: `/status/reset`,
      method: 'POST',
      headers: headerParameters,
      query: queryParameters,
    });

    return new runtime.JSONApiResponse<any>(response);
  }

  /**
   * Reset statistics
   */
  async statusResetPost(): Promise<object> {
    const response = await this.statusResetPostRaw();
    return await response.value();
  }
}
