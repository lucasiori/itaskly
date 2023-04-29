import { UnknownError } from '@domain/errors';
import { mockTaskModel } from '@domain/test';
import { HttpEndpoints } from '../../../enums';
import { HttpMethods } from '../../../protocols';
import { HttpClientSpy } from '../../../test';
import { HttpUpdateTask } from '.';

const makeSut = () => {
  const httpClientSpy = new HttpClientSpy();
  const sut = new HttpUpdateTask(httpClientSpy);

  return { sut, httpClientSpy };
};

describe('Data | Use cases | Task | HttpUpdateTask', () => {
  describe('when updating a task', () => {
    it('calls the HttpClient with correct data', async () => {
      const { sut, httpClientSpy } = makeSut();
      const task = mockTaskModel();

      await sut.update(task);

      expect(httpClientSpy.callsCount).toBe(1);
      expect(httpClientSpy.url).toBe(`${HttpEndpoints.UPDATE_TASK}/${task.id}`);
      expect(httpClientSpy.method).toBe(HttpMethods.PUT);
      expect(httpClientSpy.body).toEqual(task);
    });

    describe('and getting an error', () => {
      it('throws an UnknownError', async () => {
        const { sut, httpClientSpy } = makeSut();
        httpClientSpy.request = jest.fn().mockRejectedValue(new Error());

        await expect(sut.update(mockTaskModel())).rejects.toThrowError(
          new UnknownError()
        );
      });
    });
  });
});
