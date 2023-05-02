import { faker } from '@faker-js/faker';
import type { Project } from '@domain/models';

export const mockProjectModel = (): Project => ({
  id: faker.datatype.uuid(),
  title: faker.random.words(5),
  status: 'pending',
  createdAt: faker.date.recent(20),
  updatedAt: faker.date.recent(20),
});
