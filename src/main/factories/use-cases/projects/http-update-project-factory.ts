import { HttpUpdateProject } from '@data/use-cases';
import { makeHttpAxiosClient } from '@main/factories/http';

export const makeHttpUpdateProject = (): HttpUpdateProject => {
  return new HttpUpdateProject(makeHttpAxiosClient());
};
