import { ReactNode } from 'react';
import { act, render, renderHook, waitFor } from '@testing-library/react';
import { HttpCreateProjectSpy, HttpLoadProjectSpy } from '@data/test';
import { ProjectsContextProps } from './projects-provider-types';
import { ProjectsContextProvider, useProjectsContext } from '.';

type MakeSutProps = {
  renderSut?: boolean;
};

const renderContextProvider = (props: ProjectsContextProps) => {
  return <ProjectsContextProvider {...props} />;
};

const makeSut = (props?: MakeSutProps) => {
  const { renderSut = true } = props ?? {};

  const httpLoadProjectSpy = new HttpLoadProjectSpy();
  const httpCreateProjectSpy = new HttpCreateProjectSpy();

  if (renderSut) {
    render(
      renderContextProvider({
        loadProject: httpLoadProjectSpy,
        createProject: httpCreateProjectSpy,
        children: <span>projects context children</span>,
      })
    );
  }

  return { httpLoadProjectSpy, httpCreateProjectSpy };
};

describe('Presentation | Contexts | ProjectsContext', () => {
  describe('when rendering the provider', () => {
    it('calls "loadAll" from HttpLoadProject', async () => {
      const { httpLoadProjectSpy } = makeSut();

      await waitFor(() => expect(httpLoadProjectSpy.callsCount).toBe(1));
    });
  });

  describe('when rendering the hook', () => {
    describe('and creating a new project', () => {
      it('calls "create" from HttpCreateProject', async () => {
        const { httpLoadProjectSpy, httpCreateProjectSpy } = makeSut({
          renderSut: false,
        });
        const { result } = renderHook(useProjectsContext, {
          wrapper: (props: { children: ReactNode }) => {
            return renderContextProvider({
              loadProject: httpLoadProjectSpy,
              createProject: httpCreateProjectSpy,
              ...props,
            });
          },
        });

        await waitFor(() => result.current);
        await act(async () => {
          result.current.handlers.createProject('test');
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
  });
});
