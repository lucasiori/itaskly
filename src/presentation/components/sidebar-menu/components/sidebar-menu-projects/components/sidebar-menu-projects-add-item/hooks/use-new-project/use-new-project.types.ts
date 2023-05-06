import type { ProjectModel } from '@domain/models';

export type State = {
  project: Pick<ProjectModel, 'title'>;
  isAdding: boolean;
  hasError: boolean;
};

type UseNewProjectResponse = {
  state: {
    project: State['project'];
  };
  metadata: {
    isAdding: State['isAdding'];
    hasError: State['hasError'];
  };
  handlers: {
    add: () => void;
    cancel: () => void;
    save: () => void;
    changeProjectTitle: (title: string) => void;
  };
};

export type UseNewProject = () => UseNewProjectResponse;
