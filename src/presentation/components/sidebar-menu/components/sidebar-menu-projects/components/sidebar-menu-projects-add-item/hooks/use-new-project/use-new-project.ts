import { useState } from 'react';
import type { State, UseNewProject } from './use-new-project.types';

export const useNewProject: UseNewProject = () => {
  const [state, setState] = useState<State>({
    project: { title: '' },
    isAdding: false,
    hasError: false,
  });

  const add = () => {
    setState({
      project: { title: '' },
      isAdding: true,
      hasError: false,
    });
  };

  const resetState = () => {
    setState({
      project: { title: '' },
      isAdding: false,
      hasError: false,
    });
  };

  const save = () => {
    if (!state.project.title) {
      setState(oldState => ({ ...oldState, hasError: true }));
      return;
    }

    alert(state.project.title);
    resetState();
  };

  const changeProjectTitle = (title: string) => {
    setState(oldState => ({
      ...oldState,
      project: { title },
    }));
  };

  return {
    state: {
      project: state.project,
    },
    metadata: {
      isAdding: state.isAdding,
      hasError: state.hasError,
    },
    handlers: {
      add,
      cancel: resetState,
      save,
      changeProjectTitle,
    },
  };
};
