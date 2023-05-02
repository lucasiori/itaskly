import { UnknownError } from '@domain/errors';
import { mockProjectModel } from '@domain/test';
import { HttpEndpoints } from '../../../enums';
import { HttpMethods } from '../../../protocols';
import { HttpClientSpy } from '../../../test';
import { HttpDeleteProject } from '.';

const makeSut = () => {
  const httpClientSpy = new HttpClientSpy();
  const sut = new HttpDeleteProject(httpClientSpy);

  return { sut, httpClientSpy };
};

describe('Data | Use cases | Project | HttpDeleteProject', () => {
  describe('when deleting a project', () => {
    it('calls the HttpClient with correct data', async () => {
      const { sut, httpClientSpy } = makeSut();
      const project = mockProjectModel();

      await sut.delete(project.id);

      expect(httpClientSpy.callsCount).toBe(1);
      expect(httpClientSpy.url).toBe(
        `${HttpEndpoints.DELETE_PROJECT}/${project.id}`
      );
      expect(httpClientSpy.method).toBe(HttpMethods.DELETE);
    });

    describe('and getting an error', () => {
      it('throws an UnknownError', async () => {
        const { sut, httpClientSpy } = makeSut();
        httpClientSpy.request = jest.fn().mockRejectedValue(new Error());

        await expect(sut.delete(mockProjectModel().id)).rejects.toThrowError(
          new UnknownError()
        );
      });
    });
  });
});
