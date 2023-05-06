import { Icon } from '@presentation/components';
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
          <button type="button">
            <Icon icon="edit" />
          </button>
          <button type="button">
            <Icon icon="delete" />
          </button>
        </ProjectActions>
      </ProjectItem>

      <ProjectItem>
        <ProjectName>Projeto 1</ProjectName>
        <ProjectTasksAmount>1 / 3</ProjectTasksAmount>
        <ProjectActions>
          <button type="button">
            <Icon icon="edit" />
          </button>
          <button type="button">
            <Icon icon="delete" />
          </button>
        </ProjectActions>
      </ProjectItem>

      <ProjectItem>
        <ProjectName>Projeto 1</ProjectName>
        <ProjectTasksAmount>1 / 3</ProjectTasksAmount>
        <ProjectActions>
          <button type="button">
            <Icon icon="edit" />
          </button>
          <button type="button">
            <Icon icon="delete" />
          </button>
        </ProjectActions>
      </ProjectItem>
    </ul>
  );
};
