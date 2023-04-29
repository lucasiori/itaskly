import { AxiosResponse } from 'axios';
import { faker } from '@faker-js/faker';

export const mockHttpAxiosClientResponse = (): Pick<
  AxiosResponse,
  'status' | 'data'
> => ({
  status: faker.datatype.number(),
  data: {
    [faker.random.word()]: faker.random.word(),
    [faker.random.word()]: faker.datatype.number(),
  },
});
