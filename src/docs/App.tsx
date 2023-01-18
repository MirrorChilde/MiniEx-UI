import React, { memo } from 'react';
import type { ReactNode } from 'react';

interface IProps {
  children?: ReactNode;
}

const App: React.FC<IProps> = () => {
  return (
    <div className='App'>
      <div>App</div>
    </div>
  );
};

export default memo(App);
