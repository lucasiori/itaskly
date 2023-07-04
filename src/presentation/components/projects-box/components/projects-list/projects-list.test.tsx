import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ProjectModel } from '@domain/models';
import { mockProjectModel } from '@domain/test';
import { ProjectsList } from './projects-list';

const makeSut = () => {
  const projects: ProjectModel[] = [
    mockProjectModel(),
    mockProjectModel(),
    mockProjectModel(),
  ];

  const onChangeProjectStatusMock = jest.fn();
  const onDeleteProjectMock = jest.fn();

  render(
    <ProjectsList
      projects={projects}
      onChangeProjectStatus={onChangeProjectStatusMock}
      onDeleteProject={onDeleteProjectMock}
    />
  );

  return { projects, onChangeProjectStatusMock, onDeleteProjectMock };
};

describe('Presentation | Components | ProjectsList', () => {
  describe('when rendering', () => {
    it('renders all the project items', () => {
      const { projects } = makeSut();

      expect(screen.getAllByTestId('projects-list-item')).toHaveLength(
        projects.length
      );
    });
  });

  describe('when changing a project status', () => {
    it('calls the "onChangeProjectStatus" providing the project id and the new status', async () => {
      const user = userEvent.setup();
      const { projects, onChangeProjectStatusMock } = makeSut();

      await user.click(screen.getAllByRole('checkbox')[0]);

      expect(onChangeProjectStatusMock).toHaveBeenCalledWith(
        projects[0].id,
        'completed'
      );
    });
  });

  describe('when deleting a project', () => {
    it('calls the "onDeleteProject" providing the project id', async () => {
      const user = userEvent.setup();
      const { projects, onDeleteProjectMock } = makeSut();

      await user.click(screen.getAllByRole('button')[0]);

      expect(onDeleteProjectMock).toHaveBeenCalledWith(projects[0].id);
    });
  });
});
