import { UnknownError } from '@domain/errors';
import { HttpEndpoints } from '../../../enums';
import { HttpMethods, type HttpClient } from '../../../protocols';
import type { DeleteTask } from '@domain/use-cases';

export class HttpDeleteTask implements DeleteTask {
  constructor(private readonly httpClient: HttpClient) {}

  delete = async (id: string): Promise<void> => {
    try {
      await this.httpClient.request({
        method: HttpMethods.DELETE,
        url: `${HttpEndpoints.DELETE_TASK}/${id}`,
      });
    } catch {
      throw new UnknownError();
    }
  };
}
