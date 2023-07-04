import { HttpCreateProject } from '@data/use-cases';
import { makeHttpAxiosClient } from '@main/factories/http';

export const makeHttpCreateProject = (): HttpCreateProject => {
  return new HttpCreateProject(makeHttpAxiosClient());
};
