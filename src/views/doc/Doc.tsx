import React, { memo } from 'react';
import type { ReactNode } from 'react';
import style from './Doc.module.scss';
import { Button } from '../../../packages';

const Doc: React.FC = () => {
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
