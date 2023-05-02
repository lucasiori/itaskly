import { UnknownError } from '@domain/errors';
import { ProjectModel } from '@domain/models';
import { LoadProject } from '@domain/use-cases';
import { HttpEndpoints } from '../../../enums';
import { HttpClient, HttpMethods } from '../../../protocols';

export class HttpLoadProject implements LoadProject {
  constructor(private readonly httpClient: HttpClient) {}

  loadAll = async (): Promise<ProjectModel[]> => {
    try {
      const response = await this.httpClient.request<ProjectModel[]>({
        method: HttpMethods.GET,
        url: HttpEndpoints.LOAD_PROJECT,
      });

      return response.data;
    } catch {
      throw new UnknownError();
    }
  };
}
