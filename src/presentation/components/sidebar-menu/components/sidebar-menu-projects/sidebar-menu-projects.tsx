import { ProjectIcon } from '@presentation/assets';
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
        <ProjectIcon />
        <Title>Projetos</Title>
        <ProjectsAmount>3 / 5</ProjectsAmount>
      </Header>

      <SidebarMenuProjectsList />
      <SidebarMenuProjectsAddItem />
    </Container>
  );
};
