import type { ProjectModel } from '@domain/models';

export type StyledProjectNameProps = {
  $completed: boolean;
};

export type ProjectsListProps = {
  projects: ProjectModel[];
  onDeleteProject: (id: string) => void;
};
