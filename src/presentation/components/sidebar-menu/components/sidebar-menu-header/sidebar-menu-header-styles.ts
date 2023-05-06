import styled from 'styled-components';

export const SidebarMenuHeaderContainer = styled.header`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const AppName = styled.h3`
  display: flex;
  flex-direction: column;
  color: #2e1955;
  font-size: 1.5rem;
  font-weight: bold;

  strong {
    color: #ada5bd;
    font-size: 0.75rem;
    letter-spacing: 0.1rem;
  }
`;
