import type { Project } from '../../models';

export interface UpdateProject {
  update: (project: Project) => Promise<void>;
}
