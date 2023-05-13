import type { ProjectModel } from '@domain/models';
import { LoadProject } from '@domain/use-cases';
import React from 'react';

export type ProjectsContextValue = {
  data: {
    projects: ProjectModel[];
  };
  state: {
    loading: boolean;
    error: string | null;
  };
};

export type ProjectsContextProps = {
  children: React.ReactNode;
  loadProject: LoadProject;
};
