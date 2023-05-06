import { DeleteIcon, EditIcon } from '@presentation/assets';
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
            <EditIcon />
          </button>
          <button type="button">
            <DeleteIcon />
          </button>
        </ProjectActions>
      </ProjectItem>

      <ProjectItem>
        <ProjectName>Projeto 1</ProjectName>
        <ProjectTasksAmount>1 / 3</ProjectTasksAmount>
        <ProjectActions>
          <button type="button">
            <EditIcon />
          </button>
          <button type="button">
            <DeleteIcon />
          </button>
        </ProjectActions>
      </ProjectItem>

      <ProjectItem>
        <ProjectName>Projeto 1</ProjectName>
        <ProjectTasksAmount>1 / 3</ProjectTasksAmount>
        <ProjectActions>
          <button type="button">
            <EditIcon />
          </button>
          <button type="button">
            <DeleteIcon />
          </button>
        </ProjectActions>
      </ProjectItem>
    </ul>
  );
};
