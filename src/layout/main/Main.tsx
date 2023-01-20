import React, { memo } from 'react';
import type { ReactNode } from 'react';
import Header from '../header/Header';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';

const Main: React.FC = () => {
  const location = useLocation();
  const nav = useNavigate();

  React.useEffect(() => {
    if (location.pathname == '/') {
      nav('/home');
    }
  }, [location]);

  return (
    <div className='Main'>
      <Header />
      <Outlet />
    </div>
  );
};

export default memo(Main);
