import styled from 'styled-components';
import { theme } from '@presentation/styles';
import type { StyledProjectNameProps } from './projects-list-types';

export const ProjectItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.75rem 0;

  > div {
    display: flex;
    flex: 0 0 50%;
    align-items: center;
    gap: 0.75rem;

    &:last-child {
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
