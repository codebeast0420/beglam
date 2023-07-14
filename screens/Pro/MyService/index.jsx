import React from 'react';
import { SafeAreaView, Text, View } from 'react-native';

import Header from '_components/Header';
import Button from '_components/Button';

const MyService = ({ navigation }) => {

  return (
    <SafeAreaView className="flex-1 bg-[#ffffff]">
      <Header title="My service" />

      <View className="px-9 pt-6 pb-10 my-auto">
        <Text className="text-center text-base text-primary-300 font-gilroy">
          To provide services to customeers, we need to know what you ccan do.
        </Text>
        <Text className="text-center text-base text-primary-300 font-gilroy-bold mb-16">Please create your firt section</Text>

        <Button
          title="Create section"
          type="pro-primary"
          textClassName="text-base"
          onPress={() => navigation.navigate('ProMyServiceHome')}
        />
      </View>
    </SafeAreaView>
  );
};

export default MyService;
