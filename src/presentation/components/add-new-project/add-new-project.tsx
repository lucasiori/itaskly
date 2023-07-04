import { CheckCircle, Trash } from '@phosphor-icons/react';
import { IconButton } from '../icon-button';
import { useNewProject } from './hooks';
import {
  AddNewProjectContainer,
  NewProjectInputContainer,
  NewProjectActions,
  NewProjectInput,
} from './add-new-project-styles';
import type { AddNewProjectProps } from './add-new-project-types';

export const AddNewProject = ({
  isAdding,
  onSave,
  onCancel,
}: AddNewProjectProps) => {
  const { state, metadata, handlers } = useNewProject({
    isAdding,
    onSave,
    onCancel,
  });

  return (
    <AddNewProjectContainer $isAddingNewProject={metadata.isAdding}>
      <NewProjectInputContainer $hasError={metadata.hasError}>
        <NewProjectInput
          type="text"
          value={state.project.title}
          placeholder="Novo projeto"
          autoComplete="off"
          onChange={event => {
            handlers.changeProjectTitle(event.target.value);
          }}
        />
      </NewProjectInputContainer>

      <NewProjectActions>
        <IconButton
          icon={CheckCircle}
          iconProps={{ size: 20 }}
          title="Salvar projeto"
          onClick={handlers.save}
        />
        <IconButton
          icon={Trash}
          iconProps={{ size: 20 }}
          title="Cancelar"
          onClick={handlers.cancel}
        />
      </NewProjectActions>
    </AddNewProjectContainer>
  );
};
