import { ChartBar } from '@phosphor-icons/react';
import { Icon } from '@presentation/components/icon';
import { theme } from '@presentation/styles';
import {
  Container,
  Header,
  ProjectsAmount,
  Title,
} from './sidebar-menu-projects-styles';
import {
  SidebarMenuProjectsAddItem,
  SidebarMenuProjectsList,
} from './components';

export const SidebarMenuProjects = () => {
  return (
    <Container>
      <Header>
        <Icon icon={ChartBar} size={32} color={theme.colors.primary} />
        <Title>Projetos</Title>
        <ProjectsAmount>3 / 5</ProjectsAmount>
      </Header>

      <SidebarMenuProjectsList />
      <SidebarMenuProjectsAddItem />
    </Container>
  );
};
