import React from 'react';
import { createHashRouter } from 'react-router-dom';
import Main from '../layout/main/Main';
import Docs from '../views/doc/Doc';
import Home from '../views/home/Home';

// todo router类型问题
export const router: any = createHashRouter([
  {
    path: '/',
    element: <Main />,
    children: [
      {
        path: 'home',
        element: <Home />,
        children: [],
      },
      {
        path: 'doc',
        element: <Docs />,
        children: [],
      },
    ],
  },
]);

export default router;
