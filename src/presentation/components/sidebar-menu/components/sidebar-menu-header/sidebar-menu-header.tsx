import { XCircle } from '@phosphor-icons/react';
import { AppLogo } from '@presentation/components/app-logo';
import { IconButton } from '@presentation/components/icon-button';
import {
  SidebarMenuHeaderCloseButtonContainer,
  SidebarMenuHeaderContainer,
} from './sidebar-menu-header-styles';
import type { SidebarMenuHeaderProps } from './sidebar-menu-header-types';

export const SidebarMenuHeader = ({ onCloseMenu }: SidebarMenuHeaderProps) => {
  return (
    <SidebarMenuHeaderContainer>
      <AppLogo />

      <SidebarMenuHeaderCloseButtonContainer>
        <IconButton
          icon={XCircle}
          iconProps={{ size: 36 }}
          title="Fechar menu"
          onClick={onCloseMenu}
        />
      </SidebarMenuHeaderCloseButtonContainer>
    </SidebarMenuHeaderContainer>
  );
};
