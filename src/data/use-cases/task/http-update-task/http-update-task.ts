import { UnknownError } from '@domain/errors';
import { HttpEndpoints } from '../../../enums';
import { HttpMethods, type HttpClient } from '../../../protocols';
import type { TaskModel } from '@domain/models';
import type { UpdateTask } from '@domain/use-cases';

export class HttpUpdateTask implements UpdateTask {
  constructor(private readonly httpClient: HttpClient) {}

  update = async (task: TaskModel): Promise<void> => {
    try {
      await this.httpClient.request({
        method: HttpMethods.PUT,
        url: `${HttpEndpoints.TASKS}/${task.id}`,
        body: task,
      });
    } catch {
      throw new UnknownError();
    }
  };
}
