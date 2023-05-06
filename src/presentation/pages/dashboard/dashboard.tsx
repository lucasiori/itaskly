import { SidebarMenu } from '@presentation/components';
import { DashboardContainer, GlobalStyle } from './dashboard-styles';

export const Dashboard = () => {
  return (
    <>
      <GlobalStyle />

      <DashboardContainer>
        <SidebarMenu />
      </DashboardContainer>
    </>
  );
};
