import type { DeleteProject } from '@domain/use-cases';

export class HttpDeleteProjectSpy implements DeleteProject {
  callsCount = 0;
  projectId: string | undefined;

  delete = async (id: string): Promise<void> => {
    this.callsCount += 1;
    this.projectId = id;
  };
}
