import type { ProjectModel } from '@domain/models';
import type { UpdateProject } from '@domain/use-cases';

export class HttpUpdateProjectSpy implements UpdateProject {
  callsCount = 0;
  project: ProjectModel | undefined;

  update = async (project: ProjectModel): Promise<void> => {
    this.callsCount += 1;
    this.project = project;
  };
}
