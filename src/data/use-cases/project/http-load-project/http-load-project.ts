import { UnknownError } from '@domain/errors';
import { HttpEndpoints } from '../../../enums';
import { HttpMethods, type HttpClient } from '../../../protocols';
import type { ProjectModel } from '@domain/models';
import type { LoadProject } from '@domain/use-cases';

export class HttpLoadProject implements LoadProject {
  constructor(private readonly httpClient: HttpClient) {}

  loadAll = async (): Promise<ProjectModel[]> => {
    try {
      const response = await this.httpClient.request<ProjectModel[]>({
        method: HttpMethods.GET,
        url: HttpEndpoints.PROJECTS,
      });

      return response.data;
    } catch {
      throw new UnknownError();
    }
  };
}
