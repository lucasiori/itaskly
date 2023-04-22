type TaskStatus = 'pending' | 'in-progress' | 'completed';
type TaskPriority = 'low' | 'medium' | 'high';

export type TaskModel = {
  id: string;
  title: string;
  description?: string;
  targetDate: Date;
  status: TaskStatus;
  priority?: TaskPriority;
  project?: string;
  createdAt: Date;
  updatedAt: Date;
}