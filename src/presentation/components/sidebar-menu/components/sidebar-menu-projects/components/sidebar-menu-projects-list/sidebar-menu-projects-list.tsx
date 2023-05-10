import { NotePencil, Trash } from '@phosphor-icons/react';
import { IconButton } from '@presentation/components/icon-button';
import {
  ProjectItem,
  ProjectActions,
  ProjectName,
  ProjectTasksAmount,
} from './sidebar-menu-projects-list-styles';

export const SidebarMenuProjectsList = () => {
  return (
    <ul>
      <ProjectItem>
        <ProjectName>Projeto 1</ProjectName>
        <ProjectTasksAmount>1 / 3</ProjectTasksAmount>
        <ProjectActions>
          <IconButton icon={NotePencil} iconProps={{ size: 20 }} />
          <IconButton icon={Trash} iconProps={{ size: 20 }} />
        </ProjectActions>
      </ProjectItem>

      <ProjectItem>
        <ProjectName>Projeto 1</ProjectName>
        <ProjectTasksAmount>1 / 3</ProjectTasksAmount>
        <ProjectActions>
          <IconButton icon={NotePencil} iconProps={{ size: 20 }} />
          <IconButton icon={Trash} iconProps={{ size: 20 }} />
        </ProjectActions>
      </ProjectItem>

      <ProjectItem>
        <ProjectName>Projeto 1</ProjectName>
        <ProjectTasksAmount>1 / 3</ProjectTasksAmount>
        <ProjectActions>
          <IconButton icon={NotePencil} iconProps={{ size: 20 }} />
          <IconButton icon={Trash} iconProps={{ size: 20 }} />
        </ProjectActions>
      </ProjectItem>
    </ul>
  );
};
