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
  height: 80vh;
  display: flex;
  flex-direction: column;
  gap: 3rem;
  background-color: ${theme.colors.white};
  box-shadow: none;
  padding: 1.5rem 1rem;
  bottom: 0;
  transform: ${({ $isMenuOpened }) => {
    return $isMenuOpened ? 'translateY(0)' : 'translateY(150%)';
  }};
  transition: transform 300ms ease-in-out;

  @media (min-width: 768px) {
    width: 370px;
    height: 100vh;
    box-shadow: ${theme.boxShadow};
    padding: 3rem 2rem;
    transform: translateY(0);
  }
`;
