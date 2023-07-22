import React from 'react';
import { Image, View, SafeAreaView } from 'react-native';
import Button from '_components/Button';
import Text from '_components/Text';

const Background = require('_assets/images/auth/index-bg.png');
const Logo = require('_assets/images/logo.png');

const Auth = ({ navigation }) => (

  <SafeAreaView className="flex-1">
    <Image source={Background} className="absolute top-0 bottom-0 left-0 right-0 w-full h-full" />
    <View className="flex-1 px-9 pt-6 pb-16 justify-between">
      <View className="w-[20%] h-[13%] ml-3">
        <Image source={Logo} className="w-full h-full"></Image>
      </View>
      <View>
        <Text type="h1" className="mb-12 w-44">Always Beautiful</Text>
        <Button
          title="Login"
          type="client-secondary"
          containerClassName="mb-4"
          textClassName="text-2xl"
          onPress={() => navigation.navigate('Login')}
        />
        <Button
          title="Create Account"
          textClassName="text-2xl"
          onPress={() => navigation.navigate('SelectAccountType')}
        />
      </View>
    </View>
  </SafeAreaView>
);

export default Auth;
