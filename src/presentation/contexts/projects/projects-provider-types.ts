import type { ProjectModel } from '@domain/models';
import { CreateProject, LoadProject } from '@domain/use-cases';
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
  };
};

export type ProjectsContextProps = {
  children: React.ReactNode;
  loadProject: LoadProject;
  createProject: CreateProject;
};
