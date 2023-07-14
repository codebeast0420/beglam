import React from 'react';
import { Pressable, Text } from 'react-native';

const DefaultButton = ({
  title,
  onPress,
  containerClassName = 'bg-white',
  textClassName = 'text-white',
}) => {
  return (
    <Pressable
      onPress={onPress}
      className={`rounded-2xl p-4 ${containerClassName}`}
    >
      <Text className={`text-center font-gilroy-bold ${textClassName}`}>{title}</Text>
    </Pressable>
  );
};

const ButtonFill = ({ type = 'client-primary', containerClassName = '', textClassName = '', ...rest }) => {
  switch (type) {
    case 'client-primary':
      containerClassName = ' bg-primary-100 ' + containerClassName;
      break;
    case 'client-secondary':
      containerClassName = ' bg-secondary-200 ' + containerClassName;
      break;
    case 'pro-primary':
      containerClassName = ' bg-primary-300 ' + containerClassName;
      break;
    case 'pro-secondary':
      containerClassName = ' bg-secondary-300 ' + containerClassName;
      break;
    case 'black':
      containerClassName = ' bg-black ' + containerClassName;
      break;
    default:
      break;
  }
  textClassName += ' text-white';

  return (
    <DefaultButton containerClassName={containerClassName} textClassName={textClassName} {...rest} />
  );
};

const ButtonOutline = ({ type = 'client-primary', containerClassName = '', textClassName = '', ...rest }) => {
  containerClassName += ' border';
  switch (type) {
    case 'client-primary':
      containerClassName += ' border-primary-100';
      textClassName += ' text-primary-100';
      break;
    case 'client-secondary':
      containerClassName += ' border-secondary-200';
      textClassName += ' text-secondary-200';
      break;
    case 'pro-primary':
      containerClassName += ' border-primary-300';
      textClassName += ' text-primary-300';
      break;
    case 'pro-secondary':
      containerClassName += ' border-secondary-300';
      textClassName += ' text-secondary-300';
      break;
    case 'white':
      containerClassName += ' border-[#ffffff]';
      textClassName += ' text-[#ffffff]';
      break;
    case 'black':
      containerClassName += ' border-black';
      textClassName += ' text-black';
      break;
    default:
      break;
  }

  return (
    <DefaultButton containerClassName={containerClassName} textClassName={textClassName} {...rest} />
  );
};

const Button = ({ variant = 'fill', ...rest }) => {
  if (variant === 'fill') return <ButtonFill {...rest} />;

  if (variant === 'outline') return <ButtonOutline {...rest} />;

  return (
    <DefaultButton
      {...rest}
    />
  );
};

export default Button;