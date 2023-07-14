import React, { useCallback, useState } from 'react';
import { SafeAreaView, Pressable, Text, View } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import Modal from 'react-native-modal';

import Header from '_components/Header';
import Input from '_components/Input';
import Button from '_components/Button';
import { ArrowDownIcon } from '_components/icons';

const PaymentsDetail = () => {
  const items = [
    'Phone number',
    'Email',
    'Code'
  ];
  const [value, setValue] = useState('Email');
  const [openModal, setOpenModal] = useState(false);

  useFocusEffect(useCallback(() => {
    setOpenModal(false);
  }, []));

  const handleSelect = val => () => {
    setValue(val);
    setOpenModal(false);
  };

  return (
    <SafeAreaView className="flex-1">
      <Header title="Payments" />

      <View className="px-9 py-11">
        <Text className="mb-7 text-2xl text-primary-300 font-gilroy-bold">Pix</Text>
        <View className="relative">
          <Pressable
            className="flex-row justify-between bg-[#ffffff] rounded-2xl py-5 px-7 mb-3"
            onPress={() => setOpenModal(true)}
          >
            <Text className="text-base text-primary-300 font-gilroy">{value}</Text>
            <ArrowDownIcon color="#4E819B" />
          </Pressable>
          <Modal
            isVisible={openModal}
            animationIn="fadeIn"
            animationOut="fadeOut"
            backdropOpacity={0}
            coverScreen={false}
            onBackdropPress={() => setOpenModal(false)}
            style={{ position: 'absolute', margin: 0, left: 0, right: 0, top: 70 }}
          >
            <View className="bg-[#00000010] rounded-2xl pb-1">
              <View className="bg-[#ffffff] rounded-2xl p-4">
                {items.map((item, i) => (
                  <Pressable
                    key={i}
                    className="py-1"
                    onPress={handleSelect(item)}
                  >
                    <Text className="text-base text-primary-300 font-gilroy">{item}</Text>
                  </Pressable>
                ))}
              </View>
            </View>
          </Modal>
        </View>
        <Input
          value="Example@email.com"
          className="py-5 px-7 border-transparent bg-[#ffffff] text-base text-primary-300"
        />
        <Button
          title="Save"
          type="pro-secondary"
          textClassName="text-base"
          containerClassName="mt-11"
          onPress={() => { }}
        />
      </View>
    </SafeAreaView>
  );
};

export default PaymentsDetail;
