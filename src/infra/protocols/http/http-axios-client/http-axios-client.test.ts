import axios from 'axios';
import { UnknownError } from '@domain/errors';
import { mockHttpClientRequestData } from '@data/test';
import { mockHttpAxiosClientResponse } from '../../../test';
import { HttpAxiosClient } from '.';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

const makeSut = () => {
  const sut = new HttpAxiosClient();

  return { sut };
};

const requestResponse = mockHttpAxiosClientResponse();

describe('Infra | Protocols | Http | HttpAxiosClient', () => {
  beforeEach(() => {
    mockedAxios.request.mockResolvedValue(requestResponse);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('when requesting', () => {
    it('calls the axios request with correct data', async () => {
      const { sut } = makeSut();
      const requestData = mockHttpClientRequestData();

      await sut.request(requestData);

      expect(mockedAxios.request).toHaveBeenCalledWith({
        method: requestData.method,
        url: requestData.url,
        params: requestData.queryParams,
        data: requestData.body,
      });
    });

    it('returns the correct response got from axios request', async () => {
      const { sut } = makeSut();

      const response = await sut.request(mockHttpClientRequestData());

      expect(response).toEqual({
        statusCode: requestResponse.status,
        data: requestResponse.data,
      });
    });

    describe('and getting an error', () => {
      beforeEach(() => {
        mockedAxios.request.mockRejectedValue(requestResponse);
      });

      it('throws an UnknownError', async () => {
        const { sut } = makeSut();

        await expect(
          sut.request(mockHttpClientRequestData())
        ).rejects.toThrowError(new UnknownError());
      });
    });
  });
});
