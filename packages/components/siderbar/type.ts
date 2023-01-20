import React, { ReactNode } from 'react';

type SiderbarBaseProps = {
  width?: string;
  className?: string;
  children?: ReactNode;
};

type SiderbarItemPropsProps = {
  className?: string;
  children?: ReactNode;
};

export type SiderbarProps = SiderbarBaseProps & React.HTMLAttributes<HTMLElement>;

export type SiderbarItemProps = SiderbarItemPropsProps & React.HTMLAttributes<HTMLElement>;
