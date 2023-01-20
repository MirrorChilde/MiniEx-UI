import React, { memo } from 'react';
import type { ReactNode } from 'react';
import style from './Header.module.scss';
import { Link } from 'react-router-dom';

interface IProps {
  children?: ReactNode;
}

const Header: React.FC<IProps> = () => {
  return (
    <div className={style.Header}>
      <div className='left'>
        <div>layout/header</div>
      </div>
      <div className='right'>
        <Link to='/home'>首页</Link>
        <Link to='/doc'>文档</Link>
      </div>
    </div>
  );
};

export default memo(Header);
