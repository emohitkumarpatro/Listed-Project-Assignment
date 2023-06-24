import React from 'react';

const Text = ({ children, ...otherprops }) => {

  return <span {...otherprops}>{children}</span>;
};

export default Text;