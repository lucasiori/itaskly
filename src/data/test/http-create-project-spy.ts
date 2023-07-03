import type { ProjectModel } from '@domain/models';
import type { CreateProject } from '@domain/use-cases';

export class HttpCreateProjectSpy implements CreateProject {
  callsCount = 0;
  project: ProjectModel | undefined;

  create = async (project: ProjectModel): Promise<void> => {
    this.callsCount += 1;
    this.project = project;
  };
}
