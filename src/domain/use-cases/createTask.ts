import { Task } from '../models';

export interface CreateTask {
  create: (task: Task) => Promise<void>;
}