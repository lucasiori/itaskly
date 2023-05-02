import { UnknownError } from '@domain/errors';
import { HttpEndpoints } from '../../../enums';
import { HttpMethods, type HttpClient } from '../../../protocols';
import type { ProjectModel } from '@domain/models';
import type { UpdateProject } from '@domain/use-cases';

export class HttpUpdateProject implements UpdateProject {
  constructor(private readonly httpClient: HttpClient) {}

  update = async (project: ProjectModel): Promise<void> => {
    try {
      await this.httpClient.request({
        method: HttpMethods.PUT,
        url: `${HttpEndpoints.UPDATE_PROJECT}/${project.id}`,
        body: project,
      });
    } catch {
      throw new UnknownError();
    }
  };
}
