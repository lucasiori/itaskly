import type {
  CreateProject,
  DeleteProject,
  LoadProject,
  UpdateProject,
} from '@domain/use-cases';

export type DashboardProps = {
  loadProject: LoadProject;
  createProject: CreateProject;
  updateProject: UpdateProject;
  deleteProject: DeleteProject;
};
