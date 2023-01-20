import React, { memo } from 'react';
import type { ReactNode } from 'react';

interface IProps {
  children?: ReactNode;
}

const Home: React.FC<IProps> = () => {
  return (
    <div className='Home'>
      <h2>views/Home</h2>
    </div>
  );
};

export default memo(Home);
