type ProjectStatus = 'pending' | 'in-progress' | 'completed';

export type Project = {
  id: string;
  title: string;
  status: ProjectStatus;
  createdAt: Date;
  updatedAt: Date;
}