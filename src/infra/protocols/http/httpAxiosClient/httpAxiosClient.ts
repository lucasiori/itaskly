import axios, { AxiosResponse } from 'axios';
import { UnknownError } from '@domain/errors';
import {
  HttpClient,
  HttpRequestData,
  HttpRequestResponse,
} from '@data/protocols';

export class HttpAxiosClient implements HttpClient {
  request = async <T = void>(
    data: HttpRequestData
  ): Promise<HttpRequestResponse<T>> => {
    let response: AxiosResponse;

    try {
      response = await axios.request<T>({
        method: data.method,
        url: data.url,
        params: data.queryParams,
        data: data.body,
      });
    } catch {
      throw new UnknownError();
    }

    return {
      statusCode: response.status,
      data: response.data,
    };
  };
}
