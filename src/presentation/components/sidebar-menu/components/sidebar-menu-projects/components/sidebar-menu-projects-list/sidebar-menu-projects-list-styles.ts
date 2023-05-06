import styled from 'styled-components';

export const ProjectItem = styled.li`
  display: flex;
  align-items: center;
  padding: 0.75rem 0;
`;

export const ProjectName = styled.strong`
  color: #2e1955;
  font-size: 0.75rem;
  font-weight: 600;
  margin-right: auto;
`;

export const ProjectTasksAmount = styled.span`
  color: #ada5bd;
  font-size: 0.75rem;
  font-weight: 600;
  margin-right: 1.5rem;
`;

export const ProjectActions = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;
