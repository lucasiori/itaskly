import styled from 'styled-components';
import { theme } from '@presentation/styles';
import type { StyledProjectNameProps } from './projects-list-types';

export const ProjectsListContainer = styled.ul`
  max-height: 260px;
  overflow-y: scroll;
  scrollbar-width: 0.25rem;
  scrollbar-color: ${theme.colors.subtitle};

  ::-webkit-scrollbar {
    width: 0.25rem;
  }

  ::-webkit-scrollbar-track {
    background: ${theme.colors.white};
  }

  ::-webkit-scrollbar-thumb {
    background: ${theme.colors.subtitle};
    border-radius: 0.25rem;
  }
`;

export const ProjectItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.75rem 0;

  > div {
    display: flex;
    align-items: center;
    gap: 0.75rem;

    &:first-child {
      flex: 0 0 70%;
    }

    &:last-child {
      flex: 0 0 30%;
      justify-content: flex-end;
    }
  }
`;

export const ProjectName = styled.strong<StyledProjectNameProps>`
  color: ${({ $completed }) => {
    return $completed ? theme.colors.subtitle : theme.colors.text;
  }};
  text-decoration-line: ${({ $completed }) => {
    return $completed ? 'line-through' : 'none';
  }};
  font-size: 1rem;
  font-weight: ${theme.fontWeight.semiBold};
`;

export const ProjectActions = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;
