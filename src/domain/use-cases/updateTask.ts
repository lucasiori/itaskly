import { Task } from '../models';

export interface UpdateTask {
  update: (task: Task) => Promise<void>;
}