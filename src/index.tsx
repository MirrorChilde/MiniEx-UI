// export * from './components/text';

import React from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import router from './router';
import Header from './layout/header/Header';

const root = createRoot(document.querySelector('#app'));

root.render(
  <div>
    <Header></Header>
    <RouterProvider router={router} />
  </div>
);
