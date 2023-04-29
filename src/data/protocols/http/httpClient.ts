/* eslint-disable @typescript-eslint/no-explicit-any */
export enum HttpMethods {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  DELETE = 'DELETE',
}

export enum HttpStatusCode {
  OK = 200,
  NO_CONTENT = 204,
  BAD_REQUEST = 400,
  NOT_FOUND = 404,
  INTERNAL_SERVER_ERROR = 500,
}

type HttpQueryParam = {
  [key: string]: string;
};

export type HttpRequestData = {
  method: HttpMethods;
  url: string;
  queryParams?: HttpQueryParam;
  body?: any;
};

export type HttpRequestResponse<T> = {
  statusCode: HttpStatusCode;
  data: T;
};

export interface HttpClient {
  request: <T = void>(data: HttpRequestData) => Promise<HttpRequestResponse<T>>;
}
