import React from 'react';
import { Pressable, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import { useColorScheme } from 'nativewind';

import { ArrowLeftIcon } from '_components/icons';

const Header = ({ title = '', goBack = null, children, ...rest }) => {
  const navigation = useNavigation();
  const { colorScheme } = useColorScheme();

  const handleGoBack = () => {
    if (goBack) {
      return goBack();
    }

    navigation.goBack();
  };

  return (
    <View className="flex-row items-center bg-primary-100 dark:bg-primary-300 pb-10 pt-16 px-9 rounded-b-[40px]" {...rest}>
      <Pressable onPress={handleGoBack}>
        <ArrowLeftIcon color={colorScheme === 'light' ? '#EEA4A7' : '#A6EDBC'} />
      </Pressable>
      {title &&
        <Text className="flex-1 text-center text-2xl text-white font-gilroy-bold mr-6">{title}</Text>
      }
      {children}
    </View>
  );
};

export default Header;
