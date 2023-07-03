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
  createProject,
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

  const create = async (title: string) => {
    const lastProjectId = Number(data.projects.at(-1)?.id ?? 0);
    const newProject: ProjectModel = {
      id: String(lastProjectId + 1),
      title,
      status: 'pending',
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    await createProject.create(newProject);

    setData({ projects: [...data.projects, newProject] });
  };

  useEffect(() => {
    loadProject.loadAll().then(onLoadSuccess).catch(onLoadError);
  }, [loadProject]);

  return (
    <ProjectsContext.Provider
      value={{
        data,
        state,
        handlers: {
          createProject: create,
        },
      }}
    >
      {children}
    </ProjectsContext.Provider>
  );
};

export const useProjectsContext = () => {
  return useContext(ProjectsContext);
};
