import React from 'react';

const Box = ({ children , ...otherprops}) => {
  

  return <div {...otherprops}>{children}</div>;
};

export default Box;