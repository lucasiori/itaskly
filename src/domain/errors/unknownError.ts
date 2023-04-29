export class UnknownError extends Error {
  constructor() {
    super();

    this.message = 'Ocorreu um erro inesperado, por favor tente novamente.';
    this.name = 'UnknownError';
  }
}
