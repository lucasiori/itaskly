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

const renderContextProvider = (props: ProjectsContextProps) => {
  return <ProjectsContextProvider {...props} />;
};

const makeSut = (props: MakeSutProps = {}) => {
  const httpLoadProjectSpy = new HttpLoadProjectSpy();
  const httpCreateProjectSpy = new HttpCreateProjectSpy();
  const httpDeleteProjectSpy = new HttpDeleteProjectSpy();
  let hook: RenderHookResult<ProjectsContextValue, unknown> | undefined;

  if (props.renderContextComponent) {
    render(
      <ProjectsContextProvider
        loadProject={httpLoadProjectSpy}
        createProject={httpCreateProjectSpy}
        deleteProject={httpDeleteProjectSpy}
      >
        <span>projects context children</span>
      </ProjectsContextProvider>
    );
  }

  if (props.renderContextHook) {
    hook = renderHook(useProjectsContext, {
      wrapper: (props: { children: ReactNode }) => {
        return renderContextProvider({
          loadProject: httpLoadProjectSpy,
          createProject: httpCreateProjectSpy,
          deleteProject: httpDeleteProjectSpy,
          ...props,
        });
      },
    });
  }

  return {
    hook,
    httpLoadProjectSpy,
    httpCreateProjectSpy,
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
      it('calls "create" from HttpCreateProject', async () => {
        const { hook, httpLoadProjectSpy, httpCreateProjectSpy } = makeSut({
          renderContextHook: true,
        });

        await waitFor(() => hook?.result.current);
        await act(async () => {
          hook?.result.current.handlers.createProject('test');
        });

        const lastProjectId = Number(httpLoadProjectSpy.projects.at(-1)?.id);
        expect(httpCreateProjectSpy.project).toEqual({
          id: String(lastProjectId + 1),
          title: 'test',
          status: 'pending',
          createdAt: expect.any(Date),
          updatedAt: expect.any(Date),
        });
      });
    });

    describe('and deleting a project', () => {
      it('calls "delete" from HttpDeleteProject', async () => {
        const { hook, httpLoadProjectSpy, httpDeleteProjectSpy } = makeSut({
          renderContextHook: true,
        });
        const lastProjectId = String(httpLoadProjectSpy.projects.at(-1)?.id);

        await waitFor(() => hook?.result.current);
        await act(async () => {
          hook?.result.current.handlers.deleteProject(lastProjectId);
        });

        expect(httpDeleteProjectSpy.projectId).toBe(lastProjectId);
      });
    });
  });
});
