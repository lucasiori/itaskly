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
import { useProjectsContext } from '@presentation/contexts';

const MAX_NUMBER_OF_PROJECTS = 5;

export const SidebarMenuProjects = () => {
  const { data } = useProjectsContext();

  return (
    <Container>
      <Header>
        <Icon icon={ChartBar} size={32} color={theme.colors.primary} />
        <Title>Projetos</Title>
        <ProjectsAmount>
          {data.projects.length} / {MAX_NUMBER_OF_PROJECTS}
        </ProjectsAmount>
      </Header>

      <SidebarMenuProjectsList />
      <SidebarMenuProjectsAddItem />
    </Container>
  );
};
