import { ProjectModel } from '@domain/models';

type ProjectStatus = ProjectModel['status'];

export type StyledStatusTagContainerProps = {
  $status: ProjectStatus;
};

export type StatusTagProps = {
  status: ProjectStatus;
};
