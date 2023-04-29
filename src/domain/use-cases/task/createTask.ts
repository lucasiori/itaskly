import { TaskModel } from '../../models';

export interface CreateTask {
  create: (task: TaskModel) => Promise<void>;
}
