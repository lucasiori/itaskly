import { Icon } from '@presentation/components';
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
        <Icon icon="project" />
        <Title>Projetos</Title>
        <ProjectsAmount>3 / 5</ProjectsAmount>
      </Header>

      <SidebarMenuProjectsList />
      <SidebarMenuProjectsAddItem />
    </Container>
  );
};
