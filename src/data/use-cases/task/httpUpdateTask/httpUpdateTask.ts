import { UnknownError } from '@domain/errors';
import { TaskModel } from '@domain/models';
import { UpdateTask } from '@domain/use-cases';
import { HttpEndpointsEnum } from '../../../enums';
import { HttpClient, HttpMethodEnum } from '../../../protocols';

export class HttpUpdateTask implements UpdateTask {
  constructor(private readonly httpClient: HttpClient) {}

  update = async (task: TaskModel): Promise<void> => {
    try {
      await this.httpClient.request({
        method: HttpMethodEnum.PUT,
        url: `${HttpEndpointsEnum.UPDATE_TASK}/${task.id}`,
        body: task,
      });
    } catch {
      throw new UnknownError();
    }
  };
}
