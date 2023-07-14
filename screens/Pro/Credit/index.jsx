import React from 'react';
import { Image, Pressable, SafeAreaView, ScrollView, Text, View } from 'react-native';

import Header from '_components/Header';

const Banner = require('_assets/images/credit.png');

const Credit = ({ navigation }) => {

  return (
    <SafeAreaView className="flex-1 bg-[#ffffff]">
      <ScrollView>
        <Header title="Credit" />
        <View className="mt-6 sm:mt-12 mb-12 sm:mb-16">
          <Image source={Banner} className="w-full" resizeMode="contain" />
        </View>

        <Text className="text-[32px] text-secondary-300 font-gilroy-bold text-center">
          Don't have your own equipment yet?
        </Text>
        <Text className="text-base text-primary-300 font-gilroy text-center tracking-widest mt-3 px-12 sm:px-14">
          Take advantage of the credit line Be Glam, up to R$5,000.
        </Text>
        <Pressable
          className="rounded-2xl bg-primary-400 py-4 mx-9 mt-14 mb-10 sm:mt-24"
          onPress={() => navigation.navigate('ProCreditSimulator')}
        >
          <Text className="text-base text-[#ffffff] font-gilroy-bold text-center">Apply for credit</Text>
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Credit;
