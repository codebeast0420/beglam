import React, { useState } from 'react';
import { Image, SafeAreaView, ScrollView, Pressable, Text, View } from 'react-native';
import Modal from 'react-native-modal';
import { useColorScheme } from 'nativewind';

import Header from '_components/Header';
import Button from '_components/Button';
import { PasswordInput } from '_components/Input';

import { LockIcon, WarningIcon, TimesIcon } from '_components/icons';

const Email = require('_assets/images/auth/email.gif');

const Security = () => {
  const { colorScheme } = useColorScheme();
  const [openModal, setOpenModal] = useState(false);
  const [data, setData] = useState({
    password: '',
    confirm_password: '',
  });
  const [error, setError] = useState(null);

  const handleInput = name => value => {
    setData(prev => ({ ...prev, [name]: value }));
  };

  const save = () => {
    if (data.password === '' || data.confirm_password === '') return;

    if (data.password !== data.confirm_password) {
      return setError(true);
    };

    setError(null);
    setOpenModal(true);
  };

  return (
    <SafeAreaView className="flex-1">
      <Header title="Security" />

      <ScrollView>
        <View className="px-9 pt-12 pb-12">

          {error &&
            <View className="flex-row items-center mb-2">
              <WarningIcon />
              <Text className="ml-2 text-[12px] text-secondary-100 font-gilroy">
                Passwords don't match
              </Text>
            </View>
          }
          <PasswordInput
            PrependIcon={LockIcon}
            placeholder="Password"
            className={`mb-2 bg-[#ffffff] text-primary-200 dark:text-primary-300 ${error ? '' : 'border-transparent'}`}
            value={data.password}
            onChangeText={handleInput('password')}
            error={error}
            isPro={colorScheme === 'dark'}
            placeholderTextColor={colorScheme === 'dark' ? '#4E819B' : '#796BA2'}
          />
          <PasswordInput
            PrependIcon={LockIcon}
            placeholder="Repeat Password"
            className={`bg-[#ffffff] text-primary-200 dark:text-primary-300 ${error ? '' : 'border-transparent'}`}
            value={data.confirm_password}
            onChangeText={handleInput('confirm_password')}
            error={error}
            isPro={colorScheme === 'dark'}
            placeholderTextColor={colorScheme === 'dark' ? '#4E819B' : '#796BA2'}
          />
          <Button
            title="Save"
            type={colorScheme === 'light' ? 'client-secondary' : (data.password === '' || data.confirm_password === '' ? '' : 'pro-secondary')}
            textClassName="text-2xl"
            containerClassName={`mt-12 ${(data.password === '' || data.confirm_password === '') ? (colorScheme === 'light' ? ' opacity-70' : 'bg-[#D1D1D1]') : ''}`}
            onPress={save}
          />
          <View className="mt-16 bg-[#ffffff] rounded-2xl py-5 px-7">
            <Text className="text-secondary-200 dark:text-secondary-300 text-2xl font-gilroy-bold mb-3">Last Log In</Text>
            <Text className="text-base text-primary-200 dark:text-primary-300 font-gilroy-bold mb-2">IphoneXS max - Lisbon, Portugal</Text>
            <Text className="text-base text-[#C4C4C4] font-gilroy">IOS app - 1 day ago</Text>
          </View>
        </View>
      </ScrollView>
      <Modal isVisible={openModal}>
        <View className="p-8 bg-[#ffffff] rounded-3xl">
          <View className="items-end">
            <Pressable onPress={() => setOpenModal(false)}>
              <TimesIcon />
            </Pressable>
          </View>
          <View className="items-center">
            <Image source={Email} className="w-56 h-56" />
          </View>
          <Text className="text-center text-2xl font-gilroy mt-3">Password changed successfully</Text>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

export default Security;
