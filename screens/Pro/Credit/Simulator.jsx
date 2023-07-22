import React from 'react';
import { SafeAreaView, ScrollView, Text, TextInput, View } from 'react-native';

import Header from '_components/Header';
import Button from '_components/Button';
import Dropdown from '_components/Dropdown';

import { SimulatorIcon } from '_components/icons';

import Step from './Step';

const Simulator = ({ navigation }) => {

  return (
    <SafeAreaView className="flex-1">
      <ScrollView>
        <Header title="Credit" />
        <View className="items-center my-10">
          <SimulatorIcon />
          <Text className="text-2xl text-secondary-300 font-gilroy-bold">Simulator</Text>
        </View>
        <Step step={0} />

        <View className="mt-14 px-9 pb-20">
          <Text className="text-base text-primary-300 font-gilroy mb-2">What is the desired value?</Text>
          <View className="flex-row bg-[#ffffff] rounded-2xl py-3 sm:py-5 px-6">
            <Text className="text-xl text-secondary-300 font-gilroy">$</Text>
            <TextInput
              defaultValue="4.000,00"
              className="ml-4 flex-1 text-base text-primary-300 font-gilroy"
              keyboardType="number-pad"
            />
          </View>
          <Text className="mt-1 text-xs text-primary-300 font-gilroy mb-6 sm:mb-11">Max. $ 5.000,00</Text>
          <Text className="text-base text-primary-300 font-gilroy mb-2">What is the monthly income?</Text>
          <View className="flex-row bg-[#ffffff] rounded-2xl py-3 sm:py-5 px-6 mb-6 sm:mb-11">
            <Text className="text-xl text-secondary-300 font-gilroy">$</Text>
            <TextInput
              defaultValue="2.500,00"
              className="ml-4 flex-1 text-base text-primary-300 font-gilroy"
              keyboardType="number-pad"
            />
          </View>
          <Text className="text-base text-primary-300 font-gilroy mb-2">Number of installments</Text>
          <Dropdown
            defaultValue="21x"
            defaultItems={[
              { label: '21x   $228,20', value: '21x' },
              { label: '22x   $191,54', value: '22x' },
              { label: '23x   $120,60', value: '23x' },
              { label: '24x   $91,10', value: '24x' },
            ]}
          />
          <Button
            title="Next"
            type="pro-secondary"
            textClassName="text-base"
            containerClassName="mt-16"
            onPress={() => navigation.navigate('ProCreditPersonalData')}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Simulator;
