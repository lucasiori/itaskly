import { faker } from '@faker-js/faker';
import { TaskModel } from '../models';

export const mockTaskModel = (): TaskModel => ({
  id: faker.datatype.uuid(),
  title: faker.random.words(5),
  description: faker.random.words(10),
  targetDate: faker.date.soon(20),
  status: 'pending',
  priority: 'low',
  project: faker.datatype.uuid(),
  createdAt: faker.date.recent(20),
  updatedAt: faker.date.recent(20),
});
