import axios, { type AxiosResponse } from 'axios';
import { UnknownError } from '@domain/errors';
import type {
  HttpClient,
  HttpRequestData,
  HttpRequestResponse,
} from '@data/protocols';

const BASE_URL = 'http://localhost:3000';

export class HttpAxiosClient implements HttpClient {
  request = async <T = void>(
    data: HttpRequestData
  ): Promise<HttpRequestResponse<T>> => {
    let response: AxiosResponse;

    try {
      response = await axios.request<T>({
        method: data.method,
        url: `${BASE_URL}${data.url}`,
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
