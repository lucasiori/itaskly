import { HttpLoadProject } from '@data/use-cases';
import { makeHttpAxiosClient } from '@main/factories/http';

export const makeHttpLoadProject = (): HttpLoadProject => {
  return new HttpLoadProject(makeHttpAxiosClient());
};
