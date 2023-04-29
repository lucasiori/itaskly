import { TaskModel } from '../../models';

export interface UpdateTask {
  update: (task: TaskModel) => Promise<void>;
}