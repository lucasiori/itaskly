import { PlusCircle } from '@phosphor-icons/react';
import { IconButton } from '../icon-button';
import {
  ProjectsBoxContainer,
  ProjectsBoxFooter,
  ProjectsBoxHeader,
} from './projects-box-styles';
import { AppLogo } from '../app-logo';

export const ProjectsBox = () => {
  return (
    <ProjectsBoxContainer>
      <ProjectsBoxHeader>
        <h2>Meus projetos</h2>
        <IconButton
          icon={PlusCircle}
          iconProps={{ size: 32, weight: 'regular' }}
        />
      </ProjectsBoxHeader>

      <ProjectsBoxFooter>
        <AppLogo />
      </ProjectsBoxFooter>
    </ProjectsBoxContainer>
  );
};
