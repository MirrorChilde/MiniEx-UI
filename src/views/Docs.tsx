import React, { memo } from 'react';
import type { ReactNode } from 'react';

interface IProps {
  children?: ReactNode;
}

const Docs: React.FC<IProps> = () => {
  return (
    <div className='Docs'>
      <div>Docs</div>
    </div>
  );
};

export default memo(Docs);
