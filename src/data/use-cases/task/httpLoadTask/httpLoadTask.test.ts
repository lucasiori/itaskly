import { faker } from '@faker-js/faker';
import { UnknownError } from '@domain/errors';
import { mockTaskModel } from '@domain/tests/mocks';
import { HttpEndpoints } from '../../../enums';
import { HttpMethods, HttpStatusCode } from '../../../protocols';
import { HttpClientSpy } from '../../../tests';
import { HttpLoadTask } from './httpLoadTask';

const makeSut = () => {
  const httpClientSpy = new HttpClientSpy();
  const sut = new HttpLoadTask(httpClientSpy);

  return { sut, httpClientSpy };
};

describe('Use cases | Task | HttpLoadTask', () => {
  describe('when loading all tasks', () => {
    it('calls the HttpClient with correct data', async () => {
      const { sut, httpClientSpy } = makeSut();

      await sut.loadAll();

      expect(httpClientSpy.callsCount).toBe(1);
      expect(httpClientSpy.url).toBe(HttpEndpoints.LOAD_TASK);
      expect(httpClientSpy.method).toBe(HttpMethods.GET);
    });

    it('returns the data got from HttpClient', async () => {
      const { sut, httpClientSpy } = makeSut();
      const tasks = [mockTaskModel(), mockTaskModel(), mockTaskModel()];
      httpClientSpy.response = {
        statusCode: HttpStatusCode.OK,
        data: tasks,
      };

      const response = await sut.loadAll();

      expect(response).toEqual(tasks);
    });

    describe('and getting an error', () => {
      it('returns an UnknownError', async () => {
        const { sut, httpClientSpy } = makeSut();
        httpClientSpy.request = jest.fn().mockRejectedValue(new Error());

        await expect(sut.loadAll()).rejects.toThrowError(new UnknownError());
      });
    });
  });

  describe('when loading a task by id', () => {
    it('calls the HttpClient with correct data', async () => {
      const { sut, httpClientSpy } = makeSut();
      const { id } = mockTaskModel();

      await sut.loadById(id);

      expect(httpClientSpy.callsCount).toBe(1);
      expect(httpClientSpy.url).toBe(HttpEndpoints.LOAD_TASK);
      expect(httpClientSpy.method).toBe(HttpMethods.GET);
      expect(httpClientSpy.queryParams).toEqual({ id });
    });

    it('returns the data got from HttpClient', async () => {
      const { sut, httpClientSpy } = makeSut();
      const task = mockTaskModel();
      httpClientSpy.response = {
        statusCode: HttpStatusCode.OK,
        data: task,
      };

      const response = await sut.loadById(task.id);

      expect(response).toEqual(task);
    });

    describe('and getting an error', () => {
      it('returns an UnknownError', async () => {
        const { sut, httpClientSpy } = makeSut();
        const { id } = mockTaskModel();
        httpClientSpy.request = jest.fn().mockRejectedValue(new Error());

        await expect(sut.loadById(id)).rejects.toThrowError(new UnknownError());
      });
    });
  });

  describe('when loading tasks by project', () => {
    it('calls the HttpClient with correct data', async () => {
      const { sut, httpClientSpy } = makeSut();
      const projectId = faker.datatype.uuid();

      await sut.loadAllByProject(projectId);

      expect(httpClientSpy.callsCount).toBe(1);
      expect(httpClientSpy.url).toBe(HttpEndpoints.LOAD_TASK);
      expect(httpClientSpy.method).toBe(HttpMethods.GET);
      expect(httpClientSpy.queryParams).toEqual({ project_id: projectId });
    });

    it('returns the data got from HttpClient', async () => {
      const { sut, httpClientSpy } = makeSut();
      const tasks = [mockTaskModel(), mockTaskModel(), mockTaskModel()];
      const projectId = faker.datatype.uuid();
      httpClientSpy.response = {
        statusCode: HttpStatusCode.OK,
        data: tasks,
      };

      const response = await sut.loadAllByProject(projectId);

      expect(response).toEqual(tasks);
    });

    describe('and getting an error', () => {
      it('returns an UnknownError', async () => {
        const { sut, httpClientSpy } = makeSut();
        const projectId = faker.datatype.uuid();
        httpClientSpy.request = jest.fn().mockRejectedValue(new Error());

        await expect(sut.loadAllByProject(projectId)).rejects.toThrowError(
          new UnknownError()
        );
      });
    });
  });
});
