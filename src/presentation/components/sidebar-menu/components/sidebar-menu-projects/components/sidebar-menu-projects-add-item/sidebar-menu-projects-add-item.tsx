import { Icon } from '@presentation/components';
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
          <Icon icon="edit" />
        </button>
      </NewItem>

      <AddButton type="button">
        <Icon icon="add" />
      </AddButton>
    </Container>
  );
};
