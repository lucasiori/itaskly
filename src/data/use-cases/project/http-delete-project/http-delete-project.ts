import { UnknownError } from '@domain/errors';
import { DeleteProject } from '@domain/use-cases';
import { HttpEndpoints } from '../../../enums';
import { HttpClient, HttpMethods } from '../../../protocols';

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
