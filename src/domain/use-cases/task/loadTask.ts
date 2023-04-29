import { TaskModel } from '../../models';

export interface LoadTask {
  loadAll: () => Promise<TaskModel[]>;
  loadById: (id: string) => Promise<TaskModel>;
  loadAllByProject: (projectId: string) => Promise<TaskModel[]>;
}
