import React from 'react';
import { Pressable, SafeAreaView, ScrollView, Text, View } from 'react-native';

import Header from '_components/Header';

const ProFinances = ({ navigation }) => {

  const months = [
    'January',
    'February',
    'Marth',
    'April',
    'May',
    'June',
    'Julie',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  return (
    <SafeAreaView className="flex-1 bg-[#ffffff]">
      <Header title="Finances" />

      <ScrollView>
        <Text className="text-2xl text-primary-300 font-semibold text-center mt-10 mb-4">2019</Text>
        <View className="flex-row flex-wrap justify-between px-9 pb-12 gap-y-11">
          {months.map((month, i) => (
            <Pressable
              key={i}
              className="rounded-3xl shadow-sm shadow-secondary-300 pb-1"
              onPress={() => navigation.navigate('ProFinancesMonth')}
            >
              <View className="w-36 h-24 rounded-3xl bg-[#ffffff] justify-center items-center">
                <Text className="text-xl font-gilroy text-primary-300">{month}</Text>
              </View>
            </Pressable>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProFinances;
