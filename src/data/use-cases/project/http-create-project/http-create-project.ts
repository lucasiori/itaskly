import { UnknownError } from '@domain/errors';
import { ProjectModel } from '@domain/models';
import { CreateProject } from '@domain/use-cases';
import { HttpEndpoints } from '../../../enums';
import { HttpClient, HttpMethods } from '../../../protocols';

export class HttpCreateProject implements CreateProject {
  constructor(private readonly httpClient: HttpClient) {}

  create = async (project: ProjectModel): Promise<void> => {
    try {
      await this.httpClient.request({
        method: HttpMethods.POST,
        url: HttpEndpoints.CREATE_PROJECT,
        body: project,
      });
    } catch {
      throw new UnknownError();
    }
  };
}
