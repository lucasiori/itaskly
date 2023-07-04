import { ReactNode } from 'react';
import {
  RenderHookResult,
  act,
  render,
  renderHook,
  waitFor,
} from '@testing-library/react';
import { faker } from '@faker-js/faker';
import {
  HttpCreateProjectSpy,
  HttpDeleteProjectSpy,
  HttpLoadProjectSpy,
  HttpUpdateProjectSpy,
} from '@data/test';
import {
  ProjectsContextProps,
  ProjectsContextValue,
} from './projects-provider-types';
import { ProjectsContextProvider, useProjectsContext } from '.';

type MakeSutProps = {
  renderContextComponent?: boolean;
  renderContextHook?: boolean;
};

const makeSut = async (props: MakeSutProps = {}) => {
  const httpLoadProjectSpy = new HttpLoadProjectSpy();
  const httpCreateProjectSpy = new HttpCreateProjectSpy();
  const httpUpdateProjectSpy = new HttpUpdateProjectSpy();
  const httpDeleteProjectSpy = new HttpDeleteProjectSpy();
  let hook: RenderHookResult<ProjectsContextValue, unknown> | undefined;

  const useCasesProps: Omit<ProjectsContextProps, 'children'> = {
    loadProject: httpLoadProjectSpy,
    createProject: httpCreateProjectSpy,
    updateProject: httpUpdateProjectSpy,
    deleteProject: httpDeleteProjectSpy,
  };

  if (props.renderContextComponent) {
    render(
      <ProjectsContextProvider {...useCasesProps}>
        <span>projects context children</span>
      </ProjectsContextProvider>
    );
  }

  if (props.renderContextHook) {
    hook = renderHook(useProjectsContext, {
      wrapper: (props: { children: ReactNode }) => {
        return <ProjectsContextProvider {...useCasesProps} {...props} />;
      },
    });

    await waitFor(() => hook?.result.current);
  }

  return {
    hook,
    httpLoadProjectSpy,
    httpCreateProjectSpy,
    httpUpdateProjectSpy,
    httpDeleteProjectSpy,
  };
};

describe('Presentation | Contexts | ProjectsContext', () => {
  describe('when rendering the provider', () => {
    it('calls "loadAll" from HttpLoadProject', async () => {
      const { httpLoadProjectSpy } = await makeSut({
        renderContextComponent: true,
      });

      await waitFor(() => expect(httpLoadProjectSpy.callsCount).toBe(1));
    });
  });

  describe('when rendering the hook', () => {
    describe('and creating a new project', () => {
      it('calls "create" from HttpCreateProject providing the project', async () => {
        const { hook, httpLoadProjectSpy, httpCreateProjectSpy } =
          await makeSut({
            renderContextHook: true,
          });
        const { projects } = httpLoadProjectSpy;
        const lastProjectId = Number(projects[projects.length - 1].id);
        const projectTitle = faker.random.words(3);

        await act(async () => {
          hook?.result.current.handlers.createProject(projectTitle);
        });

        expect(httpCreateProjectSpy.project).toEqual({
          id: String(lastProjectId + 1),
          title: projectTitle,
          status: 'pending',
          createdAt: expect.any(Date),
          updatedAt: expect.any(Date),
        });
      });

      describe('and getting an error', () => {
        it('returns the correct error message', async () => {
          const { hook, httpCreateProjectSpy } = await makeSut({
            renderContextHook: true,
          });
          httpCreateProjectSpy.create = jest
            .fn()
            .mockRejectedValue(new Error());

          await act(async () => {
            hook?.result.current.handlers.createProject('any_title');
          });

          expect(hook?.result.current.state).toEqual(
            expect.objectContaining({
              error:
                'Ocorreu um erro ao criar o novo projeto, por favor tente novamente.',
            })
          );
        });
      });
    });

    describe('and changing the project status', () => {
      it('calls "update" from HttpUpdateProject providing the project with the new status', async () => {
        const { hook, httpLoadProjectSpy, httpUpdateProjectSpy } =
          await makeSut({
            renderContextHook: true,
          });
        const projectId = String(httpLoadProjectSpy.projects[0].id);

        await act(async () => {
          hook?.result.current.handlers.changeProjectStatus(
            projectId,
            'completed'
          );
        });

        expect(httpUpdateProjectSpy.project).toEqual(
          expect.objectContaining({ status: 'completed' })
        );
      });

      describe('and providing an invalid project id', () => {
        it('returns the correct error message', async () => {
          const { hook } = await makeSut({ renderContextHook: true });

          await act(async () => {
            hook?.result.current.handlers.changeProjectStatus(
              'invalid_id',
              'pending'
            );
          });

          expect(hook?.result.current.state).toEqual(
            expect.objectContaining({
              error: 'Projeto não encontrado.',
            })
          );
        });
      });

      describe('and getting an error', () => {
        it('returns the correct error message', async () => {
          const { hook, httpLoadProjectSpy, httpUpdateProjectSpy } =
            await makeSut({
              renderContextHook: true,
            });
          httpUpdateProjectSpy.update = jest
            .fn()
            .mockRejectedValue(new Error());
          const projectId = String(httpLoadProjectSpy.projects[0].id);

          await act(async () => {
            hook?.result.current.handlers.changeProjectStatus(
              projectId,
              'completed'
            );
          });

          expect(hook?.result.current.state).toEqual(
            expect.objectContaining({
              error:
                'Ocorreu um erro ao atualizar o status do projeto, por favor tente novamente.',
            })
          );
        });
      });
    });

    describe('and deleting a project', () => {
      it('calls "delete" from HttpDeleteProject providing the project id', async () => {
        const { hook, httpLoadProjectSpy, httpDeleteProjectSpy } =
          await makeSut({
            renderContextHook: true,
          });
        const projectId = String(httpLoadProjectSpy.projects[0].id);

        await act(async () => {
          hook?.result.current.handlers.deleteProject(projectId);
        });

        expect(httpDeleteProjectSpy.projectId).toBe(projectId);
      });

      describe('and providing an invalid project id', () => {
        it('returns the correct error message', async () => {
          const { hook } = await makeSut({ renderContextHook: true });

          await act(async () => {
            hook?.result.current.handlers.deleteProject('invalid_id');
          });

          expect(hook?.result.current.state).toEqual(
            expect.objectContaining({
              error: 'Projeto não encontrado.',
            })
          );
        });
      });

      describe('and getting an error', () => {
        it('returns the correct error message', async () => {
          const { hook, httpLoadProjectSpy, httpDeleteProjectSpy } =
            await makeSut({
              renderContextHook: true,
            });
          httpDeleteProjectSpy.delete = jest
            .fn()
            .mockRejectedValue(new Error());
          const projectId = String(httpLoadProjectSpy.projects[0].id);

          await act(async () => {
            hook?.result.current.handlers.deleteProject(projectId);
          });

          expect(hook?.result.current.state).toEqual(
            expect.objectContaining({
              error:
                'Ocorreu um erro ao excluir o projeto, por favor tente novamente.',
            })
          );
        });
      });
    });
  });
});
