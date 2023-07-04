import type { ProjectModel, ProjectStatus } from '@domain/models';
import {
  CreateProject,
  DeleteProject,
  LoadProject,
  UpdateProject,
} from '@domain/use-cases';
import React from 'react';

export type ProjectsContextValue = {
  data: {
    projects: ProjectModel[];
  };
  state: {
    loading: boolean;
    error: string | null;
  };
  handlers: {
    createProject: (title: string) => void;
    changeProjectStatus: (id: string, status: ProjectStatus) => void;
    deleteProject: (id: string) => void;
  };
};

export type ProjectsContextProps = {
  children: React.ReactNode;
  loadProject: LoadProject;
  createProject: CreateProject;
  updateProject: UpdateProject;
  deleteProject: DeleteProject;
};
