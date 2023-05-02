import type { Project } from '../../models';

export interface CreateProject {
  create: (project: Project) => Promise<void>;
}
