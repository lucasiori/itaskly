import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Dashboard, NotFound } from '@presentation/pages';

const router = createBrowserRouter([
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
