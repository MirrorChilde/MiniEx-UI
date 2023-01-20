import React, { memo } from 'react';
import type { ReactNode } from 'react';
import style from './Doc.module.scss';
import { Button } from '../../../packages';

interface IProps {
  children?: ReactNode;
}

const Doc: React.FC<IProps> = () => {
  return (
    <div className={style.doc}>
      <div className={style.siderbar}>siderbar</div>
      <div className='content'>
        <h2>content</h2>
        <Button>aaa</Button>
      </div>
    </div>
  );
};

export default memo(Doc);
