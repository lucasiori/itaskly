import { SidebarMenuHeader, SidebarMenuProjects } from './components';
import { SidebarMenuContainer } from './sidebar-menu-styles';

export const SidebarMenu = () => {
  return (
    <>
      <SidebarMenuContainer>
        <SidebarMenuHeader />
        <SidebarMenuProjects />
      </SidebarMenuContainer>
    </>
  );
};
