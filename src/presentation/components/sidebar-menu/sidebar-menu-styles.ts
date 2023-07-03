import styled from 'styled-components';
import { theme } from '@presentation/styles';

export const SidebarMenuContainer = styled.aside`
  position: fixed;
  width: 370px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  gap: 3rem;
  background-color: ${theme.colors.white};
  border-radius: 0;
  box-shadow: ${theme.boxShadow};
  padding: 3rem 2rem;
  bottom: 0;
  transition: transform 300ms ease-in-out;
`;
