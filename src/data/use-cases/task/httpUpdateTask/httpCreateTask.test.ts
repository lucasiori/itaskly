import { UnknownError } from '@domain/errors';
import { mockTaskModel } from '@domain/tests/mocks';
import { HttpEndpointsEnum } from '../../../enums';
import { HttpMethodEnum } from '../../../protocols';
import { HttpClientSpy } from '../../../tests';
import { HttpUpdateTask } from './httpUpdateTask';

const makeSut = () => {
  const httpClientSpy = new HttpClientSpy();
  const sut = new HttpUpdateTask(httpClientSpy);

  return { sut, httpClientSpy };
};

describe('Use cases | Task | HttpUpdateTask', () => {
  describe('when creating a task', () => {
    it('calls the HttpClient with correct data', async () => {
      const { sut, httpClientSpy } = makeSut();
      const task = mockTaskModel();

      await sut.update(task);

      expect(httpClientSpy.callsCount).toBe(1);
      expect(httpClientSpy.url).toBe(
        `${HttpEndpointsEnum.UPDATE_TASK}/${task.id}`
      );
      expect(httpClientSpy.method).toBe(HttpMethodEnum.PUT);
      expect(httpClientSpy.body).toEqual(task);
    });

    describe('and getting an error', () => {
      it('returns an UnknownError', async () => {
        const { sut, httpClientSpy } = makeSut();
        httpClientSpy.request = jest.fn().mockRejectedValue(new Error());

        await expect(sut.update(mockTaskModel())).rejects.toThrowError(
          new UnknownError()
        );
      });
    });
  });
});
