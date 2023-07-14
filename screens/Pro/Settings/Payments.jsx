import React, { useCallback, useState } from 'react';
import { SafeAreaView, Pressable, Text, View } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import Modal from 'react-native-modal';

import Header from '_components/Header';
import Button from '_components/Button';
import { CheckboxCircleIcon } from '_components/icons';

const Payments = ({ navigation }) => {
  const options = [
    'Pix',
    'TED',
    'DOC',
    'Paypal',
  ];
  const [openModal, setOpenModal] = useState(false);
  const [value, setValue] = useState('Weekly');
  const items = [
    { label: ['Daily', ''], value: 'Daily' },
    { label: ['Weekly', 'Friday'], value: 'Weekly' },
    { label: ['2 Weeks', '15/08'], value: '2 Weeks' },
    { label: ['Monthly', '9/09'], value: 'Monthly' },
  ];

  useFocusEffect(useCallback(() => {
    setOpenModal(false);
  }, []));

  const handleSelectPaymentDay = val => () => {
    setValue(val);
    setOpenModal(false);
  };

  return (
    <SafeAreaView className="flex-1">
      <Header title="Payments" />

      <View className="px-9 py-11">
        <Text className="mb-7 text-2xl text-primary-300 font-gilroy-bold">Payment Metod</Text>
        <View className="gap-y-2">
          {options.map((option, i) => (
            <Pressable
              key={i}
              className="rounded-2xl bg-[#ffffff] flex-row justify-between items-center py-4 pl-6 pr-5"
              onPress={() => navigation.navigate('ProSettingsPaymentsDetail')}
            >
              <Text className="text-base text-primary-300 font-gilroy">{option}</Text>
              {option === 'Pix' && <CheckboxCircleIcon color="#60EAC0" />}
            </Pressable>
          ))}
        </View>
        <View className="flex-row justify-between items-center mb-4 mt-[102px] relative">
          <Text className="text-2xl text-primary-300 font-gilroy-bold">Payment Day</Text>
          <Button
            title={value}
            type="pro-secondary"
            textClassName="text-base"
            containerClassName="w-[115px]"
            onPress={() => setOpenModal(prev => !prev)}
          />
          <Modal
            isVisible={openModal}
            animationIn="fadeIn"
            animationOut="fadeOut"
            backdropOpacity={0}
            coverScreen={false}
            onBackdropPress={() => setOpenModal(false)}
            style={{ position: 'absolute', margin: 0, right: 0, top: 60 }}
          >
            <View className="bg-[#00000010] rounded-2xl pb-1 px-[1px]">
              <View className="bg-[#ffffff] rounded-2xl p-6 pt-4 w-[200px]">
                {items.map((item, i) => (
                  <Pressable
                    key={i}
                    className="flex-row justify-between py-1"
                    onPress={handleSelectPaymentDay(item.value)}
                  >
                    <Text className="text-base text-primary-300 font-gilroy-bold">{item.label[0]}</Text>
                    <Text className="text-base text-primary-300 font-gilroy">{item.label[1]}</Text>
                  </Pressable>
                ))}
              </View>
            </View>
          </Modal>
        </View>
        <View className="flex-row justify-between">
          <Text className="text-2xl text-primary-300 font-gilroy-bold">Next Payment</Text>
          <Text className="text-xl text-primary-300 font-gilroy">10/08/2022</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Payments;
