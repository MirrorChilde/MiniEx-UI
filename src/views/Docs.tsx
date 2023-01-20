import React, { memo } from 'react';
import type { ReactNode } from 'react';

interface IProps {
  children?: ReactNode;
}

const Docs: React.FC<IProps> = () => {
  return (
    <div className='Docs'>
      <h2>views/Doc</h2>
    </div>
  );
};

export default memo(Docs);
