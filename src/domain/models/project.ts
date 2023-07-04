export type ProjectStatus = 'pending' | 'completed';

export type ProjectModel = {
  id: string;
  title: string;
  status: ProjectStatus;
  createdAt: Date;
  updatedAt: Date;
};
