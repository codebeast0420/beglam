import React, { useState } from 'react';
import { Pressable, TextInput, View } from 'react-native';
import { EyeIcon, EyeClosedIcon, SearchIcon } from '_components/icons';

const Input = ({ className = '', PrependIcon = null, append = null, isPro, error, ...rest }) => {
  let inputClassNames = 'border border-primary-100 rounded-2xl py-4 px-5 text-primary-100 font-gilroy';

  if (PrependIcon) {
    inputClassNames += ' pl-16';
  }

  if (append) {
    inputClassNames += ' pr-12';
  }

  if (error) {
    inputClassNames += ' text-secondary-200 border-secondary-200';
  }

  return (
    <View className="relative">
      {PrependIcon &&
        <View className="absolute left-6 top-4 z-10">
          <PrependIcon color={error ? '#EEA4A7' : (isPro ? '#4E819B' : '#4D509E')} />
        </View>
      }
      <TextInput
        className={`${inputClassNames} ${className}`}
        {...rest}
      />
      {append &&
        <View className="absolute right-5 top-4">
          {append}
        </View>
      }
    </View>
  );
};

export const PasswordInput = ({ error, isPro, ...rest }) => {
  const [showPassword, setShowPassword] = useState(false);

  const appendIcon = (
    <Pressable onPress={() => setShowPassword(prev => !prev)}>
      {showPassword ? <EyeIcon color={error ? '#EEA4A7' : (isPro ? '#4E819B' : '#4D509E')} /> : <EyeClosedIcon color={error ? '#EEA4A7' : (isPro ? '#4E819B' : '#4D509E')} />}
    </Pressable>
  );

  return (
    <Input
      append={appendIcon}
      secureTextEntry={!showPassword}
      error={error}
      isPro={isPro}
      {...rest}
    />
  );
};

export const SearchInput = ({ containerClassName, iconColor, ...rest }) => (
  <View className={`rounded-3xl shadow-sm shadow-secondary-200 pb-1 ${containerClassName}`}>
    <View className="flex-row rounded-3xl bg-[#ffffff] py-3 px-6">
      <TextInput {...rest} className="flex-1 mr-2 text-base font-gilroy text-black" />
      <SearchIcon color={iconColor} />
    </View>
  </View>
);

export default Input;
