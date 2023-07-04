import { CheckCircle, XCircle } from '@phosphor-icons/react';
import { IconButton } from '../../../icon-button';
import { useNewProject } from './hooks';
import {
  NewProjectFormContainer,
  NewProjectInputContainer,
  NewProjectActions,
  NewProjectInput,
} from './new-project-form-styles';
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

  return (
    <NewProjectFormContainer $isAddingNewProject={metadata.isAdding}>
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
          icon={XCircle}
          iconProps={{ size: 20 }}
          title="Cancelar"
          onClick={handlers.cancel}
        />
      </NewProjectActions>
    </NewProjectFormContainer>
  );
};
