import { AddIcon, EditIcon } from '@presentation/assets';
import {
  AddButton,
  Container,
  NewInputContainer,
  NewItem,
  NewItemInput,
} from './sidebar-menu-projects-add-item-styles';

export const SidebarMenuProjectsAddItem = () => {
  return (
    <Container>
      <NewItem>
        <NewInputContainer>
          <NewItemInput
            type="text"
            placeholder="Novo projeto"
            autoComplete="off"
          />
        </NewInputContainer>

        <button type="button">
          <EditIcon />
        </button>
      </NewItem>

      <AddButton type="button">
        <AddIcon />
      </AddButton>
    </Container>
  );
};
