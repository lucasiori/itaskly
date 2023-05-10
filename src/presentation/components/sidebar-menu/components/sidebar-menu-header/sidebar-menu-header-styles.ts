import styled from 'styled-components';

export const SidebarMenuHeaderContainer = styled.header`
  display: flex;
  align-items: center;
`;

export const SidebarMenuHeaderCloseButtonContainer = styled.div`
  display: flex;
  margin-left: auto;

  @media (min-width: 768px) {
    display: none;
  }
`;
