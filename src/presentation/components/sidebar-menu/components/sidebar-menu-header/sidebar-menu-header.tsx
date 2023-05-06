import { AppLogo } from '@presentation/components/app-logo';
import {
  AppName,
  SidebarMenuHeaderContainer,
} from './sidebar-menu-header-styles';

export const SidebarMenuHeader = () => {
  return (
    <SidebarMenuHeaderContainer>
      <AppLogo />
      <AppName>
        iTaskly
        <strong>WEB APP</strong>
      </AppName>
    </SidebarMenuHeaderContainer>
  );
};
