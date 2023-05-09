import styled from 'styled-components';
import { theme } from '@presentation/styles';

export const ProjectItem = styled.li`
  display: flex;
  align-items: center;
  padding: 0.75rem 0;
`;

export const ProjectName = styled.strong`
  color: ${theme.colors.text};
  font-size: 0.75rem;
  font-weight: ${theme.fontWeight.semiBold};
  margin-right: auto;
`;

export const ProjectTasksAmount = styled.span`
  color: ${theme.colors.subtitle};
  font-size: 0.75rem;
  font-weight: ${theme.fontWeight.semiBold};
  margin-right: 1.5rem;
`;

export const ProjectActions = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;
