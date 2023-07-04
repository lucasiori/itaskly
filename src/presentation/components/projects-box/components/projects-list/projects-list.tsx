import { useMemo } from 'react';
import { Trash } from '@phosphor-icons/react';
import { Checkbox } from '../../../checkbox';
import { IconButton } from '../../../icon-button';
import { StatusTag } from './components';
import {
  ProjectItem,
  ProjectActions,
  ProjectName,
} from './projects-list-styles';
import type { ProjectsListProps } from './projects-list-types';

export const ProjectsList = ({
  projects,
  onChangeProjectStatus,
  onDeleteProject,
}: ProjectsListProps) => {
  const sortedProjects = useMemo(() => {
    const rawProjects = [...projects];

    return rawProjects.sort((item1, item2) => {
      if (item1.status === 'completed' && item2.status === 'pending') return 1;
      if (item1.status === 'pending' && item2.status === 'completed') return -1;
      return 0;
    });
  }, [projects]);

  const handleChangeProjectStatus = (id: string, isCompleted: boolean) => {
    const newStatus = isCompleted ? 'completed' : 'pending';

    onChangeProjectStatus(id, newStatus);
  };

  return (
    <ul>
      {sortedProjects.map(project => (
        <ProjectItem key={project.id} data-testid="projects-list-item">
          <div>
            <Checkbox
              id={project.id}
              checked={project.status === 'completed'}
              onChange={value => handleChangeProjectStatus(project.id, value)}
            />

            <ProjectName $completed={project.status === 'completed'}>
              {project.title}
            </ProjectName>
          </div>

          <div>
            <StatusTag status={project.status} />

            <ProjectActions>
              <IconButton
                icon={Trash}
                iconProps={{ size: 20 }}
                onClick={() => onDeleteProject(project.id)}
              />
            </ProjectActions>
          </div>
        </ProjectItem>
      ))}
    </ul>
  );
};
