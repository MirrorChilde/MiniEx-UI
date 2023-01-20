import React, { memo } from 'react';
import type { ReactNode } from 'react';
import style from './Header.module.scss';
import { Link } from 'react-router-dom';
import { Button } from '../../../packages';

interface IProps {
  children?: ReactNode;
}

const Header: React.FC<IProps> = () => {
  return (
    <div className={style.Header}>
      <div className='left'>
        <div>MiniEx-UI</div>
      </div>
      <div className='right'>
        <Link to='/home'>
          <Button btnType='link'>首页</Button>
        </Link>
        <Link to='/doc'>
          <Button btnType='link'>文档</Button>
        </Link>
      </div>
    </div>
  );
};

export default memo(Header);
