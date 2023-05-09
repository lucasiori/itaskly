import styled from 'styled-components';
import { theme } from '@presentation/styles';
import type {
  StyledAddButtonContainerProps,
  StyledNewItemInputContainerProps,
  StyledNewItemProps,
} from './sidebar-menu-projects-add-item-types';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const NewItem = styled.div<StyledNewItemProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.5rem;
  padding: 0.25rem 0;
  opacity: ${({ $isAddingNewProject }) => ($isAddingNewProject ? 1 : 0)};
  transition: opacity 150ms ease-in-out;
`;

export const NewItemInputContainer = styled.div<StyledNewItemInputContainerProps>`
  position: relative;
  display: flex;
  flex: 1;

  &::before {
    content: '';
    position: absolute;
    width: ${({ $hasError }) => ($hasError ? '100%' : '0')};
    height: 2px;
    display: block;
    background-color: ${({ $hasError }) => {
      return $hasError ? theme.colors.red : theme.colors.secondary;
    }};
    bottom: 0;
    left: 0;
    transition: width 150ms ease-in-out;
  }

  &:focus-within {
    &::before {
      width: 100%;
    }
  }
`;

export const NewItemInput = styled.input`
  width: 100%;
  border: 0;
  border-bottom: 1px solid ${theme.colors.subtitle};
  color: ${theme.colors.subtitle};
  font-size: 0.75rem;
  padding: 0.5rem 0;

  &::placeholder {
    color: ${theme.colors.subtitle};
  }

  &:focus {
    outline: none;
  }
`;

export const NewItemActions = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const AddButtonContainer = styled.div<StyledAddButtonContainerProps>`
  display: flex;
  align-self: center;
  margin-top: 1.25rem;
  opacity: ${({ $isAddingNewProject }) => ($isAddingNewProject ? 0 : 1)};
  transform: ${({ $isAddingNewProject }) => {
    return $isAddingNewProject ? 'translateY(0)' : 'translateY(-2.25rem)';
  }};
  transition: transform 150ms ease-in-out, opacity 100ms ease-in-out;
`;
