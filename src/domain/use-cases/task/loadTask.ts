import { TaskModel } from '../../models';

export interface LoadTask {
  loadAll: () => Promise<TaskModel[]>;
  loadById: (id: string) => Promise<TaskModel>;
  loadByProject: (projectId?: string) => Promise<TaskModel[]>;
}
