/* eslint-disable @typescript-eslint/no-explicit-any */
type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE';

enum HttpStatusCodeEnum {
  OK = 200,
  NO_CONTENT = 204,
  BAD_REQUEST = 400,
  NOT_FOUND = 404,
  INTERNAL_SERVER_ERROR = 500,
}

type HttpQueryParam = {
  [key: string]: string
}

type HttpRequestData = {
  method: HttpMethod;
  url: string;
  queryParams: HttpQueryParam;
  body: any;
}

type HttpRequestResponse<T> = {
  statusCode: HttpStatusCodeEnum;
  data: T;
}

export interface HttpClient {
  request: <T = void>(data: HttpRequestData) => Promise<HttpRequestResponse<T>>;
}