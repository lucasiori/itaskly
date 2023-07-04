import styled from 'styled-components';
import { theme } from '@presentation/styles';
import type { StyledAddButtonContainerProps } from './projects-box-types';

export const ProjectsBoxContainer = styled.section`
  width: 100%;
  max-width: 640px;
  height: 520px;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: flex-start;
  background-color: ${theme.colors.white};
  border-radius: 1rem;
  padding: 2rem;
`;

export const ProjectsBoxHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  margin-bottom: 3rem;
`;

export const AddButtonContainer = styled.div<StyledAddButtonContainerProps>`
  opacity: ${({ $isAddingNewProject }) => ($isAddingNewProject ? 0 : 1)};
  transition: opacity 150ms ease-in-out;
`;

export const ProjectsBoxFooter = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 1.5rem;
  margin-top: auto;
`;
