import { UnknownError } from '@domain/errors';
import { mockTaskModel } from '@domain/tests/mocks';
import { HttpEndpoints } from '../../../enums';
import { HttpMethods } from '../../../protocols';
import { HttpClientSpy } from '../../../tests';
import { HttpCreateTask } from './httpCreateTask';

const makeSut = () => {
  const httpClientSpy = new HttpClientSpy();
  const sut = new HttpCreateTask(httpClientSpy);

  return { sut, httpClientSpy };
};

describe('Use cases | Task | HttpCreateTask', () => {
  describe('when creating a task', () => {
    it('calls the HttpClient with correct data', async () => {
      const { sut, httpClientSpy } = makeSut();
      const task = mockTaskModel();

      await sut.create(task);

      expect(httpClientSpy.callsCount).toBe(1);
      expect(httpClientSpy.url).toBe(HttpEndpoints.CREATE_TASK);
      expect(httpClientSpy.method).toBe(HttpMethods.POST);
      expect(httpClientSpy.body).toEqual(task);
    });

    describe('and getting an error', () => {
      it('returns an UnknownError', async () => {
        const { sut, httpClientSpy } = makeSut();
        httpClientSpy.request = jest.fn().mockRejectedValue(new Error());

        await expect(sut.create(mockTaskModel())).rejects.toThrowError(
          new UnknownError()
        );
      });
    });
  });
});
