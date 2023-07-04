import { ProjectsBox } from '@presentation/components';
import { GlobalStyle } from '@presentation/styles';
import { DashboardContainer } from './dashboard-styles';
import { ProjectsContextProvider } from '@presentation/contexts';
import {
  HttpCreateProject,
  HttpDeleteProject,
  HttpLoadProject,
  HttpUpdateProject,
} from '@data/use-cases';
import { HttpAxiosClient } from '@infra/protocols';

export const Dashboard = () => {
  const httpClient = new HttpAxiosClient();
  const loadProject = new HttpLoadProject(httpClient);
  const createProject = new HttpCreateProject(httpClient);
  const updateProject = new HttpUpdateProject(httpClient);
  const deleteProject = new HttpDeleteProject(httpClient);

  return (
    <>
      <GlobalStyle />

      <ProjectsContextProvider
        loadProject={loadProject}
        createProject={createProject}
        updateProject={updateProject}
        deleteProject={deleteProject}
      >
        <DashboardContainer>
          <ProjectsBox />
        </DashboardContainer>
      </ProjectsContextProvider>
    </>
  );
};
