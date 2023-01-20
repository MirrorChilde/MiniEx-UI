import React from 'react';
import classNames from 'classnames';
import { SiderbarItemProps } from './type';

export const SiderbarItem: React.FC<SiderbarItemProps> = (props) => {
  const { className, children, ...restProps } = props;

  const classes = classNames('siderbar-item', className);

  return (
    <div className={classes} {...restProps}>
      {children}
    </div>
  );
};

SiderbarItem.defaultProps = {};
