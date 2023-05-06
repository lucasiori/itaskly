import { renderHook } from '@testing-library/react-hooks';
import { faker } from '@faker-js/faker';
import { useNewProject } from '.';

const makeSut = () => {
  const { result, waitFor } = renderHook(() => useNewProject());

  const getUpdatedSut = () => result.current;

  return {
    sut: result.current,
    getUpdatedSut,
    waitFor: waitFor,
  };
};

describe('Presentation | Hooks | useNewProject', () => {
  describe('when rendering', () => {
    it('returns the default state', () => {
      const { sut } = makeSut();

      expect(sut).toEqual(
        expect.objectContaining({
          state: {
            project: { title: '' },
          },
          metadata: {
            isAdding: false,
            hasError: false,
          },
          handlers: expect.anything(),
        })
      );
    });
  });

  describe('when adding a new project', () => {
    it('returns "isAdding" property equals true', () => {
      const { sut, getUpdatedSut } = makeSut();

      sut.handlers.add();

      const updatedSut = getUpdatedSut();
      expect(updatedSut.metadata).toEqual(
        expect.objectContaining({ isAdding: true })
      );
    });
  });

  describe('when changing the project title', () => {
    it('returns the "project" property updated', () => {
      const { sut, getUpdatedSut } = makeSut();
      const projectTitle = faker.random.words(3);

      sut.handlers.add();
      sut.handlers.changeProjectTitle(projectTitle);

      const updatedSut = getUpdatedSut();
      expect(updatedSut.state.project.title).toBe(projectTitle);
    });
  });

  describe('when canceling the new project', () => {
    it('returns the default state', () => {
      const { sut, getUpdatedSut } = makeSut();

      sut.handlers.add();
      sut.handlers.changeProjectTitle(faker.random.words(3));
      sut.handlers.cancel();

      const updatedSut = getUpdatedSut();
      expect(updatedSut).toEqual(
        expect.objectContaining({
          state: {
            project: { title: '' },
          },
          metadata: {
            isAdding: false,
            hasError: false,
          },
          handlers: expect.anything(),
        })
      );
    });
  });

  describe('when saving a project', () => {
    it('resets the state to default', async () => {
      const { result, waitFor } = renderHook(() => useNewProject());

      result.current.handlers.add();
      await waitFor(() => {
        result.current.handlers.changeProjectTitle(faker.random.words(3));
      });
      result.current.handlers.save();

      expect(result.current).toEqual(
        expect.objectContaining({
          state: {
            project: { title: '' },
          },
          metadata: {
            isAdding: false,
            hasError: false,
          },
          handlers: expect.anything(),
        })
      );
    });

    describe('and not having the project title', () => {
      it('returns the "hasError" property equals true', () => {
        const { sut, getUpdatedSut } = makeSut();

        sut.handlers.add();
        sut.handlers.save();

        const updatedSut = getUpdatedSut();
        expect(updatedSut.metadata).toEqual(
          expect.objectContaining({ hasError: true })
        );
      });
    });
  });
});
