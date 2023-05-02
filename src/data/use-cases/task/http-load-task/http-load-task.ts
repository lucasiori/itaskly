import { UnknownError } from '@domain/errors';
import { HttpEndpoints } from '../../../enums';
import { HttpMethods, type HttpClient } from '../../../protocols';
import type { TaskModel } from '@domain/models';
import type { LoadTask } from '@domain/use-cases';

export class HttpLoadTask implements LoadTask {
  constructor(private readonly httpClient: HttpClient) {}

  loadAll = async (): Promise<TaskModel[]> => {
    try {
      const response = await this.httpClient.request<TaskModel[]>({
        method: HttpMethods.GET,
        url: HttpEndpoints.LOAD_TASK,
      });

      return response.data;
    } catch {
      throw new UnknownError();
    }
  };

  loadById = async (id: string): Promise<TaskModel> => {
    try {
      const response = await this.httpClient.request<TaskModel>({
        method: HttpMethods.GET,
        url: HttpEndpoints.LOAD_TASK,
        queryParams: { id },
      });

      return response.data;
    } catch {
      throw new UnknownError();
    }
  };

  loadAllByProject = async (projectId: string): Promise<TaskModel[]> => {
    try {
      const response = await this.httpClient.request<TaskModel[]>({
        method: HttpMethods.GET,
        url: HttpEndpoints.LOAD_TASK,
        queryParams: { project_id: projectId },
      });

      return response.data;
    } catch {
      throw new UnknownError();
    }
  };
}
