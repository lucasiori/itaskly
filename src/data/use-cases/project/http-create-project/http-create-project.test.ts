import { UnknownError } from '@domain/errors';
import { mockProjectModel } from '@domain/test';
import { HttpEndpoints } from '../../../enums';
import { HttpMethods } from '../../../protocols';
import { HttpClientSpy } from '../../../test';
import { HttpCreateProject } from '.';

const makeSut = () => {
  const httpClientSpy = new HttpClientSpy();
  const sut = new HttpCreateProject(httpClientSpy);

  return { sut, httpClientSpy };
};

describe('Data | Use cases | Project | HttpCreateProject', () => {
  describe('when creating a project', () => {
    it('calls the HttpClient with correct data', async () => {
      const { sut, httpClientSpy } = makeSut();
      const project = mockProjectModel();

      await sut.create(project);

      expect(httpClientSpy.callsCount).toBe(1);
      expect(httpClientSpy.url).toBe(HttpEndpoints.PROJECTS);
      expect(httpClientSpy.method).toBe(HttpMethods.POST);
      expect(httpClientSpy.body).toEqual(project);
    });

    describe('and getting an error', () => {
      it('throws an UnknownError', async () => {
        const { sut, httpClientSpy } = makeSut();
        httpClientSpy.request = jest.fn().mockRejectedValue(new Error());

        await expect(sut.create(mockProjectModel())).rejects.toThrowError(
          new UnknownError()
        );
      });
    });
  });
});
