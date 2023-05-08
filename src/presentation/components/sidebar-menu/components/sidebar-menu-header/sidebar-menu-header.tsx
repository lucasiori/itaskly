import { AppLogo } from '@presentation/components/app-logo';
import { IconButton } from '@presentation/components/icon-button';
import {
  SidebarMenuHeaderAppName,
  SidebarMenuHeaderCloseButtonContainer,
  SidebarMenuHeaderContainer,
} from './sidebar-menu-header-styles';
import type { SidebarMenuHeaderProps } from './sidebar-menu-header-types';

export const SidebarMenuHeader = ({ onCloseMenu }: SidebarMenuHeaderProps) => {
  return (
    <SidebarMenuHeaderContainer>
      <AppLogo />
      <SidebarMenuHeaderAppName>
        iTaskly
        <strong>WEB APP</strong>
      </SidebarMenuHeaderAppName>

      <SidebarMenuHeaderCloseButtonContainer>
        <IconButton icon="cancel" title="Fechar menu" onClick={onCloseMenu} />
      </SidebarMenuHeaderCloseButtonContainer>
    </SidebarMenuHeaderContainer>
  );
};
