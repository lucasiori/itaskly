import { AppLogo } from '@presentation/components/app-logo';
import { SidebarMenuHeaderContainer } from './sidebar-menu-header-styles';

export const SidebarMenuHeader = () => {
  return (
    <SidebarMenuHeaderContainer>
      <AppLogo />
    </SidebarMenuHeaderContainer>
  );
};
