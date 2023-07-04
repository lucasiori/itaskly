import { PlusCircle } from '@phosphor-icons/react';
import { useProjectsContext } from '@presentation/contexts';
import { AppLogo } from '../app-logo';
import { IconButton } from '../icon-button';
import { ProjectsList } from '../projects-list';
import {
  ProjectsBoxContainer,
  ProjectsBoxFooter,
  ProjectsBoxHeader,
} from './projects-box-styles';

export const ProjectsBox = () => {
  const { data, handlers } = useProjectsContext();

  return (
    <ProjectsBoxContainer>
      <ProjectsBoxHeader>
        <h2>Meus projetos</h2>
        <IconButton
          icon={PlusCircle}
          iconProps={{ size: 32, weight: 'regular' }}
        />
      </ProjectsBoxHeader>

      <ProjectsList
        projects={data.projects}
        onDeleteProject={handlers.deleteProject}
      />

      <ProjectsBoxFooter>
        <AppLogo />
      </ProjectsBoxFooter>
    </ProjectsBoxContainer>
  );
};
