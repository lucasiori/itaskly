import { UnknownError } from '@domain/errors';
import { TaskModel } from '@domain/models';
import { CreateTask } from '@domain/use-cases';
import { HttpEndpoints } from '../../../enums';
import { HttpClient, HttpMethods } from '../../../protocols';

export class HttpCreateTask implements CreateTask {
  constructor(private readonly httpClient: HttpClient) {}

  create = async (task: TaskModel): Promise<void> => {
    try {
      await this.httpClient.request({
        method: HttpMethods.POST,
        url: HttpEndpoints.CREATE_TASK,
        body: task,
      });
    } catch {
      throw new UnknownError();
    }
  };
}
