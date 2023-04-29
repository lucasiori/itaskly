import { faker } from '@faker-js/faker';
import { HttpMethods, HttpRequestData } from '../protocols';

export const mockHttpClientRequestData = (): HttpRequestData => ({
  method: faker.helpers.arrayElement(Object.values(HttpMethods)) as HttpMethods,
  url: faker.internet.url(),
  queryParams: {
    [faker.random.word()]: faker.random.word(),
  },
  body: {
    [faker.random.word()]: faker.random.word(),
    [faker.random.word()]: faker.datatype.number(),
  },
});
