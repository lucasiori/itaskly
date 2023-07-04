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
  ...props
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

  const createProject = async (title: string) => {
    try {
      const lastProjectId = Number(data.projects.at(-1)?.id ?? 0);
      const newProject: ProjectModel = {
        id: String(lastProjectId + 1),
        title,
        status: 'pending',
        createdAt: new Date(),
        updatedAt: new Date(),
      };

      await props.createProject.create(newProject);

      setData({ projects: [...data.projects, newProject] });
    } catch {
      alert(
        'Ocorreu um erro ao criar o novo projeto, por favor tente novamente.'
      );
    }
  };

  const changeProjectStatus = async (
    id: string,
    status: ProjectModel['status']
  ) => {
    try {
      const project = data.projects.find(project => project.id === id);

      if (!project) {
        alert('Projeto não encontrado.');
        return;
      }

      const updatedProject: ProjectModel = {
        ...project,
        status,
        updatedAt: new Date(),
      };

      await props.updateProject.update(updatedProject);

      setData({
        projects: data.projects.map(project => {
          return project.id === id ? updatedProject : project;
        }),
      });
    } catch {
      alert(
        'Ocorreu um erro ao atualizar o status do projeto, por favor tente novamente.'
      );
    }
  };

  const deleteProject = async (id: string) => {
    try {
      const isValidProject = data.projects.some(project => project.id === id);

      if (!isValidProject) {
        alert('Projeto não encontrado.');
        return;
      }

      await props.deleteProject.delete(id);

      setData({ projects: data.projects.filter(project => project.id !== id) });
    } catch {
      alert('Ocorreu um erro ao excluir o projeto, por favor tente novamente.');
    }
  };

  useEffect(() => {
    props.loadProject.loadAll().then(onLoadSuccess).catch(onLoadError);
  }, [props.loadProject]);

  return (
    <ProjectsContext.Provider
      value={{
        data,
        state,
        handlers: {
          createProject,
          changeProjectStatus,
          deleteProject,
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
