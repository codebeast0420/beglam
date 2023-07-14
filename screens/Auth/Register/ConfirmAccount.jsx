import React, { useState } from 'react';
import { ImageBackground, Image, View, Pressable, SafeAreaView, ScrollView } from 'react-native';
import {
  CodeField,
  Cursor,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import Modal from 'react-native-modal';

import Text from '_components/Text';
import Button from '_components/Button';
import { TimesIcon, WarningIcon } from '_components/icons';

const Background = require('_assets/images/auth/confirm-bg.png');
const Logo = require('_assets/images/logo.png');
const Email = require('_assets/images/auth/email.gif');

const ConfirmAccount = ({ navigation, route }) => {
  const [openModal, setOpenModal] = useState(false);
  const [code, setCode] = useState('');
  const [error, setError] = useState(null);
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value: code,
    setValue: setCode,
  });

  const renderCell = ({ index, symbol, isFocused }) => {
    let borderColor = symbol ? 'border-secondary-200' : 'border-primary-100';
    return (
      <Text
        key={index}
        onLayout={getCellOnLayoutHandler(index)}
        className={`w-16 h-14 mr-2 rounded-2xl text-3xl text-center text-primary-200 leading-[56px] border ${borderColor}`}
      >
        {symbol || (isFocused ? <Cursor /> : '-')}
      </Text>
    );
  };

  const confirm = () => {
    if (!code) return setError(true);
    if (route.params?.checkPhone) {
      navigation.goBack();
      route.params?.checkPhone();
    } else {
      navigation.navigate('ClientHome');
    }
  };

  return (
    <SafeAreaView className="flex-1">
      <ImageBackground source={Background} resizeMode="cover" className="flex-1">
        <ScrollView>
          <View className="px-9 pt-28 pb-[120px]">
            <View className="flex items-center">
              <Image source={Logo} className="w-[199px] h-44 mb-8" />
              <Text type="h1" className="mb-7">Confirm your account</Text>
              <Text className="mb-11">Enter the code we sent to the registered phone.</Text>
            </View>

            {error &&
              <View className="flex-row items-center mb-2">
                <WarningIcon />
                <Text className="ml-2 text-[12px] text-secondary-100">Code entered is incorrect.</Text>
              </View>
            }
            <View className="pl-6 pr-10">
              <CodeField
                value={code}
                {...props}
                onChangeText={setCode}
                cellCount={4}
                keyboardType="number-pad"
                textContentType="oneTimeCode"
                renderCell={renderCell}
              />
            </View>
            <Button
              title="Continue"
              type="client-secondary"
              textClassName="text-2xl"
              containerClassName="mt-7 mb-9"
              onPress={confirm}
            />
            <Pressable onPress={() => setOpenModal(true)}>
              <Text className="text-center font-extrabold text-primary-100">Send a email</Text>
            </Pressable>
          </View>
        </ScrollView>
      </ImageBackground>
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
          <Text className="text-center text-xl mt-6">The access code has been sent to your email.</Text>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

export default ConfirmAccount;
