import React from 'react';
import { Text, View } from 'react-native';

import CheckBox from '_components/CheckBox';

const AdditionalService = () => {

  return (
    <>
      <Text className="text-[32px] text-secondary-200 font-gilroy mb-9">Additional service</Text>
      <View className="flex-row items-center mb-4">
        <CheckBox />
        <Text className="ml-5 text-lg text-primary-100 font-gilroy">Lorem ipsum dolor sit amet</Text>
      </View>
      <View className="flex-row items-center mb-4">
        <CheckBox />
        <Text className="ml-5 text-lg text-primary-100 font-gilroy">Lorem ipsum dolor sit amet</Text>
      </View>
      <View className="flex-row items-center mb-12">
        <CheckBox />
        <Text className="ml-5 text-lg text-primary-100 font-gilroy">Lorem ipsum dolor sit amet</Text>
      </View>
    </>
  );
};

export default AdditionalService;
