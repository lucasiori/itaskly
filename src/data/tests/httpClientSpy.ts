import { HttpClient, HttpRequestData, HttpRequestResponse, HttpStatusCodeEnum } from "../protocols";

export class HttpClientSpy implements HttpClient {
  callsCount = 0;
  method = '';
  url = '';
  body = '';
  response = {
    statusCode: HttpStatusCodeEnum.OK,
    data: null
  }

  request = async <T>(data: HttpRequestData): Promise<HttpRequestResponse<T>> => {
    this.callsCount = 1;
    this.method = data.method;
    this.url = data.url;
    this.body = data.body;

    return this.response as HttpRequestResponse<T>
  }
}