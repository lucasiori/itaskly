import { UnknownError } from '@domain/errors';
import { mockProjectModel } from '@domain/test';
import { HttpEndpoints } from '../../../enums';
import { HttpMethods } from '../../../protocols';
import { HttpClientSpy } from '../../../test';
import { HttpUpdateProject } from '.';

const makeSut = () => {
  const httpClientSpy = new HttpClientSpy();
  const sut = new HttpUpdateProject(httpClientSpy);

  return { sut, httpClientSpy };
};

describe('Data | Use cases | Project | HttpUpdateProject', () => {
  describe('when updating a project', () => {
    it('calls the HttpClient with correct data', async () => {
      const { sut, httpClientSpy } = makeSut();
      const project = mockProjectModel();

      await sut.update(project);

      expect(httpClientSpy.callsCount).toBe(1);
      expect(httpClientSpy.url).toBe(`${HttpEndpoints.PROJECTS}/${project.id}`);
      expect(httpClientSpy.method).toBe(HttpMethods.PUT);
      expect(httpClientSpy.body).toEqual(project);
    });

    describe('and getting an error', () => {
      it('throws an UnknownError', async () => {
        const { sut, httpClientSpy } = makeSut();
        httpClientSpy.request = jest.fn().mockRejectedValue(new Error());

        await expect(sut.update(mockProjectModel())).rejects.toThrowError(
          new UnknownError()
        );
      });
    });
  });
});
