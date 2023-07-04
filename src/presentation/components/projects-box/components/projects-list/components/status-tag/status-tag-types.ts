import { ProjectStatus } from '@domain/models';

export type StyledStatusTagContainerProps = {
  $status: ProjectStatus;
};

export type StatusTagProps = {
  status: ProjectStatus;
};
