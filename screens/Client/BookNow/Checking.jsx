import { useFocusEffect } from '@react-navigation/native';
import React, { useCallback, useState } from 'react';
import { Image, Text, View } from 'react-native';

const Email = require('_assets/images/auth/email.gif');

const Checking = ({ onBooked }) => {
  const [checking, setChecking] = useState(true);

  useFocusEffect(useCallback(() => {
    setTimeout(() => {
      setChecking(false);
    }, 1000);

    setTimeout(() => {
      onBooked();
    }, 2000);
  }, []));

  return (
    <>
      <Text className="text-[32px] text-secondary-200 font-gilroy text-center mb-8 mt-24">
        {checking ? 'Checking...' : 'Successfully scheduled!'}
      </Text>
      <View className="items-center">
        <Image source={Email} className="w-56 h-56" />
      </View>
    </>
  );
};

export default Checking;
