import React, { useState } from 'react';
import { Image, Pressable, SafeAreaView, ScrollView, Text, View } from 'react-native';
import Modal from 'react-native-modal';

import Header from '_components/Header';
import Button from '_components/Button';

import { OrderSummaryIcon, TimesIcon } from '_components/icons';

import Step from './Step';

const Email = require('_assets/images/auth/email.gif');

const OrderSummary = () => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <SafeAreaView className="flex-1">
      <ScrollView>
        <Header title="Credit" />
        <View className="items-center my-10">
          <OrderSummaryIcon />
          <Text className="text-2xl text-secondary-300 font-gilroy-bold">Order Summary</Text>
        </View>
        <Step step={4} />

        <View className="mt-16 px-9 pb-20">
          <View className="rounded-3xl pt-7 pb-10 px-8 bg-[#ffffff]">
            <Text className="text-xl sm:text-2xl text-primary-400 font-gilroy-bold mb-2">Desired value</Text>
            <Text className="text-lg sm:text-xl text-primary-300 font-gilroy mb-5 sm:mb-9">$4.000,00</Text>

            <Text className="text-xl sm:text-2xl text-primary-400 font-gilroy-bold mb-2">Number of installments</Text>
            <Text className="text-lg sm:text-xl text-primary-300 font-gilroy mb-5 sm:mb-9">21x  $228,20</Text>

            <Text className="text-xl sm:text-2xl text-primary-400 font-gilroy-bold mb-2">Amount</Text>
            <Text className="text-lg sm:text-xl text-primary-300 font-gilroy">$4.792,02</Text>
          </View>

          <Button
            title="Apply for funding"
            type=""
            textClassName="text-base"
            containerClassName="mt-14 bg-primary-400"
            onPress={() => setOpenModal(true)}
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
          <Text className="text-center text-[#3A373E] text-xl font-gilroy mt-3">Great. We have successfully received your funding request. Within 48 hours you will receive a response.</Text>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

export default OrderSummary;
