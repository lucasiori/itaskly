import type { ProjectModel } from '../../models';

export interface CreateProject {
  create: (project: ProjectModel) => Promise<void>;
}
