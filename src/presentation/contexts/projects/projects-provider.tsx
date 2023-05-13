import { createContext, useContext, useEffect, useState } from 'react';
import type {
  ProjectsContextProps,
  ProjectsContextValue,
} from './projects-provider-types';
import { ProjectModel } from '@domain/models';

const ProjectsContext = createContext<ProjectsContextValue>(
  {} as ProjectsContextValue
);

export const ProjectsContextProvider = ({
  children,
  loadProject,
}: ProjectsContextProps) => {
  const [data, setData] = useState<ProjectsContextValue['data']>({
    projects: [],
  });
  const [state, setState] = useState<ProjectsContextValue['state']>({
    loading: true,
    error: null,
  });

  const onLoadSuccess = (response: ProjectModel[]) => {
    setData({ projects: response });
    setState({ loading: true, error: null });
  };

  const onLoadError = () => {
    setData({ projects: [] });
    setState({
      loading: false,
      error: 'Ocorreu um erro ao buscar os projetos.',
    });
  };

  useEffect(() => {
    loadProject.loadAll().then(onLoadSuccess).catch(onLoadError);
  }, [loadProject]);

  return (
    <ProjectsContext.Provider value={{ data, state }}>
      {children}
    </ProjectsContext.Provider>
  );
};

export const useProjectsContext = () => {
  return useContext(ProjectsContext);
};
