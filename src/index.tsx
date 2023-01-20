// export * from './components/text';

import React from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import router from './router';

const root = createRoot(document.querySelector('#app'));

root.render(
  <div>
    <RouterProvider router={router} />
  </div>
);
