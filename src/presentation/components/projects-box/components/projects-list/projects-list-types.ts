import type { ProjectModel, ProjectStatus } from '@domain/models';

export type StyledProjectNameProps = {
  $completed: boolean;
};

export type ProjectsListProps = {
  projects: ProjectModel[];
  onChangeProjectStatus: (id: string, status: ProjectStatus) => void;
  onDeleteProject: (id: string) => void;
};
