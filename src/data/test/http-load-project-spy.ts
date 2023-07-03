import { mockProjectModel } from '@domain/test';
import type { ProjectModel } from '@domain/models';
import type { LoadProject } from '@domain/use-cases';

export class HttpLoadProjectSpy implements LoadProject {
  callsCount = 0;
  projects = [
    mockProjectModel('1'),
    mockProjectModel('2'),
    mockProjectModel('3'),
  ];

  loadAll = async (): Promise<ProjectModel[]> => {
    this.callsCount += 1;

    return this.projects;
  };
}
