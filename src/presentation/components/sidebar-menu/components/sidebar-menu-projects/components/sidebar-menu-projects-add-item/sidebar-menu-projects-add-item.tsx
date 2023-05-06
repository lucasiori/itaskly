import { IconButton } from '@presentation/components/icon-button';
import {
  AddButtonContainer,
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

        <IconButton icon="edit" />
      </NewItem>

      <AddButtonContainer>
        <IconButton icon="add" />
      </AddButtonContainer>
    </Container>
  );
};
