import { Dashboard } from '@presentation/pages';
import {
  makeHttpCreateProject,
  makeHttpDeleteProject,
  makeHttpLoadProject,
  makeHttpUpdateProject,
} from '../use-cases';

export const makeDashboard = () => {
  return (
    <Dashboard
      loadProject={makeHttpLoadProject()}
      createProject={makeHttpCreateProject()}
      updateProject={makeHttpUpdateProject()}
      deleteProject={makeHttpDeleteProject()}
    />
  );
};
