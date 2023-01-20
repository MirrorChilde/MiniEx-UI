import React from 'react';
import classNames from 'classnames';
import { SiderbarProps } from './type';

export const Siderbar: React.FC<SiderbarProps> = (props) => {
  const { width, className, children, ...restProps } = props;

  const classes = classNames('siderbar', className);

  const style = {
    width,
  };

  return (
    <div className={classes} style={style} {...restProps}>
      {children}
    </div>
  );
};

Siderbar.defaultProps = {
  width: '300px',
};
