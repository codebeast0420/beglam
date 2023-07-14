import React, { useCallback, useState } from 'react';
import { Pressable, SafeAreaView, ScrollView, Text, View } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import Modal from 'react-native-modal';

import Header from '_components/Header';

import { DownloadIcon } from '_components/icons';

const ProMyHistoryDetail = () => {
  const [openModal, setOpenModal] = useState(false);

  useFocusEffect(useCallback(() => {
    setOpenModal(false);
  }, []));

  return (
    <SafeAreaView className="flex-1 bg-[#ffffff]">
      <Header title="My History" />
      <View className="items-end px-9 pt-3">
        <Pressable onPress={() => setOpenModal(true)}>
          <DownloadIcon />
        </Pressable>
      </View>
      <ScrollView>
        <View className="px-9 pt-14 pb-12">
          <View className="bg-white p-6 pt-3 rounded-3xl mb-9">
            <Text className="text-primary-300 text-base font-gilroy mb-4">Duration</Text>
            <Text className="text-primary-300 text-base font-gilroy-bold">45 min</Text>
          </View>
          <View className="bg-white p-6 pt-3 rounded-3xl">
            <Text className="text-primary-300 text-lg font-gilroy-bold mb-4">Services</Text>
            <View className="flex-row justify-between mb-2">
              <Text className="text-base text-primary-300 font-gilroy">Nail</Text>
              <Text className="text-base text-secondary-300 font-gilroy-bold">$10</Text>
            </View>
            <View className="flex-row justify-between mb-2">
              <Text className="text-base text-primary-300 font-gilroy">Hair</Text>
              <Text className="text-base text-secondary-300 font-gilroy-bold">$10</Text>
            </View>
            <View className="flex-row justify-between mb-8">
              <Text className="text-base text-primary-300 font-gilroy">Lorem Ipsum</Text>
              <Text className="text-base text-secondary-300 font-gilroy-bold">$2</Text>
            </View>
            <View className="flex-row justify-between">
              <Text className="text-base text-primary-300 font-gilroy">Tax</Text>
              <Text className="text-base text-secondary-300 font-gilroy-bold">-$2</Text>
            </View>
          </View>
          <View className="h-[2px] bg-white my-12"></View>
          <View className="bg-white px-6 py-3 rounded-3xl">
            <View className="flex-row justify-between">
              <Text className="text-primary-300 text-lg font-gilroy-bold">Total</Text>
              <Text className="text-secondary-300 text-lg font-gilroy-bold">$32</Text>
            </View>
          </View>
        </View>
      </ScrollView>
      <Modal
        isVisible={openModal}
        animationIn="fadeIn"
        animationOut="fadeOut"
        style={{ justifyContent: 'flex-start', paddingTop: 100 }}
        onBackdropPress={() => setOpenModal(false)}
      >
        <View className="p-8 bg-[#ffffff] rounded-3xl">
          <Pressable className="border border-[#4E819B] rounded-2xl p-4 mb-3">
            <Text className="text-[#4E819B] text-base font-gilroy-bold text-center">Export Image</Text>
          </Pressable>
          <Pressable className="border border-[#4E819B] rounded-2xl p-4">
            <Text className="text-[#4E819B] text-base font-gilroy-bold text-center">Export PDF</Text>
          </Pressable>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

export default ProMyHistoryDetail;
