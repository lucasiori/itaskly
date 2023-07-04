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
  const mockDeleteProject = jest.fn();

  render(
    <ProjectsList projects={projects} onDeleteProject={mockDeleteProject} />
  );

  return { projects, mockDeleteProject };
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

  describe('when deleting a project', () => {
    it('calls the "onDeleteProject" providing the project id', async () => {
      const user = userEvent.setup();
      const { projects, mockDeleteProject } = makeSut();

      await user.click(screen.getAllByRole('button')[0]);

      expect(mockDeleteProject).toHaveBeenCalledWith(projects[0].id);
    });
  });
});
