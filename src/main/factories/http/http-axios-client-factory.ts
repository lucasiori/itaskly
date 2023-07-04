import { HttpAxiosClient } from '@infra/protocols';

export const makeHttpAxiosClient = (): HttpAxiosClient => {
  return new HttpAxiosClient();
};
