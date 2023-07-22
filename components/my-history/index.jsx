import React from 'react';
import { Pressable, SafeAreaView, ScrollView, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useColorScheme } from 'nativewind';

import Header from '_components/Header';

const MyHistory = () => {
  const navigation = useNavigation();
  const { colorScheme } = useColorScheme();

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
      <Header title="My History" />

      <ScrollView>
        <Text className="text-2xl text-primary-100 dark:text-primary-300 font-semibold text-center mt-10 mb-4">2019</Text>
        <View className="flex-row flex-wrap justify-between px-9 pb-12 gap-y-11">
          {months.map((month, i) => (
            <Pressable
              key={i}
              className="rounded-3xl shadow-sm shadow-secondary-200 dark:shadow-secondary-300 pb-1"
              onPress={() => navigation.navigate(colorScheme === 'light' ? 'ClientMyHistoryMonth' : 'ProMyHistoryMonth')}
            >
              <View className="w-36 h-24 rounded-3xl bg-[#ffffff] justify-center items-center">
                <Text className="text-xl font-gilroy text-black dark:text-primary-300">{month}</Text>
              </View>
            </Pressable>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default MyHistory;
