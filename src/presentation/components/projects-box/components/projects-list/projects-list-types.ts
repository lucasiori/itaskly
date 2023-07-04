import type { ProjectModel } from '@domain/models';

export type StyledProjectNameProps = {
  $completed: boolean;
};

export type ProjectsListProps = {
  projects: ProjectModel[];
  onChangeProjectStatus: (id: string, status: ProjectModel['status']) => void;
  onDeleteProject: (id: string) => void;
};
