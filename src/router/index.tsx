import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Docs from 'src/views/Docs';
import Home from 'src/views/Home';

export const router: any = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/doc',
    element: <Docs />,
  },
]);

export default router;
