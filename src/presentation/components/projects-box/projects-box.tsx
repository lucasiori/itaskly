import { useState } from 'react';
import { PlusCircle } from '@phosphor-icons/react';
import { useProjectsContext } from '@presentation/contexts';
import { AppLogo } from '../app-logo';
import { IconButton } from '../icon-button';
import { ProjectsList } from '../projects-list';
import { AddNewProject } from '../add-new-project';
import {
  ProjectsBoxContainer,
  ProjectsBoxFooter,
  ProjectsBoxHeader,
} from './projects-box-styles';

export const ProjectsBox = () => {
  const { data, handlers } = useProjectsContext();

  const [isAddingNewProject, setIsAddingNewProject] = useState(false);

  const handleCreateNewProject = (title: string) => {
    handlers.createProject(title);
    setIsAddingNewProject(false);
  };

  return (
    <ProjectsBoxContainer>
      <ProjectsBoxHeader>
        <h2>Meus projetos</h2>

        <IconButton
          icon={PlusCircle}
          iconProps={{ size: 32, weight: 'regular' }}
          onClick={() => setIsAddingNewProject(true)}
        />
      </ProjectsBoxHeader>

      <ProjectsList
        projects={data.projects}
        onDeleteProject={handlers.deleteProject}
      />

      <AddNewProject
        isAdding={isAddingNewProject}
        onSave={handleCreateNewProject}
        onCancel={() => setIsAddingNewProject(false)}
      />

      <ProjectsBoxFooter>
        <AppLogo />
      </ProjectsBoxFooter>
    </ProjectsBoxContainer>
  );
};
