import { act, renderHook } from '@testing-library/react';
import { faker } from '@faker-js/faker';
import { useNewProject } from '.';

const makeSut = () => {
  const onSaveMock = jest.fn();
  const onCancelMock = jest.fn();

  const { result } = renderHook(() => {
    return useNewProject({
      isAdding: false,
      onSave: onSaveMock,
      onCancel: onCancelMock,
    });
  });

  const getUpdatedSut = () => result.current;

  return {
    sut: result.current,
    onSaveMock,
    onCancelMock,
    getUpdatedSut,
  };
};

describe('Presentation | Hooks | useNewProject', () => {
  afterEach(() => {
    jest.resetAllMocks();
  });

  afterAll(() => {
    jest.clearAllMocks();
  });

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

      act(() => sut.handlers.add());

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

      act(() => sut.handlers.add());
      act(() => sut.handlers.changeProjectTitle(projectTitle));

      const updatedSut = getUpdatedSut();
      expect(updatedSut.state.project.title).toBe(projectTitle);
    });
  });

  describe('when canceling the new project', () => {
    it('returns the default state', () => {
      const { sut, getUpdatedSut } = makeSut();

      act(() => sut.handlers.add());
      act(() => sut.handlers.changeProjectTitle(faker.random.words(3)));
      act(() => sut.handlers.cancel());

      const updatedSut = getUpdatedSut();
      expect(updatedSut).toEqual(
        expect.objectContaining({
          state: {
            project: { title: '' },
          },
          metadata: { isAdding: false, hasError: false },
          handlers: expect.anything(),
        })
      );
    });

    it('calls the "onCancel" property', () => {
      const { sut, onCancelMock } = makeSut();

      act(() => sut.handlers.add());
      act(() => sut.handlers.changeProjectTitle(faker.random.words(3)));
      act(() => sut.handlers.cancel());

      expect(onCancelMock).toHaveBeenCalledTimes(1);
    });
  });

  describe('when saving a project', () => {
    it('calls the "onSave" property providing the project title', async () => {
      const { sut, onSaveMock, getUpdatedSut } = makeSut();
      const projectTitle = faker.random.words(3);

      act(() => sut.handlers.add());
      act(() => sut.handlers.changeProjectTitle(projectTitle));

      const updatedSut = getUpdatedSut();
      act(() => updatedSut.handlers.save());

      expect(onSaveMock).toHaveBeenCalledWith(projectTitle);
    });

    describe('and not having the project title', () => {
      it('returns the "hasError" property equals true', () => {
        const { sut, getUpdatedSut } = makeSut();

        act(() => sut.handlers.add());
        act(() => sut.handlers.save());

        const updatedSut = getUpdatedSut();
        expect(updatedSut.metadata).toEqual(
          expect.objectContaining({ hasError: true })
        );
      });
    });
  });
});
