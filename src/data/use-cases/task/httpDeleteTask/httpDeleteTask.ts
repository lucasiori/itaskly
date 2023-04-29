import { UnknownError } from '@domain/errors';
import { DeleteTask } from '@domain/use-cases';
import { HttpEndpoints } from '../../../enums';
import { HttpClient, HttpMethods } from '../../../protocols';

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
