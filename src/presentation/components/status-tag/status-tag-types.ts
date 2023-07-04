import { ProjectModel } from '@domain/models';

type Status = ProjectModel['status'];

export type StyledStatusTagContainerProps = {
  $status: Status;
};

export type StatusTagProps = {
  status: ProjectModel['status'];
};
