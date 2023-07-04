import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from 'react-router-dom';
import { Dashboard, NotFound } from '@presentation/pages';

const router = createBrowserRouter([
  {
    index: true,
    element: <Navigate to="/dashboard" />,
  },
  {
    path: '/dashboard',
    element: <Dashboard />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
]);

export const Router = () => {
  return <RouterProvider router={router} />;
};
