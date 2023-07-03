import type { ProjectModel } from '@domain/models';
import { CreateProject, DeleteProject, LoadProject } from '@domain/use-cases';
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
    deleteProject: (id: string) => void;
  };
};

export type ProjectsContextProps = {
  children: React.ReactNode;
  loadProject: LoadProject;
  createProject: CreateProject;
  deleteProject: DeleteProject;
};
