import { mockProjectModel } from '@domain/test';
import type { ProjectModel } from '@domain/models';
import type { LoadProject } from '@domain/use-cases';

export class HttpLoadProjectSpy implements LoadProject {
  callsCount = 0;

  loadAll = async (): Promise<ProjectModel[]> => {
    this.callsCount += 1;

    const response = [
      mockProjectModel(),
      mockProjectModel(),
      mockProjectModel(),
    ];

    return response;
  };
}
