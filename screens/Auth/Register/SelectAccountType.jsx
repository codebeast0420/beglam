import React from 'react';
import { Image, View, SafeAreaView, ScrollView } from 'react-native';
import Button from '_components/Button';
import Text from '_components/Text';

const Background = require('_assets/images/auth/account-type-bg.png');
const Logo = require('_assets/images/logo.png');

const SelectAccountType = ({ navigation }) => (

  <SafeAreaView className="flex-1">
    <Image source={Background} className="absolute top-0 bottom-0 left-0 right-0" />
    <ScrollView>
      <View className="flex-1 px-9 pt-44 pb-[120px]">
        <View className="flex items-center">
          <Image source={Logo} className="w-[170px] h-40 mb-32" />
          <Text type="h1" className="mb-[55px]">Who are you?</Text>
        </View>
        <Button
          title="I'm Professional"
          containerClassName="mb-6"
          textClassName="text-2xl"
          onPress={() => navigation.navigate('RegisterPro')}
        />
        <Button
          title="I'm Client"
          textClassName="text-2xl"
          type="client-secondary"
          onPress={() => navigation.navigate('Register')}
        />
      </View>
    </ScrollView>
  </SafeAreaView>
);

export default SelectAccountType;
