import { Button } from '../../../../packages';
import React from 'react';

export default function ButtonDemo() {
  return (
    <div>
      <Button>default</Button>
      <Button btnType='primary'>primary</Button>
      <Button btnType='link'>link</Button>
    </div>
  );
}
