import { UnknownError } from '@domain/errors';
import { HttpEndpoints } from '../../../enums';
import { HttpMethods, type HttpClient } from '../../../protocols';
import type { TaskModel } from '@domain/models';
import type { CreateTask } from '@domain/use-cases';

export class HttpCreateTask implements CreateTask {
  constructor(private readonly httpClient: HttpClient) {}

  create = async (task: TaskModel): Promise<void> => {
    try {
      await this.httpClient.request({
        method: HttpMethods.POST,
        url: HttpEndpoints.TASKS,
        body: task,
      });
    } catch {
      throw new UnknownError();
    }
  };
}
