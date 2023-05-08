import { useState } from 'react';
import { SidebarMenu } from '@presentation/components';
import { DashboardContainer, GlobalStyle } from './dashboard-styles';

export const Dashboard = () => {
  const [isSidebarMenuOpened, setIsSidebarMenuOpened] = useState(false);

  return (
    <>
      <GlobalStyle />

      <DashboardContainer>
        <SidebarMenu
          isOpened={isSidebarMenuOpened}
          onClose={() => setIsSidebarMenuOpened(false)}
        />

        <button onClick={() => setIsSidebarMenuOpened(true)}>open menu</button>
      </DashboardContainer>
    </>
  );
};
