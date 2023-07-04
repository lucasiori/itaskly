import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from 'react-router-dom';
import { makeDashboard, makeNotFound } from '@main/factories/pages';

const router = createBrowserRouter([
  {
    index: true,
    element: <Navigate to="/dashboard" />,
  },
  {
    path: '/dashboard',
    element: makeDashboard(),
  },
  {
    path: '*',
    element: makeNotFound(),
  },
]);

export const Router = () => {
  return <RouterProvider router={router} />;
};
