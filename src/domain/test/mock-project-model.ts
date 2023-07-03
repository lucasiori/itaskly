import { faker } from '@faker-js/faker';
import type { ProjectModel } from '@domain/models';

export const mockProjectModel = (id = faker.datatype.uuid()): ProjectModel => ({
  id,
  title: faker.random.words(5),
  status: 'pending',
  createdAt: faker.date.recent(20),
  updatedAt: faker.date.recent(20),
});
