import { UnknownError } from '@domain/errors';
import { ProjectModel } from '@domain/models';
import { UpdateProject } from '@domain/use-cases';
import { HttpEndpoints } from '../../../enums';
import { HttpClient, HttpMethods } from '../../../protocols';

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
