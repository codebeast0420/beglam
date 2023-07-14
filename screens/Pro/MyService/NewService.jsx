import React from 'react';
import { Pressable, SafeAreaView, ScrollView, Text, View } from 'react-native';

import Header from '_components/Header';

import {
  MakeoverIcon,
  WaxIcon,
  HairDressIcon,
  MassageIcon,
  ManicureIcon,
  PedicureIcon,
  NutritionistIcon,
  TattooIcon,
  PiercingIcon,
} from '_components/icons';

const NewService = ({ navigation }) => {
  const list = [
    { title: 'Make over', Icon: MakeoverIcon, },
    { title: 'Manicure', Icon: ManicureIcon, },
    { title: 'Massage', Icon: MassageIcon, },
    { title: 'Hair Dress', Icon: HairDressIcon, },
    { title: 'Nutritionist', Icon: NutritionistIcon, },
    { title: 'Pedicure', Icon: PedicureIcon, },
    { title: 'Piercing', Icon: PiercingIcon, },
    { title: 'Tattoo', Icon: TattooIcon, },
    { title: 'Waxing', Icon: WaxIcon, },
  ];

  return (
    <SafeAreaView className="flex-1">
      <ScrollView>
        <Header title="My service" />

        <View className="px-9 pt-14 pb-10">
          <Text className="text-xl text-primary-300 font-gilroy">Select category</Text>
          <View className="mt-5 space-y-2">
            {list.map(({ title, Icon }, i) => (
              <Pressable
                key={i}
                className="flex-row items-center bg-[#ffffff] rounded-2xl py-5 px-7"
                onPress={() => navigation.navigate('ProMyServiceForm')}
              >
                <Icon color="#4E819B" />
                <Text className="ml-5 text-xl text-primary-300 font-gilroy">{title}</Text>
              </Pressable>
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default NewService;
