import React from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import router from './router';

import '../packages/style/index.scss';

const root = createRoot(document.querySelector('#app'));

root.render(
  <div>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </div>
);
