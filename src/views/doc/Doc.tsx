import React, { memo } from 'react';
import type { ReactNode } from 'react';
import style from './Doc.module.scss';
import { Siderbar, SiderbarItem } from '../../../packages';
import { Link, Outlet } from 'react-router-dom';

const Doc: React.FC = () => {
  return (
    <div className={style.doc}>
      {/* 侧边栏 */}
      <div className={style.siderbar}>
        <Siderbar>
          <Link to='/doc/button'>
            <SiderbarItem>button</SiderbarItem>
          </Link>
          <Link to='/doc/text'>
            <SiderbarItem>text</SiderbarItem>
          </Link>
        </Siderbar>
      </div>
      {/* 组件展示 */}
      <div className='content'>
        <Outlet />
        {/* <h2>content</h2>
        <Button>aaa</Button> */}
      </div>
    </div>
  );
};

export default memo(Doc);
