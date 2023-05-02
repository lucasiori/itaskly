import { ProjectModel } from '../../models';

export interface LoadProject {
  loadAll: () => Promise<ProjectModel[]>;
}
