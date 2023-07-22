import React from 'react';
import { useState } from 'react';
import { Dimensions, SafeAreaView, ScrollView, Text, TextInput, View } from 'react-native';

import Header from '_components/Header';

const sm = Dimensions.get('window').width < 393;

const Extra = () => {
  const [options, setOptions] = useState([
    { title: 'Non Working Day', value: '10%' },
    { title: 'Red Service', value: '10%' },
    { title: 'Dislocation km', value: '$5' },
  ])

  const options1 = [
    { title: 'Days to cancel a service', value: '2' },
    { title: '% of refund', value: '10%' },
    { title: 'Km to charge free', value: '5KM' },
  ]

  const changeOptions = (text, i) => {
    let newOptions = [...options];
    newOptions[i].value = text;
    setOptions(newOptions);
  }

  const drawList = (options) => (
    options.map((option, i) => (
      <View
        key={i}
        className="rounded-2xl bg-[#ffffff] flex-row justify-between items-center py-2 pl-6 pr-3"
      >
        <Text className={`${sm ? 'text-lg' : 'text-2xl'} font-gilroy text-primary-200 dark:text-primary-300`}>{option.title}</Text>
        <TextInput
          onChangeText={(text) => changeOptions(text, i)}
          keyboardType="numeric"
          className={`border border-secondary-300 rounded-2xl py-3 w-[69px] ${sm ? 'text-base' : 'text-lg'} text-secondary-300 font-gilroy text-center`}
          value={option.value}
        />
      </View>
    ))
  );

  return (
    <SafeAreaView className="flex-1">
      <Header title="Extra & Fees" />

      <ScrollView>
        <View className="px-9 pt-5 pb-12 gap-y-2">
          {drawList(options)}
          <View className="py-6"></View>
          {drawList(options1)}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Extra;
