/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  HttpClient,
  HttpRequestData,
  HttpRequestResponse,
  HttpStatusCode,
} from '../protocols';

export class HttpClientSpy implements HttpClient {
  callsCount = 0;
  method = '';
  url = '';
  queryParams = null as any;
  body = '';
  response = {
    statusCode: HttpStatusCode.OK,
    data: null as any,
  };

  request = async <T>(
    data: HttpRequestData
  ): Promise<HttpRequestResponse<T>> => {
    this.callsCount = 1;
    this.method = data.method;
    this.url = data.url;
    this.queryParams = data.queryParams;
    this.body = data.body;

    return this.response as HttpRequestResponse<T>;
  };
}
