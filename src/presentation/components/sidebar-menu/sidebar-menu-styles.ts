import styled from 'styled-components';
import { theme } from '@presentation/styles';
import type {
  StyledSidebarMenuContainerProps,
  StyledSidebarMenuOverlayProps,
} from './sidebar-menu-types';

export const SidebarMenuOverlay = styled.div<StyledSidebarMenuOverlayProps>`
  position: fixed;
  width: 100vw;
  height: 100vh;
  display: ${({ $isMenuOpened }) => ($isMenuOpened ? 'block' : 'none')};
  background-color: rgba(0, 0, 0, 0.32);

  @media (min-width: 768px) {
    display: none;
  }
`;

export const SidebarMenuContainer = styled.aside<StyledSidebarMenuContainerProps>`
  position: fixed;
  width: 100vw;
  height: 60vh;
  display: flex;
  flex-direction: column;
  gap: 3rem;
  background-color: ${theme.colors.white};
  border-radius: 3rem 3rem 0 0;
  box-shadow: none;
  padding: 3rem 2rem;
  bottom: 0;
  transform: ${({ $isMenuOpened }) => {
    return $isMenuOpened ? 'translateY(0)' : 'translateY(150%)';
  }};
  transition: transform 300ms ease-in-out;

  @media (min-width: 768px) {
    width: 370px;
    height: 100vh;
    border-radius: 0;
    box-shadow: ${theme.boxShadow};
    transform: translateY(0);
  }
`;
