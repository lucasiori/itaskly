import { UnknownError } from '@domain/errors';
import { HttpEndpoints } from '../../../enums';
import { HttpMethods, type HttpClient } from '../../../protocols';
import type { CreateProject } from '@domain/use-cases';
import type { ProjectModel } from '@domain/models';

export class HttpCreateProject implements CreateProject {
  constructor(private readonly httpClient: HttpClient) {}

  create = async (project: ProjectModel): Promise<void> => {
    try {
      await this.httpClient.request({
        method: HttpMethods.POST,
        url: HttpEndpoints.PROJECTS,
        body: project,
      });
    } catch {
      throw new UnknownError();
    }
  };
}
