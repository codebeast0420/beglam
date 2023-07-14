import React, { useState } from 'react';
import { Image, SafeAreaView, ScrollView, Text, View, Pressable } from 'react-native';
import { formatWithMask, Masks } from 'react-native-mask-input';
import Modal from 'react-native-modal';

import Header from '_components/Header';
import Input from '_components/Input';
import Button from '_components/Button';

import { TimesIcon } from '_components/icons';

const Avatar = require('_assets/images/avatar.png');
const Visa = require('_assets/images/visa.png');
const Email = require('_assets/images/auth/email.gif');

const Payment = ({ navigation }) => {
  const [data, setData] = useState({
    number: '5467 9179 1290 3467',
    holder: 'Stella Stewart',
    expiration_date: '14/28',
    ccv: '634',
  });
  const [openModal, setOpenModal] = useState(false);

  const handleChange = name => value => {
    if (name === 'number') {
      const { masked } = formatWithMask({
        text: value,
        mask: Masks.CREDIT_CARD,
      });
      value = masked;
    }

    setData(prev => ({ ...prev, [name]: value }));
  };

  const save = () => {
    setOpenModal(true);
  };

  return (
    <SafeAreaView className="flex-1 bg-[#ffffff]">
      <ScrollView>
        <Header>
          <View className="flex-1 flex-row justify-center items-center gap-x-6 pr-7">
            <View className="w-16 h-16 rounded-3xl overflow-hidden border-4 border-secondary-200">
              <Image source={Avatar} className="w-16 h-16" />
            </View>
            <Text className="text-xl text-[#ffffff] font-gilroy-bold">
              Stella Stewart
            </Text>
          </View>
        </Header>

        <View className="px-9 pt-12 pb-20">
          <Text className="text-2xl text-primary-100 font-gilroy-bold mb-6">Payment settings</Text>
          <View className="rounded-3xl bg-primary-100 p-8 mb-7">
            <Image source={Visa} className="mb-7" />
            <Text className="text-2xl text-[#ffffff] font-gilroy">{data.number}</Text>
            <View className="flex-row justify-between mt-6">
              <View>
                <Text className="text-xs text-white font-gilroy">Card Holder</Text>
                <Text className="text-xl text-[#ffffff] font-gilroy">{data.holder}</Text>
              </View>
              <View>
                <Text className="text-xs text-white font-gilroy">Exp. Date</Text>
                <Text className="text-xl text-[#ffffff] font-gilroy">{data.expiration_date}</Text>
              </View>
            </View>
          </View>
          <Text className="text-base text-primary-200 font-gilroy mb-2">Card Holder</Text>
          <Input
            className="border-secondary-100 text-base mb-5"
            value={data.holder}
            onChangeText={handleChange('holder')}
          />

          <Text className="text-base text-primary-200 font-gilroy mb-2">Card Number</Text>
          <Input
            className="border-secondary-100 text-base mb-5"
            value={data.number}
            onChangeText={handleChange('number')}
            keyboardType="number-pad"
          />
          <View className="flex-row justify-between space-x-4 mb-9">
            <View className="flex-1">
              <Text className="text-base text-primary-200 font-gilroy mb-2">Expiration Date</Text>
              <Input
                className="border-secondary-100 text-base"
                value={data.expiration_date}
                onChangeText={handleChange('expiration_date')}
                keyboardType="number-pad"
              />
            </View>
            <View className="flex-1">
              <Text className="text-base text-primary-200 font-gilroy mb-2">CCV</Text>
              <Input
                className="border-secondary-100 text-base"
                value={data.ccv}
                onChangeText={handleChange('ccv')}
                keyboardType="number-pad"
              />
            </View>
          </View>
          <Button
            title="Save"
            type="client-secondary"
            textClassName="text-base"
            onPress={save}
          />
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
          <Text className="text-center text-[#3A373E] text-2xl font-gilroy mt-3">Successfully edit!</Text>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

export default Payment;
