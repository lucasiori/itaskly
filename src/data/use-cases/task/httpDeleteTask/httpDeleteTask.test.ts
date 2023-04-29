import { UnknownError } from '@domain/errors';
import { mockTaskModel } from '@domain/tests/mocks';
import { HttpEndpoints } from '../../../enums';
import { HttpMethods } from '../../../protocols';
import { HttpClientSpy } from '../../../tests';
import { HttpDeleteTask } from './httpDeleteTask';

const makeSut = () => {
  const httpClientSpy = new HttpClientSpy();
  const sut = new HttpDeleteTask(httpClientSpy);

  return { sut, httpClientSpy };
};

describe('Use cases | Task | HttpDeleteTask', () => {
  describe('when deleting a task', () => {
    it('calls the HttpClient with correct data', async () => {
      const { sut, httpClientSpy } = makeSut();
      const task = mockTaskModel();

      await sut.delete(task.id);

      expect(httpClientSpy.callsCount).toBe(1);
      expect(httpClientSpy.url).toBe(`${HttpEndpoints.DELETE_TASK}/${task.id}`);
      expect(httpClientSpy.method).toBe(HttpMethods.DELETE);
    });

    describe('and getting an error', () => {
      it('returns an UnknownError', async () => {
        const { sut, httpClientSpy } = makeSut();
        httpClientSpy.request = jest.fn().mockRejectedValue(new Error());

        await expect(sut.delete(mockTaskModel().id)).rejects.toThrowError(
          new UnknownError()
        );
      });
    });
  });
});
