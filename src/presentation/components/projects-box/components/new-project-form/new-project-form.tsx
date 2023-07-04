import { CheckCircle, XCircle } from '@phosphor-icons/react';
import { IconButton } from '../../../icon-button';
import { useNewProject } from './hooks';
import {
  NewProjectFormContainer,
  NewProjectInputContainer,
  NewProjectActions,
  NewProjectInput,
} from './new-project-form-styles';
import type { FormEventHandler } from 'react';
import type { NewProjectFormProps } from './new-project-form-types';

export const NewProjectForm = ({
  isAdding,
  onSave,
  onCancel,
}: NewProjectFormProps) => {
  const { state, metadata, handlers } = useNewProject({
    isAdding,
    onSave,
    onCancel,
  });

  const handleSubmit: FormEventHandler<HTMLFormElement> = event => {
    event.preventDefault();
    handlers.save();
  };

  return (
    <NewProjectFormContainer
      $isAddingNewProject={metadata.isAdding}
      onSubmit={handleSubmit}
    >
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
          type="submit"
          icon={CheckCircle}
          iconProps={{ size: 20 }}
          title="Salvar projeto"
        />

        <IconButton
          icon={XCircle}
          iconProps={{ size: 20 }}
          title="Cancelar"
          onClick={handlers.cancel}
        />
      </NewProjectActions>
    </NewProjectFormContainer>
  );
};
