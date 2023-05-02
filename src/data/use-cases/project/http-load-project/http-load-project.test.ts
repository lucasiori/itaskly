import { UnknownError } from '@domain/errors';
import { mockProjectModel } from '@domain/test';
import { HttpEndpoints } from '../../../enums';
import { HttpMethods, HttpStatusCode } from '../../../protocols';
import { HttpClientSpy } from '../../../test';
import { HttpLoadProject } from '.';

const makeSut = () => {
  const httpClientSpy = new HttpClientSpy();
  const sut = new HttpLoadProject(httpClientSpy);

  return { sut, httpClientSpy };
};

describe('Data | Use cases | Project | HttpLoadProject', () => {
  describe('when loading all projects', () => {
    it('calls the HttpClient with correct data', async () => {
      const { sut, httpClientSpy } = makeSut();

      await sut.loadAll();

      expect(httpClientSpy.callsCount).toBe(1);
      expect(httpClientSpy.url).toBe(HttpEndpoints.LOAD_PROJECT);
      expect(httpClientSpy.method).toBe(HttpMethods.GET);
    });

    it('returns the data got from HttpClient', async () => {
      const { sut, httpClientSpy } = makeSut();
      const projects = [
        mockProjectModel(),
        mockProjectModel(),
        mockProjectModel(),
      ];
      httpClientSpy.response = {
        statusCode: HttpStatusCode.OK,
        data: projects,
      };

      const response = await sut.loadAll();

      expect(response).toEqual(projects);
    });

    describe('and getting an error', () => {
      it('throws an UnknownError', async () => {
        const { sut, httpClientSpy } = makeSut();
        httpClientSpy.request = jest.fn().mockRejectedValue(new Error());

        await expect(sut.loadAll()).rejects.toThrowError(new UnknownError());
      });
    });
  });
});
