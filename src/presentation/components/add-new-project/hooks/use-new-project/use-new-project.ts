import { useEffect, useState } from 'react';
import type { State, UseNewProject } from './use-new-project.types';

export const useNewProject: UseNewProject = ({
  isAdding,
  onSave,
  onCancel,
}) => {
  const [state, setState] = useState<State>({
    project: { title: '' },
    isAdding,
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

    onSave(state.project.title);
    resetState();
  };

  const cancel = () => {
    resetState();
    onCancel();
  };

  const changeProjectTitle = (title: string) => {
    setState(oldState => ({
      ...oldState,
      project: { title },
    }));
  };

  useEffect(() => {
    if (isAdding) {
      add();
    } else {
      resetState();
    }
  }, [isAdding]);

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
      cancel,
      save,
      changeProjectTitle,
    },
  };
};
