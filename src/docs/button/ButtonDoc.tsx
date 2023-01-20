import React, { memo } from 'react';
import ButtonDemo from './demo/ButtonDemo';

// import SyntaxHighlighter from 'react-syntax-highlighter';
// import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';

const ButtonDoc: React.FC = () => {
  return (
    <div className='ButtonDoc'>
      <h3>Button</h3>
      <ButtonDemo />
      {/* <SyntaxHighlighter language='javascript' style={dark}>
      </SyntaxHighlighter> */}
    </div>
  );
};

export default memo(ButtonDoc);
