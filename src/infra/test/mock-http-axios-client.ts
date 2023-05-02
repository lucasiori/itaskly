import { faker } from '@faker-js/faker';
import type { AxiosResponse } from 'axios';

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
