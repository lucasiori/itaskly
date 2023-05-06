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
          <IconButton icon="edit" />
          <IconButton icon="delete" />
        </ProjectActions>
      </ProjectItem>

      <ProjectItem>
        <ProjectName>Projeto 1</ProjectName>
        <ProjectTasksAmount>1 / 3</ProjectTasksAmount>
        <ProjectActions>
          <IconButton icon="edit" />
          <IconButton icon="delete" />
        </ProjectActions>
      </ProjectItem>

      <ProjectItem>
        <ProjectName>Projeto 1</ProjectName>
        <ProjectTasksAmount>1 / 3</ProjectTasksAmount>
        <ProjectActions>
          <IconButton icon="edit" />
          <IconButton icon="delete" />
        </ProjectActions>
      </ProjectItem>
    </ul>
  );
};
