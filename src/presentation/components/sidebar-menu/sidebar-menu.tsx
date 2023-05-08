import { SidebarMenuHeader, SidebarMenuProjects } from './components';
import {
  SidebarMenuContainer,
  SidebarMenuOverlay,
} from './sidebar-menu-styles';
import type { SidebarMenuProps } from './sidebar-menu-types';

export const SidebarMenu = ({ isOpened, onClose }: SidebarMenuProps) => {
  return (
    <>
      <SidebarMenuOverlay $isMenuOpened={isOpened} onClick={onClose} />

      <SidebarMenuContainer $isMenuOpened={isOpened}>
        <SidebarMenuHeader onCloseMenu={onClose} />
        <SidebarMenuProjects />
      </SidebarMenuContainer>
    </>
  );
};
