import { HttpDeleteProject } from '@data/use-cases';
import { makeHttpAxiosClient } from '@main/factories/http';

export const makeHttpDeleteProject = (): HttpDeleteProject => {
  return new HttpDeleteProject(makeHttpAxiosClient());
};
