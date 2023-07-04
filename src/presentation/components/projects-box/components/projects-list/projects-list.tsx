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
  onDeleteProject,
}: ProjectsListProps) => {
  const sortedProjects = useMemo(() => {
    return projects.sort().reverse();
  }, [projects]);

  return (
    <ul>
      {sortedProjects.map(project => (
        <ProjectItem key={project.id} data-testid="projects-list-item">
          <div>
            <Checkbox
              id={project.id}
              checked={project.status === 'completed'}
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
