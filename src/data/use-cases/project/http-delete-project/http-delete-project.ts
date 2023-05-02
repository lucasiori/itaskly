import { UnknownError } from '@domain/errors';
import { HttpEndpoints } from '../../../enums';
import { HttpMethods, type HttpClient } from '../../../protocols';
import type { DeleteProject } from '@domain/use-cases';

export class HttpDeleteProject implements DeleteProject {
  constructor(private readonly httpClient: HttpClient) {}

  delete = async (id: string): Promise<void> => {
    try {
      await this.httpClient.request({
        method: HttpMethods.DELETE,
        url: `${HttpEndpoints.DELETE_PROJECT}/${id}`,
      });
    } catch {
      throw new UnknownError();
    }
  };
}
