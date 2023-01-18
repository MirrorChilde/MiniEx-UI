import React, { memo } from 'react';
import type { ReactNode } from 'react';

interface IProps {
  children?: ReactNode;
}

const Header: React.FC<IProps> = () => {
  return (
    <div className='Header'>
      <div>Header layout</div>
    </div>
  );
};

export default memo(Header);
