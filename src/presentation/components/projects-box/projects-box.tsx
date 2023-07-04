import { useState } from 'react';
import { PlusCircle } from '@phosphor-icons/react';
import { useProjectsContext } from '@presentation/contexts';
import { AppLogo } from '../app-logo';
import { IconButton } from '../icon-button';
import { NewProjectForm, ProjectsList } from './components';
import {
  AddButtonContainer,
  ProjectsBoxContainer,
  ProjectsBoxContent,
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

        <AddButtonContainer $isAddingNewProject={isAddingNewProject}>
          <IconButton
            icon={PlusCircle}
            iconProps={{ size: 32, weight: 'regular' }}
            onClick={() => setIsAddingNewProject(true)}
          />
        </AddButtonContainer>
      </ProjectsBoxHeader>

      <ProjectsBoxContent>
        {data.projects.length > 0 ? (
          <ProjectsList
            projects={data.projects}
            onChangeProjectStatus={handlers.changeProjectStatus}
            onDeleteProject={handlers.deleteProject}
          />
        ) : null}

        <NewProjectForm
          isAdding={isAddingNewProject}
          onSave={handleCreateNewProject}
          onCancel={() => setIsAddingNewProject(false)}
        />
      </ProjectsBoxContent>

      <ProjectsBoxFooter>
        <AppLogo />
      </ProjectsBoxFooter>
    </ProjectsBoxContainer>
  );
};
