import { NotePencil, Trash } from '@phosphor-icons/react';
import { useProjectsContext } from '@presentation/contexts';
import { IconButton } from '@presentation/components';
import {
  ProjectItem,
  ProjectActions,
  ProjectName,
  ProjectTasksAmount,
} from './sidebar-menu-projects-list-styles';

export const SidebarMenuProjectsList = () => {
  const { data } = useProjectsContext();

  return (
    <ul>
      {data.projects.map(project => (
        <ProjectItem key={project.id}>
          <ProjectName>{project.title}</ProjectName>
          <ProjectTasksAmount>0 / 0</ProjectTasksAmount>
          <ProjectActions>
            <IconButton icon={NotePencil} iconProps={{ size: 20 }} />
            <IconButton icon={Trash} iconProps={{ size: 20 }} />
          </ProjectActions>
        </ProjectItem>
      ))}
    </ul>
  );
};
