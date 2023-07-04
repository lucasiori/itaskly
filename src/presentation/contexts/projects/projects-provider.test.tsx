import { ReactNode } from 'react';
import {
  RenderHookResult,
  act,
  render,
  renderHook,
  waitFor,
} from '@testing-library/react';
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

const makeSut = (props: MakeSutProps = {}) => {
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
      const { httpLoadProjectSpy } = makeSut({
        renderContextComponent: true,
      });

      await waitFor(() => expect(httpLoadProjectSpy.callsCount).toBe(1));
    });
  });

  describe('when rendering the hook', () => {
    describe('and creating a new project', () => {
      it('calls "create" from HttpCreateProject providing the project', async () => {
        const { hook, httpLoadProjectSpy, httpCreateProjectSpy } = makeSut({
          renderContextHook: true,
        });
        const { projects } = httpLoadProjectSpy;
        const lastProjectId = Number(projects[projects.length - 1].id);

        await waitFor(() => hook?.result.current);
        await act(async () => {
          hook?.result.current.handlers.createProject('test');
        });

        expect(httpCreateProjectSpy.project).toEqual({
          id: String(lastProjectId + 1),
          title: 'test',
          status: 'pending',
          createdAt: expect.any(Date),
          updatedAt: expect.any(Date),
        });
      });
    });

    describe('and changing the project status', () => {
      it('calls "update" from HttpUpdateProject providing the project with the new status', async () => {
        const { hook, httpLoadProjectSpy, httpUpdateProjectSpy } = makeSut({
          renderContextHook: true,
        });
        const projectId = String(httpLoadProjectSpy.projects[0].id);

        await waitFor(() => hook?.result.current);
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
    });

    describe('and deleting a project', () => {
      it('calls "delete" from HttpDeleteProject providing the project id', async () => {
        const { hook, httpLoadProjectSpy, httpDeleteProjectSpy } = makeSut({
          renderContextHook: true,
        });
        const projectId = String(httpLoadProjectSpy.projects[0].id);

        await waitFor(() => hook?.result.current);
        await act(async () => {
          hook?.result.current.handlers.deleteProject(projectId);
        });

        expect(httpDeleteProjectSpy.projectId).toBe(projectId);
      });
    });
  });
});
