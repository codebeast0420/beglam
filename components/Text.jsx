import React from 'react';
import { Text as RNText } from 'react-native';

const Text = ({ type = 'normal', className = '', children, ...rest }) => {
  let classNames = 'text-black';

  switch (type) {
    case 'h1':
      classNames += ' font-playfair-bold text-[40px]';
      break;
    case 'normal':
      classNames += ' font-gilroy text-base';
      break;
    default:
      break;
  }

  return (
    <RNText
      className={`${classNames} ${className}`}
      {...rest}
    >
      {children}
    </RNText>
  );
};

export default Text;
