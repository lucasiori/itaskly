import { render } from '@testing-library/react';
import { ProjectsContextProvider } from '.';
import { HttpLoadProjectSpy } from '@data/test';

const makeSut = () => {
  const httpLoadProjectSpy = new HttpLoadProjectSpy();

  render(
    <ProjectsContextProvider loadProject={httpLoadProjectSpy}>
      <span>content</span>
    </ProjectsContextProvider>
  );

  return { httpLoadProjectSpy };
};

describe('Presentation | Contexts | ProjectsContext', () => {
  describe('when rendering the provider', () => {
    it('calls "loadAll" from HttpLoadProject', () => {
      const { httpLoadProjectSpy } = makeSut();

      expect(httpLoadProjectSpy.callsCount).toBe(1);
    });
  });
});
