import React, { memo } from 'react';
import type { ReactNode } from 'react';

interface IProps {
  children?: ReactNode;
}

const Home: React.FC<IProps> = () => {
  return (
    <div className='Home'>
      <div>Home</div>
    </div>
  );
};

export default memo(Home);
