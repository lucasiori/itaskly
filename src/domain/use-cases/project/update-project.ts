import type { ProjectModel } from '../../models';

export interface UpdateProject {
  update: (project: ProjectModel) => Promise<void>;
}
