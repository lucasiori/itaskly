import { CheckCircle, PlusCircle, Trash } from '@phosphor-icons/react';
import { IconButton } from '@presentation/components/icon-button';
import { useNewProject } from './hooks';
import {
  AddButtonContainer,
  Container,
  NewItemInputContainer,
  NewItem,
  NewItemActions,
  NewItemInput,
} from './sidebar-menu-projects-add-item-styles';

export const SidebarMenuProjectsAddItem = () => {
  const { state, metadata, handlers } = useNewProject();

  return (
    <Container>
      <NewItem $isAddingNewProject={metadata.isAdding}>
        <NewItemInputContainer $hasError={metadata.hasError}>
          <NewItemInput
            type="text"
            value={state.project.title}
            placeholder="Novo projeto"
            autoComplete="off"
            onChange={event => {
              handlers.changeProjectTitle(event.target.value);
            }}
          />
        </NewItemInputContainer>

        <NewItemActions>
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
        </NewItemActions>
      </NewItem>

      <AddButtonContainer $isAddingNewProject={metadata.isAdding}>
        <IconButton
          icon={PlusCircle}
          iconProps={{ size: 32 }}
          title="Adicionar novo projeto"
          disabled={metadata.isAdding}
          onClick={handlers.add}
        />
      </AddButtonContainer>
    </Container>
  );
};
