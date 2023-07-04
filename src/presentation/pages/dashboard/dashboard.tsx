import { ProjectsBox } from '@presentation/components';
import { GlobalStyle } from '@presentation/styles';
import { DashboardContainer } from './dashboard-styles';
import { ProjectsContextProvider } from '@presentation/contexts';
import { DashboardProps } from './dashboard-types';

export const Dashboard = ({
  loadProject,
  createProject,
  updateProject,
  deleteProject,
}: DashboardProps) => {
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
