import { Project } from '../../models';

export interface LoadProject {
  loadAll: () => Promise<Project[]>;
}
